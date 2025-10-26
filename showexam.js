// 提取单元信息
exam.forEach((q, index) => {
    const match = q.item.match(/\[([^\]]+)\]/);

    q.unit = match ? match[1] : '未知';
    q.id = index + 1;
});

let currentPage = 1;
const questionsPerPage = 10;

// 【新增】全局狀態變數
let allAnswersVisible = false;

// 【新增】處理顯示/隱藏全部答案的邏輯
function toggleAllAnswers() {
    allAnswersVisible = !allAnswersVisible;
    const displayStyle = allAnswersVisible ? 'block' : 'none';
    const buttonText = allAnswersVisible ? '隱藏全部答案' : '顯示全部答案';
    
    // 獲取當前頁面上所有的答案/詳解容器
    const answerContainers = document.querySelectorAll('#question-list .answer-tea-container');
    // 獲取當前頁面上所有的單個答案按鈕
    const showAnswerButtons = document.querySelectorAll('#question-list .show-answer-btn');

    // 批量設置答案容器的顯示狀態
    answerContainers.forEach(container => {
        container.style.display = displayStyle;
    });

    // 批量設置單個答案按鈕的文字
    showAnswerButtons.forEach(button => {
        // 【修改】確保單個按鈕文字在全局切換時同步更新
        button.textContent = allAnswersVisible ? '隱藏答案' : '顯示答案';
    });

    // 更新全局按鈕的文字
    const toggleAllBtn = document.getElementById('toggle-all-answers-btn');
    if(toggleAllBtn) {
       toggleAllBtn.textContent = buttonText;
    }
}

// 【新增】根據單個答案狀態更新全局按鈕文字
function updateToggleAllButtonState() {
    const answerContainers = document.querySelectorAll('#question-list .answer-tea-container');
    const toggleAllBtn = document.getElementById('toggle-all-answers-btn');

    if (!toggleAllBtn || answerContainers.length === 0) return; 

    // 檢查是否有任何一個答案是隱藏的 (display === 'none')
    const anyHidden = Array.from(answerContainers).some(container => container.style.display === 'none');

    // 如果所有答案都顯示 (anyHidden 為 false)
    if (!anyHidden) {
        allAnswersVisible = true;
        toggleAllBtn.textContent = '隱藏全部答案';
    } 
    // 如果至少有一個答案是隱藏的
    else {
        allAnswersVisible = false;
        toggleAllBtn.textContent = '顯示全部答案';
    }
}

// 渲染題目列表~~~~~~~~~~~~~~~~~~~~~~~~~~
// 渲染題目列表
function renderQuestions(page = 1) {
    // 【修改】確保更新全域變數
    currentPage = page; 

    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';
    
    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, exam.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const question = exam[i];
        const questionElement = document.createElement('div');
        questionElement.className = 'question-card';
        
        // 處理題目選項的樣式
        const questionText = question.item
            .replace(/\[(\d+-\d+)\]$/, '')
            .replace(/\(A\)/g, '<br><span class="option-box">(A)</span>')
            .replace(/\(B\)/g, '<br><span class="option-box">(B)</span>')
            .replace(/\(C\)/g, '<br><span class="option-box">(C)</span>')
            .replace(/\(D\)/g, '<br><span class="option-box">(D)</span>');

        // 處理詳解內容的樣式，比照題目選項
        const teaText = (question.tea || '')
            .replace(/\(A\)/g, '<br><span class="option-box">(A)</span>')
            .replace(/\(B\)/g, '<br><span class="option-box">(B)</span>')
            .replace(/\(C\)/g, '<br><span class="option-box">(C)</span>')
            .replace(/\(D\)/g, '<br><span class="option-box">(D)</span>');
        
        questionElement.innerHTML = `
            <div class="question-content">第${question.id}題：${questionText}</div>


            <div style="margin-top: 10px; margin-bottom: 5px;">
              <button class="show-answer-btn" data-id="${question.id}">顯示答案</button>
            </div>

            <div class="answer-tea-container" id="answer-tea-${question.id}" style="display: none; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;">
                <div style="margin-bottom: 0px;">
                    <span class="option-box2" style="font-size:20px;font-weight: bold;">答案: ${question.ans}</span>
                </div>
                <div style="margin-top: 0px;">
                    <div class="question-content">${teaText}</div>
                </div>
            </div>
            
        `;
        
        questionList.appendChild(questionElement);
    }
    
    // 添加「顯示答案及詳解」按钮事件监听
    document.querySelectorAll('.show-answer-btn').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = this.getAttribute('data-id');
            // 答案和詳解的容器
            const answerTeaElement = document.getElementById(`answer-tea-${questionId}`);
            
            if (answerTeaElement.style.display === 'none') {
                answerTeaElement.style.display = 'block';
                this.textContent = '隱藏答案';
            } else {
                answerTeaElement.style.display = 'none';
                this.textContent = '顯示答案'; // 【修改】從「答案」改為「顯示答案」
            }
            // 【新增】每次點擊單個按鈕後，重新檢查「顯示/隱藏全部」按鈕的狀態
            updateToggleAllButtonState(); 
        });
    });
    
    // 渲染分页
    renderPagination(exam.length, currentPage);

    // 【新增】渲染題目後，更新「顯示/隱藏全部」按鈕的狀態
    updateToggleAllButtonState(); 
}


// 渲染分页控件
function renderPagination(totalQuestions, page) {
    // 【修改】確保使用最新的 currentPage 值
    currentPage = page;
    const totalPages = Math.ceil(totalQuestions / questionsPerPage);
    const paginationElement = document.getElementById('pagination');
    
    paginationElement.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // 添加上一页按钮
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '上一頁';
        prevButton.addEventListener('click', () => {
            renderQuestions(currentPage - 1);
        });
        paginationElement.appendChild(prevButton);
    }
    
    // 添加页码按钮
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            renderQuestions(i);
        });
        paginationElement.appendChild(pageButton);
    }
    
    // 添加下一页按钮
    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.textContent = '下一頁';
        nextButton.addEventListener('click', () => {
            renderQuestions(currentPage + 1);
        });
        paginationElement.appendChild(nextButton);
    }
}

// 【新增】動態創建並插入全局控制按鈕 (帶有淺紅色樣式)
function createGlobalControls() {
    // 找到題目列表的容器，我們把按鈕放在它前面
    const questionList = document.getElementById('question-list');
    if (!questionList) return; 

    // 創建容器
    const globalControlsDiv = document.createElement('div');
    globalControlsDiv.id = 'global-controls';
    globalControlsDiv.style.textAlign = 'right';
    globalControlsDiv.style.marginBottom = '15px';

    // 創建按鈕
    const toggleAllBtn = document.createElement('button');
    toggleAllBtn.id = 'toggle-all-answers-btn';
    toggleAllBtn.textContent = '顯示全部答案';
    
    // 【樣式設置】使用內聯樣式來確保與「顯示答案」的按鈕樣式一致，並強制淺紅色底色
    // 繼承單個按鈕的類名（如果有的話，這裡假設為 'show-answer-btn' 基礎樣式）
    // 由於不知道具體的 CSS，這裡使用內聯樣式模仿常見按鈕樣式
    toggleAllBtn.className = 'show-answer-btn'; // 賦予與單個按鈕相同的類名以繼承樣式 (如果存在)
    
    // 覆蓋/新增淺紅色樣式
    toggleAllBtn.style.padding = '8px 15px';
    toggleAllBtn.style.border = '1px solid #dc3545';
    toggleAllBtn.style.borderRadius = '4px';
    toggleAllBtn.style.cursor = 'pointer';
    toggleAllBtn.style.backgroundColor = '#f8d7da'; // 淺紅色底色
    toggleAllBtn.style.color = '#721c24';           // 深紅色文字
    
    // 添加事件監聽
    toggleAllBtn.addEventListener('click', toggleAllAnswers);

    // 將按鈕插入容器，將容器插入 DOM
    globalControlsDiv.appendChild(toggleAllBtn);
    questionList.parentNode.insertBefore(globalControlsDiv, questionList);
}


// 【修改】初始渲染：確保 DOM 載入後，先創建按鈕，再渲染題目
document.addEventListener('DOMContentLoaded', () => {
    // 1. 動態創建按鈕
    createGlobalControls();
    
    // 2. 初始渲染題目
    renderQuestions();
});
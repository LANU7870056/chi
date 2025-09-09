        // 提取单元信息
        exam.forEach((q, index) => {
  const match = q.item.match(/\[([^\]]+)\]/);
 
            q.unit = match ? match[1] : '未知';
            q.id = index + 1;
        });

        let currentPage = 1;
        const questionsPerPage = 10;




        // 渲染题目列表~~~~~~~~~~~~~~~~~~~~~~~~~~
// 渲染题目列表
function renderQuestions(page = 1) {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';
    
    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, exam.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const question = exam[i];
        const questionElement = document.createElement('div');
        questionElement.className = 'question-card';
        
        const questionText = question.item
            .replace(/\[(\d+-\d+)\]$/, '')
            .replace(/\(A\)/g, '<br><span class="option-box">(A)</span>')
            .replace(/\(B\)/g, '<br><span class="option-box">(B)</span>')
            .replace(/\(C\)/g, '<br><span class="option-box">(C)</span>')
            .replace(/\(D\)/g, '<br><span class="option-box">(D)</span>');
        
        questionElement.innerHTML = `
            <div class="question-content">第${question.id}题：${questionText}</div>


<div style="display: flex; align-items: center;">
  <button class="show-answer-btn" data-id="${question.id}">顯示答案</button>
  <div class="answer" id="answer-${question.id}" style="display: none; margin-left: 10px;">
    <strong>正確答案: ${question.ans}</strong>
  </div>
</div>

     
        `;
        
        questionList.appendChild(questionElement);
    }
    
    // 添加按钮事件监听
    document.querySelectorAll('.show-answer-btn').forEach(button => {
        button.addEventListener('click', function() {
            const questionId = this.getAttribute('data-id');
            const answerElement = document.getElementById(`answer-${questionId}`);
            
            if (answerElement.style.display === 'none') {
                answerElement.style.display = 'block';
                this.textContent = '隱藏答案';
            } else {
                answerElement.style.display = 'none';
                this.textContent = '顯示答案';
            }
        });
    });
    
    // 渲染分页
    renderPagination(exam.length, currentPage);
}




        // 渲染分页控件
        function renderPagination(totalQuestions, currentPage) {
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

        // 初始渲染
        renderQuestions();

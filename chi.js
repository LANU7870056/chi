        // 初始化頁面
        document.addEventListener('DOMContentLoaded', function() {
            const contentDiv = document.getElementById('content');
            const displayContent = document.getElementById('displayContent');
            
            // 生成文章段落
            da1.forEach((item, index) => {
                const paragraphDiv = document.createElement('div');
                paragraphDiv.className = 'paragraph';
                paragraphDiv.id = 'paragraph-' + index;
                
                // 創建段落頭部
                const paragraphHeader = document.createElement('div');
                paragraphHeader.className = 'paragraph-header';
                
                // 創建解釋按鈕
                const explainBtn = document.createElement('button');
                explainBtn.className = 'explain-btn';
                explainBtn.textContent = '解';
                explainBtn.title = '顯示整段解釋';
                
                // 處理文本，將方括號內的內容轉換為可點擊元素，並移除方括號
                let processedText = item.ch;
                const matches = item.ch.match(/\[.*?\]/g) || [];
                
                matches.forEach(match => {
                    const cleanMatch = match.replace(/[\[\]]/g, '');
                    processedText = processedText.replace(
                        match, 
                        '<span class="highlight" data-term="' + match + '">' + cleanMatch + '</span>'
                    );
                });
                
                // 創建段落文本
                const paragraphText = document.createElement('div');
                paragraphText.className = 'paragraph-text';
                paragraphText.innerHTML = processedText;
                
                // 創建段落解釋區域
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'paragraph-explanation';
                explanationDiv.id = 'explanation-' + index;
                
                // 組裝段落頭部
                paragraphHeader.appendChild(explainBtn);
                paragraphHeader.appendChild(paragraphText);
                
                // 組裝整個段落
                paragraphDiv.appendChild(paragraphHeader);
                paragraphDiv.appendChild(explanationDiv);
                
                // 添加到內容區域
                contentDiv.appendChild(paragraphDiv);
                
                // 添加解釋按鈕點擊事件
                explainBtn.onclick = function() {
                    const explanation = document.getElementById('explanation-' + index);
                    if (explanation.style.display === 'block') {
                        explanation.style.display = 'none';
                        explainBtn.textContent = '解';
                    } else {
                        explanation.style.display = 'block';
                        explanation.innerHTML = '<strong></strong> ' + item.ch2;
                        explainBtn.textContent = '收';
                    }
                };
            });
            
            // 為所有高亮詞語添加點擊事件
            document.querySelectorAll('.highlight').forEach(element => {
                element.addEventListener('click', function() {
                    const term = this.getAttribute('data-term');
                    const explanation = da2.find(item => item.ch === term);
                    
                    if (explanation) {
                        displayContent.innerHTML = 
                            '<div><strong>' + 
                            term.replace(/[\[\]]/g, '') + 
                            '</strong>：' + 
                            explanation.ch2 + 
                            '</div>';
                    } else {
                        displayContent.innerHTML = '未找到"' + term + '"的解釋';
                    }
                });
            });
        });


    function showModal() {
      
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      document.getElementById("videoFrame").src = embedUrl;
      document.getElementById("overlay").style.display = "flex";
    }

    function hideModal() {
      document.getElementById("videoFrame").src = ""; // 停止播放
      document.getElementById("overlay").style.display = "none";
    }


window.onload = function() {
  
      const imgElement = document.getElementById("videoIcon");
        if (videoId == "") {
            imgElement.style.display = "none";
        }


    };


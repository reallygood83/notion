document.addEventListener('DOMContentLoaded', function() {
    // 모든 세션 콘텐츠 가져오기
    const sessionContents = document.querySelectorAll('.session-content');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // 초기에 보이는 세션 수 (첫 3개는 이미 CSS에서 표시 중)
    let visibleSessions = 3;
    
    // 더 많은 세션 보기 버튼 클릭 이벤트
    loadMoreBtn.addEventListener('click', function() {
        // 다음 3개 세션 표시
        for(let i = visibleSessions; i < visibleSessions + 3 && i < sessionContents.length; i++) {
            sessionContents[i].style.display = 'block';
        }
        
        // 보이는 세션 수 업데이트
        visibleSessions += 3;
        
        // 모든 세션이 표시되면 버튼 숨기기
        if(visibleSessions >= sessionContents.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
    
    // 네비게이션 스크롤 이벤트
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // href가 #으로 시작하는 내부 링크인 경우에만 스크롤 동작 적용
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if(targetElement) {
                    // 해당 섹션이 보이지 않는 상태라면 표시
                    if(targetElement.classList.contains('session-content') && 
                       targetElement.style.display === 'none') {
                        targetElement.style.display = 'block';
                    }
                    
                    // 스크롤 애니메이션
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 헤더 높이를 고려한 오프셋
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 
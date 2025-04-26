document.addEventListener('DOMContentLoaded', function() {
    // 모든 세션이 표시되므로 '더 많은 세션 보기' 버튼은 숨김
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
    
    // 네비게이션 스크롤 이벤트
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // href가 #으로 시작하는 내부 링크인 경우에만 스크롤 동작 적용
            const href = this.getAttribute('href');
            if(href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if(targetElement) {
                    // 스크롤 애니메이션
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // 헤더 높이를 고려한 오프셋
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 부드러운 스크롤 효과
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 호버 효과 강화
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.05)';
        });
    });
}); 
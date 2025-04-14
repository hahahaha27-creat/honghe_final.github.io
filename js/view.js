window.addEventListener('DOMContentLoaded', () => {
    const views = document.querySelectorAll('.view');

    views.forEach((view, index) => {
        view.style.opacity = 0;
        view.style.transform = 'translateY(50px)';
        view.style.transition = `all 0.8s ease ${(index * 0.2)}s`; // 逐个延迟
    });
    setTimeout(() => {
        views.forEach(view => {
            view.style.opacity = 1;
            view.style.transform = 'translateY(0)';
        });
    }, 100);
});
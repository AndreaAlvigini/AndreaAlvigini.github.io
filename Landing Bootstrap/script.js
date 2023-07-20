window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.progress').forEach((item) => {
        let value=item.getAttribute('data-value')
        let bar=item.querySelector('.progress-bar');
        bar.style.width=value;
        setTimeout (function() {
            bar.style.width=value;
        }, 500);
    });
});
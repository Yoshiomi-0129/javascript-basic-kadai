//
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const text = document.getElementById('text');
        text.style.display = 'none';
        const h2 = document.createElement('h2');
        h2.textContent = 'ボタンをクリックしました';
        document.querySelector('body').prepend(h2);
    }, 2000);
});
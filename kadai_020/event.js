// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // textというidを持つHTML要素を取得し、定数に代入し非表示にする
    const text = document.getElementById('text');
    text.style.display = 'none';
    
    // h2というidを持つHTML要素を取得し、定数に代入
    const h2 = document.createElement('h2');
    // 定数h2にテキストを追加
    h2.textContent = 'ボタンをクリックしました';
    // 文頭に定数h2を表示
    document.querySelector('body').prepend(h2);
});
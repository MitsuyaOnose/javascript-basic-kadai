// 画面から取得したHTML要素を定数に代入する
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// ボタンがクリックされたときに文字を変更する
btn.addEventListener('click', () => {
	text.textContent = 'クリックされました！';
});

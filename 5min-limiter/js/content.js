var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('css/limiter.css');
(document.head||document.documentElement).appendChild(style);

// $('body').css('background', 'blue');
// document.body.style.backgroundColor= 'red';


window.onload = function() {
	if (!document.createElement) return;

	var timerElment = document.createElement('div');		// 新規に要素（タグ）を生成
	var timerText = document.createTextNode('00:00:00');	// 生成する要素の値（文字列）
	timerElment.appendChild(timerText);					// 生成する要素の作成（要素に値を追加）
  timerElment.classList.add('limiter');

	document.body.appendChild(timerElment);				// このページ (document.body) の最後に生成した要素を追加
}
// -->


var soundJiho = chrome.extension.getURL('sound/jiho.mp3');

createjs.Sound.registerSound(soundJiho, 'hoge');


// setTimeout(function(){
//   createjs.Sound.play('hoge');
// }, 1000)


function playjiho(){
  createjs.Sound.play('hoge');
}



// createjs.Sound.registerSound("sound/jhou.mp3", soundID);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('css/limiter.css');
(document.head||document.documentElement).appendChild(style);


window.onload = function() {
	if (!document.createElement) return;

	var timerElment = document.createElement('div');
	var timerText   = document.createTextNode('00:00:00');
	timerElment.appendChild(timerText);
  timerElment.classList.add('limiter5min');

	var endElment = document.createElement('div');
  endElment.classList.add('limiter5min-shutdown');

	var endElmentInner = document.createElement('div');
	endElmentInner.classList.add('limiter5min-shutdown-inner');

	var endElmentBtn1    = document.createElement('div');
	var endElmentBtn1Txt = document.createTextNode('CONTINUE');
	endElmentBtn1.appendChild(endElmentBtn1Txt);
  endElmentBtn1.classList.add('btn','btn-attention');

	var endElmentBtn2    = document.createElement('div');
	var endElmentBtn2Txt = document.createTextNode('END');
	endElmentBtn2.appendChild(endElmentBtn2Txt);
  endElmentBtn2.classList.add('btn','btn-primary');

	endElment.appendChild(endElmentInner).appendChild(endElmentBtn1);
	endElment.appendChild(endElmentInner).appendChild(endElmentBtn2);

	document.body.appendChild(endElment);
	document.body.appendChild(timerElment);

	$('.limiter5min-shutdown').css('visibility', 'hidden');

	$('.limiter5min-shutdown .btn-attention').on('click', function(){
		playjiho();
		startTimer();
		$('.limiter5min-shutdown').css({'visibility':'hidden'}).animate({opacity: 0}, 500);
		$('.limiter5min').css('display', 'block');
	});

	$('.limiter5min-shutdown .btn-primary').on('click', function(){
		$('.limiter5min-shutdown').css({'visibility':'hidden'}).animate({opacity: 0}, 500);
	});
}
// -->


// YYYY/MM/DD hh:mm:ss

function getNowDate(){
	var dateObj = new Date();
	dateObj.setMinutes(dateObj.getMinutes() + 5);

	var year    = dateObj.getFullYear();
	var month   = dateObj.getMonth()+1;
	var day     = dateObj.getDate();
	var hh      = dateObj.getHours();
	var mm      = dateObj.getMinutes();
	var ss      = dateObj.getSeconds();
	var nowDate = year +'/'+ month +'/'+ day +' '+ hh +':'+ mm +':'+ ss;

	return nowDate;
}

var soundJiho = chrome.extension.getURL('sound/jiho.mp3');
var soundGong = chrome.extension.getURL('sound/gong.mp3');
createjs.Sound.registerSound(soundJiho, 'jiho');
createjs.Sound.registerSound(soundGong, 'gong');


function playjiho(){
  createjs.Sound.play('jiho');
}

function playGong(){
  createjs.Sound.play('gong');
}

function startTimer(){
	var goalTIme = getNowDate();

	$('.limiter5min').countdown(goalTIme, function(event) {
		$(this).html(event.strftime('%H:%M:%S'));

	}).on('finish.countdown', function(){
		playGong();
		$('.limiter5min').css('display', 'none');
		$('.limiter5min-shutdown').css({'visibility':'visible'}).animate({opacity: 1}, 500);
	});
}

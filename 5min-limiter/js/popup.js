chrome.tabs.executeScript(null, {code:"$('.limiter5min').css('display', 'block');"});

var clickedFlag = false;

$(function(){
  // chrome.tabs.executeScript(null, {file: '5minlimiter.js'});
  // chrome.tabs.executeScript(null, {code:"$('.limiter').css('background', 'blue');"});
  // chrome.tabs.executeScript(null, {code:"$('body').append('<div>hello world</div>');"});

  $('.btn').on('click',function(){

    if(!clickedFlag) {
      chrome.tabs.executeScript(null, {code:"$('.limiter5min').css('background', 'rgba(10, 10, 10, 0.90)');"});
      chrome.tabs.executeScript(null, {code:"playjiho()"});
      chrome.tabs.executeScript(null, {code:"startTimer()"});
      $(this).text('NOW COUNT..');
      $(this).addClass('disabled');
      window.close();
    }else {

    }
  })
});
//
// function click(e) {
//
//   chrome.tabs.executeScript(null, {file: 'contents.js'});
//   // window.close();
//
//
//   // chrome.tabs.executeScript(null,
//   //     {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
//   // window.close();
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });

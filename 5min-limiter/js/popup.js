// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// chrome.tabs.executeScript(null, {file: 'libs/jquery.js'});
// chrome.tabs.executeScript(null, {file: 'libs/createjs.js'});

$(function(){

  // chrome.tabs.executeScript(null, {file: '5minlimiter.js'});
  // chrome.tabs.executeScript(null, {code:"$('.limiter').css('background', 'blue');"});
  //
  // chrome.tabs.executeScript(null, {code:"$('body').append('<div>hello world</div>');"});

  $('.btn').on('click',function(){
    chrome.tabs.executeScript(null, {code:"$('.limiter').css('background', 'blue');"});
    chrome.tabs.executeScript(null, {code:"playjiho()"});
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

chrome.tabs.executeScript(null,{code:"$('.limiter5min').css('display', 'block');"});var clickedFlag=!1;$(function(){$(".btn").on("click",function(){clickedFlag||(chrome.tabs.executeScript(null,{code:"$('.limiter5min').css('background', 'rgba(10, 10, 10, 0.90)');"}),chrome.tabs.executeScript(null,{code:"playjiho()"}),chrome.tabs.executeScript(null,{code:"startTimer()"}),$(this).text("NOW COUNT.."),$(this).addClass("disabled"),window.close())})});
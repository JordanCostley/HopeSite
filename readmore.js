// JavaScript Document



var text1 = $('.text-overflow1');
    var btn1 = $('.btn-overflow1');

    var   h1 = text1[0].scrollHeight; 

if(h1 >100) {
	btn1.addClass('less');
	btn1.css('display', 'block');
}

btn1.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn1.hasClass('less')) {
      btn1.removeClass('less');
      btn1.addClass('more');
      btn1.text('Read less');
      text1.animate({'height': h1});
  } else {
      btn1.addClass('less');
      btn1.removeClass('more');
      btn1.text('Read more');
      text1.animate({'height': '90px'});
  }  
});







var text2 = $('.text-overflow2');
	var btn2 = $('.btn-overflow2');
    var   h2 = text2[0].scrollHeight; 

if(h2 >100) {
	btn2.addClass('less');
	btn2.css('display', 'block');
}

btn2.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn2.hasClass('less')) {
      btn2.removeClass('less');
      btn2.addClass('more');
      btn2.text('Read less');
      text2.animate({'height': h2});
  } else {
      btn2.addClass('less');
      btn2.removeClass('more');
      btn2.text('Read more');
      text2.animate({'height': '90px'});
  }  
});





var text3 = $('.text-overflow3');
	var btn3 = $('.btn-overflow3');
    var   h3 = text3[0].scrollHeight; 

if(h3 >100) {
	btn3.addClass('less');
	btn3.css('display', 'block');
}

btn3.click(function(e) 
	
		  
{
	"use strict";
  e.stopPropagation();

  if (btn3.hasClass('less')) {
      btn3.removeClass('less');
      btn3.addClass('more');
      btn3.text('Read less');
      text3.animate({'height': h3});
  } else {
      btn3.addClass('less');
      btn3.removeClass('more');
      btn3.text('Read more');
      text3.animate({'height': '90px'});
  }  
});
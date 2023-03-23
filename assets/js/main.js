$(window).on('load',function() {

	$(".gallerSec section img").click(function() {
	  $(".gallerSec .lightbox").fadeIn(300);
	  $(".gallerSec .lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
	  $(".gallerSec .filter").css("background-image", "url(" + $(this).attr("src") + ")");
	  /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
	  $("html").css("overflow", "hidden");
	  if ($(this).is(":last-child")) {
		$(".gallerSec .arrowr").css("display", "none");
		$(".gallerSec .arrowl").css("display", "block");
	  } else if ($(this).is(":first-child")) {
		$(".gallerSec .arrowr").css("display", "block");
		$(".gallerSec .arrowl").css("display", "none");
	  } else {
		$(".gallerSec .arrowr").css("display", "block");
		$(".gallerSec .arrowl").css("display", "block");
	  }
	});
  
	$(".gallerSec .close").click(function() {
	  $(".gallerSec .lightbox").fadeOut(300);
	  $(".gallerSec h1").remove();
	  $(".gallerSec .lightbox img").remove();
	  $("html").css("overflow", "auto");
	});
  
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
		$(".gallerSec .lightbox").fadeOut(300);
		$(".gallerSec .lightbox img").remove();
		$("html").css("overflow", "auto");
	  }
	});
  
	$(".gallerSec .arrowr").click(function() {
	  var imgSrc = $(".gallerSec .lightbox img").attr("src");
	  var search = $(".gallerSec section").find("img[src$='" + imgSrc + "']");
	  var newImage = search.next().attr("src");
	  /*$(".lightbox img").attr("src", search.next());*/
	  $(".gallerSec .lightbox img").attr("src", newImage);
	  $(".gallerSec .filter").css("background-image", "url(" + newImage + ")");
  
	  if (!search.next().is(":last-child")) {
		$(".gallerSec .arrowl").css("display", "block");
	  } else {
		$(".gallerSec .arrowr").css("display", "none");
	  }
	});
  
	$(".gallerSec .arrowl").click(function() {
	  var imgSrc = $(".gallerSec .lightbox img").attr("src");
	  var search = $(".gallerSec section").find("img[src$='" + imgSrc + "']");
	  var newImage = search.prev().attr("src");
	  /*$(".lightbox img").attr("src", search.next());*/
	  $(".gallerSec .lightbox img").attr("src", newImage);
	  $(".gallerSec .filter").css("background-image", "url(" + newImage + ")");
  
	  if (!search.prev().is(":first-child")) {
		$(".gallerSec .arrowr").css("display", "block");
	  } else {
		$(".gallerSec .arrowl").css("display", "none");
	  }
	});
  
  });
// scroll navbar
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 90) {
		$("#navbar-fixed-top").css("background", "#FFFFFF");
		$("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#navbar-fixed-top").css("background", "none");
		$("#navbar-fixed-top").css("box-shadow", "none")

	}
})
// scroll navbar
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 100) {
		$("#back-Theme").css("background", "#fff");
		$("#back-Theme").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#back-Theme").css("background", "none");
		$("#back-Theme").css("box-shadow", "none")

	}
})
// MOBILE SCREEN SIDE NAV
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function (event) {

	if (this.classList.contains('active')) {
		this.classList.remove('active');
		sidebarBox.classList.remove('active');
	} else {
		this.classList.add('active');
		sidebarBox.classList.add('active');
	}
});

pageWrapper.addEventListener('click', function (event) {

	if (sidebarBox.classList.contains('active')) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});
window.addEventListener('keydown', function (event) {

	if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});
// image gallery

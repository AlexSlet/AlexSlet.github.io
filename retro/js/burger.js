$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link-active');
	var burger = $('.menu-burger');
	var nav_link = $('.menu-burger a');
	
	link.click(function(){
		link.toggleClass('menu-link-active');
	});
	nav_link.click(function(){
		link.toggleClass('menu-link-active');
	});
	link.click(function(){
		burger.toggleClass('menu-active');
	});
	nav_link.click(function(){
		burger.removeClass('menu-active');
	});
});
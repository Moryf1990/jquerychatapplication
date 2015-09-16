(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var $chat = $('#chat');
	var $input = $('#input');
	var $list = $('#list');
	var $newWindow = $('#newWindow');

	$chat.submit(function (e) {
		e.preventDefault();

		var newInput = $input.val();

		$.post('http://tiyfe.herokuapp.com/collections/moryf', { message: newInput }, function (result) {
			console.log('input saved', result);
			console.log('result'._id);
			$list.append('<div>' + result.message + '</div>');
		}, 'json');
	});

	$.get('http://tiyfe.herokuapp.com/collections/moryf', function (response) {
		for (var i = 0; i < response.length; i++) {
			$list.append('<div>' + response[i].message + '<div>');
		}
	}, 'json');

	$newWindow = setInterval(function () {
		getMessages();
	}, 2000);

	function getMessages() {
		$.get('http://tiyfe.herokuapp.com/collections/moryf', function (response) {
			$list.html('');
			for (var i = 0; i < response.length; i++) {
				$list.append('<div>' + response[i].message + '<div>');
			}
		}, 'json');
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
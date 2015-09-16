'use strict';

$(document).ready(function() {

var $chat = $('#chat');
var $input = $('#input');
var $list = $('#list');
var $newWindow = $('#newWindow');


$chat.submit(function(e) {
	e.preventDefault();

	var newInput = $input.val();

	$.post(
		'http://tiyfe.herokuapp.com/collections/moryf',
		{message: newInput},
		function(result) {
			console.log('input saved', result);
			console.log('result'._id);
			$list.append('<div>'+result.message+'</div>');
		},
		'json'


		);

});

$.get(
	'http://tiyfe.herokuapp.com/collections/moryf',
	function(response) { 
		for(var i=0; i<response.length; i++) {
				$list.append('<div>'+response[i].message+'<div>');
		} 
	},
	'json'
	);

 

$newWindow = setInterval(function() {getMessages() }, 2000);

function getMessages(){
$.get(
	'http://tiyfe.herokuapp.com/collections/moryf',
	function(response) {
		$list.html(''); 
		for(var i=0; i<response.length; i++) {
				$list.append('<div>'+response[i].message+'<div>');
		} 
	},
	'json'
	);
}
 });

















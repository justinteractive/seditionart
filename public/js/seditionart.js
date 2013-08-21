//     Zepto.js
//     (c) 2010-2012 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){

$(document).ready(function(){

	$('.modal-auth a.close').on('click', function(e) {
		$('.modal-auth').hide();
	});

	$('.hero a.signup').on('click', function(e) {
		$('.modal-auth').show();
	});

});

})(Zepto);
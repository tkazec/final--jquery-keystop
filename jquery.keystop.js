/*
 * jQuery keystop plugin (https://github.com/tkazec/keystop)
 * Copyright (c) 2011 Teddy Cross, licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Adds the "keystop" event, which will trigger when the user has stopped typing in an element for a certain amount of time.
 * .keystop(callback, [delay]) to bind / .keystop() to trigger / .unbind("keystop") to unbind
 */
(function($){

$.event.special.keystop = {
	add: function(details){
		var $elem = $(this), ns = ".__" + details.guid, delay = details.data || 500, tID = -1;
		
		details.namespace += ns;
		
		$elem.bind("input" + ns + " propertychange" + ns, function(e){
			clearTimeout(tID);
			tID = setTimeout(function(){
				$elem.trigger("keystop" + ns);
			}, delay);
		});
	},
	remove: function(details){
		var ns = ".__" + details.guid;
		$(this).unbind("input" + ns + " propertychange" + ns);
	}
};

$.fn.keystop = function(handler, delay){
	return handler ? this.bind("keystop", delay, handler) : this.trigger("keystop");
};

})(jQuery);
/*\
 * jQuery keystop plugin (https://github.com/tkazec/keystop)
 * Copyright (c) 2012 Teddy Cross (http://tkaz.ec), shared under the MIT (http://www.opensource.org/licenses/mit-license.php)
 *
 * Adds a "keystop" event which triggers once the user has stopped typing in an input for a specified period of time.
 * .keystop(callback, [delay]) to bind / .keystop() to trigger / .off("keystop") to unbind
\*/
(function ($) { "use strict";

$.event.special.keystop = {
	add: function (details) {
		var $elem = $(this);
		var ns = ".__" + details.guid;
		var delay = details.data || 500;
		var tID = -1;
		
		details.namespace += ns;
		
		$elem.on("input" + ns + " propertychange" + ns, function () {
			clearTimeout(tID);
			
			tID = setTimeout(function () {
				$elem.trigger("keystop" + ns);
			}, delay);
		});
	},
	remove: function (details) {
		var ns = ".__" + details.guid;
		
		$(this).off("input" + ns + " propertychange" + ns);
	}
};

$.fn.keystop = function (handler, delay) {
	return handler ? this.on("keystop", delay, handler) : this.trigger("keystop");
};

})(jQuery);
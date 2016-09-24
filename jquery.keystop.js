/*\
 * jQuery keystop event plugin (https://github.com/tkazec/final--jquery-keystop)
 * Triggers the "keystop" event once the user has ceased typing in an input
 * for a specified period of time. Dedicated to the public domain.
 *
 * .keystop(handler, [delay]) or .on("keystop", [delay], handler) to bind.
 * .keystop() or .trigger("keystop") to trigger.
 * .off("keystop") to unbind.
\*/
(function ($) { "use strict";

$.event.special.keystop = {
	add: function (details) {
		var $el = $(this);
		var ns = ".__" + details.guid;
		var delay = details.data || 500;
		var tID = -1;
		
		details.namespace += ns;
		
		$el.on("input" + ns + " propertychange" + ns, function () {
			clearTimeout(tID);
			
			tID = setTimeout(function () {
				$el.trigger("keystop" + ns);
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
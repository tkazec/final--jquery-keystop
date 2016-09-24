> Created in the heyday of jQuery, AJAX, and IE8, this microplugin was a convenient cross-browser way to improve UX. The final source code is preserved here, dedicated to the public domain under the [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/). – [Teddy Cross](https://teddy.io)

jQuery keystop event plugin. Triggers the "keystop" event once the user has ceased typing in an input for a specified period of time. https://www.npmjs.com/package/jquery-keystop

----

* `.keystop(handler, [delay])` or `.on("keystop", [delay], handler)` to bind.
	* The delay is specified in milliseconds and defaults to 500.
* `.keystop()` or `.trigger("keystop")` to trigger.
* `.off("keystop")` to unbind.
* Works with jQuery 1.7 and up.

```javascript
$("#search").keystop(function () {
	// Load and display search results via AJAX.
});
```

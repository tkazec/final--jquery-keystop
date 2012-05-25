A tiny jQuery plugin that adds a "keystop" event which triggers once the user has stopped typing in an input for a specified period of time.

----

* Bind: `.keystop(callback, [delay])` or `.on("keystop", [delay], callback)`
	* The delay is specified in milliseconds and defaults to 500.
* Trigger: `.keystop()` or `.trigger("keystop")`
* Unbind: `.off("keystop")`
* Works with jQuery 1.7 and up.

```javascript
$("#search").keystop(function () {
	// Load and display search results via AJAX.
});
```

---

© 2012 [Teddy Cross](http://tkaz.ec), shared under the [MIT](http://www.opensource.org/licenses/MIT).
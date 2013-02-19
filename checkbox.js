/**
* Created by Shihab 2012
*
* Version: 1
* Requires: jQuery 1.4+
*
*/


;(function ($) {
	$.fn.extend({
		checkbox: function (options) {
			return this.each(function () {
				var elem = $(this);
				var chkSpan = new Object();

				if (this.tagName.toLowerCase() == "input" && elem.attr("type") == "checkbox") {
					var defaultOptions = {
						"display": "inline",
						"width": "auto",
						"paddingLeft": 16,
						"height": 16,
						"background": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAkCAYAAABrLwHZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MThDQkZBNzlGMEMxMUUxOUY1MUMwQUIwQUVDQjQyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MThDQkZBODlGMEMxMUUxOUY1MUMwQUIwQUVDQjQyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxOENCRkE1OUYwQzExRTE5RjUxQzBBQjBBRUNCNDI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxOENCRkE2OUYwQzExRTE5RjUxQzBBQjBBRUNCNDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JjY8nAAAAYhJREFUeNrslbHKglAUx/+apYE0VUQQET1AvkBLS0P1ChE0uvgojW3N2Ra0RE+QLyA1BzU0BEZBaB/nQINa6Ncn3+QfDniv5/489+j9KzyfTyQlEQlKel1MJpOvSzQMQ/DBSL1eD4IgcESJ2kOxWq3ClZFkWUYmk4EoRu/e8zy4rvt+m4nDJEniIGCUCBRshw9GEILFqYxAwc9KCibEfQHv8lJYCosDm06nf7IgITXH/zFHx3FwPp9RrVY/94xgUXE6nTCbzXC9Xnn8tTkeDgfM53M8Hg+oqsq5X5nj7XaDaZoMIlFlwYfGPgGLxQKXy4Wvi8UiKpVKKE98B6MG0+Lj8chj27ax3+85p16vQ9d1NBqN6LNpWRbW6zXu9ztvbTgcYrPZ8H0CjEYjZLNZ/jtFVtZsNlGr1Xi82+2wXC65wlKpxOBcLvexHSEYLRqPx+h0Ojy33W6hKAqD8vm8DxSrZxTdbheDwYDn+/0+yuVyCPQrP2u32ygUCmi1WsmYo6ZpqTn69SPAANoPleQQnA11AAAAAElFTkSuQmCC) no-repeat scroll -2px -2px transparent",
						"position": elem.offset(),
						"onCheck": function() { },
						"onUncheck": function() { }
					}

					if (options) {
						defaultOptions = $.extend(defaultOptions, options);
						if (options["padding-left"]) {
							defaultOptions.paddingLeft = options["padding-left"];
						}
					}

					chkSpan = document.createElement("span");
					var span = $(chkSpan);
					span.css({
						"display": defaultOptions.display,
						"width": defaultOptions.width,
						"padding-left": defaultOptions.paddingLeft,
						"height": defaultOptions.height,
						"background": defaultOptions.background,
						"position": "absolute",
						"top": defaultOptions.position.top,
						"left": defaultOptions.position.left,
						"cursor": "default",
						"z-index": 999
					});
					elem.after(span);

					if (elem.is(":checked")) {
						span.css("background-position", "-2px -19px");
					} else {
						span.css("background-position", "-2px -2px");
					}

					span.click(function() {
						if (elem.is(":checked")) {
							span.css("background-position", "-2px -2px");
							elem.removeAttr("checked");
							elem.trigger("onUncheck");
						} else {
							span.css("background-position", "-2px -19px");
							elem.attr("checked", "checked");
							elem.trigger("onCheck");
						}
					});

					elem.change(function () {
						if (elem.is(":checked")) {
							span.css("background-position", "-2px -19px");
							elem.trigger("onCheck");
						} else {
							span.css("background-position", "-2px -2px");
							elem.trigger("onUncheck");
						}
					}).css({
						"opacity": 0
					});
				}

				elem.bind("onCheck", function() {
					defaultOptions.onCheck.call();
				}).bind("onUncheck", function() {
					defaultOptions.onUncheck.call();
				});
			});
		}
	});
})(jQuery);

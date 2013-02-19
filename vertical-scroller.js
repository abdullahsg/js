;(function ($) {

	var intervalID = new Object();

	var _privateMethods = {
		_scrollUp: function(_scrollable, _options) {
			intervalID = setInterval(function () {
				if (parseInt($(_scrollable[0]).css("top")) < parseInt($(_scrollable[1]).css("top"))) {
					// if the first element is visible
					if (($(_scrollable[0]).height() + parseInt($(_scrollable[0]).css("top"))) > 0) {
						$(_scrollable[0]).css("top", (parseInt($(_scrollable[0]).css("top")) - 1));
						$(_scrollable[1]).css("top", (parseInt($(_scrollable[1]).css("top")) - 1));
					} else {
						$(_scrollable[0]).css("top", $(_scrollable[0]).height());
					}
				} else {
					// if the second element is visible
					if (($(_scrollable[1]).height() + parseInt($(_scrollable[1]).css("top"))) > 0) {
						$(_scrollable[1]).css("top", (parseInt($(_scrollable[1]).css("top")) - 1));
						$(_scrollable[0]).css("top", (parseInt($(_scrollable[0]).css("top")) - 1));
					} else {
						$(_scrollable[1]).css("top", $(_scrollable[1]).height());
					}
				}
			}, _options.interval);
		},

		_scrollDown: function(_scrollable, _options) {
			intervalID = setInterval(function () {
				if (parseInt($(_scrollable[0]).css("bottom")) < parseInt($(_scrollable[1]).css("bottom"))) {
					// if the first element is visible
					if ((parseInt($(_scrollable[0]).css("bottom")) + $(_scrollable[0]).height()) < 0) {
						$(_scrollable[0]).css("bottom", (parseInt($(_scrollable[1]).css("bottom")) + $(_scrollable[1]).height()));
					} else {
						$(_scrollable[0]).css("bottom", (parseInt($(_scrollable[0]).css("bottom")) - 1));
						$(_scrollable[1]).css("bottom", (parseInt($(_scrollable[1]).css("bottom")) - 1));
					}
				} else {
					// if the second element is visible
					if ((parseInt($(_scrollable[1]).css("bottom")) + $(_scrollable[1]).height()) < 0) {
						$(_scrollable[1]).css("bottom", (parseInt($(_scrollable[0]).css("bottom")) + $(_scrollable[0]).height()));
					} else {
						$(_scrollable[1]).css("bottom", (parseInt($(_scrollable[1]).css("bottom")) - 1));
						$(_scrollable[0]).css("bottom", (parseInt($(_scrollable[0]).css("bottom")) - 1));
					}
				}
			}, _options.interval);
		}
	};

	$.fn.extend({

		scroll: function (options) {

			return this.each(function() {
				var elem = $(this);
				var scrollable = new Object();
				var newElement = new Object();
				var defaultOptions = {
					interval: 35,
					direction: "up",
					pauseOnHover: true
				};

				if (options) {
					defaultOptions = $.extend(defaultOptions, options);
				}

				if (defaultOptions.pauseOnHover == true) {
					$(elem).parent().bind("mouseenter", function () {
						clearInterval(intervalID);
					}).bind("mouseleave", function () {
						if (defaultOptions.direction == "up") {
							_privateMethods._scrollUp(scrollable, defaultOptions);
						} else if (defaultOptions.direction == "down") {
							_privateMethods._scrollDown(scrollable, defaultOptions);
						}
					});
				}

				$(elem).addClass("scrollable");
				$(elem).parent().css("position", "relative");
				$(elem).css("position", "absolute");

				newElement = document.createElement($(elem).get(0).tagName);
				$(newElement).attr("class", $(elem).attr("class"));
				$(newElement).html($(elem).html());
				$(newElement).css("position", "absolute");
				$(elem).parent().append(newElement);

				scrollable = $(elem).parent().children('.scrollable');
				if (defaultOptions.direction == "up") {
					$(scrollable).css("bottom", null);
					$(scrollable[0]).css("top", 0);
					$(scrollable[1]).css("top", $(scrollable[0]).height());

					_privateMethods._scrollUp(scrollable, defaultOptions);
				} else if (defaultOptions.direction == "down") {
					$(scrollable).css("top", null);
					$(scrollable[1]).css("bottom", 0);
					$(scrollable[0]).css("bottom", (parseInt($(scrollable[1]).css("bottom")) + $(scrollable[1]).height()));

					_privateMethods._scrollDown(scrollable, defaultOptions);
				}
			});
		}
	});
})(jQuery);
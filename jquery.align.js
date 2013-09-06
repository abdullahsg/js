
/**
* jquery.align.js
* Version: 1.1
* Requires: jQuery 1.4+
*
* Created by Shihab
*/

; (function ($) {
	$.fn.extend({

		vAlign: function (alignment) {
			return this.each(function () {
				var vAlign_parent, top, elem = $(this);
				vAlign_parent = elem.parent();

				if (alignment.toLowerCase() == "middle") {
					top = ($(vAlign_parent).height() - elem.outerHeight()) / 2;
					top = top < 0 ? 0 : top;
				} else if (alignment.toLowerCase() == "bottom") {
					top = $(vAlign_parent).height() - elem.outerHeight();
				} else {
					top = 0;
				}

				elem.css("position", "relative").css({
					"top": top
				}, 200);
			});
		}, // vAlign

		align: function (alignment) {
			return this.each(function () {
				var align_parent, left, elem = $(this);
				align_parent = elem.parent();

				if (alignment.toLowerCase() == "center") {
					left = ($(align_parent).width() - elem.outerWidth()) / 2;
					left = left < 0 ? 0 : left;
				} else if (alignment.toLowerCase() == "right") {
					left = $(align_parent).width() - elem.outerWidth();
				} else {
					left = 0;
				}

				elem.css("position", "relative").css({
					"left": left
				}, 200);
			});
		} // align
	});

	$(function () {
		if ($('[data-valign]').length > 0) {
			$('[data-valign]').each(function () {
				var elem = $(this);
				elem.vAlign(elem.attr("data-valign"));

				$(window).resize(function () {
					elem.vAlign(elem.attr("data-valign"));
				});
			});
		}
		if ($('[data-align]').length > 0) {
			$('[data-align]').each(function () {
				var elem = $(this);
				elem.align(elem.attr("data-align"));

				$(window).resize(function () {
					elem.align(elem.attr("data-align"));
				});
			});
		}
	});
})(jQuery);
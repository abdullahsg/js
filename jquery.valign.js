/**
* Created by Shihab 2012
*
* Version: 1
* Requires: jQuery 1.4+
*
*/


;(function ($) {
	$.fn.extend({
		
		vAlign: function(alignment) {
			return this.each(function() {
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

				$(this).css("position", "relative").animate({
					"top": top
				}, 200);
			});
		}


	});

	$(function(){
		$('[data-valign]').each(function() {
			var elem = $(this);
			elem.vAlign(elem.attr("data-valign"));

			$(window).resize(function () {
				elem.vAlign(elem.attr("data-valign"));
			});
		});
	});
})(jQuery);



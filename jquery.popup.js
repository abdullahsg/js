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
		} // vAlign

	});

	$(function(){
		var popupParent = $('.popup').css({
			"margin":"0 auto",
			"width": 600,
			"height": 400,
			"box-shadow":"0 0 20px rgba(0, 0, 0, 0.6)"
		}).parent().css({
			"opacity":0,
			"position":"fixed",
			"left":0,
			"top":0,
			"width":"100%",
			"height":"100%",
			"z-index":"-1"
		}).append("<div style='background-color:#000;opacity:0.6;filter:alpha(opacity=60);position:absolute;left:0;top:0;width:100%;height:100%;'></div>").clone(true);

		$('.popup').parent().remove();
		$('body').append(popupParent);

		$('.popupClose').css({
			"display":"inline-block",
			"position":"absolute",
			"right":"-10px",
			"top":"-10px",
			"border":"solid 2px #fff",
			"background-color":"#000",
			"color":"#fff",
			"font":"bold 12px Verdana",
			"text-align":"center",
			"line-height":"18px",
			"width":"17px",
			"cursor":"pointer",
			"z-index":"99999",
			"border-radius":"10px",
			"box-shadow":"0 0 3px #000"
		}).click(function() {
			popupParent.css("z-index", "-1").animate({
				"opacity":0
			});
		});

		if ($('[data-valign]').length > 0) {
			$('[data-valign]').each(function() {
				var elem = $(this);
				elem.vAlign(elem.attr("data-valign"));

				$(window).resize(function () {
					elem.vAlign(elem.attr("data-valign"));
				});
			});
		}
	});
})(jQuery);


function showPopup() {
	jQuery('.popup').parent().css("z-index", "999999999").animate({
		"opacity":1
	});
}


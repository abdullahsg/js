/**
* Created by Shihab 2012
*
* Version: 1.1
* Requires: jQuery 1.4+
*
*/


; (function ($) {
	$.fn.extend({
		checkbox: function (options) {
			return this.each(function () {
				var elem = $(this);
				var chkSpan = new Object();

				if (this.tagName.toLowerCase() == "input" && elem.attr("type") == "checkbox") {
					var defaultOptions = {
						"display": "inline",
						"width": 22,
						"height": 22,
						"background": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAsCAYAAABhVUjwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0E4Q0ExQkJGMjg4MTFFMkI5N0ZGOTAzRUQ3N0EwRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0E4Q0ExQkNGMjg4MTFFMkI5N0ZGOTAzRUQ3N0EwRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QThDQTFCOUYyODgxMUUyQjk3RkY5MDNFRDc3QTBFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QThDQTFCQUYyODgxMUUyQjk3RkY5MDNFRDc3QTBFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmA8M5QAAAGZSURBVHja7JW/q4JQFMevEpIOEdSa4NpiqzUXNDY09A80Sg2uLu1uubUIDUVjc7Q1FA3RP2DQGDVFU9+n0pN30X48y+HxPHDB6zn3o+fHPYcQQkxn4cPLZNwHR8gnhWEYwpKYJAEn4AScgBNwAo4usQzT2P74n03p7XZL6vU6WSwWoXpEkfP5jFar5SVLURTYtu3rbgmMBu71enBi6VdCrVZ7HzydTpHJZKgS63a774Fdl2VZpqBOnHE8HqODL5cLms0mBS0UCnCSSNmFgk+nEwzDwGazCY3rTyjP8xiNRgG7APh6vXqx+nZvv9/7uvF4jFwuR4E1TQv1LADWdR0sy/oH2+225/56vUaxWKSg1WqV+vBDcLlcpg4LgoBOp4NGo0G9F0URy+Xybi4C4NVqhVKpREE4jkMqlaL2lmU9THJo8mazGSRJutsSVVV9Wj13y20ymSCfzweglUoFu90uOtiVwWCAbDZL1et8Pn+p3p9ekH6/j3Q67RmapvnyRXLtnzZ6J6bkcDiQ4XD4q0b/9yZIbFP6S4ABAIC+2nDS1w8eAAAAAElFTkSuQmCC) no-repeat scroll -2px -2px transparent",
						"position": elem.offset(),
						"onInit": function () { },
						"onCheck": function () { },
						"onUncheck": function () { }
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
						"height": defaultOptions.height,
						"background": defaultOptions.background,
						"position": "absolute",
						"top": defaultOptions.position.top,
						"left": defaultOptions.position.left,
						"cursor": "default",
						"z-index": 999
					}).addClass("checkbox");

					elem.after(span);

					$(window).resize(function () {
						span.css({
							"top": elem.offset().top,
							"left": elem.offset().left
						});
						elem.change();
						defaultOptions.onInit.call(span, elem);
					}).load(function () {
						$(this).resize();
					}).resize();

					if (elem.is(":checked")) {
						span.css("background-position", "0 -22px");
					} else {
						span.css("background-position", "0 0");
					}

					span.click(function () {
						elem.change();
					});

					elem.change(function () {
						if (elem.is(":checked")) {
							elem.siblings('span.checkbox').css("background-position", "0 -22px");
							elem.trigger("onCheck");
						} else {
							elem.siblings('span.checkbox').css("background-position", "0 0");
							elem.trigger("onUncheck");
						}
					}).css({
						"opacity": 0
					});
				}

				elem.bind("onCheck", function () {
					defaultOptions.onCheck.call();
				}).bind("onUncheck", function () {
					defaultOptions.onUncheck.call();
				});
			});
		}
	});
})(jQuery);


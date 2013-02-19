
;(function ($) {

	$.fn.extend({

		numericfield: function (setting) {
			return this.each(function() {
				var elem = $(this);
				elem.keydown(function (e) {
					if ((e.keyCode >= 35 && e.keyCode <= 40) || // ARROWS (Left, Up, Right, Down), End, Home
					e.keyCode == 8 || // Backspace
					e.keyCode == 9 || // Tab
					e.keyCode == 13 || // Enter
					e.keyCode == 46 || // Tab
					(e.keyCode >= 112 && e.keyCode <= 123)) // F1 - F12
					{
						return true;
					}
					else if ((e.keyCode >= 96 && e.keyCode <= 105) || // NUMBERS (0 - 9) [NumPad]
						 (e.keyCode >= 48 && e.keyCode <= 57)) // NUMBERS (0 - 9) [Keyboard]
					{
						return !e.shiftKey;
					}
					else if (e.keyCode == 190) // . [Keyboard]
					{
						if (setting != null && setting != undefined && setting["allow_decimal"] == true) {
							if ($(this).val().indexOf(".") < 0) {	// there is no . sign
								return !e.shiftKey;
							} else {
								return false;
							}
						} else {
							return false;
						}
					}
					else if (e.keyCode == 110) // . [NumPad]
					{
						if (setting != null && setting != undefined && setting["allow_decimal"] == true) {
							if ($(this).val().indexOf(".") < 0) {	// there is no . sign
								return true;
							} else {
								return false;
							}
						} else {
							return false;
						}
					}
					else if (e.keyCode == 65 || e.keyCode == 67 || e.keyCode == 86 || (e.keyCode > 87 && e.keyCode < 91)) // A, C, V, X, Y, Z
					{
						return e.ctrlKey;
					}
					else {
						return false;
					}
				}).keyup(function (e) {
					if (e.keyCode == 86) {
						if (isNaN($(this).val())) {
							$(this).val("");
						}
					}
				});
			});
		}
	});
})(jQuery);
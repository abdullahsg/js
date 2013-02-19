var scrollable_element, newElement;
var _parent_height = 0, _height_diff = 0;
var _interval = 35;
var _direction = "up";
var _handles;

$.prototype.scroll = function(setting) {
	if (setting != null && setting != undefined) {
		initSetting(setting);
	}

	_parent_height = $(this).parent().height();
	_height_diff = _parent_height - $(this).height();
	$(this).addClass("scrollable");

	scrollable_element = $('.scrollable');
	if (_direction == "up") {
		$(scrollable_element[1]).css("top", $(scrollable_element[0]).height());
		setInterval("moveUp()", _interval);
	} else if (_direction == "down") {
		$(scrollable_element[1]).css("top", _height_diff);
		$(scrollable_element[0]).css("top", (_height_diff - $('.scrollable').height()));
		setInterval("moveDown()", _interval);
	}
}


function initSetting(setting) {
	if (setting["interval"] != null && setting["interval"] != undefined) {
		_interval = setting["interval"];
	}

	if (setting["direction"] != null && setting["direction"] != undefined) {
		_direction = setting["direction"];
	}
}


function moveUp() {
	if ($(scrollable_element[0]).position().top < $(scrollable_element[1]).position().top) {
		// if the first element is visible
		if (($(scrollable_element[0]).height() + $(scrollable_element[0]).position().top) > 0) {
			$(scrollable_element[0]).css("top", ($(scrollable_element[0]).position().top - 1));
			$(scrollable_element[1]).css("top", ($(scrollable_element[1]).position().top - 1));
		} else {
			$(scrollable_element[0]).css("top", $('.scrollable').height());
		}
	} else {
		// if the second element is visible
		if (($(scrollable_element[1]).height() + $(scrollable_element[1]).position().top) > 0) {
			$(scrollable_element[1]).css("top", ($(scrollable_element[1]).position().top - 1));
			$(scrollable_element[0]).css("top", ($(scrollable_element[0]).position().top - 1));
		} else {
			$(scrollable_element[1]).css("top", $('.scrollable').height());
		}
	}
}


function moveDown() {
	if ($(scrollable_element[0]).position().top > $(scrollable_element[1]).position().top) {
		// if the first element is visible
		if ($(scrollable_element[0]).position().top < _parent_height) {
			$(scrollable_element[0]).css("top", ($(scrollable_element[0]).position().top + 1));
			$(scrollable_element[1]).css("top", ($(scrollable_element[1]).position().top + 1));
		} else {
			$(scrollable_element[0]).css("top", (_height_diff - $('.scrollable').height()));
		}
	} else {
		// if the second element is visible
		if ($(scrollable_element[1]).position().top < _parent_height) {
			$(scrollable_element[1]).css("top", ($(scrollable_element[1]).position().top + 1));
			$(scrollable_element[0]).css("top", ($(scrollable_element[0]).position().top + 1));
		} else {
			$(scrollable_element[1]).css("top", (_height_diff - $('.scrollable').height()));
		}
	}
}

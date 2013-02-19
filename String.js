
String.prototype.endsWith = function(pattern, isCaseSensitive) {
	if (isCaseSensitive) {
		var d = this.length - pattern.length;
		return d >= 0 && this.lastIndexOf(pattern) === d;
	} else {
		var s = this.toLowerCase();
		pattern = pattern.toLowerCase();

		var d = s.length - pattern.length;
		return d >= 0 && s.lastIndexOf(pattern) === d;
	}
};

String.prototype.startsWith = function(pattern, isCaseSensitive) {
	if (isCaseSensitive) {
		var length = pattern.length;
		return (this.substring(0, length) == pattern);
	} else {
		var s = this.toLowerCase();
		pattern = pattern.toLowerCase();

		var length = pattern.length;
		return (s.substring(0, length) == pattern);
	}
};

String.prototype.contains = function(pattern, isCaseSensitive) {
	var _string = this;
	if (isCaseSensitive == undefined || isCaseSensitive == false) {
		_string = _string.toLowerCase();
		pattern = pattern.toLowerCase();
	}

	if (_string.search(pattern) < 0)
		return false;
	else
		return true;
};
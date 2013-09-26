/**
* Created by Shihab 2012
*
* Version: 1.1
* Requires: jQuery 1.4+
*
*/


/***
	Using Google Maps Api V3
	http://maps.google.com/maps/api/js?sensor=true
***/



/* <!-- SAMPLE HTML MARKUP FOR DRAWING MAP -->

<div
	data-id="map"
	data-address="Dhaka"
	data-street-view-enabled="false"
	data-marker-content="marker content"
	data-map-type="roadmap"
	data-zoom="14">
</div>

*/



;(function ($) {

	document.write('<' + 'script src="http://maps.google.com/maps/api/js?sensor=true"' +
                   ' type="text/javascript"><' + '/script>');

	/*
	 * public methods
	 */
	$.fn.extend({
		drawMap: function(options) {

			return this.each(function () {

				var defaultOptions, marker, infoWindow;

				defaultOptions = {
					"address": "Dhaka, Bangladesh",
					"markerContent": "",
					"mapType": "roadmap",
					"zoom": 14,
					"streetViewControl": true
				};

				if (options) {
					defaultOptions = $.extend(defaultOptions, options);
				}
				if (defaultOptions.markerContent == "") {
					defaultOptions.markerContent = defaultOptions.address;
				}

				defaultOptions.mapType = defaultOptions.mapType.toLowerCase();
				if (defaultOptions.mapType != "roadmap" && defaultOptions.mapType != "satellite" &&
					defaultOptions.mapType != "hybrid" && defaultOptions.mapType != "terrain") {
					defaultOptions.mapType = "roadmap";
				}

				var geocoder = new google.maps.Geocoder();
				var map = new google.maps.Map(this, {
					zoom: defaultOptions.zoom,
					mapTypeId: defaultOptions.mapType,
					streetViewControl: defaultOptions.streetViewControl
				});

				geocoder.geocode({ 'address': defaultOptions.address }, function (results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						map.setCenter(results[0].geometry.location);
						marker = new google.maps.Marker({
							map: map,
							position: results[0].geometry.location,
							icon: defaultOptions.markerImage
						});

						infoWindow = new google.maps.InfoWindow({
							position: map.getCenter(),
							content: defaultOptions.markerContent
						});

						google.maps.event.addListener(marker, 'click', function () {
							infoWindow.open(map, this);
						});
					} else {
						alert("Geocode was not successful for the following reason: " + status);
					}
				});
			});
		}
	});
})(jQuery);



;(function (j) {
	j(function () {
		var map = j('[data-id=map]');
		if (map.length > 0) {
			var streetView = map.data("streeViewEnabled");
			map.drawMap({
				address: map.data("address"),
				streetViewControl: map.data("street-view-enabled"),
				markerContent: map.data("marker-content"),
				mapType: map.data("map-type"),
				zoom: map.data("zoom")
			});
		}
	});
})(jQuery);


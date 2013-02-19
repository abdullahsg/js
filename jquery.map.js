/**
* Created by Shihab 2012
*
* Version: 1
* Requires: jQuery 1.4+
*
*/


/***
	Using Google Maps Api V3
	http://maps.google.com/maps/api/js?sensor=true
***/



;(function ($) {

	document.write('<' + 'script src="http://maps.google.com/maps/api/js?sensor=true"' +
                   ' type="text/javascript"><' + '/script>');
	/*
	 * Private methods
	 */
		var marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(markerData.lat, markerData.long),
			title: markerData.title,
			icon: markerData.markerImage
		});

		var infoWindow = new google.maps.InfoWindow({
			content: markerData.markerContent
		});

		google.maps.event.addListener(marker, 'click', function () {
			infoWindow.open(map, this);
		});

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
		}, // drawMap

		loadMarkers: function(options) {

			return this.each(function () {
				var defaultOptions;

				defaultOptions = {
					markers: [{
								lat: "23.716839",
								long: "90.408554",
								title: "",
								markerContent:""
							}]
				};

				if (options) {
					defaultOptions = $.extend(defaultOptions, options);
				}

				var map = new google.maps.Map(this, {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					streetViewControl: true
				});

				for (i in defaultOptions.markers) {
					_addMarker(map, defaultOptions.markers[i]);
				}

				var markerData, bounds = new google.maps.LatLngBounds();
				for (index in defaultOptions.markers) {
					markerData = defaultOptions.markers[index];
					bounds.extend(new google.maps.LatLng(markerData.lat, markerData.long));
				}
				map.fitBounds(bounds);
			});
		}, // loadMarkers

				var elem = this;
					"from": "Zero point, Dhaka, Bangladesh",
					"to": "Shapla Chottor, Motijheel, Dhaka, Bangladesh",
					"directionsPane": "map_directions"
				};

				if (options) {
					defaultOptions = $.extend(defaultOptions, options);
				}
				defaultOptions.directionsPane = defaultOptions.directionsPane + "_" + timestamp;

				var wayPoints = [];

				var totalLocations;
				if (defaultOptions.locations) {
					totalLocations = defaultOptions.locations.length;
					if (totalLocations > 1) {
						defaultOptions.from = defaultOptions.locations[0];
						defaultOptions.to = defaultOptions.locations[totalLocations - 1];
						if (totalLocations > 2) {
							for (var i = 1; i < (totalLocations - 1); i++) {
								wayPoints.push({
									location: defaultOptions.locations[i],
									stopover: true
								});
							}
						}
					}
				}


})(jQuery);

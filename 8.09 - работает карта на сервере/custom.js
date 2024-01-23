
$(document).ready(function(){
	
	var smallScreenSize = 480;
	var mobileScreenSize = 770;
	
	var mapCoords = new Object();
	mapCoords.latitudePC 		= 55.710215;
	mapCoords.longitudePC 		= 37.71893199999995;
	mapCoords.latitudeMobile 	= 55.708015;
	mapCoords.longitudeMobile	= 37.72123199999995;
	
	var markerCoords = new Object();
	markerCoords.latitudePC 	= 55.71015;
	markerCoords.longitudePC 	= 37.72140199999995;
	
	function setRegistrationBoxLeft() {
		var registrationBoxLeft = ($(window).width() - $('.wrap').css('width').replace('px',''))/2;
		$('.registration-box').css('left', registrationBoxLeft);	
	}

	function setRegistrationBoxTop(){
		if ($(window).width() < mobileScreenSize){
			$('.registration-box').css('top', 500);			
		} else {
			$('.registration-box').css('top', 130);
		}		
	}
	
	function changeTagProperty(className, property, value) {
		$('.' + className + '').css('' + property + '', ''+ value +'');
	}

	/*function initialize(mapLatitude, mapLongitude, markerLatitude, markerLongitude) {
		var mapProp = {
			center: new google.maps.LatLng(mapLatitude, mapLongitude),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("map"),mapProp);
		var marker = new google.maps.Marker({
			map: map, 
			position: new google.maps.LatLng(markerLatitude, markerLongitude),
			icon: 'images/marker.png'
		}); 
	}*/
	
	function setMapHeight() {
		if ($(window).width() < mobileScreenSize){
			$('#map').css('height', 1000);
		} else {
			$('#map').css('height', 690);
		}		
	}
	
	function setMarker() {
		if ($(window).width() < mobileScreenSize){
			google.maps.event.addDomListener(window, 'load', initialize(mapCoords.latitudeMobile, mapCoords.longitudeMobile, markerCoords.latitudePC, markerCoords.longitudePC));
		} else {
			google.maps.event.addDomListener(window, 'load', initialize(mapCoords.latitudePC, mapCoords.longitudePC, markerCoords.latitudePC, markerCoords.longitudePC));
		}		
	}

	function initialize() {
		var mapProp = {
			center: new google.maps.LatLng(55.710215, 37.71893199999995),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		var marker = new google.maps.Marker({
			map: map, 
			position: new google.maps.LatLng(55.710215, 37.71893199999995),
			icon: 'images/marker.png'
		}); 
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
	setRegistrationBoxLeft();
	setRegistrationBoxTop();
	setMarker();
	setMapHeight();
	
	
	$(window).resize(function() {
		setRegistrationBoxLeft();
		setRegistrationBoxTop();
		setMarker();
		setMapHeight();
		if ($(window).width() < smallScreenSize){
			changeTagProperty('input-wrapper-left', 'float', 'none');
			changeTagProperty('input-wrapper-right', 'float', 'none');
			changeTagProperty('input-wrapper-right', 'width', '100%');
			changeTagProperty('input-wrapper-left', 'width', '100%');
		} else {
			changeTagProperty('input-wrapper-left', 'float', 'left');
			changeTagProperty('input-wrapper-right', 'float', 'right');
			changeTagProperty('input-wrapper-right', 'width', '48%');
			changeTagProperty('input-wrapper-left', 'width', '48%');
		}
	});
});
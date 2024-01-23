	/*
	function setRegistrationBoxTop() {
		var registrationBoxTop = $('.main-header').css('height');
		//var registrationBoxTop = parseInt($('.topline').css('height').replace('px','')) + 
		//						 parseInt($('.main-menu').css('height').replace('px',''));
		
		$('.registration-box').css('top', registrationBoxTop);	
	}*/	
	
	/*function setMapHeight() {
		var mapHeight = 
						//parseInt($('.registration-box').css('margin-top').replace('px','')) + 
						//parseInt($('.registration-box').css('top').replace('px','')) + 
		                parseInt($('.registration-box').css('height').replace('px','')) 
		                //parseInt($('.registration-box').css('margin-bottom').replace('px','')) + 40
						;
		alert($('.registration-box').css('height'));
		$('#googleMap').css('height', mapHeight);
	}*/
	
	/*
	function initialize() {
		var mapProp = {
			//center: new google.maps.LatLng(mapCoords.latitudePC, mapCoords.longitudePC),
			center: new google.maps.LatLng(mapCoords.latitudeMobile, mapCoords.longitudeMobile),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map=new google.maps.Map(document.getElementById("map"),mapProp);
		var marker = new google.maps.Marker({
			map: map, 
			position: new google.maps.LatLng(markerCoords.latitudePC, markerCoords.longitudePC),
			//position: new google.maps.LatLng(55.71135,37.7280199999995),
			icon: 'images/marker.png'
		}); 
		//var infowindow = new google.maps.InfoWindow({content:'Технополис'});
		//google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
		//infowindow.open(map,marker);
	}
	*/
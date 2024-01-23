
$(document).ready(function(){

	function setMainImage() {
		if ($(window).width() < mobileScreenSize){
			$('.for-speakers-main-image').css('display','none');
		} else {
			$('.for-speakers-main-image').css('display','block');
		}		
	}
	
	function setConferenceIsTags() {
		if ($(window).width() < mobileScreenSize){
			$('.conference-is-img, .conference-is-info').css('float','none');
			$('.conference-is-info').css('width','100%');
			$('.conference-is-img').css('margin-bottom','30px');
		} else {
			$('.conference-is-img').css({'float':'left','margin-bottom':'none'});
			$('.conference-is-info').css({'float':'right', 'width':'650px'});
		}		
	}
	
	setMainImage();
	setConferenceIsTags();
	
	$(window).resize(function() {
		setMainImage();
		setConferenceIsTags();
	});
});
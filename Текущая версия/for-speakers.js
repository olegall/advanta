
$(document).ready(function(){

	function setMainImage() {
		if ($(window).width() < mobileScreenSize){
			$('.for-speakers-main-image').css('display','none');
		} else {
			$('.for-speakers-main-image').css('display','block');
		}		
	}
	
	function setSpeakerButton() {
		if ($(window).width() < mobileScreenSize){
			$('.speaker-button-wrapper').css('text-align','center');
		} else {
			$('.speaker-button-wrapper').css('text-align','left');
		}		
	}
	
	function setForSpeakersParagraph() {
		if ($(window).width() < smallScreenSize || $(window).width() < mobileScreenSize){
			$('.for-speakers p').css('text-align','center');
		} else {
			$('.for-speakers p').css('text-align','left');
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
	
	function setTopicColumn() {
		if ($(window).width() < mobileScreenSize){
			$('.topics ul > li').css('width','auto');
		} else {
			$('.topics ul > li').css('width','43.5rem');
		}		
	}
	
	function setPreview() {
		if ($(window).width() < smallScreenSize){
			$('.conf-numbers li').css({'display':'block', 'width':'209px', 'margin':'0 auto', 'margin-bottom':'20px'});
		} else {
			$('.conf-numbers li').css({'display':'inline-block', 'margin':'0 8px 8px 0'});
		}
	}
	
	// для Архива и Для спикеров
	function setLIsWithIcons() {
		if ($(window).width() < mobileScreenSize){
			$('.archive-li-s li, .conference-helpful li').css('width','100%');
			$('.archive-li-s span, .conference-helpful span').css('padding-top','20px');
		} else {
			$('.archive-li-s li, .conference-helpful li').css({'width':'290px'});
			$('.archive-li-s span, .conference-helpful span').css('padding-top','0');
		}
	}
	
	function setKeyTopicsItems() {
		if ($(window).width() < mobileScreenSize){
			$('.topics .wrap > ul > li').css('width','100%');
		} else {
			$('.topics .wrap > ul > li').css('width','43.5rem');			
		}		
	}

	function setVideoParagraph() {
		if ($(window).width() < mobileScreenSize){
			$('.video p').css('text-align','center');
		} else {
			$('.video p').css('text-align','left');
		}		
	}		
	
	setMainImage();
	setForSpeakersParagraph();
	setSpeakerButton();
	setConferenceIsTags();
	setTopicColumn();
	setPreview();
	setLIsWithIcons();
	setKeyTopicsItems();
	setVideoParagraph();
	
	$(window).resize(function() {
		setMainImage();
		setForSpeakersParagraph();
		setSpeakerButton();
		setConferenceIsTags();
		setTopicColumn();
		setPreview();
		setLIsWithIcons();
		setKeyTopicsItems();
		setVideoParagraph();
	});
});
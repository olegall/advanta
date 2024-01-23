
$(document).ready(function(){

	function setBuyButton() {
		if ($(window).width() < smallScreenSize){
			$('.buy-btn').css('margin','0 auto');
		} else {
			$('.buy-btn').css('margin','0');
		}		
	}
	
	function setKeyTopicsTitle() {
		if ($(window).width() < mobileScreenSize){
			$('.key-topics h2').css('text-align','center');
		} else {
			$('.key-topics h2').css('text-align','left');
		}		
	}	
	
	setBuyButton();
	setKeyTopicsTitle()
	$(window).resize(function() {
		setBuyButton();
		setKeyTopicsTitle();
	});
});
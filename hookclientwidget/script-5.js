$(document).ready(function(){
  $('.swip').slick({
		adaptiveHeight: true,
		infinite:false
	});
});



var chooseDate = document.querySelectorAll('.quick-write-date');
var quickWriteTop = document.querySelectorAll('.quick-write-top');
var closeBottom = document.querySelectorAll('.cansel-button');
let i=1;
quickWriteTop.forEach(function (elem) {$(elem).attr("attrVal", i);i++;});
i=1;
chooseDate.forEach(function (elem) {$(elem).attr("attr", i);i++;});
let height1 = $('#mast').height();
$('.card-top').css('height', height1)
let width1 = $('#mast').width()
$('.mycontainer').css('width', width1)
$('.quick-write-top').css('width', width1)
$('.mycontainer').css('height', height1)
closeBottom.forEach(function (close) {
	let el
	close.addEventListener('click', function(event){
	$('.mycontainer').animate({height: "hide"},500);
	$('.gg').removeClass('gg');
})
})
chooseDate.forEach(function (date) {

	let val=$(date).attr('attr')
	let blockQWT=$('div[attrVal='+val+']')
	let lastElem;
	let lastVal;
	let lastBlock;
	date.addEventListener('click', function(event){
		lastElem=$('.gg')
		lastVal=$(lastElem).attr('attr')
		lastBlock=$('div[attrVal='+lastVal+']')

	if(lastVal!=undefined){
		if($(this).attr('attr')<$(lastElem).attr('attr')) {
			$(this).addClass('gg');
			$(lastElem).removeClass('gg');
			if ((lastElem).attr('attr')-$(this).attr('attr')==1){
				go(width1);
			}
			else go(2*width1);

		}
		if($(this).attr('attr')>$(lastElem).attr('attr')) {
			$(this).addClass('gg');
			$(lastElem).removeClass('gg');
			if ($(this).attr('attr')-(lastElem).attr('attr')==1){
				go(-width1);
			}
			else go(-2*width1);
		}
		if($(this).attr('attr')==$(lastElem).attr('attr')){
			date.classList.remove('gg');

			$('.mycontainer').animate({height: "hide"},500)
		}
	}

		else {
			date.classList.add('gg');
			$('.mycontainer').animate({height: "show", bottom: 0},500)
			if ($(this).attr('attr')==1){$('.innerLiner').css('margin-left', '0px')}
			if ($(this).attr('attr')==2){$('.innerLiner').css('margin-left', -width1)}
			if ($(this).attr('attr')==3){$('.innerLiner').css('margin-left', -width1*2)}
		}
	})
});

function go(n){ // inner stuff slides left
	var initalLeftMargin = $( ".innerLiner" ).css('margin-left').replace("px", "")*1;
	var newLeftMargin = (initalLeftMargin + n); // extra 2 for border
	$( ".innerLiner" ).animate({marginLeft: newLeftMargin}, 500);
}

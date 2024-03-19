$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	// Navbar
		$('nav').css({
			backgroundColor : 'white',
			boxShadow : 'none'

		});
		$('nav a').css('color', '#0047BB');
		$('nav a:hover').css('color', '#00B2A9');
});

const container = document.querySelector('.gallery');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function  (e) {
	if (e.target.className == 'thumb') {
		//ganti gambar
		jumbo.src = e.target.src;

		//efek fade
		jumbo.classList.add('fade');
		setTimeout(function  () {
			jumbo.classList.remove('fade');
		},500);

		//efek aktif
		thumbs.forEach(function  (thumb) {
			thumb.classList.remove('active');
		}) 
		e.target.classList.add('active');
	}; 
});

$('.page-scroll').click(function(event) {

	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan).offset().top; 
	
	$('body, html').animate({
		scrollTop: elemenTujuan
	}, 1250, 'swing');

	event.preventDefault();ss
});

$('.tombol').click(function(event){
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan).offset().top; 
	
	$('body, html').animate({
		scrollTop: elemenTujuan
	}, 1250, 'swing');
});

var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 
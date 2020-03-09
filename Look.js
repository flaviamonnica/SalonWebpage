var photosection=document.querySelectorAll('#photosection .slide');
var currentSlide=0;
var slideInterval=setInterval(nextSlide,2000);

function nextSlide() {
	photosection[currentSlide].className='slide';
	currentSlide=(currentSlide+1)%photosection.length;
	photosection[currentSlide].className='slide showing';
}
var playing = true;
	var pauseButton = document.getElementById('pause');

	function pauseSlideshow() {
		pauseButton.innerHTML = 'Play';
		playing = false;
		clearInterval(slideInterval);
	}

	function playSlideshow() {
		pauseButton.innerHTML = 'pause';
		playing = true;
		slideInterval = setInterval(nextSlide,2000);
	}

	pauseButton.onclick = function() {
		if(playing) {
		pauseSlideshow();
	  } else {
		playSlideshow();
	  }
	};
	
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
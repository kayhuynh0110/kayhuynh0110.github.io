/*=============== Highlight Major ===============*/ 
var typed = new Typed(".text", {
	strings: ["CS Master's Student at UT Austin","A Software Engineer", "A Cybersecurity Engineer"],
	typeSpeed: 90,
	backSpeed: 90,
	backDelay: 1000,
	loop: true
});

/*=============== SHOW bar skills  ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 100 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 100 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


document.querySelectorAll('.skills-content .progress .bar span').forEach(bar => {
    bar.addEventListener('animationend', () => {
        bar.style.animation = 'none'; // Reset animation
        bar.offsetHeight; // Trigger reflow
        bar.style.animation = ''; // Restart animation
    });
});

/*=============== toggle icon navbar ===============*/ 
let menuIcon = document.querySelector('#menu-icon');
let container = document.querySelector('.container');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('fa-x');
	container.classList.toggle('active');
}

/*=============== bar selection active link  ===============*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec =>{
		let top = window.scrollY;
		let offset = sec.offsetTop -150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height){
			navLinks. forEach(links =>{
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};
	});

	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY>100);

	menuIcon.classList.remove('fa-x');
	container.classList.remove('active');
};


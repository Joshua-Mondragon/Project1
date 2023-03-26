const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		const section = document.querySelector(link.hash);
		section.scrollIntoView({ behavior: 'smooth' });
	});
});

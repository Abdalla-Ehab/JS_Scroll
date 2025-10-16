document.getElementById('about-button').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('About section not found! Make sure it has an ID of "about".');
    }
});
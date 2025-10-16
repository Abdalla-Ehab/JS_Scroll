document.getElementById('home-button').addEventListener('click', function() {
    const targetSection = document.getElementById('home');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with ID "home" not found!');
    }
});

document.getElementById('about-button').addEventListener('click', function() {
    const targetSection = document.getElementById('about');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with ID "about" not found!');
    }
});

document.getElementById('services-button').addEventListener('click', function() {
    const targetSection = document.getElementById('services');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with ID "services" not found!');
    }
});

document.getElementById('gallery-button').addEventListener('click', function() {
    const targetSection = document.getElementById('gallery');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with ID "gallery" not found!');
    }
});

document.getElementById('blog-button').addEventListener('click', function() {
    const targetSection = document.getElementById('blog');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with ID "blog" not found!');
    }
});

document.getElementById('contactUs-button').addEventListener('click', function() {
    const targetSection = document.getElementById('contactUs');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section with ID "contactUs" not found!');
    }
});
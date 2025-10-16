const navButtons = [
    { buttonId: 'home-button', targetId: 'home' },
    { buttonId: 'about-button', targetId: 'about' },
    { buttonId: 'services-button', targetId: 'services' },
    { buttonId: 'gallery-button', targetId: 'gallery' },
    { buttonId: 'blog-button', targetId: 'blog' },
    { buttonId: 'contactUs-button', targetId: 'contactUs' }
];

function setupNavButtons() {
    navButtons.forEach(button => {
        const btnElement = document.getElementById(button.buttonId);
        if (btnElement) {
            btnElement.addEventListener('click', function() {
                const targetSection = document.getElementById(button.targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`Section with ID "${button.targetId}" not found!`);
                }
            });
        } else {
            console.error(`Button with ID "${button.buttonId}" not found!`);
        }
    });
}

// Call the function to set up the buttons when the page loads
document.addEventListener('DOMContentLoaded', setupNavButtons);

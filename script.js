// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields');
        return;
    }

    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    
    // Reset the form
    e.target.reset();
});

// Add subtle animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Fade in sections on scroll
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Optional: Add a simple dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

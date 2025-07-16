document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('Particles.js loaded');
    });

    // Load projects from JSON
    fetch('js/projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectsGrid = document.getElementById('projects-grid');
            
            projects.forEach(project => {
                const projectCard = `
                    <div class="col-lg-4 col-md-6 mb-4 project-card" data-category="${project.category}">
                        <div class="card h-100">
                            <img src="${project.image}" class="card-img-top" alt="${project.title}">
                            <div class="card-body">
                                <h5 class="card-title">${project.title}</h5>
                                <p class="card-text">${project.description}</p>
                                <div class="tags mb-3">
                                    ${project.tags.map(tag => `<span class="badge bg-light text-dark">${tag}</span>`).join('')}
                                </div>
                                <a href="${project.link}" class="btn btn-success" target="_blank">View Project</a>
                            </div>
                        </div>
                    </div>
                `;
                projectsGrid.innerHTML += projectCard;
            });

            // Filter projects
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filterValue = button.getAttribute('data-filter');
                    const projectCards = document.querySelectorAll('.project-card');
                    
                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const skillLevel = bar.style.getPropertyValue('--skill-level');
            gsap.to(bar, {
                scaleX: skillLevel,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });
    };

    animateSkillBars();

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9);';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});


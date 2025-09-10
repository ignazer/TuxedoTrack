// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(30, 64, 175, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    
                    // Remove error styling after user starts typing
                    field.addEventListener('input', function() {
                        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    });
                } else {
                    field.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Por favor, complete todos los campos requeridos.');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Note: Form will be submitted to Formspree
            // You can add additional handling here if needed
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and stat items
    const animatedElements = document.querySelectorAll('.service-card, .stat-item, .feature-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add floating animation to service icons
    const serviceIcons = document.querySelectorAll('.service-icon i');
    
    serviceIcons.forEach((icon, index) => {
        icon.style.animation = `float 6s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.5}s`;
    });

    // Contact form field focus effects
    const formFields = document.querySelectorAll('.form-control, .form-select');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(30, 64, 175, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    if (cursorElement) {
        cursorElement.style.left = e.clientX - 10 + 'px';
        cursorElement.style.top = e.clientY - 10 + 'px';
    }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .stat-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.transform = 'scale(2)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.transform = 'scale(1)';
            }
        });
    });
});

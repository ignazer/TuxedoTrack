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
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // GitHub Issues Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                ciudad: document.getElementById('ciudad').value,
                servicio: document.getElementById('servicio').value,
                mensaje: document.getElementById('mensaje').value
            };
            
            // Validate required fields
            if (!formData.nombre || !formData.email || !formData.telefono || !formData.ciudad || !formData.servicio || !formData.mensaje) {
                showFormMessage('Por favor, complete todos los campos requeridos.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            showFormMessage('Enviando solicitud de reunión...', 'loading');
            
            try {
                await submitToGitHubIssues(formData);
                showFormMessage('¡Solicitud enviada correctamente! Te contactaremos pronto para coordinar la reunión.', 'success');
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting form:', error);
                showFormMessage('Error al enviar la solicitud. Por favor, inténtalo de nuevo.', 'error');
            }
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }
    
    // Function to show form messages
    function showFormMessage(message, type) {
        const messageEl = document.getElementById('formMessage');
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';
        
        // Hide message after 5 seconds for non-success messages
        if (type !== 'success') {
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 5000);
        }
    }
    
    // Function to submit to GitHub Issues
    async function submitToGitHubIssues(formData) {
        // GitHub repository configuration
        // Use external config if available, otherwise fallback to defaults
        const config = window.TuxedoConfig || {
            github: {
                owner: 'ignazer',
                repo: 'TuxedoTrack', 
                token: 'YOUR_GITHUB_TOKEN' // Must be configured
            }
        };
        
        const GITHUB_OWNER = config.github.owner;
        const GITHUB_REPO = config.github.repo;
        const GITHUB_TOKEN = config.github.token;
        
        if (GITHUB_TOKEN === 'YOUR_GITHUB_TOKEN') {
            throw new Error('GitHub token not configured. Please check SETUP-FORM.md');
        }
        
        // Create issue title and body
        const issueTitle = `Nueva Solicitud de Reunión - ${formData.servicio}`;
        const issueBody = `
## Nueva Solicitud de Reunión

**Nombre:** ${formData.nombre}
**Email:** ${formData.email}
**Teléfono:** ${formData.telefono}
**Ciudad:** ${formData.ciudad}
**Tipo de Consulta:** ${formData.servicio}

**Mensaje:**
${formData.mensaje}

---
**Fecha:** ${new Date().toLocaleString('es-CL')}
**IP:** ${await getUserIP()}
        `.trim();
        
        // GitHub Issues API endpoint
        const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: issueTitle,
                body: issueBody,
                labels: ['contact-form', 'nueva-solicitud']
            })
        });
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        return await response.json();
    }
    
    // Function to get user IP (for basic logging)
    async function getUserIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip || 'Unknown';
        } catch (error) {
            return 'Unknown';
        }
    }

    // Elements are visible by default, no scroll animations

    // Hero title is displayed normally without typing effect

    // Service icons have normal display, no floating animation

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

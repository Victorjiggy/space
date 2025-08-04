        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 300;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 2;
                
                // Random animation duration
                const duration = 5 + Math.random() * 10;
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.setProperty('--duration', `${duration}s`);
                
                starsContainer.appendChild(star);
            }
        }

        // Page navigation
        function setupNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navLinks');
            
            // Show initial page
            showPage('home');
            
            // Add click event to nav links
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = link.getAttribute('data-page');
                    showPage(pageId);
                    
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            });
            
            // Hamburger menu toggle
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Footer links navigation
            const footerLinks = document.querySelectorAll('.footer-column a[data-page]');
            footerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = link.getAttribute('data-page');
                    showPage(pageId);
                });
            });
        }
        
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            const activePage = document.getElementById(pageId);
            if (activePage) {
                activePage.classList.add('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Modal functionality
        function setupModals() {
            const modalTriggers = document.querySelectorAll('[data-modal]');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.close-modal');
            
            // Open modal when clicking on grid item
            modalTriggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    // Don't open modal if clicking on the button inside
                    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                        return;
                    }
                    
                    const modalId = trigger.getAttribute('data-modal') + '-modal';
                    const modal = document.getElementById(modalId);
                    
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                });
            });
            
            // Close modal when clicking on close button
            closeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modal = button.closest('.modal');
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close modal when clicking outside content
            modals.forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    modals.forEach(modal => {
                        if (modal.classList.contains('active')) {
                            modal.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    });
                }
            });
        }

        // Form submission
        function setupForm() {
            const contactForm = document.getElementById('contactForm');
            
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // Here you would typically send the form data to a server
                    console.log('Form submitted:', { name, email, subject, message });
                    
                    // Show success message
                    alert('Thank you for your message! We will get back to you soon.');
                    
                    // Reset form
                    contactForm.reset();
                });
            }
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            setupNavigation();
            setupModals();
            setupForm();
        });

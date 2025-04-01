/**
 * Aryan Techie - Professional Portfolio
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const config = {
        enableAnimations: true
        // Theme-related config removed
    };
    
    // Element references
    const elements = {
        body: document.documentElement,
        // themeToggle reference removed
        notification: document.getElementById('notification'),
        card: document.querySelector('.card'),
        socialLinks: document.querySelectorAll('.social-link')
    };
    
    // Initialize application
    // initTheme() removed
    initAnimations();
    addEventListeners();
    
    /**
     * Animations and visual effects
     */
    function initAnimations() {
        if (!config.enableAnimations) return;
        
        // Add subtle animation to logo text
        const logoLink = document.querySelector('.logo-link');
        if (logoLink) {
            const logoText = logoLink.querySelector('.logo-text');
            const accentText = logoLink.querySelector('.logo-accent');
            
            if (logoText && accentText) {
                // Slightly animate the accent text for emphasis
                accentText.style.opacity = '0';
                accentText.style.transform = 'translateY(5px)';
                
                setTimeout(() => {
                    accentText.style.transition = 'all 800ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                    accentText.style.opacity = '1';
                    accentText.style.transform = 'translateY(0)';
                }, 300);
            }
        }
        
        // Add improved entrance animation for social links
        elements.socialLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px) scale(0.95)';
            
            setTimeout(() => {
                link.style.transition = 'all 600ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0) scale(1)';
            }, 200 + (index * 80));
        });
        
        // Add staggered entry animation for social icons
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach((icon, index) => {
            icon.style.opacity = '0';
            icon.style.transform = 'translateY(15px) scale(0.8)';
            
            setTimeout(() => {
                icon.style.transition = 'all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                icon.style.opacity = '1';
                icon.style.transform = 'translateY(0) scale(1)';
            }, 100 + (index * 80));
        });
        
        // Add subtle pulse animation to social icons
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transition = 'all 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                
                const svg = this.querySelector('svg');
                if (svg) {
                    svg.style.transition = 'all 350ms cubic-bezier(0.34, 1.56, 0.64, 1)';
                }
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transition = 'all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                
                const svg = this.querySelector('svg');
                if (svg) {
                    svg.style.transition = 'all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                }
            });
        });
        
        // Modern hover effect for social buttons
        const allSocialLinks = document.querySelectorAll('.social-link');
        allSocialLinks.forEach(link => {
            // Create magnetic effect
            link.addEventListener('mousemove', function(e) {
                const rect = link.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate distance from center (0 to 1)
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Smaller tilt for a more subtle effect
                const tiltAmount = 3;
                const moveAmount = 2;
                
                link.style.transform = `perspective(800px) 
                                        rotateX(${-(y - centerY) / centerY * tiltAmount}deg) 
                                        rotateY(${(x - centerX) / centerX * tiltAmount}deg) 
                                        translateZ(5px)`;
                
                // Subtle icon movement to follow cursor
                const icon = link.querySelector('svg');
                if (icon) {
                    icon.style.transform = `translate(${(x - centerX) / centerX * moveAmount}px, 
                                                     ${(y - centerY) / centerY * moveAmount}px)`;
                }
            });
            
            // Smooth reset on mouse leave
            link.addEventListener('mouseleave', function() {
                link.style.transition = 'all 400ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                link.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
                
                const icon = link.querySelector('svg');
                if (icon) {
                    icon.style.transition = 'all 400ms cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                    icon.style.transform = '';
                }
                
                // Reset transitions after animation completes
                setTimeout(() => {
                    link.style.transition = '';
                    if (icon) icon.style.transition = '';
                }, 400);
            });
        });
        
        // Add shimmer effect to contact button on hover
        const contactButton = document.querySelector('.contact-button');
        if (contactButton) {
            contactButton.addEventListener('mouseenter', function() {
                contactButton.classList.add('button-hover');
            });
            
            contactButton.addEventListener('mouseleave', function() {
                contactButton.classList.remove('button-hover');
            });
        }
        
        if (elements.card) {
            elements.card.addEventListener('mouseenter', function() {
                elements.card.classList.add('card-hover');
            });
            
            elements.card.addEventListener('mouseleave', function() {
                elements.card.classList.remove('card-hover');
            });
        }
    }
    
    /**
     * Event listeners
     */
    function addEventListeners() {
        // Theme toggle event listener removed
        
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('user-is-tabbing');
            }
        });
        
        window.addEventListener('mousedown', function() {
            document.body.classList.remove('user-is-tabbing');
        });
    }
    
    /**
     * Notification system
     */
    function showNotification(message, duration = 3000) {
        if (!elements.notification) return;
        
        elements.notification.textContent = message;
        elements.notification.classList.add('show');
        
        setTimeout(() => {
            elements.notification.classList.remove('show');
        }, duration);
    }
    
    // Console signature
    console.log('%cAryan Techie Portfolio', 'color: #6342ff; font-size: 14px; font-weight: bold;');
    console.log('Portfolio site initialized successfully.');
});

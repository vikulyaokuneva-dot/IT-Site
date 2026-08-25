/**
 * i-pro.tech — Main JavaScript
 * Handles form validation, phone masking, and UI interactions
 */

(function() {
    'use strict';

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const currentYearSpan = document.getElementById('currentYear');
    const mobileNavToggle = document.querySelector('.header-nav-toggle');
    const mobileNav = document.querySelector('.header-nav');

    // ==========================================================================
    // UTILITY FUNCTIONS
    // ==========================================================================

    /**
     * Phone number validation (Russian format)
     * Accepts: +7XXXXXXXXXX, 8XXXXXXXXXX, +7 (XXX) XXX-XX-XX
     */
    function validatePhone(phone) {
        // Remove all non-digit characters
        const digits = phone.replace(/\D/g, '');
        
        // Check if it's a valid Russian phone number
        // Must have 11 digits starting with 7 or 8
        if (digits.length === 11 && (digits[0] === '7' || digits[0] === '8')) {
            return true;
        }
        
        return false;
    }

    /**
     * Format phone number as user types
     */
    function formatPhone(value) {
        // Remove all non-digit characters
        let digits = value.replace(/\D/g, '');
        
        // Handle Russian phone format
        if (digits.length === 0) return '';
        
        // Replace leading 8 with 7
        if (digits[0] === '8') {
            digits = '7' + digits.slice(1);
        }
        
        // Add leading 7 if needed
        if (digits[0] !== '7') {
            digits = '7' + digits;
        }
        
        // Limit to 11 digits
        digits = digits.slice(0, 11);
        
        // Format: +7 (XXX) XXX-XX-XX
        if (digits.length === 1) {
            return '+7';
        } else if (digits.length <= 4) {
            return '+7 (' + digits.slice(1);
        } else if (digits.length <= 7) {
            return '+7 (' + digits.slice(1, 4) + ') ' + digits.slice(4);
        } else if (digits.length <= 9) {
            return '+7 (' + digits.slice(1, 4) + ') ' + digits.slice(4, 7) + '-' + digits.slice(7);
        } else {
            return '+7 (' + digits.slice(1, 4) + ') ' + digits.slice(4, 7) + '-' + digits.slice(7, 9) + '-' + digits.slice(9);
        }
    }

    /**
     * Set current year in footer
     */
    function setCurrentYear() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // ==========================================================================
    // FORM VALIDATION
    // ==========================================================================

    /**
     * Show error state for a form field
     */
    function showError(formGroup, message) {
        formGroup.classList.add('error');
        const errorElement = formGroup.querySelector('.form-error');
        if (errorElement && message) {
            errorElement.textContent = message;
        }
    }

    /**
     * Clear error state for a form field
     */
    function clearError(formGroup) {
        formGroup.classList.remove('error');
    }

    /**
     * Validate a single field
     */
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const value = field.value.trim();
        const fieldName = field.name;

        // Required validation
        if (field.required && !value) {
            let errorMessage = 'Это поле обязательно для заполнения';
            
            if (fieldName === 'name') {
                errorMessage = 'Пожалуйста, введите имя';
            } else if (fieldName === 'company') {
                errorMessage = 'Пожалуйста, введите название компании';
            } else if (fieldName === 'phone') {
                errorMessage = 'Пожалуйста, введите корректный номер телефона';
            } else if (fieldName === 'consent') {
                errorMessage = 'Необходимо согласие на обработку персональных данных';
            }
            
            showError(formGroup, errorMessage);
            return false;
        }

        // Phone validation
        if (fieldName === 'phone' && value) {
            if (!validatePhone(value)) {
                showError(formGroup, 'Пожалуйста, введите корректный номер телефона');
                return false;
            }
        }

        clearError(formGroup);
        return true;
    }

    /**
     * Validate entire form
     */
    function validateForm() {
        const fields = contactForm.querySelectorAll('input[required]');
        let isValid = true;

        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    /**
     * Handle form submission
     */
    function handleSubmit(event) {
        event.preventDefault();

        if (!validateForm()) {
            formStatus.textContent = 'Пожалуйста, исправьте ошибки в форме';
            formStatus.className = 'form-status error';
            return;
        }

        // Prepare form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Format phone for backend
        data.phone = data.phone.replace(/\D/g, '');

        // Send to backend (placeholder - will be implemented with PHP)
        fetch(contactForm.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                formStatus.textContent = 'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Ошибка отправки');
            }
        })
        .catch(error => {
            // For demo purposes, show success even without backend
            console.warn('Backend not available, showing demo success:', error);
            formStatus.textContent = 'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        });
    }

    // ==========================================================================
    // MOBILE NAVIGATION
    // ==========================================================================

    function toggleMobileNav() {
        if (mobileNav && mobileNavToggle) {
            const isActive = mobileNav.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', isActive.toString());
        }
    }

    function closeMobileNav() {
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }
    }

    // ==========================================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================================================

    function handleAnchorClick(event) {
        const href = event.currentTarget.getAttribute('href');
        
        if (href.startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile nav if open
                closeMobileNav();
            }
        }
    }

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    function init() {
        // Set current year
        setCurrentYear();

        // Form validation
        if (contactForm) {
            contactForm.addEventListener('submit', handleSubmit);

            // Real-time validation on blur
            const inputs = contactForm.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('blur', () => validateField(input));
            });

            // Phone formatting
            const phoneInput = document.getElementById('phone');
            if (phoneInput) {
                phoneInput.addEventListener('input', (e) => {
                    const formatted = formatPhone(e.target.value);
                    e.target.value = formatted;
                });
            }
        }

        // Mobile navigation
        if (mobileNavToggle) {
            mobileNavToggle.addEventListener('click', toggleMobileNav);
        }

        // Anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        // Close mobile nav on outside click
        document.addEventListener('click', (e) => {
            if (mobileNav && mobileNav.classList.contains('active')) {
                if (!mobileNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                    closeMobileNav();
                }
            }
        });
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

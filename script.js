/* ============================================
   SMOOTH SCROLLING
   ============================================ */

   const navLinks = document.querySelectorAll('#navbar a'); 

   navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
   })


   /* ============================================
      CONTACT FORM HANDLING
      ============================================ */

      const contactForm = document.querySelector('.contact-form');

      if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = contactForm.querySelector('input[name="name"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const messageInput = contactForm.querySelector('textarea[name="message"]');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

                if (name === '' || email === '' || message === '') {
                    alert('Please fill in all fields before sending.');
                    return;
                }

                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(email)) {
                        alert('Please enter a valid email  address.');
                        return;
                    }

                    alert(`Thank you, ${name} ! Your message has been received. I will get back to you soon.`);

                    contactForm.reset();
            
        })
      }

   /* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

const menuToggle = document.querySelector('.menu-toggle');
const navLinksMenu = document.querySelector('.nav-links');

if (menuToggle && navLinksMenu) {
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navLinksMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const allNavLinks = navLinksMenu.querySelectorAll('a');
  allNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navLinksMenu.classList.remove('active');
    });
  });
}
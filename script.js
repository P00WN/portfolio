// script.js

// DOM Elements auswählen
const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// AOS Animation initialisieren
AOS.init({
  duration: 800,
  easing: 'ease',
  once: true,
  offset: 100
});

// Mobile Navigation Toggle
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

// Navigation Links Smooth Scroll
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.remove('active');
    burger.classList.remove('active');
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Sticky Header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
  
  // Scroll to Top Button
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('active');
  } else {
    scrollToTopBtn.classList.remove('active');
  }
});

// Scroll to Top Button Click
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Projekt Filter
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.dataset.filter;
    
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.dataset.category === filterValue) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Typewriter Effekt für die Hauptüberschrift
const typeWriter = document.querySelector('.typewriter');
if (typeWriter) {
  const text = typeWriter.innerHTML;
  typeWriter.innerHTML = '';
  
  let i = 0;
  const speed = 100; // Geschwindigkeit der Typen-Animation
  
  function type() {
    if (i < text.length) {
      typeWriter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  // Starten der Typen-Animation nach einer kurzen Verzögerung
  setTimeout(type, 1000);
}

// Kontaktformular absenden
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Beispiel für das Senden von E-Mails mit Email.js
  // Sie müssen Email.js einrichten: https://www.emailjs.com/
  // Ersetzen Sie diese Werte durch Ihre eigenen
  const serviceID = 'service_u3q7kas';
  const templateID = 'template_ya0vsww';
  const userID = 'hbk9niBaDHluDz-c0';
  
  const templateParams = {
    from_name: name,
    reply_to: email,
    subject: subject,
    message: message
  };
  
  // Wenn Sie Email.js eingerichtet haben, können Sie diese Zeilen auskommentieren
  
  emailjs.send(serviceID, templateID, templateParams, userID)
    .then(function(response) {
      alert('Nachricht erfolgreich gesendet!');
      contactForm.reset();
    }, function(error) {
      alert('Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    });
  
  
  // Vorläufige Nachricht (ersetzen Sie diese durch tatsächliche E-Mail-Funktionalität)
  alert('Vielen Dank für Ihre Nachricht, ' + name + '! In einer echten Website würde diese E-Mail jetzt gesendet werden.');
  contactForm.reset();
});

// Skills Animation
const skillLevels = document.querySelectorAll('.skill-level');

const animateSkills = () => {
  skillLevels.forEach(level => {
    const width = level.style.width;
    level.style.width = '0%';
    
    setTimeout(() => {
      level.style.width = width;
    }, 200);
  });
};

// Animate skills when they come into view
const skillsSection = document.getElementById('skills');

if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(skillsSection);
}

// Zufällige Animation des Hintergrunds im Hero-Bereich
const shape = document.querySelector('.shape');
if (shape) {
  setInterval(() => {
    const randomDeg = Math.floor(Math.random() * 360);
    shape.style.transform = `rotate(${randomDeg}deg)`;
  }, 5000);
}
  
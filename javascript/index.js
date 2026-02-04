// Smooth scroll para navegação
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll para destaque
  const scrollButton = document.querySelector('.hero-scroll');
  if (scrollButton) {
    scrollButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      const nextSection = document.querySelector('.destaques-section');
      if (nextSection) {
        window.scrollTo({
          top: nextSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Animação de entrada dos cards ao scroll
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
  
  // Aplica animação aos elementos
  const animatedElements = document.querySelectorAll('.destaque-card, .catalogo-card, .testemunho-card');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
  });
  
  // Fix para navegação mobile
  const menuLinks = document.querySelectorAll('.menu-principal a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Fecha menu mobile se existir (para futura implementação)
      const menu = document.querySelector('.menu-principal');
      if (window.innerWidth <= 768) {
        // Aqui pode adicionar lógica para menu hamburguer se necessário
      }
    });
  });
  
  // Atualiza ano do copyright
  const copyrightElement = document.getElementById('footer-copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `© ${currentYear} Todos os direitos reservados`;
  }
});
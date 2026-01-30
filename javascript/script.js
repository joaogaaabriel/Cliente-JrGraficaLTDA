// Adicione este script antes do fechamento da tag </body>
document.addEventListener('DOMContentLoaded', function() {
  const radios = document.querySelectorAll('input[name="radio-btn"]');
  const autoNavigation = document.querySelector('.navigation-auto');
  const manualButtons = document.querySelectorAll('.manual-btn');
  let currentSlide = 0;
  let slideInterval;
  
  // Inicializar o primeiro slide como ativo
  radios[0].checked = true;
  
  // Configurar navegação automática
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % radios.length;
      radios[currentSlide].checked = true;
      updateActiveIndicator();
    }, 4000);
  }
  
  // Atualizar indicador ativo
  function updateActiveIndicator() {
    manualButtons.forEach((btn, index) => {
      if(index === currentSlide) {
        btn.style.backgroundColor = 'white';
        btn.style.transform = 'scale(1.2)';
      } else {
        btn.style.backgroundColor = 'transparent';
        btn.style.transform = 'scale(1)';
      }
    });
  }
  
  // Configurar eventos de clique nos botões manuais
  manualButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentSlide = index;
      radios[currentSlide].checked = true;
      updateActiveIndicator();
      resetAutoSlide();
    });
  });
  
  // Configurar eventos nos radio buttons
  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      if(radio.checked) {
        currentSlide = index;
        updateActiveIndicator();
        resetAutoSlide();
      }
    });
  });
  
  // Reiniciar o slider automático
  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }
  
  // Pausar autoplay ao passar o mouse
  const slider = document.querySelector('.slider');
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
    startAutoSlide();
  });
  
  // Inicializar
  updateActiveIndicator();
  startAutoSlide();
});
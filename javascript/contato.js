// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqButtons = document.querySelectorAll('.faq-pergunta');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Toggle active class
      this.classList.toggle('active');
      
      // Toggle answer visibility
      const answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
      
      // Close other FAQ items (optional)
      faqButtons.forEach(otherButton => {
        if (otherButton !== this) {
          otherButton.classList.remove('active');
          const otherAnswer = otherButton.nextElementSibling;
          otherAnswer.style.maxHeight = null;
        }
      });
    });
  });
  
  // Open first FAQ by default (optional)
  // faqButtons[0].click();
});
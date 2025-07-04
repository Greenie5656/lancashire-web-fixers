export const scrollToForm = () => {
  const formElement = document.getElementById('enquiry-form');
  if (formElement) {
    formElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
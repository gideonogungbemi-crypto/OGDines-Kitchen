// Sample order functionality (basic example)
document.addEventListener('DOMContentLoaded', () => {
  const orderButtons = document.querySelectorAll('.order-btn');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const itemName = button.getAttribute('data-item');
      alert(`You have ordered: ${itemName}`);
      // Here you can extend this to send to a server or store in local storage
    });
  });
});

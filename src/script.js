
const modal = document.getElementById('contactModal');
const backdrop = document.getElementById('modalBackdrop');
const content = document.getElementById('modalContent');
const openBtn = document.getElementById('openContactBtn');
const closeBtn = document.getElementById('closeContactBtn');
// Function to Open Modal
openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  // Small timeout to allow the 'hidden' removal to register before animating opacity
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    content.classList.remove('scale-90', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
  }, 10);
});
// Function to Close Modal
const closeModal = () => {
  backdrop.classList.add('opacity-0');
  content.classList.remove('scale-100', 'opacity-100');
  content.classList.add('scale-90', 'opacity-0');
  
  // Wait for animation to finish before hiding div
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
};
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal); // Close when clicking outside
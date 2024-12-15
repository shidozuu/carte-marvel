
const toggleButton = document.getElementById('toggle-dark-mode');
let page= document.querySelector("body")
console.log(toggleButton)

toggleButton.addEventListener('click', () => {
page.classList.toggle("nwaar")


  if (page.classList.contains('nwaar')) {
    toggleButton.textContent = 'Désactiver le mode sombre';
  } else {
    toggleButton.textContent = 'Activer le mode sombre';
  }
});
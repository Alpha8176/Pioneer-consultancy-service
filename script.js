function showAlert() {
  alert("Welcome to Pioneer Consultancy Service! Let's find your perfect property.");
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for contacting us! We'll get back to you shortly.");
}

document.getElementById('menuToggle').onclick = function() {
  var menu = document.getElementById('menuDropdown');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};

// Optional: Close menu when clicking outside
window.onclick = function(event) {
  var menu = document.getElementById('menuDropdown');
  if (!event.target.matches('#menuToggle')) {
    if (menu && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
  }
};
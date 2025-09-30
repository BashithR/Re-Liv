// Select the menu toggle button and navigation menu

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Add event listener for click event on the menu button

menuToggle.addEventListener('click', function () {
  navigation.classList.toggle('active'); // Toggle the "active" class to show/hide menu
});

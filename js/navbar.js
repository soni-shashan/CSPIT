document.addEventListener("DOMContentLoaded", function() {
  // Function to load the navbar HTML
  function loadNavbar() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Enable click to toggle mega menus on mobile after the navbar is loaded
        document.querySelectorAll('.nav-item.position-static > a').forEach(function(element){
          element.addEventListener('click', function(e){
            if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
              e.preventDefault();
              let megaMenu = this.nextElementSibling;
              if (megaMenu.style.display === "block") {
                megaMenu.style.display = "none";
              } else {
                megaMenu.style.display = "block";
              }
            }
          });
        });
      })
      .catch(error => console.error('Error loading navbar:', error));
  }

  // Initially load the navbar
  loadNavbar();

  // Add a resize event listener to reload the navbar when resizing to a different view
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      // Reload the navbar after resizing to ensure it's refreshed
      loadNavbar();
    }, 300); // Add a small delay to avoid multiple rapid reloads
  });
});

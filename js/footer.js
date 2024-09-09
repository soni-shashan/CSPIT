document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
      var carouselItems = document.querySelectorAll('.carousel-item');
      if (carouselItems.length <= 1) {
        // Hide carousel controls if there is only one item
        document.querySelector('.carousel-control-prev').style.display = 'none';
        document.querySelector('.carousel-control-next').style.display = 'none';
      }
  });
  
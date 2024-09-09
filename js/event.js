document.addEventListener("DOMContentLoaded", function() {
    const eventCount = document.querySelectorAll('.carousel-item .event-box').length;
    
    if (eventCount > 3) {
      $('#eventCarousel').carousel({
        interval: 3000, // Slide every 3 seconds
        cycle: true
      });
    } else {
      // If events are 3 or fewer, do not slide
      $('#eventCarousel').carousel({
        interval: false
      });
    }
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const viewportMetaTag = document.querySelector('meta[name="viewport"]');
  
    // Function to set viewport for desktop mode
    function setDesktopViewport() {
        if (viewportMetaTag) {
            viewportMetaTag.setAttribute('content', 'width=1024'); // Set to desired desktop width
        } else {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=1024'; // Set to desired desktop width
            document.head.appendChild(meta);
        }
    }
  
    // Adjust viewport on page load
    setDesktopViewport();
  
    // Optional: Adjust viewport on resize if needed
    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            setDesktopViewport();
        }
    });
  });
  
var images = document.querySelectorAll('.gallery');

images.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
        this.style.zIndex = '1';
    });

    card.addEventListener('click', function(event) {
        var img = this.querySelector('img')
        var link = document.createElement('a');
        link.href = img.src;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '0'; // Reset the z-index to 0 when mouse leaves
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close');

    // Open lightbox when an image is clicked
    document.querySelectorAll('[data-lightbox]').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxContent.src = img.src;
        });
    });

    // Close lightbox when the close button or background is clicked
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});


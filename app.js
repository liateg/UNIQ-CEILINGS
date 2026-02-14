document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-close">Close</div>
        <div class="lightbox-content"></div>
    `;
    document.body.appendChild(lightbox);

    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Sample project data (can be expanded)
    const projects = {
        'res-1': ['res1.jpg', 'res12.jpg', 'res13.jpg'],
        'res-2': ['res2.png', 'res22.png','res23.png'],
        'res-3': ['res-3.jpg'],
    };

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            const images = projects[projectId] || [];

            lightboxContent.innerHTML = '';

            if (images.length > 0) {
                images.forEach(imgSrc => {
                    const imgDiv = document.createElement('div');
                    imgDiv.className = 'lightbox-item';
                    imgDiv.innerHTML = `<img src="images/${imgSrc}" alt="Project View">`;
                    lightboxContent.appendChild(imgDiv);
                });
            } else {
                // If no images set, just show placeholders representing multiple views
                for (let i = 0; i < 3; i++) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'lightbox-item';
                    lightboxContent.appendChild(placeholder);
                }
            }

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

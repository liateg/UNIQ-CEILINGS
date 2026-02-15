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
        'res-3': ['res3.jpg', 'res32.jpg'],
        'res-4': ['res4.jpg', 'res42.jpg'],
        'res-5': ['res5.jpg','res52.jpg', 'res53.jpg'],
        'res-6': ['res6.jpg','res62.jpg', 'res63.jpg'],
        'res-7': ['res7.png','res72.jpg', 'res73.jpg'],
        'com-1': ['com11.jpg'],
        'com-2': ['com22.jpg', 'com23.jpg'],
        'pb-1': ['pb1.jpg'],
        'pb-2': ['pb2.jpg']
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

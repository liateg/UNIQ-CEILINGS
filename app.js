document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
        <div class="lightbox-close">Close</div>
        <div class="lightbox-content"></div>
    `;
  document.body.appendChild(lightbox);

  const lightboxContent = lightbox.querySelector(".lightbox-content");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  // Sample project data (can be expanded)
  const projects = {
    "res-1": ["res1.jpg", "res12.jpg", "res13.jpg"],
    "res-2": ["res2.png", "res22.png", "res23.png"],
    "res-3": ["res3.jpg", "res32.jpg", "res33.jpg"],
    "res-4": ["res41.jpg", "res42.jpg"],
    "res-5": ["res51.png", "res52.jpg", "res53.jpg"],
    "res-6": ["res6.jpg", "res62.jpg",'res63.jpg'],
    "res-7": ["res71.jpg"],
    "res-8": ["res81.jpg", "res82.jpg", "res83.jpg"],
    "res-9": ["videos/video_2026-02-15_19-12-08.mp4", "res93.jpg", "res94.jpg"],

    "com-1": ["com11.jpg"],
    "com-2": ["com22.jpg", "com23.jpg"],
    "ren-1": ["ren1.jpg", "ren12.jpg"],
    "ren-2": ["ren2.jpg", "ren22.jpg"],
    "pb-1": ["pb1.jpg"],
    "pb-2": ["pb2.jpg"],
  };

  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = item.getAttribute("data-project");
      const images = projects[projectId] || [];

      lightboxContent.innerHTML = "";

      if (images.length > 0) {
        images.forEach((src) => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "lightbox-item";

          const lower = src.toLowerCase();
          const isVideo =
            lower.endsWith(".mp4") ||
            lower.endsWith(".mov") ||
            lower.endsWith(".webm") ||
            lower.endsWith(".ogg");

          if (isVideo) {
            const videoSrc = src.includes("/") ? src : `videos/${src}`;
            itemDiv.innerHTML = `<video src="${videoSrc}" controls muted playsinline autoplay loop></video>`;
            // Constrain the 9th residential project's video so it matches image sizing
            if (projectId === "res-9") {
              itemDiv.classList.add("constrained-video");
            }
          } else {
            const imgSrc = src.includes("/") ? src : `images/${src}`;
            itemDiv.innerHTML = `<img src="${imgSrc}" alt="Project View">`;
          }

          lightboxContent.appendChild(itemDiv);
        });
      } else {
        // If no images set, just show placeholders representing multiple views
        for (let i = 0; i < 3; i++) {
          const placeholder = document.createElement("div");
          placeholder.className = "lightbox-item";
          lightboxContent.appendChild(placeholder);
        }
      }

      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

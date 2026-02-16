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
    "res-1": ["residential-stretch-ceiling-kids-room-miami-florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,Florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,FloridaOrlando,Florida.jpg"],
    "res-2": ["modern-residential-stretch-ceiling-led-living-room-miami-florida.png", "modern-residential-stretch-ceiling-led-living-room-miami-floridaTampa,Florida.png", "modern-residential-stretch-ceiling-led-living-room-Boca-Raton,Florida.png"],
    "res-3": ["modern-stretch-ceiling-integrated-led-lighting-miami-fl.jpg", "modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida.jpg", "modern-stretch-ceiling-integrated-led-lighting-Orlando,Florida.jpg"],
     "res-4": ["black-gloss-stretch-ceiling-staircase-design-tampa-fl.jpg", "black-gloss-stretch-ceiling-staircase-design-hollywood-fl.jpg"],
    "res-5": ["luxury-high-rise-stretch-ceiling-lighting-miami-beach.jpg", "ren22.jpg"],
    'res-6': ['black-gloss-stretch-ceiling-led-lighting-miami-residential.jpg', "geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-lauderdale.jpg", "geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-Boca-Raton,Florida.jpg",'vibrant-red-led-accent-stretch-ceiling-miami-nightlife.jpg', 'Geometric LED ceiling design in modern living room.png'],
    
    // "res-7": ["high-gloss-reflective-stretch-ceiling-Orlando,Florida.jpg", "high-gloss-reflective-stretch-ceiling-fort-lauderdale-home.jpg",'high-gloss-reflective-stretch-ceiling-fort-lauderdale-home2.jpg'],
    'res-7': ['modern-hallway-stretch-ceiling-lighting-hollywood-fl.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,Florida.jpg', 'modern-hallway-stretch-ceiling-lighting-hollywood-florida.jpg', 'modern-hallway-stretch-ceiling-lighting-hollywood-florida2.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,FloridaOrlando,Florida.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,FloridaOrlando,Florida1.jpg'],
   
    "res-8": ['videos/geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-lauderdale.MP4', 'concentric-led-tiered-stretch-ceiling-tampa-residential..jpg', 'concentric-led-tiered-stretch-ceiling-tampa-residential1.jpg'],
    "res-9": ["black-gloss-stretch-ceiling-hallway-lighting-tampa-fl.jpg", "black-gloss-stretch-ceiling-hallway-lighting-tampa-flOrlando,Florida.jpg",'black-gloss-stretch-ceiling-hallway-lighting-tampa-fl-Boca-Raton,Florida.jpg'],
    "res-10": ["modern-hallway-black-gloss-stretch-ceiling-miami-lighting.jpg",'modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg', "luxury-hallway-black-gloss-stretch-ceiling-miami-lighting.jpg"],
    "res-11": ["minimalist-stretch-ceiling-led-lighting-foyer-FortLauderdale,Florida.jpg", "minimalist-stretch-ceiling-led-lighting-foyer-hollywood-fl.jpg"],
    "res-12": ["videos/custom-entryway-stretch-ceiling-recessed-lighting-fort-lauderdale.mp4", "custom-entryway-stretch-ceiling-recessed-lighting-fort-lauderdale.jpg", "res94.jpg"],

    "com-1": ["com11.jpg"],
    "com-2": ["com22.jpg", "com23.jpg"],
    'ren-1': ['printed-nature-stretch-ceiling-orlando-residentialhollywood-fl.jpg','printed-nature-stretch-ceiling-orlando-residentialfort-lauderdale-fl.jpg', 'printed-nature-stretch-ceiling-orlando-residentialhollywood-fl.jpg'],
   'ren-2': ['luxury-bathroom-stretch-ceiling-lighting-fort-lauderdale.jpg', 'luxury-bathroom-stretch-ceiling-lighting-fort-lauderdalehollywood-florida.jpg','luxury-high-rise-stretch-ceiling-lighting-miami-beach2.jpg'],
   'ren-3': ['modern-minimalist-kitchen-stretch-ceiling-naples-fl.jpg', 'modern-stretch-ceiling-integrated-led-lighting-Orlando,Florida1.jpg', 'modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1.jpg'],
   'ren-4': ['minimalist-bedroom-stretch-ceiling-boca-raton-fl.jpg', 'minimalist-bedroom-stretch-ceiling-Orlando,Florida1.jpg', 'minimalist-bedroom-stretch-ceiling-boca-raton-florida.jpg'],
    'ren-5': ['modern-geometric-linear-stretch-ceiling-lighting-hollywood-fl.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-hollywood-florida.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-Tampa,Florida1.jpg','modern-geometric-linear-stretch-ceiling-lighting-Orlando,Florida1.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-hollywood-florida2.jpg'],
   'ren-6': ['luxury-staircase-linear-led-stretch-ceiling-miami.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl..jpg','open-concept-stretch-ceiling-linear-lighting-holywood.jpg','open-concept-stretch-ceiling-linear-lighting-south-florida.jpg'],
   'ren-9': ['videos/vibrant-red-led-accent-stretch-ceiling-miami-nightlife.MP4','vibrant-red-led-accent-stretch-ceiling-miami-nightlife.jpg', 'Geometric LED ceiling design in modern living room.png','videos/remote-controlled cilling-lights.mp4'],
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
            if (projectId === "res-12" || projectId === "ren-9" || projectId === "res-8") {
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

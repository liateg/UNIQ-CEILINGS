document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
        <div class="lightbox-close">&times;</div>
        <div class="lightbox-content"></div>
    `;
  document.body.appendChild(lightbox);

  const lightboxContent = lightbox.querySelector(".lightbox-content");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  // Sample project data (can be expanded)
  const projects = {
    "res-1": ["residential-stretch-ceiling-kids-room-miami-florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,Florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,FloridaOrlando,Florida.jpg"],
    'res-2': ['luxury-staircase-linear-led-stretch-ceiling-miami.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl..jpg','open-concept-stretch-ceiling-linear-lighting-holywood.jpg','open-concept-stretch-ceiling-linear-lighting-south-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida_.jpg'],
    'res-3': ['modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-south-florida.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-south-florida-miami.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-southflorida.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-florida.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-miami.jpg'],
    
   'res-4n': ['matte-stretch-ceiling-linear-led-modern-luxury-home-kitchen-fort-lauderdale-south-florida.webp','lines.webp','lines2.webp','lines3.webp','lines5.webp','lines6.webp','lines7.webp','lines8.webp','lines9.webp'],
   
   'res-4': ['modern-hallway-stretch-ceiling-lighting-hollywood-fl.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,Florida.jpg', 'modern-hallway-stretch-ceiling-lighting-hollywood-florida.jpg', 'modern-hallway-stretch-ceiling-lighting-hollywood-florida2.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,FloridaOrlando,Florida.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,FloridaOrlando,Florida1.jpg'],
    "res-5n": [ 'matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida1.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida2.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida3.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida4.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida5.webp'],
   'res-6n': ['matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida1.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida2.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida3.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida4.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida5.webp'],
   // 'res-6': ['black-gloss-stretch-ceiling-led-lighting-miami-residential.jpg', "geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-lauderdale.jpg", "geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-Boca-Raton,Florida.jpg",'vibrant-red-led-accent-stretch-ceiling-miami-nightlife.jpg', 'Geometric LED ceiling design in modern living room.png'],
   "res-5": [ 'concentric-led-tiered-stretch-ceiling-tampa-residential.jpg','concentric-led-tiered-stretch-ceiling-tampa-residential..jpg'],
    'res-6': ['high-gloss-black-stretch-ceiling-miami-residential-living-room.jpg', "modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg"],
   'res-8n': ['matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida1.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida2.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida3.webp'],
    // "res-7": ["high-gloss-reflective-stretch-ceiling-Orlando,Florida.jpg", "high-gloss-reflective-stretch-ceiling-fort-lauderdale-home.jpg",'high-gloss-reflective-stretch-ceiling-fort-lauderdale-home2.jpg'],
     "res-7": ["modern-ceiling-design-recessed-lighting-kitchen-inspiration-miami-florida.jpg"],
    "res-8": ['modern-organic-curve-stretch-ceiling-design-fort-lauderdale.jpg','matte-stretch-ceiling-geometric-led-luxury-condo-miami-bayfront-south-florida.jpg'],
    "res-9": ['stretch-ceiling-rendering-matte-geometric-led-design-aventura-south-florida.jpg','stretch-ceiling-rendering-matte-geometric-led-design-aventura-florida.jpg','stretch-ceiling-rendering-matte-geometric-led-design-aventura-south-fl.jpg'],
      "resg-1": ["modern-residential-stretch-ceiling-led-living-room-Boca-Raton,Florida.png", "modern-residential-stretch-ceiling-led-living-room-miami-floridaTampa,Florida.png", "luxury-high-rise-stretch-ceiling-lighting-miami-beach.jpg"],
     "resg-4": ["black-gloss-stretch-ceiling-hallway-lighting-tampa-fl.jpg", "black-gloss-stretch-ceiling-hallway-lighting-tampa-flOrlando,Florida.jpg"],
   "resg-3": ["high-gloss-stretch-ceiling-led-perimeter-lighting-boca-raton-south-florida.jpg",'high-gloss-stretch-ceiling-led-perimeter-lighting-boca-raton-south-florida-miami.jpg'],
   "resg-2": ["gloss-stretch-ceiling-circular-led-design-sunny-isles-beach-south-florida.jpg",'modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1h.jpg','gloss-stretch-ceiling-luxury-condo-living-dining-design-aventura-south-florida.jpg','black-gloss-stretch-ceiling-staircase-design-tampa-fl.jpg', 'concentric-led-tiered-stretch-ceiling-tampa-residential1.jpg'],
   "resg-5": ["modern-stretch-ceiling-integrated-led-lighting-miami-fl.jpg",'modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1.jpg', "modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida.jpg", "modern-stretch-ceiling-integrated-led-lighting-Orlando,Florida.jpg"],
   "resg-6":['high-gloss-mirrored-stretch-ceiling-miami-residential.jpg','high-gloss-mirrored-stretch-ceiling-miami-residential-florida.jpg'],
   "resg-7":["high-gloss-mirrored-stretch-ceiling-miami-residential-living-room.jpg","high-gloss-mirrored-stretch-ceiling-miami-residential-living-room-south-florida.png","high-gloss-mirrored-stretch-ceiling-miami-residential-living-room-miami.jpg"],
   "resg-8":["gloss-stretch-ceiling-rgb-linear-led-commercial-design-miami-florida.jpg",'gloss-stretch-ceiling-rgb-linear-led-commercial-design-miami.jpg'],
   "resg-9":['gloss-stretch-ceiling-perimeter-led-luxury-condo-living-room-miami-beach-south-florida.jpg','black-gloss-stretch-ceiling-star-lighting-led-condo-bedroom-brickell-miami-south-florida.jpg','gloss-stretch-ceiling-geometric-led-luxury-condo-kitchen-brickell-miami-south-florida.jpg'],
   'resc-1': ['high-gloss-black-stretch-ceiling-miami-residential-living-room.jpg', "modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg"],
    'resc-2': ['modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg','gloss-stretch-ceiling-perimeter-led-luxury-condo-living-room-miami-beach-south-florida.jpg'],
    'resc-3': ['black-gloss-stretch-ceiling-staircase-design-tampa-fl.jpg','black-gloss-stretch-ceiling-star-lighting-led-condo-bedroom-brickell-miami-south-florida.jpg'],
    'resc-4': ['matte-stretch-ceiling-geometric-led-luxury-condo-miami-bayfront-south-florida.jpg','gloss-stretch-ceiling-geometric-led-luxury-condo-kitchen-brickell-miami-south-florida.jpg','gloss-stretch-ceiling-luxury-condo-living-dining-design-aventura-south-florida.jpg'],
   
    'com-1':['commercial-gym-black-stretch-ceiling-lighting-miami.jpg','commercial-gym-black-stretch-ceiling-lighting-Florida-miami.jpg','commercial-gym-black-stretch-ceiling-lighting-florida.jpg','commercial-gym-black-stretch-ceiling-lighting-miami-florida.jpg','commercial-gym-black-stretch-ceiling-lighting-miami-south-florida.jpg','commercial-gym-black-stretch-ceiling-lighting-miami.jpg','commercial-gym-black-stretch-ceiling-lighting-miami-southflorida.jpg','commercial-gym-black-stretch-ceiling-lighting-miamiflorida.jpg'],
    "com-2": ["reflective-mirror-stretch-ceiling-aventura-condo-interior.jpg", "reflective-mirror-stretch-ceiling-aventura-condo-interior-south-florida.jpg",'reflective-mirror-stretch-ceiling-aventura-condo-interior-florida.jpg'],
    "com-3":  ["commercial-conference-room-backlit-stretch-ceiling-coral-gables.jpg", "commercial-conference-room-backlit-stretch-ceiling-coral-gables-florida.jpg"],
    "com-4": ["commercial-high-gloss-linear-led-ceiling-boca-raton.jpg", "commercial-high-gloss-linear-led-ceiling-boca-raton-miami.jpg"],
    "com-5": ["luxury-garage-black-mirror-stretch-ceiling-sunny-isles-beach.jpg", "luxury-garage-black-mirror-stretch-ceiling-sunny-isles-beach-florida.jpg",'luxury-garage-black-mirror-stretch-ceiling-sunny-isles-beach-miami.jpg'],
     "com-6": ["commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale.jpg",'commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-florida-holywood..jpg','commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-florida-holywood.jpg','commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-florida.jpg','commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-south-florida.jpg','commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-florida-miami.jpg'],
   
    'ren-1': ['printed-nature-stretch-ceiling-orlando-residentialhollywood-fl.jpg','printed-nature-stretch-ceiling-orlando-residentialfort-lauderdale-fl.jpg', 'printed-nature-stretch-ceiling-orlando-residentialhollywood-fl.jpg'],
   'ren-2': ['luxury-bathroom-stretch-ceiling-lighting-fort-lauderdale.jpg', 'luxury-bathroom-stretch-ceiling-lighting-fort-lauderdalehollywood-florida.jpg','luxury-high-rise-stretch-ceiling-lighting-miami-beach2.jpg'],
   'ren-3': ['modern-minimalist-kitchen-stretch-ceiling-naples-fl.jpg', 'modern-stretch-ceiling-integrated-led-lighting-Orlando,Florida1.jpg', 'modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1.jpg'],
   'ren-4': ['minimalist-bedroom-stretch-ceiling-boca-raton-fl.jpg', 'minimalist-bedroom-stretch-ceiling-Orlando,Florida1.jpg', 'minimalist-bedroom-stretch-ceiling-boca-raton-florida.jpg'],
    'ren-5': ['modern-geometric-linear-stretch-ceiling-lighting-hollywood-fl.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-hollywood-florida.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-Tampa,Florida1.jpg','modern-geometric-linear-stretch-ceiling-lighting-Orlando,Florida1.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-hollywood-florida2.jpg'],
   'ren-6': ['luxury-staircase-linear-led-stretch-ceiling-miami.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl..jpg','open-concept-stretch-ceiling-linear-lighting-holywood.jpg','open-concept-stretch-ceiling-linear-lighting-south-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida_.jpg'],
   'ren-7': ['free-3d-rendering-minimalist-loft-ceiling-orlando.jpg', 'free-3d-rendering-minimalist-loft-ceiling-orlando-southFlorida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-south-florida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami-south-florida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-south-florida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-florida.jpg'],
   "pb-1": ['custom-sky-stretch-ceiling-luxury-home-south-florida..jpg'],
    "pb-2": ["printed-sky-stretch-ceiling-residential-miami-florida.jpg"],
    'pb-3': ["backlit-printed-minimalist-loft-ceiling-orlando-florida.jpg",'backlit-printed-minimalist-loft-ceiling-orlando-southFlorida.jpg','backlit-printed-minimalist-loft-ceiling-orlando-miami.jpg'],
    'pb-4': ["printed-sky-stretch-ceiling-commercial-south-florida.jpg",'printed-sky-stretch-ceiling-commercial-florida-miami.jpg','printed-sky-stretch-ceiling-commercial-south-florida-miami.jpg'],
    'pb-5': ['videos/starry-sky-led-stretch-ceiling-luxury.mp4'],
    'pb-6': ['starry-sky-led-stretch-ceiling-luxury-pool-south-florida.jpg'],

  };

  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = item.getAttribute("data-project");
      const images = projects[projectId] || [];
      const mainImg = item.querySelector("img, video");
      const altText = mainImg ? (mainImg.alt || mainImg.getAttribute("aria-label") || "") : "";
      
      // Helper to generate SEO content dynamically
      const generateSEOContent = (id, alt) => {
        const cities = ["Miami", "Fort Lauderdale", "Hollywood", "Tampa", "Orlando", "Boca Raton", "West Palm Beach"];
        const city = cities.find(c => alt.includes(c)) || "South Florida";
        let type = alt.toLowerCase().includes("commercial") ? "Commercial" : "Residential";
        
        // Detect if it's a rendering project
        const isRendering = id.startsWith("ren-");
        
        // Clean up alt text for title
        let baseTitle = alt.split(".")[0].split("—")[0].split(";")[0].trim();
        
        // Construct a strong SEO title
        let title = baseTitle;
        
        // Ensure "Stretch Ceiling" is in the title
        if (!title.toLowerCase().includes("stretch ceiling")) {
          title = `${title} Stretch Ceiling`.trim();
        }

        // Add Rendering keyword if applicable
        if (isRendering && !title.toLowerCase().includes("rendering")) {
          title = `3D Rendering: ${title}`;
        }
        
        // Ensure city is in the title
        if (!title.includes(city) && city !== "South Florida") {
          title += ` — ${city}`;
        } else if (!title.includes("Florida") && !title.includes("FL")) {
          title += ` — ${city}`;
        }

        const description = `${alt}. We specialize in high-end, custom ${type.toLowerCase()} stretch ceilings ${isRendering ? "renderings and installations" : "installations"} across ${city} and the entire state of Florida. Our unique architectural solutions bring a modern, minimalist aesthetic to any space. We also offer free custom 3D renderings to help you visualize your project before installation.`;

        return { title, description };
      };

      const seo = generateSEOContent(projectId, altText);

      lightboxContent.innerHTML = `
        <div class="lightbox-gallery"></div>
        <div class="lightbox-info">
          <h3 class="lightbox-title">${seo.title}</h3>
          <p class="lightbox-description">${seo.description}</p>
        </div>
      `;

      const galleryContainer = lightboxContent.querySelector(".lightbox-gallery");

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
            if (projectId === "pb-5" || projectId === "res-8") {
              itemDiv.classList.add("constrained-video");
            }
          } else {
            const imgSrc = src.includes("/") ? src : `images/${src}`;
            itemDiv.innerHTML = `<img src="${imgSrc}" alt="Project View">`;
          }

          galleryContainer.appendChild(itemDiv);
        });
      } else {
        // If no images set, just show placeholders representing multiple views
        for (let i = 0; i < 3; i++) {
          const placeholder = document.createElement("div");
          placeholder.className = "lightbox-item";
          galleryContainer.appendChild(placeholder);
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

  // Menu Toggle Logic
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    // Close menu when clicking links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    });
  }
});

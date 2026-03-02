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
    
    "res-1n": ['matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida7.jpg','matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida3.jpg','matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida4.jpg','matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida5.jpg','matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida6.jpg','matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida7.jpg',"matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida.jpg",'matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida1.jpg','matte-stretch-ceiling-perimeter-led-modern-luxury-kitchen-miami-florida-south-florida2.jpg'],
    "res-1": ["residential-stretch-ceiling-kids-room-miami-florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,Florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,FloridaOrlando,Florida.jpg"],
    'res-2': ['luxury-staircase-linear-led-stretch-ceiling-miami.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl..jpg','open-concept-stretch-ceiling-linear-lighting-holywood.jpg','open-concept-stretch-ceiling-linear-lighting-south-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida_.jpg'],
    'res-3': ['modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-south-florida.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-south-florida-miami.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-southflorida.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-florida.jpg','modern-matte-stretch-ceiling-led-linear-design-fort-lauderdale-miami.jpg'],
    
   'res-4n': ['matte-stretch-ceiling-linear-led-modern-luxury-home-kitchen-fort-lauderdale-south-florida.webp','lines.webp','lines2.webp','lines3.webp','lines5.webp','lines6.webp','lines7.webp','lines8.webp','lines9.webp'],
   
   'res-4': ['modern-hallway-stretch-ceiling-lighting-hollywood-fl.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,Florida.jpg', 'modern-hallway-stretch-ceiling-lighting-hollywood-florida.jpg', 'modern-hallway-stretch-ceiling-lighting-hollywood-florida2.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,FloridaOrlando,Florida.jpg','modern-hallway-stretch-ceiling-lighting-Orlando,FloridaOrlando,Florida1.jpg'],
    "res-5n": [ 'matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida.webp','cover4.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida1.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida2.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida3.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida4.webp','matte-stretch-ceiling-linear-led-open-concept-luxury-home-miami-florida5.webp'],
   'res-6n': ['cover3.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida1.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida2.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida3.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida4.webp','matte-stretch-ceiling-geometric-led-design-modern-luxury-home-west-palm-beach-south-florida5.webp'],
   // 'res-6': ['black-gloss-stretch-ceiling-led-lighting-miami-residential.jpg', "geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-lauderdale.jpg", "geometric-black-gloss-stretch-ceiling-kitchen-lighting-fort-Boca-Raton,Florida.jpg",'vibrant-red-led-accent-stretch-ceiling-miami-nightlife.jpg', 'Geometric LED ceiling design in modern living room.png'],
   "res-5": [ 'concentric-led-tiered-stretch-ceiling-tampa-residential.jpg','concentric-led-tiered-stretch-ceiling-tampa-residential..jpg'],
    'res-6': ['high-gloss-black-stretch-ceiling-miami-residential-living-room.jpg', "modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg"],
   'res-7n':['matte-stretch-ceiling-perimeter-led-installation-modern-fireplace-miami-florida-south-florida.webp','matte-stretch-ceiling-perimeter-led-installation-modern-fireplace-miami-florida-south-florida1.webp','matte-stretch-ceiling-perimeter-led-installation-modern-fireplace-miami-florida-south-florida2.webp'],
    'res-8n': ['matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida0.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida1.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida2.webp','matte-stretch-ceiling-led-perimeter-lighting-modern-luxury-home-miami-beach-south-florida3.webp'],
    // "res-7": ["high-gloss-reflective-stretch-ceiling-Orlando,Florida.jpg", "high-gloss-reflective-stretch-ceiling-fort-lauderdale-home.jpg",'high-gloss-reflective-stretch-ceiling-fort-lauderdale-home2.jpg'],
    'res-10':['matte-stretch-ceiling-linear-led-luxury-condo-living-room-miami-beach-south-florida.webp','matte-stretch-ceiling-linear-led-luxury-condo-living-room-miami-beach-south-florida1.webp','matte-stretch-ceiling-linear-led-luxury-condo-living-room-miami-beach-south-florida2.webp'],
   
    'res-11': ['matte-stretch-ceiling-curved-led-luxury-living-room-coral-gables-south-florida.webp','matte-stretch-ceiling-curved-led-luxury-living-room-coral-gables-south-florida1.webp','matte-stretch-ceiling-curved-led-luxury-living-room-coral-gables-south-florida2.webp','matte-stretch-ceiling-curved-led-luxury-living-room-coral-gables-south-florida3.webp'],
    "res-7": ["modern-ceiling-design-recessed-lighting-kitchen-inspiration-miami-florida.jpg"],
    "res-8": ['modern-organic-curve-stretch-ceiling-design-fort-lauderdale.jpg','modern-organic-curve-stretch-ceiling-design-fort-lauderdale1.jpg','matte-stretch-ceiling-geometric-led-luxury-condo-miami-bayfront-south-florida.jpg'],
    "res-9": ['stretch-ceiling-rendering-matte-geometric-led-design-aventura-south-florida.jpg','stretch-ceiling-rendering-matte-geometric-led-design-aventura-florida.jpg','stretch-ceiling-rendering-matte-geometric-led-design-aventura-south-fl.jpg'],
     'res-12': ['matte-stretch-ceiling-linear-led-perimeter-lighting-modern-luxury-home-fort-lauderdale-south-florida.webp','matte-stretch-ceiling-linear-led-perimeter-lighting-modern-luxury-home-fort-lauderdale-south-florida1.webp','matte-stretch-ceiling-linear-led-perimeter-lighting-modern-luxury-home-fort-lauderdale-south-florida2.webp'],
   'res-13': ['matte-stretch-ceiling-linear-led-hallway-design-miami-florida-south-florida1.jpg','matte-stretch-ceiling-linear-led-hallway-design-miami-florida-south-florida2.jpg','matte-stretch-ceiling-linear-led-hallway-design-miami-florida-south-florida.jpg'],
   'res-11n': ['matte-stretch-ceiling-led-perimeter-lighting-luxury-game-room-boca-raton-south-florida.jpg'],
   
   "resg-1": ["modern-residential-stretch-ceiling-led-living-room-Boca-Raton,Florida.png", "modern-residential-stretch-ceiling-led-living-room-miami-floridaTampa,Florida.png", "luxury-high-rise-stretch-ceiling-lighting-miami-beach.jpg"],
   "resg-3n":["gloss-stretch-ceiling-rgb-linear-led-commercial-design-miami-florida.jpg",'gloss-stretch-ceiling-rgb-linear-led-commercial-design-miami.jpg','photo_1_2026-03-02_21-51-01.jpg','photo_2_2026-03-02_21-51-01.jpg'],
    
   "resg-4": ["black-gloss-stretch-ceiling-hallway-lighting-tampa-fl.jpg", "black-gloss-stretch-ceiling-hallway-lighting-tampa-flOrlando,Florida.jpg"],
   'resg-4n': ['gloss-stretch-ceiling-luxury-condo-living-dining-room-sunny-isles-beach-south-florida.jpg','gloss-stretch-ceiling-luxury-condo-living-dining-room-sunny-isles-beach-south-florida1.jpg','modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1h.jpg','gloss-stretch-ceiling-luxury-condo-living-dining-room-sunny-isles-beach-south-florida2.jpg','black-gloss-stretch-ceiling-staircase-design-tampa-fl.jpg', 'concentric-led-tiered-stretch-ceiling-tampa-residential1.jpg'],
     "resg-3": ["high-gloss-stretch-ceiling-led-perimeter-lighting-boca-raton-south-florida.jpg",'high-gloss-stretch-ceiling-led-perimeter-lighting-boca-raton-south-florida-miami.jpg'],
   "resg-2": ["gloss-stretch-ceiling-circular-led-design-sunny-isles-beach-south-florida.jpg",'img96.webp'],
   "resg-5": ["modern-stretch-ceiling-integrated-led-lighting-miami-fl.jpg", "modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida.jpg", "modern-stretch-ceiling-integrated-led-lighting-Orlando,Florida.jpg"],
   'resg-5n':['gloss-stretch-ceiling-led-perimeter-lighting-modern-luxury-kitchen-boca-raton-south-florida.webp','gloss-stretch-ceiling-led-perimeter-lighting-modern-luxury-kitchen-boca-raton-south-florida1.webp','gloss-stretch-ceiling-led-perimeter-lighting-modern-luxury-kitchen-boca-raton-south-florida2.webp'],
   "resg-6":['high-gloss-mirrored-stretch-ceiling-miami-residential.jpg','high-gloss-mirrored-stretch-ceiling-miami-residential-florida.jpg','img64.webp'],
   "resg-7":["high-gloss-mirrored-stretch-ceiling-miami-residential-living-room.jpg","high-gloss-mirrored-stretch-ceiling-miami-residential-living-room-south-florida.png","high-gloss-mirrored-stretch-ceiling-miami-residential-living-room-miami.jpg"],
   "resg-8":['glossyy1.webp','glossyy2.webp','glossyy3.webp','glossyy4.webp'],
   "resg-9":['gloss-stretch-ceiling-perimeter-led-luxury-condo-living-room-miami-beach-south-florida.jpg','black-gloss-stretch-ceiling-star-lighting-led-condo-bedroom-brickell-miami-south-florida.jpg','gloss-stretch-ceiling-geometric-led-luxury-condo-kitchen-brickell-miami-south-florida.jpg'],
  'resg-9n':['gloss-stretch-ceiling-recessed-led-modern-living-room-fort-lauderdale-south-florida.webp','gloss-stretch-ceiling-recessed-led-modern-living-room-fort-lauderdale-south-florida1.webp','gloss-stretch-ceiling-recessed-led-modern-living-room-fort-lauderdale-south-florida2.webp','gloss-stretch-ceiling-recessed-led-modern-living-room-fort-lauderdale-south-florida3.webp'],
  'resg-9nn':['gloss-stretch-ceiling-geometric-led-luxury-game-room-miami-florida-south-florida.jpg'], 

  'resc-1n':['matte-stretch-ceiling-linear-led-luxury-condo-living-room-miami-beach-south-florida.webp','matte-stretch-ceiling-linear-led-luxury-condo-living-room-miami-beach-south-florida1.webp','matte-stretch-ceiling-linear-led-luxury-condo-living-room-miami-beach-south-florida2.webp'],  
   'resc-1': ['high-gloss-black-stretch-ceiling-miami-residential-living-room.jpg', "modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg"],
    'resc-2': ['modern-foyer-stretch-ceiling-linear-led-hollywood-fl.jpg','gloss-stretch-ceiling-perimeter-led-luxury-condo-living-room-miami-beach-south-florida.jpg'],
    'resc-3': ['black-gloss-stretch-ceiling-staircase-design-tampa-fl.jpg','black-gloss-stretch-ceiling-star-lighting-led-condo-bedroom-brickell-miami-south-florida.jpg'],
    'resc-4': ['matte-stretch-ceiling-geometric-led-luxury-condo-miami-bayfront-south-florida.jpg','gloss-stretch-ceiling-geometric-led-luxury-condo-kitchen-brickell-miami-south-florida.jpg','gloss-stretch-ceiling-luxury-condo-living-dining-design-aventura-south-florida.jpg'],
   'resc-2n': ['gloss-stretch-ceiling-luxury-condo-living-dining-room-sunny-isles-beach-south-florida.jpg','gloss-stretch-ceiling-luxury-condo-living-dining-room-sunny-isles-beach-south-florida1.jpg','modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1h.jpg'],
   
'resh-1':['home-theater-star-stretch-ceiling-led-ambient-lighting-luxury-miami-florida-south-florida.webp','home-theater-star-stretch-ceiling-led-ambient-lighting-luxury-miami-florida-south-florida1.webp','home-theater-star-stretch-ceiling-led-ambient-lighting-luxury-miami-florida-south-florida2.webp'],
'resh-2':['home-theater-star-stretch-ceiling-rendering-luxury-cinema-design-brickell-miami-south-florida.webp','home-theater-star-stretch-ceiling-rendering-luxury-cinema-design-brickell-miami-south-florida1.webp','home-theater-star-stretch-ceiling-rendering-luxury-cinema-design-brickell-miami-south-florida11.webp'],
'resh-3':['home-theater-star-stretch-ceiling-rendering-luxury-cinema-design-brickell-miami-south-florida2.webp','home-theater-star-stretch-ceiling-rendering-luxury-cinema-design-brickell-miami-south-florida3.webp','home-theater-star-stretch-ceiling-rendering-luxury-cinema-design-brickell-miami-south-florida4.webp'],
   'resh-4':['home-theater-acoustic-stretch-ceiling-led-panel-design-luxury-miami-florida-south-florida.webp','home-theater-acoustic-stretch-ceiling-led-panel-design-luxury-miami-florida-south-florida1.webp'], 
'resh-5':['home-theater-acoustic-stretch-ceiling-linear-led-rendering-luxury-design-aventura-south-florida.webp','home-theater-acoustic-stretch-ceiling-linear-led-rendering-luxury-design-aventura-south-florida1.webp','home-theater-acoustic-stretch-ceiling-linear-led-rendering-luxury-design-aventura-south-florida2.webp'],
'resh-6':['home-theater-stretch-ceiling-led-acoustic-design-rendering-luxury-miami-bay-area-south-florida.webp','home-theater-stretch-ceiling-led-acoustic-design-rendering-luxury-miami-bay-area-south-florida1.webp'],
'resh-7':['home-theater-matte-stretch-ceiling-linear-led-design-luxury-miami-florida-south-florida.webp','c.webp','c1.webp','c2.webp','c3.webp','c4.webp'],

'com-1':['commercial-gym-black-stretch-ceiling-lighting-miami.jpg','commercial-gym-black-stretch-ceiling-lighting-Florida-miami.jpg','commercial-gym-black-stretch-ceiling-lighting-florida.jpg','commercial-gym-black-stretch-ceiling-lighting-miami-florida.jpg','commercial-gym-black-stretch-ceiling-lighting-miami-south-florida.jpg','commercial-gym-black-stretch-ceiling-lighting-miami.jpg','commercial-gym-black-stretch-ceiling-lighting-miami-southflorida.jpg','commercial-gym-black-stretch-ceiling-lighting-miamiflorida.jpg'],
    "com-2": ["reflective-mirror-stretch-ceiling-aventura-condo-interior.jpg", "reflective-mirror-stretch-ceiling-aventura-condo-interior-south-florida.jpg",'commercial-matte-stretch-ceiling-curved-led-corridor-design-miami-florida-south-florida1.webp','reflective-mirror-stretch-ceiling-aventura-condo-interior-florida.jpg'],
    "com-5":  ["commercial-conference-room-backlit-stretch-ceiling-coral-gables.jpg", "commercial-conference-room-backlit-stretch-ceiling-coral-gables-florida.jpg"],
    "com-4": ["commercial-high-gloss-linear-led-ceiling-boca-raton.jpg", "commercial-high-gloss-linear-led-ceiling-boca-raton-miami.jpg"],
    "com-3": ["luxury-garage-black-mirror-stretch-ceiling-sunny-isles-beach.jpg", "luxury-garage-black-mirror-stretch-ceiling-sunny-isles-beach-florida.jpg",'luxury-garage-black-mirror-stretch-ceiling-sunny-isles-beach-miami.jpg'],
     "com-6": ["commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale.jpg",'commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-florida-holywood..jpg'],
   'com-7':['commercial-stretch-ceiling-geometric-linear-led-office-design-miami-florida-south-florida.jpg','commercial-stretch-ceiling-geometric-linear-led-office-design-miami-florida-south-florida1.jpg','commercial-stretch-ceiling-geometric-linear-led-office-design-miami-florida-south-florida2.jpg','commercial-stretch-ceiling-geometric-linear-led-office-design-miami-florida-south-florida3.jpg'],
'com-8':["commercial-gloss-stretch-ceiling-geometric-led-restaurant-design-fort-lauderdale-south-florida.jpg",'commercial-gloss-stretch-ceiling-geometric-led-restaurant-design-fort-lauderdale-south-florida1.jpg','commercial-gloss-stretch-ceiling-geometric-led-restaurant-design-fort-lauderdale-south-florida2.jpg'],
'com-9':["commercial-gloss-stretch-ceiling-led-perimeter-lighting-modern-office-design-miami-florida-south-florida.jpg",'commercial-gloss-stretch-ceiling-led-perimeter-lighting-modern-office-design-miami-florida-south-florida1.jpg','commercial-gloss-stretch-ceiling-led-perimeter-lighting-modern-office-design-miami-florida-south-florida2.jpg'],
'com-10':["commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida.jpg",'commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida1.jpg','commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida2.jpg','commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida3.jpg','commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida4.jpg'],   
'com-11':["commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida.webp",'commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida1.webp','commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida2.webp','commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida3.webp','commercial-stretch-ceiling-circular-led-indoor-pool-spa-design-miami-florida-south-florida4.webp'],   
'com-12':['commercial-gloss-stretch-ceiling-cross-led-reception-design-coral-gables-south-florida.jpg','commercial-gloss-stretch-ceiling-cross-led-reception-design-coral-gables-south-florida1.jpg','commercial-gloss-stretch-ceiling-cross-led-reception-design-coral-gables-south-florida2.jpg'],   
'com-13':['commercial-backlit-stretch-ceiling-luxury-car-showroom-design-miami-florida-south-florida.webp','commercial-backlit-stretch-ceiling-car-dealership-showroom-miami-florida-south-florida.jpg','commercial-backlit-stretch-ceiling-car-dealership-showroom-miami-florida-south-florida1.jpg'],
'com-14':['commercial-gloss-stretch-ceiling-linear-led-rendering-modern-office-design-aventura-south-florida.jpg','commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-south-florida.jpg','commercial-backlit-stretch-ceiling-boardroom-fort-lauderdale-florida-miami.jpg'],
'com-15':['commercial-matte-stretch-ceiling-linear-led-hotel-lobby-reception-miami-florida-south-florida.webp','commercial-matte-stretch-ceiling-linear-led-hotel-lobby-reception-miami-florida-south-florida1.webp','commercial-matte-stretch-ceiling-linear-led-hotel-lobby-reception-miami-florida-south-florida2.webp'],
'com-16':['commercial-matte-stretch-ceiling-curved-led-corridor-design-miami-florida-south-florida.webp','commmm.jpg'],
'com-17':['commercial-backlit-stretch-ceiling-organic-panel-office-lounge-design-west-palm-beach-south-florida.webp','commercial-backlit-stretch-ceiling-organic-panel-office-lounge-design-west-palm-beach-south-florida1.webp'],
'com-18':['commercial-gloss-stretch-ceiling-rgb-linear-led-bar-lounge-design-miami-florida-south-florida.webp'],

'ren-1': ['printed-nature-stretch-ceiling-orlando-residentialhollywood-fl.jpg','printed-nature-stretch-ceiling-orlando-residentialfort-lauderdale-fl.jpg', 'printed-nature-stretch-ceiling-orlando-residentialhollywood-fl.jpg'],
   'ren-2': ['luxury-bathroom-stretch-ceiling-lighting-fort-lauderdale.jpg', 'luxury-bathroom-stretch-ceiling-lighting-fort-lauderdalehollywood-florida.jpg','luxury-high-rise-stretch-ceiling-lighting-miami-beach2.jpg'],
  'ren-2n':['rendering-modern-matte-stretch-ceiling-concept-minimalist-living-room-coral-gables-south-florida.jpg','rendering-modern-matte-stretch-ceiling-concept-minimalist-living-room-coral-gables-south-florida1.webp','rendering-modern-matte-stretch-ceiling-concept-minimalist-living-room-coral-gables-south-florida2.jpg','rendering-modern-matte-stretch-ceiling-concept-minimalist-living-room-coral-gables-south-florida3.jpg','rendering-modern-matte-stretch-ceiling-concept-minimalist-living-room-coral-gables-south-florida4.jpg','rendering-modern-matte-stretch-ceiling-concept-minimalist-living-room-coral-gables-south-florida5.webp'],
   'ren-3': ['modern-minimalist-kitchen-stretch-ceiling-naples-fl.jpg', 'modern-stretch-ceiling-integrated-led-lighting-Orlando,Florida1.jpg', 'modern-stretch-ceiling-integrated-led-lighting-Tampa,Florida1.jpg'],
   'ren-4': ['minimalist-bedroom-stretch-ceiling-boca-raton-fl.jpg', 'minimalist-bedroom-stretch-ceiling-Orlando,Florida1.jpg', 'minimalist-bedroom-stretch-ceiling-boca-raton-florida.jpg'],
    'ren-5n':['rendering-matte-stretch-ceiling-curved-led-luxury-living-room-coral-gables-south-florida.webp','rendering-matte-stretch-ceiling-curved-led-luxury-living-room-coral-gables-south-florida1.webp'],
  'ren-6n':['rendering-organic-matte-stretch-ceiling-curved-led-luxury-living-room-miami-beach-south-florida.webp','rendering-organic-matte-stretch-ceiling-curved-led-luxury-living-room-miami-beach-south-florida1.webp'],
   "ren-7": ["residential-stretch-ceiling-kids-room-miami-florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,Florida.jpg", "residential-stretch-ceiling-kids-room-Fort-Lauderdale,FloridaOrlando,Florida.jpg"],
   
  'ren-5': ['modern-geometric-linear-stretch-ceiling-lighting-hollywood-fl.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-hollywood-florida.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-Tampa,Florida1.jpg','modern-geometric-linear-stretch-ceiling-lighting-Orlando,Florida1.jpg', 'modern-geometric-linear-stretch-ceiling-lighting-hollywood-florida2.jpg'],
   'ren-6': ['luxury-staircase-linear-led-stretch-ceiling-miami.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl1.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-fl..jpg','open-concept-stretch-ceiling-linear-lighting-holywood.jpg','open-concept-stretch-ceiling-linear-lighting-south-florida.jpg','open-concept-stretch-ceiling-linear-lighting-tampa-florida_.jpg'],
  //  'ren-7': ['free-3d-rendering-minimalist-loft-ceiling-orlando.jpg', 'free-3d-rendering-minimalist-loft-ceiling-orlando-southFlorida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-south-florida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami-south-florida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-south-florida.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-miami.jpg','free-3d-rendering-minimalist-loft-ceiling-orlando-florida.jpg'],
   'ren-8':['matte-stretch-ceiling-warm-led-perimeter-luxury-living-room-miami-florida-south-florida.webp','matte-stretch-ceiling-warm-led-perimeter-luxury-living-room-miami-florida-south-florida1.webp','matte-stretch-ceiling-warm-led-perimeter-luxury-living-room-miami-florida-south-florida1.webp'],
   'ren-9':['rendering-gloss-stretch-ceiling-linear-led-modern-living-space-aventura-south-florida.webp','rendering-gloss-stretch-ceiling-linear-led-modern-living-space-aventura-south-florida1.webp','rendering-gloss-stretch-ceiling-linear-led-modern-living-space-aventura-south-florida2.webp','rendering-gloss-stretch-ceiling-linear-led-modern-living-space-aventura-south-florida3.webp','rendering-gloss-stretch-ceiling-linear-led-modern-living-space-aventura-south-florida4.webp'],
   'ren-10':['commercial-gloss-stretch-ceiling-linear-led-conference-room-rendering-fort-lauderdale-south-florida.webp','commercial-gloss-stretch-ceiling-linear-led-conference-room-rendering-fort-lauderdale-south-florida1.webp','commercial-gloss-stretch-ceiling-linear-led-conference-room-rendering-fort-lauderdale-south-florida2.webp','commercial-gloss-stretch-ceiling-linear-led-conference-room-rendering-fort-lauderdale-south-florida3.webp'],
   'ren-9n':['rendering-gloss-stretch-ceiling-modern-condo-living-room-brickell-miami-south-florida.webp','rendering-gloss-stretch-ceiling-modern-condo-living-room-brickell-miami-south-florida1.webp'],
   'ren-9nn':['rendering-matte-stretch-ceiling-linear-led-minimalist-condo-living-room-miami-beach-south-florida.webp'],
  'ren-9nnn':['rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida1.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida2.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida3.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida4.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida5.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida6.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida7.jpg','rendering-matte-stretch-ceiling-linear-led-luxury-condo-concept-miami-florida-south-florida8.jpg'],
'ren-10n':['matte-stretch-ceiling-linear-led-installation-modern-home-miami-florida-south-florida.webp'],
   "pb-1": ['custom-sky-stretch-ceiling-luxury-home-south-florida..jpg','printed-sky-stretch-ceiling-residential-miami-florida.jpg','home-theater-star-stretch-ceiling-purple-led-luxury-living-room-fort-lauderdale-south-florida1.webp'],
    "pb-2": ['residential-printed-backlit-stretch-ceiling-sky-design-luxury-foyer-aventura-south-florida.webp',"printed-sky-stretch-ceiling-residential-miami-florida.jpg"],
   'pb-3n':['residential-backlit-stretch-ceiling-hallway-light-panel-design-west-palm-beach-south-florida.webp','residential-backlit-stretch-ceiling-hallway-light-panel-design-west-palm-beach-south-florida1.webp','residential-backlit-stretch-ceiling-hallway-light-panel-design-west-palm-beach-south-florida2.webp'],
   'pb-4n':['commercial-printed-backlit-stretch-ceiling-sky-dome-spa-design-miami-florida-south-florida.webp','commercial-printed-backlit-stretch-ceiling-sky-dome-spa-design-miami-florida-south-florida1.webp','commercial-printed-backlit-stretch-ceiling-sky-dome-spa-design-miami-florida-south-florida2.webp'], 
   'pb-3': ["backlit-printed-minimalist-loft-ceiling-orlando-florida.jpg",'backlit-printed-minimalist-loft-ceiling-orlando-southFlorida.jpg','backlit-printed-minimalist-loft-ceiling-orlando-miami.jpg'],
    'pb-4': ["printed-sky-stretch-ceiling-commercial-south-florida.jpg",'img787.webp','printed-sky-stretch-ceiling-commercial-florida-miami.jpg','printed-sky-stretch-ceiling-commercial-south-florida-miami.jpg'],
    'pb-5': ['commercial-printed-backlit-stretch-ceiling-installation-construction-miami-florida-south-florida.webp','commercial-printed-backlit-stretch-ceiling-installation-construction-miami-florida-south-florida1.webp'],
    'pb-6': ['starry-sky-led-stretch-ceiling-luxury-pool-south-florida.jpg','commercialpool2.webp'],
    'pb-6n': ['commercial-printed-backlit-stretch-ceiling-sky-panel-cafe-design-miami-florida-south-florida.webp','commercial-printed-backlit-stretch-ceiling-sky-panel-cafe-design-miami-florida-south-florida1.webp','commercial-printed-backlit-stretch-ceiling-sky-panel-cafe-design-miami-florida-south-florida2.webp'],
    'pb-8n`':['residential-printed-backlit-stretch-ceiling-sky-design-bedroom-miami-beach-south-florida.webp','residential-printed-backlit-stretch-ceiling-sky-design-bedroom-miami-beach-south-florida1.webp'],
  'pb-12':['commercial-printed-backlit-stretch-ceiling-sky-panels-office-lobby-miami-florida-south-florida.webp','commercial-printed-backlit-stretch-ceiling-sky-panels-office-lobby-miami-florida-south-florida1.webp']
  };

  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = item.getAttribute("data-project");
      const images = projects[projectId] || [];
      const mainImg = item.querySelector("img, video");
      const altText = mainImg ? (mainImg.alt || mainImg.getAttribute("aria-label") || "") : "";
      
      // Helper to generate captive, SEO-friendly content dynamically
      const generateSEOContent = (id, alt, category) => {
        const cities = ["Miami Beach", "Miami", "Fort Lauderdale", "Hollywood", "Tampa", "Orlando", "Boca Raton", "West Palm Beach", "Coral Gables", "Aventura", "Sunny Isles", "Naples", "Brickell"];
        const city = cities.find(c => alt.includes(c)) || "South Florida";
        const type = alt.toLowerCase().includes("commercial") ? "Commercial" : "Residential";
        const isRendering = id.startsWith("ren-") || alt.toLowerCase().includes("rendering");

        // Clean up category name (e.g., "Residential Matte Ceillings" -> "Matte")
        let categoryContext = category.replace("Residential", "").replace("Ceilings", "").replace("Ceillings", "").trim();
        // Special case for Condominiums
        if (category.toLowerCase().includes("condo")) categoryContext = "Condo";
        if (category.toLowerCase().includes("theatre")) categoryContext = "Home Theatre";
        if (category.toLowerCase().includes("backlit")) categoryContext = "Printed Backlit";
        if (category.toLowerCase().includes("render")) categoryContext = "3D Rendering";
        if (category.toLowerCase().includes("commercial")) categoryContext = "Commercial";

        // Key architectural & product descriptors
        const keywords = ["Matte", "Gloss", "Backlit", "Printed", "LED", "Linear", "Perimeter", "Curved", "Geometric", "Mirrored", "Acoustic", "Starry Sky", "Sky", "Cloud"];
        // Common areas/rooms
        const areas = ["Kitchen", "Living", "Dining", "Bedroom", "Bathroom", "Hallway", "Foyer", "Entryway", "Gym", "Office", "Conference", "Boardroom", "Pool", "Spa", "Lobby", "Bar", "Cinema", "Theater", "Staircase", "Garage", "Showroom", "Condo", "Penthouse"];

        const foundKeywords = keywords.filter(k => alt.toLowerCase().includes(k.toLowerCase()));
        const foundArea = areas.find(a => alt.toLowerCase().includes(a.toLowerCase())) || "";

        let displayTitle = "";
        if (foundKeywords.length > 0) {
          // Take top 2 keywords + area
          displayTitle = `${foundKeywords.slice(0, 2).join(" ")} ${foundArea}`.trim();
        } else {
          displayTitle = foundArea || (type === "Commercial" ? "Commercial Interior" : "Residential Interior");
        }

        // Add category context to title if not already present
        if (categoryContext && !displayTitle.toLowerCase().includes(categoryContext.toLowerCase())) {
          displayTitle = `${categoryContext}: ${displayTitle}`;
        }

        if (isRendering && !displayTitle.toLowerCase().includes("rendering")) {
          displayTitle = `Concept: ${displayTitle}`;
        }

        // Final captive title: "Short Description | City"
        const title = `${displayTitle} | ${city}`;

        // Determine dynamic badges based on content
        let badge1Text = type.toUpperCase();
        let badge1Icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`; // Default Home icon for Residential
        
        if (type.toLowerCase() === "commercial") {
          badge1Icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/><line x1="12" y1="6" x2="12" y2="6"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="18" x2="12" y2="18"/></svg>`;
        }

        if (foundKeywords.includes("Backlit") || foundKeywords.includes("Printed")) {
          badge1Text = "PRINTED BACKLIT";
          badge1Icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
        } else if (foundKeywords.includes("Gloss")) {
          badge1Text = "GLOSS DESIGN";
          badge1Icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
        } else if (foundKeywords.includes("Matte")) {
          badge1Text = "MATTE FINISH";
          badge1Icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
        }
        
        const badge1 = {
          text: badge1Text,
          icon: badge1Icon
        };
        const badge2 = {
          text: "MODERN AESTHETIC",
          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>`
        };

        const description = `${alt}. We specialize in high-end, custom ${type.toLowerCase()} stretch ceilings ${isRendering ? "renderings and installations" : "installations"} across ${city} and the entire state of Florida. Our unique architectural solutions bring a modern, minimalist aesthetic to any space. We also offer free custom 3D renderings to help you visualize your project before installation.`;

        return { title, description, badges: [badge1, badge2] };
      };

      const activeNavLink = document.querySelector(".nav-link.active");
      const categoryName = activeNavLink ? activeNavLink.textContent.trim() : "";

      const seo = generateSEOContent(projectId, altText, categoryName);

      lightboxContent.innerHTML = `
        <div class="lightbox-gallery"></div>
        <div class="lightbox-info">
          <h3 class="lightbox-title">${seo.title}</h3>
          
          <div class="lightbox-badges">
            ${seo.badges.map(badge => `
              <div class="badge-item">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-text">${badge.text}</span>
              </div>
            `).join('')}
          </div>

          <p class="lightbox-description">${seo.description}</p>
          
          <div class="lightbox-features">
            <h4>Creative Lighting Solutions</h4>
            <ul class="features-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="3"/></svg>
                <span>Custom abstract geometric printed membrane</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span>High-efficiency integrated LED backlighting</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg>
                <span>Advanced light diffusion technology</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="10" y1="21" x2="14" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <span>Durable architectural stretch framework</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Seamless and dust-resistant finish</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Professional Installation & Warranty</span>
              </li>
            </ul>
          </div>

          <div class="lightbox-footer">
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
               <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
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
            itemDiv.innerHTML = `<img src="${imgSrc}" alt="Project View" loading="lazy" decoding="async">`;
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

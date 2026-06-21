// NNSAT CPANEL - ADMINISTRATIVE CONTROL SYSTEM LOGIC

// Initial Mock Database
const INITIAL_DATABASE = {
  hero: {
    title: "Nigerian Navy School of Armament Technology",
    subtitle: "The centre of excellence in naval armament technology and Above Water Warfare technical training",
    badge: "Naval Training Command",
    image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/FRONT-1.png"
  },
  stats: {
    officers: "450+",
    ratings: "1,200+",
    systems: "30+"
  },
  commandant: {
    name: "Commodore Chikaji Aminu Isah",
    title: "Commandant, NNSAT",
    image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/IMG_0161.jpg.-1-scaled.jpg",
    welcomeText: "It is my pleasure to welcome you to the official portal of the Nigerian Navy School of Armament Technology (NNSAT), Kachia. NNSAT stands as a beacon of professional military education and armament engineering in Sub-Saharan Africa. Our mandate is to train the finest officers and ratings of the Seaman branch, instilling high discipline, tactical agility, and technical mastery in Above Water Warfare (AWW) weapons systems. We invite you to explore our training activities, historical achievements, and digital resources."
  },
  about: {
    history: "The Nigerian Navy School of Armament Technology (NNSAT), located in Kachia, Kaduna State, is a premier training establishment under the Naval Training Command (NAVTRAC). Established to centralize armament technology training and tactical training within the Nigerian Navy, the school conducts specialized programs for officers and ratings. Over the years, NNSAT has played a pivotal role in training sea-going personnel, helping secure national maritime boundaries and combating piracy in the Gulf of Guinea. The school is continuously upgrading its training infrastructure, classrooms, and simulators to match current international standards.",
    mission: "To facilitate qualitative training for officers and ratings in Above Water Warfare and general weaponry, in order to enhance naval operational efficiency and national security objectives.",
    vision: "To be a world-class training institution dedicated to armament technology and technical warfare capabilities."
  },
  leadership: [
    {
      name: "Vice Admiral Idi Abbas",
      role: "Chief of the Naval Staff",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2025/11/IMG_20251117_102928-scaled.jpg"
    },
    {
      name: "Rear Admiral Ebiobowei Abraham Zipele",
      role: "FOC, Naval Training Command",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/R-ADM-EA-ZIPELE.png"
    },
    {
      name: "Commodore Chikaji Aminu Isah",
      role: "Commandant, NNSAT",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/IMG_0161.jpg.-1-scaled.jpg"
    }
  ],
  facilities: [
    {
      id: "drillshed",
      title: "The Drill Shed",
      description: "A state-of-the-art facility designed for military parades, drills, and physical training. It serves as the training hub for establishing tactical discipline, teamwork, and high standards of navigation maneuvers. The facility is regularly inspected by visiting naval officers.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/FRONT-1.png"
    },
    {
      id: "firingrange",
      title: "Tactical Firing Range",
      description: "Our range classification facility is designed for live fire arms training. Trainees practice handling light armaments, assault weapons, and gunnery tracking procedures. Range safety officers oversee the drills to ensure compliance with strict naval fire regulations.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/range.png"
    },
    {
      id: "ictcentre",
      title: "ICT & Simulation Center",
      description: "Equipped with modern computer systems, the ICT center provides software-based training and digital simulators. This allows trainees to analyze radar coordinates, weapon ranges, and ballistic mathematics in a controlled environment.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/Untitled.png"
    }
  ],
  courses: [
    {
      title: "Sub-Lieutenant Technical Course",
      category: "Officers",
      duration: "6 Weeks",
      description: "Organised for newly commissioned officers, focusing on the Above Water Warfare module. Equip trainees with the requisite watchkeeping knowledge required onboard Nigerian Navy ships."
    },
    {
      title: "Special Duty Post Commissioning Course",
      category: "Officers",
      duration: "6 Weeks",
      description: "Conducted for exceptional ratings commissioned as officers. Leverages their practical experience to transition them into officer roles with advanced weapons systems control."
    },
    {
      title: "Advanced AWW Long Course",
      category: "Officers",
      duration: "52 Weeks",
      description: "Advanced specialist training module (Officers' Long Course). Includes a 6-month intensive professional armament phase at NNSAT before returning to NNS QUORRA."
    },
    {
      title: "Ratings Specialization Training",
      category: "Ratings",
      duration: "Variable",
      description: "Selected ratings from the Seaman Branch undergo courses in gunnery, weapon maintenance, Ballistics, and advanced tactical combat support."
    },
    {
      title: "Basic Gunnery Instructor Course",
      category: "Ratings",
      duration: "12 Weeks",
      description: "Prepares senior ratings to serve as gunnery and armament training instructors. Focuses on leadership, range safety procedures, and weaponry theory instruction."
    }
  ],
  news: [
    {
      id: 1,
      title: "Courtesy Visit by the Commander Army Central Ammunition Depot Agunu to NNSAT",
      date: "29 April 2026",
      category: "Visits",
      excerpt: "Brigadier General EC Ineme, Commander ACADA, paid a courtesy visit to NNSAT to discuss training collaboration, tactical support, and inter-service cooperation.",
      content: "The Commander, Army Central Ammunition Depot Agunu (ACADA), Brigadier General EC Ineme, paid a courtesy and familiarisation visit to the Nigerian Navy School of Armament Technology (NNSAT), Kachia. On arrival, the senior officer was received with a quarter guard in honour of his visit and participated in a ceremonial tree planting exercise. The Commander and his team were received by the Commandant NNSAT, Commodore Chikaji Aminu Isah. Discussions centered on professional interest, particularly in armament training, technical development, and inter-service cooperation. Brigadier General Ineme commended the standards maintained at NNSAT, noting its critical role in enhancing the operational capability of the Armed Forces of Nigeria.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-03-at-9.06.41-AM-300x230.jpeg"
    },
    {
      id: 2,
      title: "Chief of the Naval Staff Undertakes Working Visit to NNSAT",
      date: "17 April 2026",
      category: "Visits",
      excerpt: "Vice Admiral Idi Abbas, Chief of the Naval Staff, toured training blocks, classrooms, and inspected the site for the new Marine Technology Centre.",
      content: "The Chief of the Naval Staff (CNS), Vice Admiral Idi Abbas, conducted a working visit to the Nigerian Navy School of Armament Technology (NNSAT), Kachia. The CNS was received by the Commandant NNSAT, Commodore Chikaji Aminu Isah, and briefed on training activities, infrastructure development, and operational requirements. The CNS commended the staff for their dedication to excellence and expressed satisfaction with ongoing infrastructural upgrades. Furthermore, the CNS inspected the land allocated for the development of the Nigerian Navy Marine Technology Centre (NNMTC) at Anturu, Kachia.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.30.32-PM-300x223.jpeg"
    },
    {
      id: 3,
      title: "NNSAT Conducts 2026 First Quarter Route March",
      date: "11 April 2026",
      category: "Events",
      excerpt: "Officers, ratings, and trainees participated in a 10km route march to maintain physical fitness and build teamwork.",
      content: "The Nigerian Navy School of Armament Technology (NNSAT) conducted its 2026 First Quarter Route March. The exercise, led by the Commandant, Commodore Chikaji Aminu Isah, was designed to improve the physical fitness, mental resilience, and combat preparedness of personnel. Trainees and staff marched through designated routes covering a distance of 10 kilometers before returning to the take-off point for aerobic endurance drills. The Commandant commended the personnel for their resilience and loyalty, emphasizing the importance of physical training.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.26.59-PM-300x169.jpeg"
    },
    {
      id: 4,
      title: "NNSAT Explores Collaboration with Defence Industries Corporation of Nigeria (DICON)",
      date: "31 March 2026",
      category: "Events",
      excerpt: "Commandant NNSAT visited DICON engineering plants to discuss local armament production and joint technical training.",
      content: "NNSAT has taken steps to strengthen indigenous defence capability following an operational training visit to the Defence Industries Corporation of Nigeria (DICON). The NNSAT team, led by Commandant Commodore CA Isah, toured production and engineering facilities guided by DICON's Director of Engineering Services, Commodore IU Agwu. The visit aimed to explore opportunities for technical training, engineering, and local maintenance of weapon platforms.",
      image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/IMG-20260412-WA0012-300x199.jpg"
    }
  ],
  gallery: [
    { title: "Quarter Guard for FOC Visit", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/03/IMG-20260317-WA0029.jpg" },
    { title: "CNS Inspection at Anturu", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.30.33-PM.jpeg" },
    { title: "Range Live Fire Exercises", category: "drills", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2024/06/range.png" },
    { title: "Quarterly Route March Aerobics", category: "events", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-21-at-10.28.05-PM-225x300.jpeg" },
    { title: "Tree Planting Commemoration", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/03/IMG-20260317-WA0036.jpg" },
    { title: "ACADA Commander Received", category: "visits", image: "https://lightgoldenrodyellow-hornet-176913.hostingersite.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-03-at-9.06.41-AM-300x230.jpeg" }
  ],
  elibrary: [
    {
      title: "National Virtual Library of Nigeria",
      category: "Portals",
      description: "Access the national educational repository including academic papers, technical documentation, and historical records.",
      url: "https://virtuall.nln.gov.ng/"
    },
    {
      title: "National Digital Library of India",
      category: "Portals",
      description: "An open-access digital educational database hosting technical, engineering, and science publications.",
      url: "https://ndl.iitkgp.ac.in/"
    },
    {
      title: "British Council Digital Library",
      category: "Portals",
      description: "Resource database offering digital journals, professional development materials, and global archives.",
      url: "https://www.britishcouncil.org.ng/digital-library-nigeria"
    },
    {
      title: "AWW Basic Weapons Manual",
      category: "Manuals",
      description: "Simulated resource guidelines detailing Above Water Warfare watchkeeping and armament logistics.",
      url: "#"
    },
    {
      title: "Naval Ballistics Reference Guide",
      category: "Manuals",
      description: "Reference manual for officers, detailing coordinate mapping, sensor settings, and target ranges.",
      url: "#"
    }
  ],
  users: [
    { username: "admin", password: "nnsat2026" }
  ],
  messages: [
    { id: 1, name: "Lieutenant Commander J. Bello", email: "j.bello@navy.mil.ng", subject: "AWW Training Manual Request", content: "Good day, I would like to request digital access coordinates for the new Above Water Warfare training outlines for our incoming officers.", date: "18 June 2026" }
  ]
};

let db = {};
let sessionUser = "";

// Initialize Database from LocalStorage
function initDB() {
  const savedData = localStorage.getItem("nnsat_db");
  if (savedData) {
    try {
      db = JSON.parse(savedData);
      
      // Assure table structures exist
      if (!db.users) {
        db.users = [...INITIAL_DATABASE.users];
        saveDB();
      }
      if (!db.messages) {
        db.messages = [...INITIAL_DATABASE.messages];
        saveDB();
      }
      
      // Migrate existing local database to remove research/R&D terms
      let upgraded = false;
      if (db.hero && db.hero.subtitle && db.hero.subtitle.includes("research and development")) {
        db.hero.subtitle = INITIAL_DATABASE.hero.subtitle;
        upgraded = true;
      }
      if (db.about && db.about.history && db.about.history.includes("technical research")) {
        db.about.history = INITIAL_DATABASE.about.history;
        upgraded = true;
      }
      if (db.about && db.about.vision && db.about.vision.includes("training and research")) {
        db.about.vision = INITIAL_DATABASE.about.vision;
        upgraded = true;
      }
      if (db.news) {
        db.news.forEach(item => {
          if (item.content && item.content.includes("technical training, research,")) {
            item.content = item.content.replace("technical training, research,", "technical training, engineering,");
            upgraded = true;
          }
        });
      }
      if (db.elibrary && db.elibrary[0] && db.elibrary[0].description && db.elibrary[0].description.includes("academic papers, research,")) {
        db.elibrary[0].description = INITIAL_DATABASE.elibrary[0].description;
        upgraded = true;
      }
      if (upgraded) {
        saveDB();
      }
    } catch (e) {
      db = { ...INITIAL_DATABASE };
    }
  } else {
    db = { ...INITIAL_DATABASE };
    saveDB();
  }
}

function saveDB() {
  localStorage.setItem("nnsat_db", JSON.stringify(db));
}

function resetToDefaults() {
  if (confirm("Restore NNSAT CPanel to factory template values? This wipes all edits, user changes, and inbox items.")) {
    db = JSON.parse(JSON.stringify(INITIAL_DATABASE));
    saveDB();
    showToast("CPanel restored to factory defaults.", "success");
    loadAdminDashboard("general");
  }
}

// Authentication Logic
function checkSession() {
  const isAuth = sessionStorage.getItem("cpanel_session");
  const username = sessionStorage.getItem("cpanel_username");
  const authBox = document.getElementById("admin-auth");
  const dashboard = document.getElementById("admin-dashboard");
  const userLabel = document.getElementById("logged-user-label");
  
  if (isAuth === "true" && username) {
    sessionUser = username;
    authBox.style.display = "none";
    dashboard.style.display = "block";
    if (userLabel) userLabel.innerText = `User: ${sessionUser}`;
    loadAdminDashboard("general");
  } else {
    authBox.style.display = "block";
    dashboard.style.display = "none";
  }
}

function verifyAdminPassword() {
  const userField = document.getElementById("admin-username");
  const passField = document.getElementById("admin-password");
  
  const username = userField.value.trim().toLowerCase();
  const password = passField.value;
  
  const matchedUser = db.users.find(u => u.username.toLowerCase() === username && u.password === password);
  
  if (matchedUser) {
    sessionUser = matchedUser.username;
    sessionStorage.setItem("cpanel_session", "true");
    sessionStorage.setItem("cpanel_username", matchedUser.username);
    checkSession();
    showToast(`Access Granted. Welcome, ${matchedUser.username}.`, "success");
    
    // Clear inputs
    userField.value = "";
    passField.value = "";
  } else {
    showToast("Invalid CPanel login credentials. Access denied.", "danger");
  }
}

function logoutAdmin() {
  sessionUser = "";
  sessionStorage.removeItem("cpanel_session");
  sessionStorage.removeItem("cpanel_username");
  checkSession();
  showToast("Admin session ended successfully.", "success");
}

// CPanel Tab Loader
function loadAdminDashboard(section) {
  document.querySelectorAll(".admin-menu-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("onclick").includes(section)) {
      item.classList.add("active");
    }
  });
  
  const contentArea = document.getElementById("admin-content-area");
  contentArea.innerHTML = "";
  
  switch (section) {
    case "general":
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">General Website Copy Settings</h2>
        <form class="admin-form" onsubmit="saveGeneralCopy(); return false;">
          <div class="form-group">
            <label class="form-label">Hero Title</label>
            <input type="text" id="edit-hero-title" class="form-input" value="${db.hero.title}">
          </div>
          <div class="form-group">
            <label class="form-label">Hero Subtitle</label>
            <input type="text" id="edit-hero-sub" class="form-input" value="${db.hero.subtitle}">
          </div>
          <div class="form-group">
            <label class="form-label">Hero Image (URL or Local Upload)</label>
            <input type="text" id="edit-hero-img" class="form-input" value="${db.hero.image}">
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'edit-hero-img')">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.5rem; margin-top:2rem; border-top:1px solid var(--border); padding-top:2rem;">
            <div class="form-group">
              <label class="form-label">Officers Trained Stat</label>
              <input type="text" id="edit-stat-off" class="form-input" value="${db.stats.officers}">
            </div>
            <div class="form-group">
              <label class="form-label">Ratings Spec Stat</label>
              <input type="text" id="edit-stat-rat" class="form-input" value="${db.stats.ratings}">
            </div>
            <div class="form-group">
              <label class="form-label">Weapons Systems Stat</label>
              <input type="text" id="edit-stat-sys" class="form-input" value="${db.stats.systems}">
            </div>
          </div>
          <div class="form-group" style="border-top:1px solid var(--border); padding-top:2rem;">
            <label class="form-label">Commandant Name</label>
            <input type="text" id="edit-comm-name" class="form-input" value="${db.commandant.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Commandant Photo (URL or Local Upload)</label>
            <input type="text" id="edit-comm-img" class="form-input" value="${db.commandant.image}">
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'edit-comm-img')">
          </div>
          <div class="form-group">
            <label class="form-label">Commandant Greeting</label>
            <textarea id="edit-comm-welcome" class="form-input" style="height:120px; resize:vertical;">${db.commandant.welcomeText}</textarea>
          </div>
          <div class="form-group" style="border-top:1px solid var(--border); padding-top:2rem;">
            <label class="form-label">NNSAT History</label>
            <textarea id="edit-about-history" class="form-input" style="height:150px; resize:vertical;">${db.about.history}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">NNSAT Mission</label>
            <textarea id="edit-about-mission" class="form-input" style="height:85px; resize:vertical;">${db.about.mission}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">NNSAT Vision</label>
            <textarea id="edit-about-vision" class="form-input" style="height:85px; resize:vertical;">${db.about.vision}</textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="margin-top:1rem;">Save Copy Coordinates</button>
        </form>
      `;
      break;
      
    case "news":
      let tableRows = db.news.map(item => `
        <tr>
          <td><img src="${item.image}" style="width:50px; height:35px; object-fit:cover; border-radius:4px; border:1px solid var(--border)" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100'"></td>
          <td style="font-weight:600;">${item.title}</td>
          <td>${item.date}</td>
          <td>${item.category}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteNews(${item.id})">Delete</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Operational News Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Published Logs</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Article Title</th>
              <th>Date</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
        
        <h3 style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add New Operational Log</h3>
        <form class="admin-form" onsubmit="addNewsArticle(); return false;">
          <div class="form-group">
            <label class="form-label">Article Title</label>
            <input type="text" id="add-news-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Publish Date (e.g., 21 June 2026)</label>
            <input type="text" id="add-news-date" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="add-news-cat" class="form-input" required>
              <option value="Events">Events</option>
              <option value="Visits">Visits</option>
              <option value="General">General</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Log Image (URL or Local Upload)</label>
            <input type="text" id="add-news-img" class="form-input" required>
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'add-news-img')">
          </div>
          <div class="form-group">
            <label class="form-label">Short Summary (Excerpt)</label>
            <input type="text" id="add-news-excerpt" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Article Text Content</label>
            <textarea id="add-news-content" class="form-input" style="height:180px; resize:vertical;" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Publish to Live Portal</button>
        </form>
      `;
      break;
      
    case "gallery":
      let galleryRows = db.gallery.map((item, index) => `
        <tr>
          <td><img src="${item.image}" style="width:60px; height:45px; object-fit:cover; border-radius:4px; border:1px solid var(--border)"></td>
          <td style="font-weight:600;">${item.title}</td>
          <td>${item.category}</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteGalleryItem(${index})">Remove</button>
          </td>
        </tr>
      `).join("");
      
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Media Gallery Manager</h2>
        
        <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">Roster Photos</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Caption</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${galleryRows}
          </tbody>
        </table>
        
        <h3 style="margin-bottom:1.5rem; font-family:var(--font-serif); font-size:1.3rem; margin-top:3rem; border-top:1px solid var(--border); padding-top:2rem;">Add Photo to Gallery</h3>
        <form class="admin-form" onsubmit="addGalleryItem(); return false;">
          <div class="form-group">
            <label class="form-label">Image Caption</label>
            <input type="text" id="add-gal-title" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select id="add-gal-cat" class="form-input" required>
              <option value="visits">Visits</option>
              <option value="events">Events</option>
              <option value="drills">Drills</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Photo Source (URL or Local Upload)</label>
            <input type="text" id="add-gal-img" class="form-input" required>
            <input type="file" class="form-input" style="margin-top:0.5rem;" onchange="handleImageUpload(this, 'add-gal-img')">
          </div>
          <button type="submit" class="btn btn-primary">Upload Photo</button>
        </form>
      `;
      break;

    case "messages":
      let msgRows = db.messages.length > 0 ? db.messages.map(item => `
        <div class="stat-card" style="text-align:left; border-top:none; border-left:3px solid var(--gold); padding:2rem; margin-bottom:1.5rem; position:relative;">
          <button class="btn btn-outline" style="position:absolute; top:2rem; right:2rem; padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteMessage(${item.id})">Delete</button>
          <span style="font-size:0.8rem; font-weight:700; color:var(--gold); text-transform:uppercase;">Received: ${item.date}</span>
          <h3 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--white); margin:0.25rem 0;">${item.subject}</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;"><strong>From:</strong> ${item.name} (${item.email})</p>
          <p style="color:var(--text-primary); font-size:0.95rem; line-height:1.6; border-top:1px solid var(--border); padding-top:1rem;">${item.content}</p>
        </div>
      `).reverse().join("") : `<p style="color:var(--text-secondary); text-align:center; padding:3rem;">Inbox is empty. No messages submitted yet.</p>`;

      contentArea.innerHTML = `
        <h2 class="admin-panel-title">Registry Inbox Messages</h2>
        <div style="max-width:800px;">
          ${msgRows}
        </div>
      `;
      break;

    case "accounts":
      let userList = db.users.map(u => `
        <tr>
          <td style="font-weight:600; color:var(--white);">${u.username}</td>
          <td>••••••••</td>
          <td>
            <button class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-color:var(--danger); color:var(--danger);" onclick="deleteUser('${u.username}')" ${u.username === 'admin' ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''}>Delete</button>
          </td>
        </tr>
      `).join("");

      contentArea.innerHTML = `
        <h2 class="admin-panel-title">User Accounts Control</h2>
        
        <div class="grid-2" style="align-items: flex-start; gap: 3rem;">
          <!-- LIST USERS -->
          <div>
            <h3 style="margin-bottom:1rem; font-family:var(--font-serif); font-size:1.3rem;">System User Accounts</h3>
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${userList}
              </tbody>
            </table>
          </div>

          <!-- USER ACTIONS -->
          <div style="display:flex; flex-direction:column; gap:2.5rem;">
            <!-- CREATE USER -->
            <div style="background:var(--navy-light); border:1px solid var(--border); padding:2rem; border-radius:var(--radius-md);">
              <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--white); margin-bottom:1rem;">Create New Operator User</h4>
              <form onsubmit="createNewUser(); return false;">
                <div class="form-group">
                  <label class="form-label">Username</label>
                  <input type="text" id="add-user-name" class="form-input" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Password</label>
                  <input type="password" id="add-user-pass" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="padding:0.5rem 1.2rem; font-size:0.85rem;">Create Account</button>
              </form>
            </div>

            <!-- CHANGE PASSWORD -->
            <div style="background:var(--navy-light); border:1px solid var(--border); padding:2rem; border-radius:var(--radius-md);">
              <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--white); margin-bottom:1rem;">Change Existing Password</h4>
              <form onsubmit="changeUserPassword(); return false;">
                <div class="form-group">
                  <label class="form-label">Target Username</label>
                  <select id="change-user-name" class="form-input" required>
                    ${db.users.map(u => `<option value="${u.username}">${u.username}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">New Password</label>
                  <input type="password" id="change-user-pass" class="form-input" required>
                </div>
                <button type="submit" class="btn btn-primary" style="padding:0.5rem 1.2rem; font-size:0.85rem;">Update Password</button>
              </form>
            </div>
          </div>
        </div>
      `;
      break;
      
    case "reset":
      contentArea.innerHTML = `
        <h2 class="admin-panel-title">System Settings</h2>
        <div style="background:var(--navy-light); border:1px solid var(--border); padding:2rem; border-radius:var(--radius-md); max-width:600px;">
          <h3 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--white); margin-bottom:1rem;">Clear System Storage</h3>
          <p style="color:var(--text-secondary); margin-bottom:2rem; font-size:0.95rem;">Restoring system storage will reset NNSAT's database back to initial factory defaults, wiping out all custom edits, user modifications, and inbox submissions.</p>
          <button class="btn" style="background:var(--danger); color:var(--white);" onclick="resetToDefaults()">Reset Database to Defaults</button>
        </div>
      `;
      break;
  }
}

// Convert uploaded file to base64 string for persistent client-side storage
function handleImageUpload(inputElement, targetFieldId) {
  const file = inputElement.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById(targetFieldId).value = e.target.result;
    showToast("Image loaded successfully. Ready to save.", "success");
  };
  reader.readAsDataURL(file);
}

// Save copy operations
function saveGeneralCopy() {
  db.hero.title = document.getElementById("edit-hero-title").value;
  db.hero.subtitle = document.getElementById("edit-hero-sub").value;
  db.hero.image = document.getElementById("edit-hero-img").value;
  
  db.stats.officers = document.getElementById("edit-stat-off").value;
  db.stats.ratings = document.getElementById("edit-stat-rat").value;
  db.stats.systems = document.getElementById("edit-stat-sys").value;
  
  db.commandant.name = document.getElementById("edit-comm-name").value;
  db.commandant.image = document.getElementById("edit-comm-img").value;
  db.commandant.welcomeText = document.getElementById("edit-comm-welcome").value;
  db.about.history = document.getElementById("edit-about-history").value;
  db.about.mission = document.getElementById("edit-about-mission").value;
  db.about.vision = document.getElementById("edit-about-vision").value;
  
  saveDB();
  showToast("Copy credentials saved successfully.", "success");
}

function addNewsArticle() {
  const title = document.getElementById("add-news-title").value;
  const date = document.getElementById("add-news-date").value;
  const category = document.getElementById("add-news-cat").value;
  const image = document.getElementById("add-news-img").value;
  const excerpt = document.getElementById("add-news-excerpt").value;
  const content = document.getElementById("add-news-content").value;
  
  const nextId = db.news.length > 0 ? Math.max(...db.news.map(n => n.id)) + 1 : 1;
  const newArticle = { id: nextId, title, date, category, image, excerpt, content };
  db.news.push(newArticle);
  
  saveDB();
  showToast("Article published successfully.", "success");
  
  loadAdminDashboard("news");
}

function deleteNews(id) {
  if (confirm("Are you sure you want to delete this news article?")) {
    db.news = db.news.filter(n => n.id !== id);
    saveDB();
    showToast("Article deleted.", "success");
    loadAdminDashboard("news");
  }
}

function addGalleryItem() {
  const title = document.getElementById("add-gal-title").value;
  const category = document.getElementById("add-gal-cat").value;
  const image = document.getElementById("add-gal-img").value;
  
  db.gallery.push({ title, category, image });
  saveDB();
  showToast("Gallery photo added successfully.", "success");
  
  loadAdminDashboard("gallery");
}

function deleteGalleryItem(index) {
  if (confirm("Remove this image from the gallery?")) {
    db.gallery.splice(index, 1);
    saveDB();
    showToast("Gallery photo removed.", "success");
    loadAdminDashboard("gallery");
  }
}

// Message operations
function deleteMessage(id) {
  if (confirm("Permanently delete this message from registry inbox?")) {
    db.messages = db.messages.filter(m => m.id !== id);
    saveDB();
    showToast("Message deleted.", "success");
    loadAdminDashboard("messages");
  }
}

// User accounts operations
function createNewUser() {
  const uName = document.getElementById("add-user-name").value.trim().toLowerCase();
  const uPass = document.getElementById("add-user-pass").value;
  
  if (!uName || !uPass) return;
  
  const alreadyExists = db.users.some(u => u.username.toLowerCase() === uName);
  if (alreadyExists) {
    showToast("Username already exists in the registry.", "danger");
    return;
  }
  
  db.users.push({ username: uName, password: uPass });
  saveDB();
  showToast(`Operator user account '${uName}' created successfully.`, "success");
  
  loadAdminDashboard("accounts");
}

function changeUserPassword() {
  const uName = document.getElementById("change-user-name").value;
  const uPass = document.getElementById("change-user-pass").value;
  
  if (!uName || !uPass) return;
  
  db.users = db.users.map(u => {
    if (u.username === uName) {
      return { ...u, password: uPass };
    }
    return u;
  });
  
  saveDB();
  showToast(`Password updated successfully for account '${uName}'.`, "success");
  
  // If editing self, logout to enforce login with new password
  if (uName === sessionUser) {
    logoutAdmin();
  } else {
    loadAdminDashboard("accounts");
  }
}

function deleteUser(username) {
  if (username === 'admin') {
    showToast("Cannot delete system primary administrator account.", "danger");
    return;
  }
  if (username === sessionUser) {
    showToast("Cannot self-terminate active logged-in user account.", "danger");
    return;
  }
  if (confirm(`Are you sure you want to permanently delete user account '${username}'?`)) {
    db.users = db.users.filter(u => u.username !== username);
    saveDB();
    showToast(`Account '${username}' deleted.`, "success");
    loadAdminDashboard("accounts");
  }
}

// Notification alerts
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-alert");
  toast.className = `alert-toast alert-${type} show`;
  toast.querySelector(".toast-message").innerText = message;
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Bootstrap Init
window.addEventListener("DOMContentLoaded", () => {
  initDB();
  checkSession();
});

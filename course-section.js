   // Global variables
   let player = null;
   let currentVideoElement = null;

   // Lesson Content Structure with videos for all days
   const lessonContent = {
       "Day 1: HTML Fundamentals": {
           title: "Getting Started with HTML",
           subtitle: "Learn the fundamentals of HTML",
           videoType: "youtube",
           videoId: "pQN-pnXPaVg",
           videoTitle: "HTML Basics",
           videoDescription: "Introduction to HTML structure and tags...",
           resources: [
               { name: "HTML Cheat Sheet", type: "PDF", size: "2.4 MB" },
               { name: "Starter Code", type: "ZIP", size: "1.8 MB" }
           ]
       },
       "Day 2: CSS Basics": {
           title: "Introduction to CSS",
           subtitle: "Master CSS styling basics",
           videoType: "youtube",
           videoId: "yfoY53QXEnI",
           videoTitle: "CSS Fundamentals",
           videoDescription: "Learn CSS selectors and properties...",
           resources: [
               { name: "CSS Cheat Sheet", type: "PDF", size: "1.9 MB" }
           ]
       },
       "Day 3: Layout & Positioning": {
           title: "Layout & Positioning",
           subtitle: "CSS layout techniques",
           videoType: "youtube",
           videoId: "VqTpiK63F_Q",
           videoTitle: "CSS Layout",
           videoDescription: "Master positioning and layout with CSS...",
           resources: []
       },
       "Day 4: Forms & Tables": {
           title: "Forms & Tables",
           subtitle: "Build HTML forms and tables",
           videoType: "youtube",
           videoId: "rN9Hv3XvYLQ",
           videoTitle: "Forms and Tables",
           videoDescription: "Create interactive forms and tables...",
           resources: []
       },
       "Day 5: CSS Frameworks": {
           title: "CSS Frameworks",
           subtitle: "Introduction to CSS frameworks",
           videoType: "youtube",
           videoId: "9zBsdzdE4sM",
           videoTitle: "Bootstrap Basics",
           videoDescription: "Learn Bootstrap framework...",
           resources: []
       },
       "Day 6: LIVE CLASS": {
           title: "Week 1 Live Class",
           subtitle: "Interactive session on HTML & CSS",
           videoType: "youtube",
           videoId: "UB1O30fR-EE",
           videoTitle: "Live Q&A and Demo",
           videoDescription: "Review of Week 1 topics...",
           resources: []
       },
       "Day 7: MINOR PROJECT SUBMISSION": {
           title: "Minor Project",
           subtitle: "Submit your Week 1 project",
           videoType: null,
           videoId: null,
           videoTitle: "",
           videoDescription: "",
           resources: []
       },
       "Day 1: Intro to JavaScript": {
           title: "Introduction to JavaScript",
           subtitle: "JavaScript basics",
           videoType: "youtube",
           videoId: "W6NZfCO5SIk",
           videoTitle: "JS Basics",
           videoDescription: "Learn JavaScript fundamentals...",
           resources: []
       },
       "Day 2: Control Flow": {
           title: "Control Flow",
           subtitle: "Conditional statements and loops",
           videoType: "youtube",
           videoId: "J5hWnbKhT98",
           videoTitle: "Control Structures",
           videoDescription: "Master if statements and loops...",
           resources: []
       },
       "Day 3: Functions": {
           title: "Functions",
           subtitle: "Working with functions",
           videoType: "youtube",
           videoId: "xUI5Tsl2mRk",
           videoTitle: "Functions in JS",
           videoDescription: "Learn function declarations...",
           resources: []
       },
       "Day 4: Arrays & Objects": {
           title: "Arrays & Objects",
           subtitle: "Data structures in JS",
           videoType: "youtube",
           videoId: "tcoiPHktCwQ",
           videoTitle: "Data Structures",
           videoDescription: "Work with arrays and objects...",
           resources: []
       },
       "Day 5: DOM Manipulation": {
           title: "DOM Manipulation",
           subtitle: "Interact with the DOM",
           videoType: "youtube",
           videoId: "y17RuWkWdn8",
           videoTitle: "DOM Basics",
           videoDescription: "Manipulate HTML with JS...",
           resources: []
       },
       "Day 6: LIVE CLASS": {
           title: "Week 2 Live Class",
           subtitle: "JavaScript review",
           videoType: "youtube",
           videoId: "PkZNo7MFNFg",
           videoTitle: "JS Live Demo",
           videoDescription: "Review of Week 2 topics...",
           resources: []
       },
       "Day 7: MINOR PROJECT SUBMISSION": {
           title: "Minor Project",
           subtitle: "Submit your Week 2 project",
           videoType: null,
           videoId: null,
           videoTitle: "",
           videoDescription: "",
           resources: []
       },
       "Day 1: ES6 Features": {
           title: "ES6 Features",
           subtitle: "Modern JavaScript",
           videoType: "youtube",
           videoId: "HDXRR0pW28w",
           videoTitle: "ES6 Basics",
           videoDescription: "Learn modern JS features...",
           resources: []
       },
       "Day 2: Promises & Async": {
           title: "Promises & Async",
           subtitle: "Asynchronous programming",
           videoType: "youtube",
           videoId: "DHvZLI7Db8E",
           videoTitle: "Async JS",
           videoDescription: "Master promises and async/await...",
           resources: []
       },
       "Day 3: API Integration": {
           title: "API Integration",
           subtitle: "Working with APIs",
           videoType: "youtube",
           videoId: "ZVL_ahq-iG0",
           videoTitle: "API Basics",
           videoDescription: "Connect to APIs with JS...",
           resources: []
       },
       "Day 4: Error Handling": {
           title: "Error Handling",
           subtitle: "Managing errors",
           videoType: "youtube",
           videoId: "cFTFtuEQ-10",
           videoTitle: "Error Management",
           videoDescription: "Learn try/catch and error handling...",
           resources: []
       },
       "Day 5: Modern JS Patterns": {
           title: "Modern JS Patterns",
           subtitle: "Design patterns in JS",
           videoType: "youtube",
           videoId: "WEghIXsRdLI",
           videoTitle: "Design Patterns",
           videoDescription: "Explore modern JS patterns...",
           resources: []
       },
       "Day 6: LIVE CLASS": {
           title: "Week 3 Live Class",
           subtitle: "Advanced JS review",
           videoType: "youtube",
           videoId: "PkZNo7MFNFg",
           videoTitle: "Advanced JS Demo",
           videoDescription: "Review of Week 3 topics...",
           resources: []
       },
       "Day 7: MINOR PROJECT SUBMISSION": {
           title: "Minor Project",
           subtitle: "Submit your Week 3 project",
           videoType: null,
           videoId: null,
           videoTitle: "",
           videoDescription: "",
           resources: []
       },
       "Day 1: Mobile-First Approach": {
           title: "Mobile-First Approach",
           subtitle: "Mobile-first design",
           videoType: "youtube",
           videoId: "0ohtVzCSH4A",
           videoTitle: "Mobile Design",
           videoDescription: "Learn mobile-first principles...",
           resources: []
       },
       "Day 2: Media Queries": {
           title: "Media Queries",
           subtitle: "Responsive CSS",
           videoType: "youtube",
           videoId: "t60K23ZARnQ",
           videoTitle: "Media Queries",
           videoDescription: "Master responsive design with media queries...",
           resources: []
       },
       "Day 3: Flexbox": {
           title: "Flexbox",
           subtitle: "Flexible box layout",
           videoType: "youtube",
           videoId: "K74l26pE4YA",
           videoTitle: "Flexbox Basics",
           videoDescription: "Learn CSS Flexbox...",
           resources: []
       },
       "Day 4: CSS Grid": {
           title: "CSS Grid",
           subtitle: "Grid layout system",
           videoType: "youtube",
           videoId: "FSs_JYyyz1c",
           videoTitle: "Grid Basics",
           videoDescription: "Master CSS Grid...",
           resources: []
       },
       "Day 5: Responsive Images": {
           title: "Responsive Images",
           subtitle: "Image optimization",
           videoType: "youtube",
           videoId: "pZ-_LPmYxZ8",
           videoTitle: "Image Handling",
           videoDescription: "Optimize images for responsive design...",
           resources: []
       },
       "Day 6: LIVE CLASS": {
           title: "Week 4 Live Class",
           subtitle: "Responsive design review",
           videoType: "youtube",
           videoId: "UB1O30fR-EE",
           videoTitle: "Responsive Demo",
           videoDescription: "Review of Week 4 topics...",
           resources: []
       },
       "Day 7: MINOR PROJECT SUBMISSION": {
           title: "Minor Project",
           subtitle: "Submit your Week 4 project",
           videoType: null,
           videoId: null,
           videoTitle: "",
           videoDescription: "",
           resources: []
       },
       "MAJOR PROJECT SUBMISSION": {
           title: "Major Project",
           subtitle: "Submit your final project",
           videoType: null,
           videoId: null,
           videoTitle: "",
           videoDescription: "",
           resources: []
       }
   };

// YouTube Player Functions
function onYouTubeIframeAPIReady() {
   const videoElement = document.getElementById('videoPlayer');
   if (!videoElement || player) return;
   player = new YT.Player('videoPlayer', {
       height: '100%',
       width: '100%',
       videoId: 'pQN-pnXPaVg',
       playerVars: {
           'controls': 0,
           'playsinline': 1,
           'rel': 0,
           'showinfo': 0,
           'modestbranding': 1,
           'iv_load_policy': 3,
           'disablekb': 1,
           'enablejsapi': 1,
           'fs': 1,
           'loop': 0
       },
       events: {
           'onStateChange': onPlayerStateChange,
           'onReady': onPlayerReady,
           'onError': (e) => console.error('YouTube Player Error:', e.data)
       }
   });
   currentVideoElement = videoElement;
}

function onPlayerReady(event) {
   setupCustomControls();
   updateProgressBar();
}

function onPlayerStateChange(event) {
   const playPauseButton = document.querySelector('.play-pause');
   if (event.data === YT.PlayerState.PLAYING) {
       playPauseButton.textContent = '⏸';
   } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
       playPauseButton.textContent = '▶';
   }
}

// Video Control Functions
function setupCustomControls() {
   const playPauseButton = document.querySelector('.play-pause');
   const fullscreenButton = document.querySelector('.fullscreen');
   const volumeButton = document.querySelector('.volume');
   const progressContainer = document.querySelector('.progress-container');
   const volumeSlider = document.querySelector('.volume-slider');
   const progressBar = document.querySelector('.progress-bar');
   const volumeLevel = document.querySelector('.volume-level');

   playPauseButton.addEventListener('click', togglePlayPause);
   fullscreenButton.addEventListener('click', toggleFullscreen);
   volumeButton.addEventListener('click', toggleMute);

   progressContainer.addEventListener('click', (e) => {
       const rect = progressContainer.getBoundingClientRect();
       const pos = (e.clientX - rect.left) / rect.width;
       seekToPosition(pos);
   });

   volumeSlider.addEventListener('click', (e) => {
       const rect = volumeSlider.getBoundingClientRect();
       const volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
       adjustVolume(volume);
   });

   progressContainer.addEventListener('mousemove', (e) => {
       const rect = progressContainer.getBoundingClientRect();
       const pos = (e.clientX - rect.left) / rect.width;
       showProgressHover(pos);
   });

   progressContainer.addEventListener('mouseleave', hideProgressHover);

   let isDraggingProgress = false;
   progressContainer.addEventListener('mousedown', (e) => {
       isDraggingProgress = true;
       const rect = progressContainer.getBoundingClientRect();
       const pos = (e.clientX - rect.left) / rect.width;
       seekToPosition(pos);
   });

   document.addEventListener('mousemove', (e) => {
       if (isDraggingProgress) {
           const rect = progressContainer.getBoundingClientRect();
           const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
           seekToPosition(pos);
       }
   });

   document.addEventListener('mouseup', () => {
       isDraggingProgress = false;
   });

   let isDraggingVolume = false;
   volumeSlider.addEventListener('mousedown', (e) => {
       isDraggingVolume = true;
       const rect = volumeSlider.getBoundingClientRect();
       const volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
       adjustVolume(volume);
   });

   document.addEventListener('mousemove', (e) => {
       if (isDraggingVolume) {
           const rect = volumeSlider.getBoundingClientRect();
           const volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
           adjustVolume(volume);
       }
   });

   document.addEventListener('mouseup', () => {
       isDraggingVolume = false;
   });
}

function togglePlayPause() {
   if (player) {
       if (player.getPlayerState() === YT.PlayerState.PLAYING) {
           player.pauseVideo();
       } else {
           player.playVideo();
       }
   }
}

function toggleFullscreen() {
   const videoContainer = document.querySelector('.video-container');
   if (!document.fullscreenElement) {
       videoContainer.requestFullscreen();
   } else {
       document.exitFullscreen();
   }
}

function toggleMute() {
   if (player) {
       if (player.isMuted()) {
           player.unMute();
           document.querySelector('.volume').textContent = '🔊';
           document.querySelector('.volume-level').style.width = `${player.getVolume()}%`;
       } else {
           player.mute();
           document.querySelector('.volume').textContent = '🔇';
           document.querySelector('.volume-level').style.width = '0%';
       }
   }
}

function seekToPosition(pos) {
   if (player && player.getDuration) {
       const duration = player.getDuration();
       player.seekTo(pos * duration, true);
   }
}

function adjustVolume(volume) {
   if (player && player.setVolume) {
       player.setVolume(volume * 100);
       document.querySelector('.volume-level').style.width = `${volume * 100}%`;
       document.querySelector('.volume').textContent = volume > 0 ? '🔊' : '🔇';
   }
}

function showProgressHover(pos) {
   const hover = document.querySelector('.progress-hover');
   hover.style.display = 'block';
   hover.style.width = `${pos * 100}%`;

   const duration = player && player.getDuration ? player.getDuration() : 0;
   const time = pos * duration;
   const tooltip = document.querySelector('.progress-tooltip') || createTooltip();
   tooltip.textContent = formatTime(time);
   tooltip.style.left = `${pos * 100}%`;
   tooltip.style.display = 'block';
}

function hideProgressHover() {
   const hover = document.querySelector('.progress-hover');
   hover.style.display = 'none';
   const tooltip = document.querySelector('.progress-tooltip');
   if (tooltip) tooltip.style.display = 'none';
}

function createTooltip() {
   const tooltip = document.createElement('div');
   tooltip.className = 'progress-tooltip';
   document.querySelector('.progress-container').appendChild(tooltip);
   return tooltip;
}

function updateProgressBar() {
   setInterval(() => {
       if (player && player.getCurrentTime) {
           const currentTime = player.getCurrentTime();
           const duration = player.getDuration();
           if (duration > 0) {
               const progress = (currentTime / duration) * 100;
               document.querySelector('.progress-bar').style.width = `${progress}%`;
               document.querySelector('.time-display').textContent = 
                   `${formatTime(currentTime)} / ${formatTime(duration)}`;
           }
       }
   }, 100);
}

function formatTime(seconds) {
   const minutes = Math.floor(seconds / 60);
   seconds = Math.floor(seconds % 60);
   return minutes + ':' + seconds.toString().padStart(2, '0');
}

// Content Update Function
function updateContent(lessonName) {
   const defaultContent = document.getElementById('default-content');
   const lessonContentDiv = document.getElementById('lesson-content');
   const lessonData = lessonContent[lessonName];

   if (lessonData) {
       defaultContent.style.display = 'none';
       lessonContentDiv.style.display = 'block';

       document.getElementById('lesson-title').textContent = lessonData.title;
       document.getElementById('lesson-subtitle').textContent = lessonData.subtitle;
       document.getElementById('video-title').textContent = lessonData.videoTitle;
       document.getElementById('video-description').textContent = lessonData.videoDescription;

       const videoContainer = document.querySelector('.video-container');
       let videoElement = document.getElementById('videoPlayer');
       
       if (lessonData.videoType === 'youtube') {
           if (!videoElement || videoElement.tagName !== 'IFRAME') {
               if (videoElement) videoElement.remove();
               videoElement = document.createElement('div');
               videoElement.id = 'videoPlayer';
               videoContainer.insertBefore(videoElement, document.querySelector('.custom-controls'));
               player = null;
               currentVideoElement = null;
               onYouTubeIframeAPIReady();
           }
           setTimeout(() => {
               if (player) player.loadVideoById(lessonData.videoId);
           }, 100);
           currentVideoElement = videoElement;
       } else {
           if (videoElement) videoElement.remove();
           currentVideoElement = null;
       }

       const resourcesContainer = document.querySelector('.lesson-resources');
       resourcesContainer.innerHTML = '<h2 class="resources-title">Lesson Resources</h2>';
       lessonData.resources.forEach(resource => {
           resourcesContainer.innerHTML += `
               <div class="resource-item">
                   <div class="resource-icon">📄</div>
                   <div class="resource-info">
                       <div class="resource-name">${resource.name}</div>
                       <div class="resource-size">${resource.type} • ${resource.size}</div>
                   </div>
                   <button class="download-button">Download</button>
               </div>
           `;
       });
   } else {
       defaultContent.style.display = 'block';
       lessonContentDiv.style.display = 'none';
       const videoElement = document.getElementById('videoPlayer');
       if (videoElement) videoElement.remove();
       currentVideoElement = null;
   }
}

// Assignment Upload Functions
function setupFileUpload() {
   const uploadArea = document.getElementById('upload-area');
   const fileInput = document.getElementById('file-input');
   
   uploadArea.addEventListener('click', function() {
       fileInput.click();
   });
   
   fileInput.addEventListener('change', function() {
       handleFiles(this.files);
   });
   
   ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
       uploadArea.addEventListener(eventName, preventDefaults, false);
       document.body.addEventListener(eventName, preventDefaults, false);
   });
   
   ['dragenter', 'dragover'].forEach(eventName => {
       uploadArea.addEventListener(eventName, highlight, false);
   });
   
   ['dragleave', 'drop'].forEach(eventName => {
       uploadArea.addEventListener(eventName, unhighlight, false);
   });
   
   uploadArea.addEventListener('drop', handleDrop, false);
   
   function preventDefaults(e) {
       e.preventDefault();
       e.stopPropagation();
   }
   
   function highlight() {
       uploadArea.classList.add('upload-dragover');
   }
   
   function unhighlight() {
       uploadArea.classList.remove('upload-dragover');
   }
   
   function handleDrop(e) {
       const dt = e.dataTransfer;
       const files = dt.files;
       handleFiles(files);
   }
   
   function handleFiles(files) {
       if (files.length) {
           alert(`Selected ${files.length} file(s) successfully: ${Array.from(files).map(f => f.name).join(', ')}`);
           fileInput.value = '';
       }
   }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
   setupFileUpload();
   
   // Sidebar section header toggle
   document.querySelectorAll('.section-header').forEach(header => {
       header.addEventListener('click', function() {
           this.classList.toggle('active');
           const content = this.nextElementSibling;
           content.classList.toggle('active');
       });
   });

   // Sidebar lesson item click
   document.querySelectorAll('.lesson-item').forEach(item => {
       item.addEventListener('click', function() {
           document.querySelectorAll('.lesson-item').forEach(i => i.classList.remove('active'));
           this.classList.add('active');
           const lessonName = this.querySelector('.lesson-info > span:first-child').textContent;
           updateContent(lessonName);
       });
   });

   // Mobile menu and navigation toggle
   const menuToggleButton = document.getElementById('menuToggleButton');
   const menuContent = document.getElementById('menuContent');
   const hamburger = document.getElementById('menuToggle');
   const mobileMenu = document.getElementById('mobileMenu');
   const sidebar = document.getElementById('sidebar');

   menuToggleButton.addEventListener('click', () => {
       menuContent.classList.toggle('active');
   });

   hamburger.addEventListener('click', () => {
       mobileMenu.classList.toggle('active');
       hamburger.classList.toggle('active');
       sidebar.classList.toggle('open');
   });

   // Menu section header toggle
   document.querySelectorAll('.menu-section-header').forEach(header => {
       header.addEventListener('click', function(event) {
           event.stopPropagation(); // Prevent closing menu when clicking headers
           this.classList.toggle('active');
           const content = this.nextElementSibling;
           content.classList.toggle('active');
       });
   });

   // Menu lesson item click
   document.querySelectorAll('.menu-lesson-item').forEach(item => {
       item.addEventListener('click', function() {
           const lessonName = this.getAttribute('data-lesson');
           updateContent(lessonName);
           menuContent.classList.remove('active'); // Close menu after selection
       });
   });

   // Close menu/sidebar when clicking outside
   document.addEventListener('click', (e) => {
       if (window.innerWidth <= 768) {
           if (!menuContent.contains(e.target) && !menuToggleButton.contains(e.target)) {
               menuContent.classList.remove('active');
           }
           if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && !sidebar.contains(e.target)) {
               mobileMenu.classList.remove('active');
               hamburger.classList.remove('active');
               sidebar.classList.remove('open');
           }
       }
   });

   // Adjust on resize
   window.addEventListener('resize', () => {
       if (window.innerWidth > 768) {
           mobileMenu.classList.remove('active');
           hamburger.classList.remove('active');
           sidebar.style.display = 'block';
           menuContent.classList.remove('active');
       } else {
           sidebar.style.display = 'none';
       }
   });

   // On page load, show welcome content
   updateContent(null);
});
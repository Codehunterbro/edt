

    document.addEventListener('DOMContentLoaded', function() {
        // Setup right-to-left scrolling
        const rtlTrack = document.getElementById('rtl-track');
        
        // Duplicate cards for the RTL track
        rtlTrack.innerHTML += rtlTrack.innerHTML;
        
        let rtlPosition = 0;
        const rtlMaxScroll = rtlTrack.offsetWidth / 2;
        let rtlAnimationId;
        let rtlPaused = false;
        
        function scrollRightToLeft() {
            if (!rtlPaused) {
                rtlPosition += 1; // Adjust scroll speed here
                
                if (rtlPosition >= rtlMaxScroll) {
                    rtlPosition = 0;
                }
                
                rtlTrack.style.transform = `translateX(-${rtlPosition}px)`;
            }
            rtlAnimationId = requestAnimationFrame(scrollRightToLeft);
        }
        
        // Setup left-to-right scrolling
        const ltrTrack = document.getElementById('ltr-track');
        
        // Duplicate cards for the LTR track
        ltrTrack.innerHTML += ltrTrack.innerHTML;
        
        // For left-to-right scrolling, start from a negative position
        let ltrPosition = -ltrTrack.offsetWidth / 2;
        let ltrAnimationId;
        let ltrPaused = false;
        
        function scrollLeftToRight() {
            if (!ltrPaused) {
                ltrPosition += 1; // Adjust scroll speed here
                
                // Reset when we reach 0 (original position)
                if (ltrPosition >= 0) {
                    ltrPosition = -ltrTrack.offsetWidth / 2;
                }
                
                ltrTrack.style.transform = `translateX(${ltrPosition}px)`;
            }
            ltrAnimationId = requestAnimationFrame(scrollLeftToRight);
        }
        
        // Start both scrolling animations
        scrollRightToLeft();
        scrollLeftToRight();
        
        // Pause scrolling on hover for both containers
        const rtlContainer = document.getElementById('rtl-container');
        const ltrContainer = document.getElementById('ltr-container');
        
        rtlContainer.addEventListener('mouseenter', function() {
            rtlPaused = true;
        });
        
        rtlContainer.addEventListener('mouseleave', function() {
            rtlPaused = false;
        });
        
        ltrContainer.addEventListener('mouseenter', function() {
            ltrPaused = true;
        });
        
        ltrContainer.addEventListener('mouseleave', function() {
            ltrPaused = false;
        });
    });

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    menuOverlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking menu items
    const menuItems = document.querySelectorAll('#mobileMenu a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });



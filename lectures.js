// Enhanced Loading Screen - Hide after 2 seconds
        setTimeout(function() {
            document.getElementById('loadingScreen').classList.add('hidden');
            
            // Create floating particles
            createParticles();
            
            // Initialize other animations
            initAnimations();
        }, 2000);

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = window.innerWidth < 768 ? 30 : 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * window.innerWidth;
                const delay = Math.random() * 15;
                const duration = 10 + Math.random() * 20;
                const opacity = Math.random() * 0.5 + 0.1;
                
                // Apply styles
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}px`;
                particle.style.opacity = opacity;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                // Random color for particles
                const colors = ['var(--pure-white)', 'var(--gold)', 'var(--silver)', 'var(--bronze)'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                // Add to container
                particlesContainer.appendChild(particle);
            }
        }

        // Function to calculate time remaining until a specific hour
        function getTimeUntil(hour) {
            const now = new Date();
            const targetTime = new Date();
            
            // Set target time to today's 5 PM or 9 PM
            targetTime.setHours(hour, 0, 0, 0);
            
            // If target time has already passed today, set it for tomorrow
            if (now > targetTime) {
                targetTime.setDate(targetTime.getDate() + 1);
            }
            
            const diff = targetTime - now;
            
            // Calculate hours, minutes, seconds
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            return {
                hours,
                minutes,
                seconds,
                totalMs: diff,
                isLive: now.getHours() >= hour && now.getHours() < hour + 2 // Assuming class lasts 2 hours
            };
        }

        // Function to format time
        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        // Initialize animations
        function initAnimations() {
            // Mobile menu toggle
            const menuBtn = document.getElementById('menuBtn');
            const navMenu = document.getElementById('navMenu');
            
            menuBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.getElementById('mainHeader');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Live classes data with timing system
            const liveClasses = [
                {
                    subject: "Science - EduSparK",
                    teacher: "Prashant Kirad",
                    status: "upcoming", // Will be updated dynamically
                    time: "Starts at 5:00 PM", // Will be updated dynamically
                    viewers: "208  waiting",
                    startHour: 17, // 5 PM in 24-hour format
                    link: "/live/11th/pcmb/5" // Your live class link
                },
                {
                    subject: "SST - EduSparK",
                    teacher: "Sobhit Nirvan",
                    status: "upcoming", // Will be updated dynamically
                    time: "Starts at 9:00 PM", // Will be updated dynamically
                    viewers: "85 waiting",
                    startHour: 21, // 9 PM in 24-hour format
                    link: "/live/11th/pcmb/9" // Your live class link
                },
                
            ];

            // Enhanced Subjects data with new design (no images)
            const subjects = [
                {
                    title: "Science",
                    teacher: "Prashant Kirad",
                    lectures: "N/A",
                    duration: "&",
                    icon: "flask"
                },
                {
                    title: "Mathematics",
                    teacher: "Sobhit Nirwan",
                    lectures: "N/A",
                    duration: "&&",
                    icon: "square-root-alt"
                },
                {
                    title: "English",
                    teacher: "English Expert",
                    lectures: "N/A",
                    duration: "&&",
                    icon: "language"
                },
                {
                    title: "Social Science",
                    teacher: "Digraj Singh Rajput",
                    lectures: "N/A",
                    duration: "&&",
                    icon: "globe-asia"
                }
            ];

            // Function to update live class cards based on current time
            function updateLiveClasses() {
                const liveContainer = document.getElementById('liveClassesContainer');
                liveContainer.innerHTML = '';
                
                liveClasses.forEach((cls, index) => {
                    const timeInfo = getTimeUntil(cls.startHour);
                    const isLive = timeInfo.isLive;
                    
                    // Update class status and time based on current time
                    if (isLive) {
                        cls.status = 'live';
                        // Calculate remaining time (assuming class lasts 2 hours)
                        const endTime = new Date();
                        endTime.setHours(cls.startHour + 2, 0, 0, 0);
                        const remainingMs = endTime - new Date();
                        const remainingMins = Math.floor(remainingMs / (1000 * 60));
                        cls.time = `Live Now - ${remainingMins} mins remaining`;
                    } else {
                        cls.status = 'upcoming';
                        cls.time = `Starts in ${formatTime(timeInfo.hours)}h ${formatTime(timeInfo.minutes)}m`;
                    }
                    
                    const card = document.createElement('div');
                    card.className = 'live-class-card';
                    card.innerHTML = `
                        <div class="live-badge ${cls.status === 'live' ? '' : 'upcoming'}">${cls.status === 'live' ? 'Live Now' : 'Coming Soon'}</div>
                        <h3 class="live-class-subject">${cls.subject}</h3>
                        <div class="live-class-teacher">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <span>${cls.teacher}</span>
                        </div>
                        <div class="live-class-time">
                            <i class="far fa-clock"></i>
                            <span>${cls.time}</span>
                        </div>
                        ${!isLive ? `
                        <div class="countdown-timer">
                            <i class="fas fa-hourglass-start"></i>
                            <span>Starts at ${cls.startHour > 12 ? cls.startHour-12 : cls.startHour}:00 ${cls.startHour >= 12 ? 'PM' : 'AM'}</span>
                        </div>
                        ` : ''}
                        <div class="live-class-time">
                            <i class="fas fa-users"></i>
                            <span>${cls.viewers}</span>
                        </div>
                        <button class="live-join-btn" onclick="${isLive ? `window.open('${cls.link}', '_blank')` : 'setReminder()'}">
                            ${isLive ? 'Join Now' : 'Set Reminder'}
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    `;
                    liveContainer.appendChild(card);
                    
                    // Add animation delay based on index
                    card.style.animationDelay = `${2.5 + index * 0.2}s`;
                });
            }

            // Initial update of live classes
            updateLiveClasses();
            
            // Update live classes every minute
            setInterval(updateLiveClasses, 60000);

            // Render subjects with new design
            const subjectsContainer = document.getElementById('subjectsContainer');
            subjects.forEach((sub, index) => {
                const card = document.createElement('div');
                card.className = 'subject-card';
                card.innerHTML = `
                    <div class="subject-header">
                        <div class="subject-icon">
                            <i class="fas fa-${sub.icon}"></i>
                        </div>
                        <div>
                            <h3 class="subject-title">${sub.title}</h3>
                            <div class="subject-teacher">
                                <i class="fas fa-chalkboard-teacher"></i>
                                <span>${sub.teacher}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="subject-stats">
                        <div class="stat-item">
                            <span class="stat-value">${sub.lectures}</span>
                            <span class="stat-label">Lectures</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${sub.duration}</span>
                            <span class="stat-label">Hours</span>
                        </div>
                    </div>
                    
                    <button class="subject-link">
                        View Curriculum
                        <i class="fas fa-arrow-right"></i>
                    </button>
                `;
                subjectsContainer.appendChild(card);
                
                // Add animation delay based on index
                card.style.animationDelay = `${2.7 + index * 0.1}s`;
            });

            // Add hover effect to section titles
            const sectionTitles = document.querySelectorAll('.section-title');
            sectionTitles.forEach(title => {
                title.addEventListener('mouseenter', () => {
                    title.style.transform = 'translateX(5px)';
                });
                title.addEventListener('mouseleave', () => {
                    title.style.transform = 'translateX(0)';
                });
            });

            // Add ripple effect to buttons
            document.querySelectorAll('.nav-btn, .subject-link, .live-join-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const x = e.clientX - e.target.getBoundingClientRect().left;
                    const y = e.clientY - e.target.getBoundingClientRect().top;
                    
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 1000);
                });
            });

            // Set reminder function
            window.setReminder = function() {
                alert('Reminder set for this class! We will notify you when it starts.');
            };
        } 

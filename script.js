document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Set couple names from URL parameter or use default
    const coupleNames = getQueryParameter('couple');
    
    // Set guest name from URL parameter or use default
    const guestName = getQueryParameter('guest');
    document.getElementById('guestName').textContent = guestName || 'Guest';

    // Variables for the invitation and music
    const loadingContainer = document.getElementById('loadingContainer');
    const openButton = document.getElementById('openButton');
    const invitationCover = document.getElementById('invitationCover');
    const invitationContent = document.getElementById('invitationContent');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');
    const audioControls = document.querySelector('.audio-controls');
    
    // Get the modal
    var modal1 = document.getElementById("myModal");

    // Get the modal content and caption
    var modalImg1 = document.getElementById("img01");
    var captionText1 = document.getElementById("caption");

    // Get navigation buttons
    var prevModalBtn1 = document.querySelector(".prev");
    var nextModalBtn1 = document.querySelector(".next");

    var images1 = document.querySelectorAll(".gallery img");
    var currentIndex1 = 0;

    // Function to open modal with specific image
    function openModal1(index1) {
        modal1.style.display = "block";
        modalImg1.src = images1[index1].src;
        captionText1.innerHTML = images1[index1].alt;
        currentIndex1 = index1;
    }

    // Loop through images and add click event
    images1.forEach((img1, index1) => {
        img1.onclick = function() {
            openModal1(index1);
        };
    });

    // Function to show next image
    nextModalBtn1.onclick = function() {
        currentIndex1 = (currentIndex1 + 1) % images1.length; // Loop back to first image
        openModal1(currentIndex1);
    };

    // Function to show previous image
    prevModalBtn1.onclick = function() {
        currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length; // Loop to last image
        openModal1(currentIndex1);
    };

    // Close modal when clicking the close button
    document.querySelector(".close").onclick = function() {
        modal1.style.display = "none";
    };

    // Load Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottieAnimation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'grey_dots.json' // Replace with the path to your Lottie file
    });

    // Show cover after loading animation
    window.addEventListener('load', () => {
        setTimeout(() => {
        // Hide loading animation
        loadingContainer.style.display = 'none';
    
        // Show invitation cover
        invitationCover.style.display = 'flex';
        }, 2000); // Adjust duration for the loading animation
    });

    // Event listener to open the invitation and start music
    openButton.addEventListener('click', function() {
        invitationCover.style.display = 'none';
        invitationContent.style.display = 'flex';
        audioControls.style.display = 'flex'; // Show the audio controls
        togglePlayPause();
    });


    // Fungsi toggle play/pause
    let isPlaying = false;

    function togglePlayPause() {
        if (isPlaying) {
            backgroundMusic.pause();
            playPauseButton.classList.remove('fa-circle-pause');
            playPauseButton.classList.add('fa-circle-play');
        } else {
            backgroundMusic.play();
            playPauseButton.classList.remove('fa-circle-play');
            playPauseButton.classList.add('fa-circle-pause');
        }
        isPlaying = !isPlaying;
    }

    // Tambahkan event listener
    playPauseButton.addEventListener('click', togglePlayPause);


    // Next Previous
    const albums = [
        { image: "album1.jpeg", color: "linear-gradient(to bottom, #DAC4BC, #000000)" },
        { image: "album2.jpeg", color: "linear-gradient(to bottom, #A4A39E, #000000)" },
        { image: "album3.jpeg", color: "linear-gradient(to bottom, #373028, #000000)" },
        { image: "album4.jpeg", color: "linear-gradient(to bottom, #AEACA9, #000000)" }
    ];

    let currentIndex = 0;
        const albumImage = document.getElementById("albumImage");
        const section1 = document.getElementById("section1");

    function updateAlbum(index) {
        albumImage.src = albums[index].image;
        section1.style.background = albums[index].color;
    }

    document.getElementById("previousButton").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + albums.length) % albums.length;
        updateAlbum(currentIndex);
    });

    document.getElementById("nextButton").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % albums.length;
        updateAlbum(currentIndex);
    });

    // Set awal
    updateAlbum(currentIndex);

    // Smooth Next Previous
    function updateAlbum(index) {
        albumImage.classList.add("fade"); // Tambah efek fade
        setTimeout(() => {
            albumImage.src = albums[index].image;
            section1.style.background = albums[index].color;
            albumImage.classList.remove("fade");
        }, 300);
    }

    // Fungsi untuk menambahkan tanggal ke Google Calendar
    function addToGoogleCalendar() {
        const eventTitle = 'Pernikahan Allen & Dinda';
        const eventLocation = 'Gedung BPSDMD';
        const eventDetails = 'Kami mengundang Anda untuk hadir di hari bahagia kami!';
        const startDate = '20250515T153000Z'; // Format: YYYYMMDDTHHmmssZ (UTC)
        const endDate = '20250515T180000Z';
        
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;
        
        window.open(googleCalendarUrl, '_blank');
    }

    document.getElementById('addGoogleCalendar').addEventListener('click', addToGoogleCalendar);


    // Random Section
    document.getElementById("shuffleButton").addEventListener("click", function () {
        // Menentukan jumlah section yang tersedia
        const totalSections = 8;
        
        // Mendapatkan angka acak antara 1 dan 8
        const randomSection = Math.floor(Math.random() * totalSections) + 1;
        
        // Menemukan elemen section tujuan
        const targetSection = document.getElementById(`section${randomSection}`);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    //spotify song code

    const modalSpotify = document.getElementById("imageModal");
    const btnSpotify = document.getElementById("spotifyButton");
    const closeSpotify = document.querySelector(".close-spotify");

    // Event listener untuk membuka modal
    btnSpotify.addEventListener("click", function () {
        modalSpotify.style.display = "flex";
    });

    // Event listener untuk menutup modal saat tombol close ditekan
    closeSpotify.addEventListener("click", function () {
        modalSpotify.style.display = "none";
    });

    // Event listener untuk menutup modal saat klik di luar modal
    window.addEventListener("click", function (event) {
        if (event.target === modalSpotify) {
            modalSpotify.style.display = "none";
        }
    });


    // Select the video element
    const video = document.getElementById('invitationVideo');
  
    // Intersection Observer to auto-play/pause when in/out of viewport
    const handleVideoPlayback = (entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
        });
    }

    // Create an Intersection Observer
    const observer1 = new IntersectionObserver(handleVideoPlayback, {
    threshold: 0.5 // Play video when 50% of it is visible
    });

    // Observe the video element
    observer1.observe(video);


    // Countdown Timer
    function calculateCountdown() {
        const weddingDate = new Date('2025-05-15T15:30:00'); // Tanggal pernikahan
        const currentDate = new Date();
        let timeRemaining = weddingDate - currentDate;
        const totalTime = weddingDate - new Date('2025-01-10T09:30:00'); // Total waktu sejak awal hitungan (ubah jika perlu)
    
        if (timeRemaining <= 0) {
            clearInterval(intervalId);
            timeRemaining = 0;
        }
    
        // Hitung waktu
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        // Update angka di elemen
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    
        // Hitung persentase progress bar
        const progress = ((totalTime - timeRemaining) / totalTime) * 100;
        document.getElementById('progress-bar').style.width = `${Math.min(progress, 100)}%`; // Set width max 100%
    }
    
    const intervalId = setInterval(calculateCountdown, 1000);
    calculateCountdown();    

    // Select all galleries and buttons
    const galleries = document.querySelectorAll('.gallery');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const nextButtons = document.querySelectorAll('.next-btn');

    // Function to handle scrolling
    function scrollGallery(btn, direction) {
        const gallery = btn.closest('.gallery-container').querySelector('.gallery');
        gallery.scrollBy({ left: direction * gallery.clientWidth * 0.75, behavior: 'smooth' });
    }

    // Add event listeners for all prev buttons
    prevButtons.forEach(prevBtn => {
        prevBtn.addEventListener('click', () => scrollGallery(prevBtn, -1));
    });

    // Add event listeners for all next buttons
    nextButtons.forEach(nextBtn => {
        nextBtn.addEventListener('click', () => scrollGallery(nextBtn, 1));
    });

    // Gesture for mobile
    galleries.forEach(gallery => {
        let startX;
        gallery.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        gallery.addEventListener('touchmove', (e) => {
            const deltaX = startX - e.touches[0].clientX;
            gallery.scrollBy({ left: deltaX, behavior: 'smooth' });
        });
    });


    // Function to copy account details
    function copyAccountDetails(event) {
        const button = event.target; // Get the clicked button
        const accountDetails = button.previousElementSibling.innerText; // Get the account number
        navigator.clipboard.writeText(accountDetails)
            .then(() => {
                alert('Account details copied!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    // Attach event listener to all copy buttons
    const copyButtons = document.querySelectorAll('.copyButton');
    copyButtons.forEach(button => {
        button.addEventListener('click', copyAccountDetails);
    });


    // function to show animation 
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .fade-slide, .slide-down, .slide-up, .pop-up, .slide-left, .slide-right');
    elements.forEach(element => {
        observer.observe(element);
    });
       


    // Messages handler
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = guestName; // Gunakan nama dari URL
            const message = document.getElementById('guestMessage').value;
            const timestamp = new Date().toISOString(); // Simpan waktu dalam format ISO

            fetch('https://weddify-message.glitch.me/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, message, timestamp })
            })
            .then(response => response.json())
            .then(data => {
                loadMessages();
                messageForm.reset();
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Function to convert timestamp to relative time
    function timeAgo(time) {
        const now = new Date();
        const past = new Date(time);
        const diff = Math.floor((now - past) / 1000); // Selisih dalam detik

        if (diff < 60) return `${diff} detik yang lalu`;
        if (diff < 3600) return `${Math.floor(diff / 60)} menit yang lalu`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} jam yang lalu`;
        return `${Math.floor(diff / 86400)} hari yang lalu`;
    }

    // Function to load messages
    function loadMessages() {
        fetch('https://weddify-message.glitch.me/messages')
            .then(response => response.json())
            .then(data => {
                const messageList = document.getElementById('messageList');
                if (messageList) {
                    messageList.innerHTML = '';
                    data.forEach(msg => {
                        const messageItem = document.createElement('div');
                        messageItem.classList.add('message');

                        // Element untuk nama pengirim
                        const authorElement = document.createElement('div');
                        authorElement.classList.add('message-author');
                        authorElement.textContent = msg.name;

                        // Element untuk waktu pesan
                        const timeElement = document.createElement('div');
                        timeElement.classList.add('message-time');
                        timeElement.textContent = timeAgo(msg.timestamp);

                        // Element untuk isi pesan
                        const contentElement = document.createElement('div');
                        contentElement.classList.add('message-content');
                        contentElement.textContent = msg.message;

                        // Gabungkan elemen-elemen pesan
                        const bodyElement = document.createElement('div');
                        bodyElement.classList.add('message-body');
                        bodyElement.appendChild(authorElement);
                        bodyElement.appendChild(timeElement);
                        bodyElement.appendChild(contentElement);
                        

                        // Tambahkan ke dalam messageItem
                        messageItem.appendChild(bodyElement);

                        // Tambahkan ke dalam daftar pesan
                        messageList.appendChild(messageItem);
                    });
                }
            })
            .catch(error => console.error('Error:', error));
    }

    // Load messages saat halaman dimuat
    window.onload = loadMessages;
});

// 1. SENARAI PERKATAAN (TUKAR BAHASA)
const translations = {
    en: {
        envSubtitle: "THE WEDDING OF",
        openInvitation: "OPEN INVITATION",
        heroSubtitle: "Together with their families",
        heroInvite: "We invite you to celebrate our love",
        home: "Home",
        story: "Story",
        events: "Events",
        gallery: "Gallery",
        rsvp: "RSVP",
        info: "Info",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        counting: "Counting down",
        ourStory: "Our Story",
        weddingDetails: "Wedding Details",
        orderOfDay: "Order of the Day",
        venue: "Venue",
        galleryTitle: "Gallery",
        rsvpTitle: "RSVP",
        fullName: "Full Name ",
        attendance: "Attendance",
        attendYes: "Yes, I will attend",
        attendNo: "Sorry, I cannot attend",
        guests: "Number of Guests ",
        phone: "Phone Number ",
        mealPref: "Meal Preference",
        noPref: "No preference",
        chicken: "Chicken",
        beef: "Beef",
        vegetarian: "Vegetarian",
        wishes: "Message / Wishes ",
        confirmRsvp: "CONFIRM RSVP",
        infoTitle: "Information",
        dressCode: "Dress Code",
        weddingGift: "Wedding Gift",
        giftMsg: "Your presence is the greatest gift.",
        faqTitle: "FAQ"
    },
    ms: {
        envSubtitle: "PERKAHWINAN",
        openInvitation: "BUKA JEMPUTAN",
        heroSubtitle: "Bersama keluarga mereka",
        heroInvite: "Kami menjemput anda meraikan cinta kami",
        home: "Utama",
        story: "Cerita",
        events: "Acara",
        gallery: "Galeri",
        rsvp: "RSVP",
        info: "Maklumat",
        days: "Hari",
        hours: "Jam",
        minutes: "Minit",
        seconds: "Saat",
        counting: "Mengira detik",
        ourStory: "Cerita Kami",
        weddingDetails: "Butiran Perkahwinan",
        orderOfDay: "Aturcara Majlis",
        venue: "Lokasi",
        galleryTitle: "Galeri",
        rsvpTitle: "RSVP",
        fullName: "Nama Penuh ",
        attendance: "Kehadiran",
        attendYes: "Ya, saya akan hadir",
        attendNo: "Maaf, saya tidak dapat hadir",
        guests: "Bilangan Tetamu ",
        phone: "Nombor Telefon ",
        mealPref: "Pilihan Makanan",
        noPref: "Tiada pilihan",
        chicken: "Ayam",
        beef: "Daging",
        vegetarian: "Vegetarian",
        wishes: "Mesej / Ucapan ",
        confirmRsvp: "SAHKAN RSVP",
        infoTitle: "Maklumat",
        dressCode: "Kod Pakaian",
        weddingGift: "Hadiah Perkahwinan",
        giftMsg: "Kehadiran anda adalah hadiah yang terbaik.",
        faqTitle: "Soalan Lazim"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('langToggle').textContent = lang === 'en' ? 'MY' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.getElementById('envSubtitle').textContent = translations[lang].envSubtitle;
    document.getElementById('openInvitationBtn').textContent = translations[lang].openInvitation;
    document.getElementById('heroSubtitle').textContent = translations[lang].heroSubtitle;
    document.getElementById('heroInvite').textContent = translations[lang].heroInvite;
    localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang');
if (savedLang) setLanguage(savedLang);
else setLanguage('en');

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ms' : 'en');
});

// ============================================================
//  CONFIG (LETAK SEMUA GAMBAR & CERITA DI SINI)
// ============================================================
const CONFIG = {
    groomName: 'Rusty',
    brideName: 'Anney',
    weddingDate: '2027-02-14T11:00:00',
    weddingDateDisplay: '14 February 2027',
    story: [
        { icon: 'fa-heart', title: 'How we met', desc: 'At a coffee shop in Florence, two strangers shared a smile.', titleMs: 'Kami bertemu', descMs: 'Di sebuah kedai kopi di Florence, dua orang asing tersenyum.' },
        { icon: 'fa-glass-cheers', title: 'First date', desc: 'Dinner by the river, talking until dawn.', titleMs: 'Tarikh pertama', descMs: 'Makan malam di tepi sungai, berbual hingga subuh.' },
        { icon: 'fa-ring', title: 'Proposal', desc: 'Under the stars, on a quiet beach in Sicily.', titleMs: 'Lamaran', descMs: 'Di bawah bintang, di pantai yang tenang di Sicily.' },
        { icon: 'fa-church', title: 'Wedding day', desc: '14 February 2027 — our forever begins.', titleMs: 'Hari perkahwinan', descMs: '14 Februari 2027 — permulaan selamanya.' }
    ],
    akad: { icon: 'fa-ring', title: 'Akad Nikah', titleMs: 'Akad Nikah', date: '14 February 2027', time: '11:00 AM', venue: 'Grand Ballroom, Hotel Victoria', venueMs: 'Dewan Besar, Hotel Victoria', address: '123 Love St, Florence', addressMs: '123 Love St, Florence', mapsUrl: 'https://maps.google.com/maps?q=Florence' },
    reception: { icon: 'fa-glass-cheers', title: 'Reception', titleMs: 'Resepsi', date: '14 February 2027', time: '12:30 PM', venue: 'Garden Pavilion, Hotel Victoria', venueMs: 'Pavilion Taman, Hotel Victoria', address: '123 Love St, Florence', addressMs: '123 Love St, Florence', mapsUrl: 'https://maps.google.com/maps?q=Florence' },
    schedule: [
        { time: '10:00 AM', event: 'Guest Arrival', eventMs: 'Ketibaan Tetamu' },
        { time: '11:00 AM', event: 'Akad Nikah', eventMs: 'Akad Nikah' },
        { time: '12:30 PM', event: 'Lunch', eventMs: 'Makan Tengah Hari' },
        { time: '2:00 PM', event: 'Photography', eventMs: 'Bergambar' },
        { time: '4:00 PM', event: 'Event Ends', eventMs: 'Majlis Berakhir' }
    ],
    venue: { name: 'Hotel Victoria · Grand Ballroom', nameMs: 'Hotel Victoria · Dewan Besar', address: '123 Love St, Florence, Italy', addressMs: '123 Love St, Florence, Itali', mapsUrl: 'https://maps.google.com/maps?q=Florence', wazeUrl: 'https://www.waze.com/ul?q=Florence', embedUrl: 'https://maps.google.com/maps?q=Florence&t=&z=13&ie=UTF8&iwloc=&output=embed' },
    dressCode: [
        { icon: 'fa-user-tie', title: 'Gentlemen', titleMs: 'Lelaki', desc: 'Formal / Suit', descMs: 'Formal / Sut' },
        { icon: 'fa-user-tag', title: 'Ladies', titleMs: 'Wanita', desc: 'Formal / Evening Dress', descMs: 'Formal / Gaun Malam' }
    ],
    bank: { name: 'BCA', accountName: 'Anney & Rusty', accountNumber: '123-456-7890' },
    faq: [
        { q: 'Is parking available?', a: 'Yes, free parking at the venue.', qMs: 'Adakah tempat parking disediakan?', aMs: 'Ya, parking percuma di lokasi.' },
        { q: 'Can I bring children?', a: 'We kindly request an adult-only celebration.', qMs: 'Boleh saya bawa anak?', aMs: 'Kami memohon majlis dewasa sahaja.' },
        { q: 'Is the venue indoor or outdoor?', a: 'Both — ceremony indoors, reception in the garden.', qMs: 'Adakah lokasi dalam atau luar?', aMs: 'Kedua-duanya — majlis di dalam, resepsi di taman.' },
        { q: 'What should I wear?', a: 'Formal attire as per dress code.', qMs: 'Apa yang perlu saya pakai?', aMs: 'Pakaian formal seperti kod pakaian.' },
        { q: 'Can I RSVP for someone else?', a: 'Yes, please include their name in the message.', qMs: 'Boleh saya RSVP untuk orang lain?', aMs: 'Ya, sila masukkan nama mereka dalam mesej.' }
    ],
    
    // GAMBAR GALERI (Tukar nama fail di sini)
    galleryImages: [
        'IMAGE/kiw.jpg', 'IMAGE/FRONT.jpeg', 'IMAGE/FRONT.jpeg', 'IMAGE/kiw.jpg', 'IMAGE/FRONT.jpeg', 'IMAGE/kiw.jpg'
    ],
    
    musicUrl: '',
    rsvpEndpoint: ''
};

// ============================================================
//  RENDER ENGINE (JANGAN UBAH)
// ============================================================
function renderContent() {
    const couple = CONFIG.brideName + ' & ' + CONFIG.groomName;
    document.getElementById('envNames').textContent = couple;
    document.getElementById('envDate').textContent = CONFIG.weddingDateDisplay;
    document.getElementById('heroNames').innerHTML = CONFIG.brideName + ' <span class="paw"><i class="fas fa-paw"></i></span> ' + CONFIG.groomName;
    document.getElementById('heroDate').textContent = CONFIG.weddingDateDisplay;
    document.getElementById('footerText').textContent = couple + ' · ' + CONFIG.weddingDateDisplay;

    const timelineContainer = document.getElementById('timelineContainer');
    timelineContainer.innerHTML = '';
    CONFIG.story.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.style.animationDelay = (0.1 + i * 0.12) + 's';
        const isMs = currentLang === 'ms';
        div.innerHTML = `<span class="timeline-icon"><i class="fas ${item.icon}"></i></span><div><h3>${isMs ? item.titleMs : item.title}</h3><p>${isMs ? item.descMs : item.desc}</p></div>`;
        timelineContainer.appendChild(div);
    });

    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = '';
    [CONFIG.akad, CONFIG.reception].forEach(d => {
        const card = document.createElement('div');
        card.className = 'detail-card';
        const isMs = currentLang === 'ms';
        card.innerHTML = `
            <i class="fas ${d.icon}"></i>
            <h3>${isMs ? d.titleMs : d.title}</h3>
            <p><strong>${isMs ? 'Tarikh' : 'Date'}:</strong> ${d.date}</p>
            <p><strong>${isMs ? 'Masa' : 'Time'}:</strong> ${d.time}</p>
            <p><strong>${isMs ? 'Lokasi' : 'Venue'}:</strong> ${isMs ? d.venueMs : d.venue}</p>
            <p><strong>${isMs ? 'Alamat' : 'Address'}:</strong> ${isMs ? d.addressMs : d.address}</p>
            <a href="${d.mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-btn"><i class="fas fa-map-marker-alt"></i> Google Maps</a>
        `;
        detailsContainer.appendChild(card);
    });

    const scheduleContainer = document.getElementById('scheduleContainer');
    scheduleContainer.innerHTML = '';
    CONFIG.schedule.forEach(s => {
        const div = document.createElement('div');
        const isMs = currentLang === 'ms';
        div.innerHTML = `<span>${s.time}</span>${isMs ? s.eventMs : s.event}`;
        scheduleContainer.appendChild(div);
    });

    const venueContainer = document.getElementById('venueContainer');
    const isMs = currentLang === 'ms';
    venueContainer.innerHTML = `
        <img src="IMAGE/kiw.jpg" alt="Venue" loading="lazy" />
        <h3>${isMs ? CONFIG.venue.nameMs : CONFIG.venue.name}</h3>
        <p>${isMs ? CONFIG.venue.addressMs : CONFIG.venue.address}</p>
        <div class="venue-buttons">
            <a href="${CONFIG.venue.mapsUrl}" target="_blank" rel="noopener noreferrer" class="map-btn"><i class="fas fa-map"></i> Google Maps</a>
            <a href="${CONFIG.venue.wazeUrl}" target="_blank" rel="noopener noreferrer" class="map-btn"><i class="fas fa-location-arrow"></i> Waze</a>
        </div>
        <div class="map-embed">
            <iframe src="${CONFIG.venue.embedUrl}" loading="lazy" title="Venue map" allowfullscreen></iframe>
        </div>
    `;

    const dressContainer = document.getElementById('dressContainer');
    dressContainer.innerHTML = '';
    CONFIG.dressCode.forEach(d => {
        const div = document.createElement('div');
        div.innerHTML = `<i class="fas ${d.icon}"></i><h3>${isMs ? d.titleMs : d.title}</h3><p>${isMs ? d.descMs : d.desc}</p>`;
        dressContainer.appendChild(div);
    });

    const bankContainer = document.getElementById('bankContainer');
    bankContainer.innerHTML = `
        <div style="text-align: center;">
            <p><strong>${isMs ? 'Bank' : 'Bank'}</strong> ${CONFIG.bank.name}</p>
            <p><strong>${isMs ? 'Nama Akaun' : 'Account Name'}</strong> ${CONFIG.bank.accountName}</p>
            <p><strong>${isMs ? 'Nombor Akaun' : 'Account Number'}</strong> <span id="accountNumber">${CONFIG.bank.accountNumber}</span></p>
            <button id="copyAccountBtn" class="secondary-btn"><i class="fas fa-copy"></i> ${isMs ? 'SALIN NOMBOR' : 'COPY ACCOUNT NUMBER'}</button>
            <span id="copyFeedback" style="display:none;">${isMs ? 'Disalin!' : 'Copied!'}</span>
        </div>
    `;

    const faqContainer = document.getElementById('faqContainer');
    faqContainer.innerHTML = '';
    CONFIG.faq.forEach(f => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button class="faq-question" aria-expanded="false">${isMs ? f.qMs : f.q} <i class="fas fa-chevron-down"></i></button>
            <div class="faq-answer"><p>${isMs ? f.aMs : f.a}</p></div>
        `;
        faqContainer.appendChild(div);
    });

    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    CONFIG.galleryImages.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Gallery ' + (i + 1);
        img.loading = 'lazy';
        img.dataset.index = i;
        galleryGrid.appendChild(img);
    });
}

renderContent();

const envelopeScreen = document.getElementById('envelope-screen');
const mainWebsite = document.getElementById('main-website');
const openBtn = document.getElementById('openInvitationBtn');

openBtn.addEventListener('click', () => {
    envelopeScreen.classList.add('hidden');
    mainWebsite.classList.add('visible');
    document.body.style.overflow = 'auto';
    if (CONFIG.musicUrl) initMusic(CONFIG.musicUrl);
});

const weddingDate = new Date(CONFIG.weddingDate).getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownMsg = document.getElementById('countdown-message');

function updateCountdown() {
    const now = new Date().getTime();
    let diff = weddingDate - now;
    if (diff <= 0) {
        document.querySelector('.countdown-grid').style.display = 'none';
        countdownMsg.style.display = 'block';
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const navLinks = document.querySelectorAll('#floating-nav a');
const pages = {
    home: document.getElementById('home'),
    story: document.getElementById('story'),
    events: document.getElementById('events'),
    gallery: document.getElementById('gallery'),
    rsvp: document.getElementById('rsvp'),
    info: document.getElementById('info')
};

function switchPage(pageId) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    if (pages[pageId]) pages[pageId].classList.add('active');
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page) switchPage(page);
    });
});

const rsvpForm = document.getElementById('rsvpForm');
const rsvpModal = document.getElementById('rsvpModal');
const modalName = document.getElementById('modalName');
const closeModalBtn = document.getElementById('closeModalBtn');

rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('fullName').value.trim();
    if (!name) {
        alert(currentLang === 'ms' ? 'Sila masukkan nama penuh anda.' : 'Please enter your full name.');
        return;
    }
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const guests = document.getElementById('guestCount').value;
    const phone = document.getElementById('phoneNumber').value.trim();
    const meal = document.getElementById('mealPreference').value;
    const wishes = document.getElementById('wishes').value.trim();
    const data = { name, attendance, guests, phone, meal, wishes, timestamp: new Date().toISOString() };
    let rsvps = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    rsvps.push(data);
    localStorage.setItem('wedding_rsvps', JSON.stringify(rsvps));
    if (CONFIG.rsvpEndpoint) {
        fetch(CONFIG.rsvpEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(err => console.warn('RSVP endpoint error:', err));
    }
    modalName.textContent = name;
    rsvpModal.classList.add('open');
    rsvpForm.reset();
});

closeModalBtn.addEventListener('click', () => rsvpModal.classList.remove('open'));
rsvpModal.addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
});

const galleryImages = document.querySelectorAll('#galleryGrid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.querySelector('.close-lightbox');
const prevLightbox = document.querySelector('.prev-lightbox');
const nextLightbox = document.querySelector('.next-lightbox');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[index].src;
    lightboxImg.alt = galleryImages[index].alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeLightboxFn() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}
function changeImage(direction) {
    const newIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    currentIndex = newIndex;
    lightboxImg.src = galleryImages[newIndex].src;
    lightboxImg.alt = galleryImages[newIndex].alt;
}
galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
});
closeLightbox.addEventListener('click', closeLightboxFn);
prevLightbox.addEventListener('click', () => changeImage(-1));
nextLightbox.addEventListener('click', () => changeImage(1));
lightbox.addEventListener('click', function(e) {
    if (e.target === this) closeLightboxFn();
});
document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightboxFn();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

let audio = null;
let isPlaying = false;
const musicToggle = document.getElementById('musicToggle');

function initMusic(url) {
    audio = new Audio(url);
    audio.loop = true;
    audio.volume = 0.3;
    const startMusic = () => {
        if (!isPlaying) {
            audio.play().catch(() => {});
            isPlaying = true;
            musicToggle.classList.add('playing');
        }
        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
    };
    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic);
}

musicToggle.addEventListener('click', function() {
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        this.classList.remove('playing');
    } else {
        audio.play().catch(() => {});
        isPlaying = true;
        this.classList.add('playing');
    }
});

document.addEventListener('click', function(e) {
    if (e.target.id === 'copyAccountBtn') {
        const accountSpan = document.getElementById('accountNumber');
        const feedback = document.getElementById('copyFeedback');
        const text = accountSpan.textContent;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                feedback.style.display = 'inline';
                setTimeout(() => { feedback.style.display = 'none'; }, 2000);
            }).catch(() => fallbackCopy(text, feedback));
        } else {
            fallbackCopy(text, feedback);
        }
    }
});

function fallbackCopy(text, feedback) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    feedback.style.display = 'inline';
    setTimeout(() => { feedback.style.display = 'none'; }, 2000);
}

document.addEventListener('click', function(e) {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq-question').forEach(b => {
        b.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('open');
    }
});

console.log('💍 Wedding RSVP (Mobile) loaded!');
console.log('👰🤵', CONFIG.brideName, '&', CONFIG.groomName);
console.log('📅', CONFIG.weddingDateDisplay);
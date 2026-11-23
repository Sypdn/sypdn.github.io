/* ==========================================================================
   Portofolio Syaepuddin (Sypdn) - main.js
   JavaScript murni, tanpa library. Dibagi dua bagian:

   BAGIAN 1: DATA (ubah di sini)
     - SOCIALS   : semua link sosial media dan kontak, satu tempat
     - SKILLS    : keahlian per kategori beserta level
     - PROJECTS  : daftar proyek
   BAGIAN 2: LOGIKA (biasanya tidak perlu diubah)
   ========================================================================== */
'use strict';

/* ==========================================================================
   BAGIAN 1: DATA
   ========================================================================== */

/* ---------- Identitas dasar ---------- */
const GITHUB_USER = 'Sypdn';

// Peran yang diketik di hero
const ROLES = [
  'Android Developer',
  'Embedded & IoT Enthusiast',
  'Web Developer',
  'Audio Tinkerer'
];

/* ---------- Sosial media dan kontak ----------
   Cukup ubah di sini. Ikon di hero, bagian "Terhubung dengan Saya", dan footer
   dirender dari daftar yang sama.
   - id      : dipakai untuk warna hover khas platform di CSS (data-id)
   - name    : teks tooltip
   - label   : teks untuk pembaca layar (aria-label)
   - icon    : kelas Font Awesome
*/
const SOCIALS = [
  { id: 'github',    name: 'GitHub',    url: 'https://github.com/Sypdn',                  icon: 'fa-brands fa-github',    label: 'Buka GitHub Syaepuddin' },
  { id: 'linkedin',  name: 'LinkedIn',  url: 'https://www.linkedin.com/in/syaepuddin-undefined-400842451', icon: 'fa-brands fa-linkedin', label: 'Buka LinkedIn Syaepuddin' },
  { id: 'telegram',  name: 'Telegram',  url: 'https://t.me/Sypdn',                        icon: 'fa-brands fa-telegram',  label: 'Buka Telegram Syaepuddin' },
  { id: 'tiktok',    name: 'TikTok',    url: 'https://www.tiktok.com/@sypdn__',           icon: 'fa-brands fa-tiktok',    label: 'Buka TikTok Syaepuddin' },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/sypdn____',       icon: 'fa-brands fa-instagram', label: 'Buka Instagram Syaepuddin' },
  { id: 'youtube',   name: 'YouTube',   url: 'https://www.youtube.com/@Sypdn',            icon: 'fa-brands fa-youtube',   label: 'Buka YouTube Syaepuddin' },
  { id: 'whatsapp',  name: 'WhatsApp',  url: 'https://wa.me/6287819451533',               icon: 'fa-brands fa-whatsapp',  label: 'Buka WhatsApp Syaepuddin' },
  { id: 'email',     name: 'Email',     url: 'mailto:syaepuddin599@gmail.com',            icon: 'fa-solid fa-envelope',   label: 'Kirim email ke Syaepuddin' }
];

/* ---------- Keahlian ----------
   level: 1 = Dasar, 2 = Menengah, 3 = Mahir
   Level di bawah adalah perkiraan awal. Sesuaikan dengan kemampuanmu sendiri.
   Kategori dengan wide: true tampil selebar penuh.
   icon: kelas Devicon (devicon-*) atau Font Awesome (fa-*).
*/
const LEVELS = { 1: 'Dasar', 2: 'Menengah', 3: 'Mahir' };

const SKILLS = [
  {
    id: 'bahasa',
    title: 'Bahasa Pemrograman',
    icon: 'fa-solid fa-code',
    wide: true,
    items: [
      { name: 'Java',                    icon: 'devicon-java-plain',       level: 2 },
      { name: 'Python',                  icon: 'devicon-python-plain',     level: 2 },
      { name: 'PHP',                     icon: 'devicon-php-plain',        level: 2 },
      { name: 'JavaScript',              icon: 'devicon-javascript-plain', level: 2 },
      { name: 'HTML/CSS',                icon: 'devicon-html5-plain',      level: 3 },
      { name: 'C/C++ (Arduino/ESP32)',   icon: 'devicon-cplusplus-plain',  level: 2 },
      { name: 'SQL (MySQL)',             icon: 'devicon-mysql-plain',      level: 1 }
    ]
  },
  {
    id: 'android',
    title: 'Android',
    icon: 'fa-brands fa-android',
    items: [
      { name: 'Android Studio',                              icon: 'devicon-androidstudio-plain', level: 2 },
      { name: 'Modding dan rooting',                         icon: 'fa-solid fa-screwdriver-wrench', level: 3 },
      { name: 'Reverse engineering APK (bongkar, terjemahkan, build ulang)', icon: 'fa-solid fa-box-open', level: 2 },
      { name: 'libsu',                                       icon: 'fa-solid fa-terminal',        level: 1 }
    ]
  },
  {
    id: 'web',
    title: 'Web',
    icon: 'fa-solid fa-globe',
    items: [
      { name: 'PHP + MySQL',    icon: 'fa-solid fa-database',    level: 2 },
      { name: 'Web Audio API',  icon: 'fa-solid fa-wave-square', level: 2 },
      { name: 'ffmpeg.wasm',    icon: 'fa-solid fa-film',        level: 1 }
    ]
  },
  {
    id: 'iot',
    title: 'Embedded & IoT',
    icon: 'fa-solid fa-microchip',
    items: [
      { name: 'ESP32',                                          icon: 'fa-solid fa-microchip',        level: 2 },
      { name: 'Arduino Uno',                                    icon: 'devicon-arduino-plain',        level: 2 },
      { name: 'Sensor (getaran, GPS, pH, kualitas air)',        icon: 'fa-solid fa-satellite-dish',   level: 2 },
      { name: 'Relay',                                          icon: 'fa-solid fa-plug',             level: 2 },
      { name: 'Web server di ESP32',                            icon: 'fa-solid fa-server',           level: 2 }
    ]
  },
  {
    id: 'audio',
    title: 'Audio',
    icon: 'fa-solid fa-headphones',
    items: [
      { name: 'DSP',                          icon: 'fa-solid fa-wave-square',   level: 2 },
      { name: 'Equalizer',                    icon: 'fa-solid fa-sliders',       level: 2 },
      { name: 'Hi-res audio',                 icon: 'fa-solid fa-headphones',    level: 3 },
      { name: 'Verifikasi bit-perfect',       icon: 'fa-solid fa-circle-check',  level: 2 }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      { name: 'Git & GitHub',     icon: 'fa-brands fa-github',           level: 2 },
      { name: 'Android Studio',   icon: 'devicon-androidstudio-plain',   level: 2 },
      { name: 'VS Code',          icon: 'devicon-vscode-plain',          level: 2 }
    ]
  }
];

/* ---------- Proyek ----------
   categories : android | web | iot | audio (boleh lebih dari satu)
   status     : 'selesai' | 'dikembangkan' | 'rencana'
                Isi sesuai kondisi sebenarnya. Nilai awal di bawah adalah perkiraan.
   featured   : true membuat kartu tampil lebih lebar di layar besar
   demo/github: isi dengan URL. Kalau dikosongkan (''), tombolnya otomatis disembunyikan.
   tags       : teknologi yang dipakai
*/
const PROJECT_FILTERS = [
  { id: 'all',     label: 'Semua' },
  { id: 'android', label: 'Android' },
  { id: 'web',     label: 'Web' },
  { id: 'iot',     label: 'IoT' },
  { id: 'audio',   label: 'Audio' }
];

const CATEGORY_ICON = {
  android: 'fa-brands fa-android',
  web:     'fa-solid fa-globe',
  iot:     'fa-solid fa-microchip',
  audio:   'fa-solid fa-headphones'
};

const STATUS_LABEL = {
  selesai:      'Selesai',
  dikembangkan: 'Dalam pengembangan',
  rencana:      'Perencanaan'
};

const PROJECTS = [
  {
    title: 'Aplikasi Pencatat Pengeluaran Bulanan',
    desc: 'Aplikasi Android untuk mencatat pengeluaran dan pemasukan bulanan, lengkap dengan kategori, anggaran, laporan, dan dompet ganda (multi-wallet).',
    categories: ['android'],
    tags: ['Java', 'Android Studio', 'Multi-wallet'],
    status: 'dikembangkan',
    featured: true,
    demo: '',
    github: ''
  },
  {
    title: 'Aplikasi PAMDES: Tagihan Air Desa',
    desc: 'Aplikasi Android untuk tagihan air desa: tambah pengguna, tagihan bulanan, rekap bulanan, dan ekspor PDF, dengan antarmuka bergaya liquid glass.',
    categories: ['android'],
    tags: ['Android', 'Java', 'Ekspor PDF'],
    status: 'rencana',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'Website Pendataan PAM Bulanan',
    desc: 'Website untuk mendata pemakaian air bulanan: nama, pemakaian, tagihan, harga per liter, harga satuan, dan total.',
    categories: ['web'],
    tags: ['PHP', 'MySQL'],
    status: 'dikembangkan',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'Website Profil Desa Wanasaba Daya',
    desc: 'Website profil untuk Desa Wanasaba Daya, Lombok Timur.',
    categories: ['web'],
    tags: ['Website', 'Profil desa'], // ganti dengan teknologi yang kamu pakai
    status: 'dikembangkan',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'ESP32 Home Automation',
    desc: 'Kontrol lampu dan kipas lewat web server relay di ESP32, ditambah sistem pemantauan tandon air.',
    categories: ['iot'],
    tags: ['ESP32', 'C/C++', 'Relay', 'Web server'],
    status: 'dikembangkan',
    featured: true,
    demo: '',
    github: ''
  },
  {
    title: 'Sistem Keamanan Kendaraan ESP32',
    desc: 'Sistem keamanan kendaraan berbasis ESP32 dengan sensor getaran, GPS, dan relay pemutus tegangan.',
    categories: ['iot'],
    tags: ['ESP32', 'Sensor getaran', 'GPS', 'Relay'],
    status: 'dikembangkan',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'ESP32 EQ Mixer Multi-channel',
    desc: 'Equalizer dan mixer multi-channel berbasis ESP32 yang dikendalikan lewat WiFi.',
    categories: ['iot', 'audio'],
    tags: ['ESP32', 'WiFi', 'DSP'],
    status: 'rencana',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'Python System Equalizer',
    desc: 'Equalizer real-time yang menangkap audio sistem lewat loopback, dengan EQ N-band (7/16/32 band) dan mixer 4-band.',
    categories: ['audio'],
    tags: ['Python', 'DSP', 'Real-time'],
    status: 'dikembangkan',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'DLMS: Tool DSP di Browser',
    desc: 'Tool pemrosesan sinyal digital yang berjalan sepenuhnya di browser, dibangun dengan Web Audio API.',
    categories: ['audio', 'web'],
    tags: ['JavaScript', 'Web Audio API', 'DSP'],
    status: 'dikembangkan',
    featured: true,
    demo: '',
    github: ''
  },
  {
    title: 'Hi-Res Audio Verifier',
    desc: 'Aplikasi Android root untuk memeriksa apakah audio keluar bit-perfect atau di-resample oleh sistem.',
    categories: ['android', 'audio'],
    tags: ['Java', 'Android Studio', 'libsu', 'Root'],
    status: 'rencana',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'Patch Video 1080p60 untuk TikTok Studio',
    desc: 'Tool web sisi klien (ffmpeg.wasm) untuk mem-patch video ke 1080p 60fps sebelum diunggah lewat TikTok Studio web, supaya degradasi akibat transcoding ulang minim.',
    categories: ['web'],
    tags: ['JavaScript', 'ffmpeg.wasm', 'Client-side'],
    status: 'dikembangkan',
    featured: false,
    demo: '',
    github: ''
  },
  {
    title: 'Sensor Kebersihan Air',
    desc: 'Sensor pendeteksi kebersihan air, lanjutan dari proyek sensor pH tanah dengan Arduino Uno.',
    categories: ['iot'],
    tags: ['Arduino Uno', 'Sensor', 'Kualitas air'],
    status: 'rencana',
    featured: false,
    demo: '',
    github: ''
  }
];

/* ==========================================================================
   BAGIAN 2: LOGIKA
   ========================================================================== */

const root = document.documentElement;
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Buat elemen DOM dengan atribut dan anak sekaligus (tanpa innerHTML). */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === false || value === null || value === undefined) return;
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else node.setAttribute(key, value === true ? '' : value);
  });
  [].concat(children).forEach(child => {
    if (child) node.append(child);
  });
  return node;
}

function icon(classes) {
  return el('i', { class: classes, 'aria-hidden': 'true' });
}

/* ---------- Ikon sosial media ---------- */
function renderSocials() {
  $$('[data-social]').forEach(list => {
    list.replaceChildren(
      ...SOCIALS.map(item =>
        el('li', {}, [
          el('a', {
            class: 'social',
            href: item.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': item.label,
            'data-tooltip': item.name,
            'data-id': item.id
          }, [icon(item.icon)])
        ])
      )
    );
  });
}

/* ---------- Keahlian ---------- */
function renderSkills() {
  const rootEl = $('#skills-root');
  if (!rootEl) return;

  const panels = SKILLS.map((group, index) => {
    const list = el('ul', { class: 'skill-list' }, group.items.map(item =>
      el('li', { class: 'skill-item' }, [
        el('span', { class: 'skill-icon' }, [icon(item.icon)]),
        el('span', { class: 'skill-name', text: item.name }),
        el('span', { class: 'skill-level' }, [
          // Meter hanya visual; teks level di bawahnya yang dibaca pembaca layar
          el('span', { class: 'level', 'aria-hidden': 'true' },
            [1, 2, 3].map(n => el('i', { class: n <= item.level ? 'on' : '' }))),
          el('span', { class: 'level-text', text: LEVELS[item.level] })
        ])
      ])
    ));

    return el('article', {
      class: 'skill-panel reveal' + (group.wide ? ' skill-panel--wide' : ''),
      style: `--i:${index % 6}`
    }, [
      el('h3', {}, [icon(group.icon), document.createTextNode(group.title)]),
      list
    ]);
  });

  rootEl.replaceChildren(...panels);
}

/* ---------- Proyek ---------- */
let activeFilter = 'all';

function renderFilters() {
  const bar = $('#filters');
  if (!bar) return;

  const buttons = PROJECT_FILTERS.map(filter => {
    const total = filter.id === 'all'
      ? PROJECTS.length
      : PROJECTS.filter(p => p.categories.includes(filter.id)).length;
    return el('button', {
      class: 'filter-btn',
      type: 'button',
      'data-filter': filter.id,
      'aria-pressed': String(filter.id === activeFilter),
      text: `${filter.label} (${total})`
    });
  });
  bar.replaceChildren(...buttons);

  bar.addEventListener('click', event => {
    const btn = event.target.closest('.filter-btn');
    if (!btn) return;
    applyFilter(btn.dataset.filter);
  });
}

function renderProjects() {
  const grid = $('#project-grid');
  if (!grid) return;

  const cards = PROJECTS.map((project, index) => {
    const links = [];
    // Tombol dengan URL kosong tidak dibuat sama sekali
    if (project.demo) {
      links.push(el('a', {
        class: 'btn btn-primary btn-sm',
        href: project.demo,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Buka demo ${project.title}`
      }, [icon('fa-solid fa-play'), document.createTextNode(' Demo')]));
    }
    if (project.github) {
      links.push(el('a', {
        class: 'btn btn-ghost btn-sm',
        href: project.github,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `Buka repositori GitHub ${project.title}`
      }, [icon('fa-brands fa-github'), document.createTextNode(' GitHub')]));
    }

    return el('article', {
      class: 'project-card reveal' + (project.featured ? ' project-card--featured' : ''),
      'data-categories': project.categories.join(' '),
      style: `--i:${index % 6}`
    }, [
      el('div', { class: 'card-top' }, [
        el('span', { class: 'card-icon' }, [icon(CATEGORY_ICON[project.categories[0]])]),
        el('span', {
          class: 'card-status',
          'data-status': project.status,
          text: STATUS_LABEL[project.status]
        })
      ]),
      el('h3', { text: project.title }),
      el('p', { text: project.desc }),
      el('ul', { class: 'tags', 'aria-label': 'Teknologi' },
        project.tags.map(tag => el('li', { text: tag }))),
      links.length ? el('div', { class: 'card-links' }, links) : null
    ]);
  });

  grid.replaceChildren(...cards);
}

function applyFilter(filterId) {
  activeFilter = filterId;
  let visible = 0;

  $$('.filter-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.filter === filterId));
  });

  $$('.project-card').forEach(card => {
    const match = filterId === 'all' || card.dataset.categories.split(' ').includes(filterId);
    card.classList.toggle('is-hidden', !match);
    if (match) visible += 1;
  });

  const label = PROJECT_FILTERS.find(f => f.id === filterId).label;
  const status = $('#project-count');
  if (status) {
    status.textContent = filterId === 'all'
      ? `Menampilkan semua ${visible} proyek`
      : `Menampilkan ${visible} proyek kategori ${label}`;
  }

  // Keadaan kosong (R-27)
  const empty = $('#project-empty');
  if (empty) empty.hidden = visible !== 0;
}

/* ---------- Statistik "Tentang Saya" (dihitung dari data, bukan angka karangan) ---------- */
function computeStats() {
  const languages = SKILLS.find(group => group.id === 'bahasa');
  const fields = new Set(PROJECTS.flatMap(project => project.categories));
  return {
    projects: PROJECTS.length,
    languages: languages ? languages.items.length : 0,
    fields: fields.size
  };
}

function setupCounters() {
  const stats = computeStats();
  const nodes = $$('[data-stat]');
  nodes.forEach(node => {
    const value = stats[node.dataset.stat] ?? 0;
    node.dataset.count = String(value);
    node.textContent = String(value);
  });

  const box = $('#stats');
  if (!box || reducedMotion || !('IntersectionObserver' in window)) return;

  // Mulai dari 0 lalu hitung naik saat terlihat
  nodes.forEach(node => { node.textContent = '0'; });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      nodes.forEach(node => countUp(node, Number(node.dataset.count)));
    });
  }, { threshold: 0.4 });
  observer.observe(box);
}

function countUp(node, target) {
  const duration = 1200;
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = String(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- Efek mengetik di hero + tombol jeda ---------- */
const typing = { timer: null, role: 0, chars: 0, deleting: false, paused: false };

function initTyping() {
  const typed = $('#typed');
  const caret = $('#caret');
  const staticList = $('#roles-static');
  const toggle = $('#motion-toggle');
  if (!typed) return;

  // Pengguna yang meminta gerak dikurangi: tampilkan semua peran sebagai teks biasa
  if (reducedMotion) {
    typed.textContent = ROLES.join(' · ');
    typed.removeAttribute('aria-hidden');
    if (staticList) staticList.remove();
    if (caret) caret.remove();
    if (toggle) toggle.hidden = true;
    return;
  }

  function tick() {
    const current = ROLES[typing.role];
    if (!typing.deleting) {
      typing.chars += 1;
      typed.textContent = current.slice(0, typing.chars);
      if (typing.chars === current.length) {
        typing.deleting = true;
        typing.timer = setTimeout(tick, 1700);
        return;
      }
      typing.timer = setTimeout(tick, 70);
    } else {
      typing.chars -= 1;
      typed.textContent = current.slice(0, typing.chars);
      if (typing.chars === 0) {
        typing.deleting = false;
        typing.role = (typing.role + 1) % ROLES.length;
        typing.timer = setTimeout(tick, 350);
        return;
      }
      typing.timer = setTimeout(tick, 35);
    }
  }

  typing.start = tick;
  typing.timer = setTimeout(tick, 600);
}

function initMotionToggle() {
  const btn = $('#motion-toggle');
  if (!btn || reducedMotion) return;
  const label = $('span', btn);
  const glyph = $('i', btn);

  btn.addEventListener('click', () => {
    typing.paused = !typing.paused;
    root.classList.toggle('motion-paused', typing.paused);
    btn.setAttribute('aria-pressed', String(typing.paused));
    label.textContent = typing.paused ? 'Putar animasi' : 'Jeda animasi';
    glyph.className = typing.paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';

    const typed = $('#typed');
    if (typing.paused) {
      clearTimeout(typing.timer);
      // Saat dijeda, tampilkan peran saat ini secara utuh
      typed.textContent = ROLES[typing.role];
      typing.chars = ROLES[typing.role].length;
      typing.deleting = true;
    } else if (typing.start) {
      typing.timer = setTimeout(typing.start, 800);
    }
  });
}

/* ---------- Tema gelap/terang ---------- */
function applyTheme(theme, persist) {
  root.setAttribute('data-theme', theme);

  const btn = $('#theme-toggle');
  if (btn) {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap');
  }
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0d14' : '#f6f7fb');

  if (persist) {
    try { localStorage.setItem('theme', theme); } catch (error) { /* penyimpanan tidak tersedia */ }
  }
  refreshGithubImages();
}

function initTheme() {
  const btn = $('#theme-toggle');
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);
  if (!btn) return;
  btn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });
}

/* ---------- Navbar: sticky, menu mobile, section aktif ---------- */
function initNav() {
  const header = $('#site-header');
  const toggle = $('#nav-toggle');
  const menu = $('#nav-menu');
  if (!header || !toggle || !menu) return;

  // Transparan di atas, kaca buram setelah scroll
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu hamburger
  const setMenu = open => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  };
  toggle.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('nav-open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (header.classList.contains('nav-open') && !header.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 900px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });

  // Indikator section aktif
  const links = $$('a[href^="#"]', menu);
  const sections = links
    .map(link => $(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(section => spy.observe(section));
}

/* ---------- Animasi muncul saat scroll ---------- */
function startReveal() {
  const items = $$('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(item => observer.observe(item));
}

/* ---------- Statistik GitHub dengan fallback ---------- */
const GH_COLORS = {
  dark:  { bg: '141824', title: '38bdf8', text: 'e8eaf2', icon: '8b5cf6', muted: 'a3a9bb' },
  light: { bg: 'ffffff', title: '0369a1', text: '11131a', icon: '6d28d9', muted: '4b5262' }
};

const GH_CARDS = [
  {
    id: 'stats',
    alt: `Statistik GitHub ${GITHUB_USER}: bintang, commit, pull request, dan issue`,
    width: 495, height: 195,
    url: c => `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&hide_border=true&bg_color=${c.bg}&title_color=${c.title}&text_color=${c.text}&icon_color=${c.icon}&locale=id`
  },
  {
    id: 'langs',
    alt: `Bahasa pemrograman yang paling sering dipakai ${GITHUB_USER} di GitHub`,
    width: 300, height: 165,
    url: c => `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&langs_count=8&hide_border=true&bg_color=${c.bg}&title_color=${c.title}&text_color=${c.text}&locale=id`
  },
  {
    id: 'streak',
    wide: true,
    alt: `Streak kontribusi GitHub ${GITHUB_USER}`,
    width: 495, height: 195,
    url: c => `https://streak-stats.demolab.com/?user=${GITHUB_USER}&hide_border=true&background=${c.bg}&ring=${c.title}&fire=${c.icon}&currStreakNum=${c.text}&sideNums=${c.text}&currStreakLabel=${c.title}&sideLabels=${c.text}&dates=${c.muted}`
  }
];

let ghFallbackShown = false;

function currentGhColors() {
  return GH_COLORS[root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'];
}

function renderGithub() {
  const grid = $('#gh-grid');
  if (!grid) return;

  const cards = GH_CARDS.map(card => {
    const img = el('img', {
      alt: card.alt,
      width: card.width,
      height: card.height,
      loading: 'lazy',
      decoding: 'async'
    });
    const figure = el('figure', {
      class: 'gh-card is-loading' + (card.wide ? ' gh-card--wide' : ''),
      'data-card': card.id
    }, [img, el('span', { class: 'gh-status', text: 'Memuat statistik...' })]);

    img.addEventListener('load', () => figure.classList.remove('is-loading'));
    img.addEventListener('error', () => {
      figure.hidden = true;       // sembunyikan kartu yang gagal
      showGithubFallback();       // tampilkan data cadangan
    });
    // Anggap gagal jika layanan gambar terlalu lama menjawab
    setTimeout(() => {
      if (figure.classList.contains('is-loading') && !img.complete) {
        figure.hidden = true;
        showGithubFallback();
      }
    }, 15000);

    img.src = card.url(currentGhColors());
    return figure;
  });

  grid.replaceChildren(...cards);
}

/** Ganti gambar saat tema berubah (warna kartu mengikuti tema). */
function refreshGithubImages() {
  $$('#gh-grid .gh-card').forEach(figure => {
    const def = GH_CARDS.find(card => card.id === figure.dataset.card);
    const img = $('img', figure);
    if (!def || !img || figure.hidden) return;
    figure.classList.add('is-loading');
    img.src = def.url(currentGhColors());
  });
}

async function showGithubFallback() {
  if (ghFallbackShown) return;
  ghFallbackShown = true;

  const box = $('#gh-fallback');
  if (!box) return;
  box.hidden = false;

  const button = el('a', {
    class: 'btn btn-ghost btn-sm',
    href: `https://github.com/${GITHUB_USER}`,
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'Buka profil GitHub Syaepuddin'
  }, [icon('fa-brands fa-github'), document.createTextNode(' Buka profil GitHub')]);

  box.replaceChildren(
    el('h3', { text: 'Kartu statistik belum bisa dimuat' }),
    el('p', { text: 'Layanan gambar statistik sedang tidak dapat dijangkau. Berikut data publik langsung dari GitHub.' })
  );

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
    if (!response.ok) throw new Error('GitHub API: ' + response.status);
    const user = await response.json();
    const row = el('ul', {}, [
      el('li', {}, [el('strong', { text: String(user.public_repos) }), document.createTextNode(' repositori publik')]),
      el('li', {}, [el('strong', { text: String(user.followers) }), document.createTextNode(' pengikut')]),
      el('li', {}, [el('strong', { text: String(user.following) }), document.createTextNode(' mengikuti')])
    ]);
    box.append(row, button);
  } catch (error) {
    box.append(el('p', { text: 'Data cadangan juga belum bisa dimuat. Buka profil GitHub untuk melihatnya langsung.' }), button);
  }
}

/* ---------- Foto profil: tampilkan huruf awal jika gambar gagal dimuat ---------- */
function initPhotoFallback() {
  const img = $('#hero-img');
  const wrap = $('#hero-photo');
  if (!img || !wrap) return;
  const fail = () => wrap.classList.add('no-photo');
  img.addEventListener('error', fail);
  if (img.complete && img.naturalWidth === 0) fail();
}

/* ---------- Layar loading ---------- */
function hideLoader() {
  const loader = $('#loader');
  if (loader) loader.classList.add('is-done');
}

/* ---------- Mulai ---------- */
function init() {
  // 1. Render semua konten dari data
  renderSocials();
  renderSkills();
  renderFilters();
  renderProjects();
  applyFilter('all');
  setupCounters();
  renderGithub();

  // 2. Interaksi
  initTheme();
  initNav();
  initPhotoFallback();
  initTyping();
  initMotionToggle();

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // 3. Sembunyikan elemen reveal (loader masih menutupi halaman)
  root.classList.add('js-ready');

  // 4. Tampilkan halaman setelah semua siap, dengan batas waktu 2,5 detik
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    hideLoader();
    startReveal();
  };
  const minimumShown = new Promise(resolve => setTimeout(resolve, 500));
  const pageLoaded = new Promise(resolve => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once: true });
  });
  Promise.all([minimumShown, pageLoaded]).then(reveal);
  setTimeout(reveal, 2500);
}

init();

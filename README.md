# Portofolio Syaepuddin (Sypdn)

Website portofolio statis: HTML, CSS, dan JavaScript murni. Tanpa framework dan tanpa langkah build, jadi bisa langsung di-hosting di GitHub Pages.

## Struktur

```
sypdn.github.io/
├── index.html
├── css/style.css
├── js/main.js          <- semua data (sosial media, keahlian, proyek) ada di sini
├── assets/
│   ├── foto.jpg        <- GANTI dengan foto profilmu (rasio 1:1)
│   ├── og-image.png    <- gambar pratinjau saat link dibagikan (1200x630)
│   ├── favicon.svg
│   └── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## Deploy ke GitHub Pages

1. Buat repositori publik bernama `sypdn.github.io` di akun GitHub `Sypdn`.
2. Unggah seluruh isi folder ini ke root repositori (bukan folder pembungkusnya).
3. Buka **Settings > Pages**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Tunggu satu sampai dua menit, lalu buka https://sypdn.github.io

## Yang perlu kamu ganti

| Apa | Di mana |
| --- | --- |
| Foto profil | timpa `assets/foto.jpg` |
| Link sosial media dan kontak | objek `SOCIALS` di `js/main.js` |
| Level keahlian | array `SKILLS` di `js/main.js` (1 = Dasar, 2 = Menengah, 3 = Mahir) |
| Daftar proyek, status, link Demo dan GitHub | array `PROJECTS` di `js/main.js` |
| Kode verifikasi Google | `<meta name="google-site-verification">` di `index.html` |

Tombol Demo dan GitHub pada proyek disembunyikan otomatis selama `demo` atau `github` berisi `''`.
Status proyek (`selesai`, `dikembangkan`, `rencana`) adalah perkiraan awal, silakan sesuaikan.

## Google Search Console

1. Buka Search Console, tambahkan properti **URL prefix** `https://sypdn.github.io/`.
2. Pilih verifikasi **Tag HTML**, salin nilai `content`-nya ke tag `google-site-verification` di `index.html`, lalu deploy ulang.
3. Klik **Verifikasi**, kemudian kirim `https://sypdn.github.io/sitemap.xml` di menu **Sitemap**.

## Catatan

- Statistik GitHub memakai layanan gambar publik (github-readme-stats dan streak-stats). Jika layanan itu tidak bisa dijangkau, halaman menampilkan data cadangan dari API GitHub.
- Tema gelap adalah default. Pilihan tema pengunjung disimpan di `localStorage`.
- Animasi mengikuti `prefers-reduced-motion`, dan ada tombol "Jeda animasi" di hero.

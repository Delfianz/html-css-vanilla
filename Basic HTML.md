# Basic HTML
| Objective         | Key Result                                                 |  Time Goal |
|-------------------|------------------------------------------------------------|------------|
| HTML              | 1.1 Pendahuluan HTML                                       | 1 Menit    |
|                   | 1.2 Struktur dasar html                                    | 1 Menit    |
|                   | 1.3 Heading dan Paragraf                                   | 1 Menit    |
|                   | 1.4 Text Formatting                                        | 1 Menit    |
|                   | 1.5 Link dan Gambar                                        | 1 Menit    |
|                   | 1.6 List (Daftar)                                          | 5 Menit    |
|                   | 1.7 Tabel                                                  | 5 Menit    |
|                   | 1.8 Form Dasar                                             | 5 Menit    |
|                   | 1.9 Semantic HTML                                          | 5 Menit    |
|                   | 1.10 Latihan HTML 1 : Membuat halaman profil sederhana     | 8 Menit    |
|                   | 1.11 Latihan HTML 1 : Halaman dengan Navigasi dan Link     | 8 Menit    |
|                   | 1.12 Latihan HTML 1 : Tabel Data Siswa                     | 8 Menit    |
|                   | 1.13 Latihan HTML 1 : Form Pendaftaran                     | 8 Menit    |
|                   | 1.14 Challenge HTML 1 : Website Portofolio Sederhana       | 16 Menit   |
|                   | 2.1 Inline vs Block Element                                | 8 Menit    |
|                   | 2.2 Elemen Media                                           | 10 Menit   |
|                   | 2.3 Form Lanjutan                                          | 15 Menit   |
|                   | 2.4 Meta Tags & SEO Dasar                                  | 10 Menit   |
|                   | 2.5 HTML Entities                                          | 10 Menit   |
|                   | 2.6 Atribut Global                                         | 10 Menit   |
|                   | 2.7 Aksesibilitas HTML (A11y)                              | 15 Menit   |
|                   | 2.8 Latihan HTML 2 : Halaman Multimedia                    | 20 Menit   |
|                   | 2.9 Latihan HTML 2 : Form Pendaftaran Kursus Lengkap       | 20 Menit   |
|                   | 2.10 Latihan HTML 2 : Halaman dengan Meta Tags Lengkap     | 10 Menit   |
|                   | 2.11 Latihan HTML 2 : Perbaiki Aksesibilitas               | 10 Menit   |
|                   | 2.12 Challenge HTML 2 : Website Blog Pribadi yang Aksesibel| 45 Menit   |

## 1) Pendahuluan HTML 
### Apa itu HTML?
HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. HTML mendeskripsikan struktur konten pada halaman web menggunakan elemen-elemen yang disebut **tag**.

### Mengapa Belajar HTML?
- **Fondasi Web Development** - Semua website dibangun dengan HTML
- **Mudah Dipelajari** - Sintaks sederhana dan mudah dipahami
- **Universal** - Didukung oleh semua browser
- **Pintu Masuk** - Langkah pertama untuk belajar CSS dan JavaScript

### Tools yang Dibutuhkan
1. **Text Editor** - VS Code, Sublime Text, atau Notepad++
2. **Web Browser** - Chrome, Firefox, Edge, atau Safari

### Cara Membuat File HTML
1. Buka text editor
2. Buat file baru dengan ekstensi `.html` (contoh: `index.html`)
3. Tulis kode HTML
4. Simpan dan buka di browser

## 2) Struktur dasar html 

Setiap dokumen HTML memiliki struktur dasar seperti ini:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <!-- Konten halaman web di sini -->
    <h1>Selamat Datang!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
```

### Penjelasan Struktur

| Tag | Fungsi |
|-----|--------|
| `<!DOCTYPE html>` | Mendeklarasikan dokumen sebagai HTML5 |
| `<html>` | Elemen root dari halaman HTML |
| `<head>` | Berisi metadata (info tentang dokumen) |
| `<meta charset>` | Menentukan encoding karakter |
| `<meta viewport>` | Mengatur tampilan di perangkat mobile |
| `<title>` | Judul yang muncul di tab browser |
| `<body>` | Berisi konten yang ditampilkan di halaman |

### Anatomi Tag HTML

```html
<tagname attribute="value">Konten</tagname>
```

- **Opening tag**: `<tagname>`
- **Closing tag**: `</tagname>`
- **Attribute**: Informasi tambahan tentang elemen
- **Content**: Isi di antara opening dan closing tag

**Self-closing tag** (tidak memiliki konten):
```html
<img src="gambar.jpg" alt="Deskripsi" />
<br />
<hr />
```

## Heading dan Paragraf

### Heading (Judul)
HTML menyediakan 6 level heading, dari `<h1>` (terbesar) sampai `<h6>` (terkecil).

```html
<h1>Heading 1 - Judul Utama</h1>
<h2>Heading 2 - Sub Judul</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - Terkecil</h6>
```

**Tips:**
- Gunakan `<h1>` hanya sekali per halaman (untuk judul utama)
- Gunakan heading secara berurutan (jangan loncat dari h1 ke h4)

### Paragraf
```html
<p>Ini adalah paragraf pertama. Paragraf digunakan untuk menampilkan teks dalam blok terpisah.</p>

<p>Ini adalah paragraf kedua. Setiap paragraf akan memiliki jarak (margin) dengan paragraf lainnya.</p>
```

### Line Break dan Horizontal Rule
```html
<p>Baris pertama<br />Baris kedua dalam paragraf yang sama</p>

<hr /> <!-- Garis horizontal pemisah -->
```

---

## Text Formatting

### Format Teks Dasar

```html
<p><b>Teks tebal (bold)</b></p>
<p><strong>Teks tebal dengan penekanan penting</strong></p>

<p><i>Teks miring (italic)</i></p>
<p><em>Teks miring dengan penekanan</em></p>

<p><u>Teks bergaris bawah (underline)</u></p>

<p><s>Teks dicoret (strikethrough)</s></p>
<p><del>Teks dihapus</del></p>

<p><mark>Teks disorot (highlight)</mark></p>

<p>H<sub>2</sub>O - Subscript</p>
<p>X<sup>2</sup> - Superscript</p>

<p><small>Teks kecil</small></p>
```

### Perbedaan `<b>` vs `<strong>` dan `<i>` vs `<em>`

| Tag | Fungsi |
|-----|--------|
| `<b>` | Hanya visual (tebal) |
| `<strong>` | Tebal + penting secara semantik |
| `<i>` | Hanya visual (miring) |
| `<em>` | Miring + penekanan secara semantik |

**Rekomendasi:** Gunakan `<strong>` dan `<em>` untuk aksesibilitas yang lebih baik.

---

## Link dan Gambar

### Link (Anchor)

```html
<!-- Link ke website lain -->
<a href="https://www.google.com">Kunjungi Google</a>

<!-- Link buka di tab baru -->
<a href="https://www.google.com" target="_blank">Buka di Tab Baru</a>

<!-- Link ke halaman lain dalam website -->
<a href="about.html">Tentang Kami</a>

<!-- Link ke bagian dalam halaman yang sama -->
<a href="#kontak">Ke Bagian Kontak</a>

<!-- Target untuk link di atas -->
<section id="kontak">
    <h2>Kontak</h2>
</section>

<!-- Link email -->
<a href="mailto:email@contoh.com">Kirim Email</a>

<!-- Link telepon -->
<a href="tel:+628123456789">Hubungi Kami</a>
```

### Gambar (Image)

```html
<!-- Gambar dasar -->
<img src="foto.jpg" alt="Deskripsi gambar" />

<!-- Gambar dengan ukuran -->
<img src="foto.jpg" alt="Deskripsi" width="300" height="200" />

<!-- Gambar dari URL -->
<img src="https://via.placeholder.com/300x200" alt="Placeholder" />
```

**Atribut penting:**
- `src` - Sumber/lokasi gambar (wajib)
- `alt` - Teks alternatif jika gambar tidak muncul (wajib untuk aksesibilitas)
- `width` / `height` - Ukuran gambar

### Gambar sebagai Link

```html
<a href="https://www.google.com">
    <img src="logo.png" alt="Logo Google" />
</a>
```

---

## List (Daftar)

### Unordered List (Daftar Tidak Berurutan)
Menggunakan bullet point.

```html
<ul>
    <li>Apel</li>
    <li>Jeruk</li>
    <li>Mangga</li>
    <li>Pisang</li>
</ul>
```

**Hasil:**
- Apel
- Jeruk
- Mangga
- Pisang

### Ordered List (Daftar Berurutan)
Menggunakan nomor.

```html
<ol>
    <li>Bangun tidur</li>
    <li>Mandi</li>
    <li>Sarapan</li>
    <li>Berangkat kerja</li>
</ol>
```

**Hasil:**
1. Bangun tidur
2. Mandi
3. Sarapan
4. Berangkat kerja

### Variasi Ordered List

```html
<!-- Mulai dari nomor tertentu -->
<ol start="5">
    <li>Item lima</li>
    <li>Item enam</li>
</ol>

<!-- Menggunakan huruf -->
<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
</ol>

<!-- Menggunakan angka romawi -->
<ol type="I">
    <li>Item I</li>
    <li>Item II</li>
</ol>
```

### Nested List (List Bersarang)

```html
<ul>
    <li>Buah-buahan
        <ul>
            <li>Apel</li>
            <li>Jeruk</li>
        </ul>
    </li>
    <li>Sayuran
        <ul>
            <li>Bayam</li>
            <li>Kangkung</li>
        </ul>
    </li>
</ul>
```

### Description List

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - bahasa markup untuk web</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets - untuk styling halaman web</dd>

    <dt>JavaScript</dt>
    <dd>Bahasa pemrograman untuk membuat web interaktif</dd>
</dl>
```

---

## Tabel

### Struktur Tabel Dasar

```html
<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kota</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Budi</td>
            <td>25</td>
            <td>Jakarta</td>
        </tr>
        <tr>
            <td>Ani</td>
            <td>23</td>
            <td>Bandung</td>
        </tr>
        <tr>
            <td>Citra</td>
            <td>27</td>
            <td>Surabaya</td>
        </tr>
    </tbody>
</table>
```

### Penjelasan Tag Tabel

| Tag | Fungsi |
|-----|--------|
| `<table>` | Container tabel |
| `<thead>` | Bagian header tabel |
| `<tbody>` | Bagian body/isi tabel |
| `<tfoot>` | Bagian footer tabel |
| `<tr>` | Table Row (baris) |
| `<th>` | Table Header (kolom judul) |
| `<td>` | Table Data (kolom isi) |

### Colspan dan Rowspan

```html
<table border="1">
    <tr>
        <th colspan="2">Nama Lengkap</th>
        <th>Umur</th>
    </tr>
    <tr>
        <td>Budi</td>
        <td>Santoso</td>
        <td rowspan="2">25</td>
    </tr>
    <tr>
        <td>Budi</td>
        <td>Pratama</td>
    </tr>
</table>
```

- `colspan="2"` - Menggabungkan 2 kolom
- `rowspan="2"` - Menggabungkan 2 baris

---

## Form Dasar

### Struktur Form

```html
<form action="/submit" method="POST">
    <!-- Elemen form di sini -->
    <button type="submit">Kirim</button>
</form>
```

### Input Types

```html
<form>
    <!-- Text Input -->
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama" />

    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="contoh@email.com" />

    <!-- Password Input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />

    <!-- Number Input -->
    <label for="umur">Umur:</label>
    <input type="number" id="umur" name="umur" min="1" max="100" />

    <!-- Date Input -->
    <label for="tanggal">Tanggal Lahir:</label>
    <input type="date" id="tanggal" name="tanggal" />

    <!-- Checkbox -->
    <input type="checkbox" id="setuju" name="setuju" />
    <label for="setuju">Saya setuju dengan syarat dan ketentuan</label>

    <!-- Radio Button -->
    <p>Jenis Kelamin:</p>
    <input type="radio" id="pria" name="gender" value="pria" />
    <label for="pria">Pria</label>
    <input type="radio" id="wanita" name="gender" value="wanita" />
    <label for="wanita">Wanita</label>

    <!-- Textarea -->
    <label for="pesan">Pesan:</label>
    <textarea id="pesan" name="pesan" rows="4" cols="50" placeholder="Tulis pesan..."></textarea>

    <!-- Select (Dropdown) -->
    <label for="kota">Kota:</label>
    <select id="kota" name="kota">
        <option value="">Pilih Kota</option>
        <option value="jakarta">Jakarta</option>
        <option value="bandung">Bandung</option>
        <option value="surabaya">Surabaya</option>
    </select>

    <!-- Submit Button -->
    <button type="submit">Kirim</button>

    <!-- Reset Button -->
    <button type="reset">Reset</button>
</form>
```

### Atribut Input Penting

| Atribut | Fungsi |
|---------|--------|
| `type` | Jenis input |
| `name` | Nama field (untuk pengiriman data) |
| `id` | ID unik (untuk label) |
| `placeholder` | Teks petunjuk |
| `value` | Nilai default |
| `required` | Field wajib diisi |
| `disabled` | Field tidak aktif |
| `readonly` | Field hanya bisa dibaca |
| `min` / `max` | Nilai minimum/maksimum |

---

## Semantic HTML

Semantic HTML menggunakan tag yang mendeskripsikan makna kontennya.

### Tag Semantic

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Website Saya</title>
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <h1>Judul Artikel</h1>
            <p>Konten artikel...</p>

            <section>
                <h2>Bagian 1</h2>
                <p>Konten bagian 1...</p>
            </section>

            <section>
                <h2>Bagian 2</h2>
                <p>Konten bagian 2...</p>
            </section>
        </article>

        <aside>
            <h3>Artikel Terkait</h3>
            <ul>
                <li><a href="#">Artikel 1</a></li>
                <li><a href="#">Artikel 2</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Website Saya. All rights reserved.</p>
    </footer>
</body>
</html>
```

### Penjelasan Tag Semantic

| Tag | Fungsi |
|-----|--------|
| `<header>` | Bagian header halaman/section |
| `<nav>` | Navigasi utama |
| `<main>` | Konten utama halaman |
| `<article>` | Konten mandiri (artikel, blog post) |
| `<section>` | Bagian/seksi dari konten |
| `<aside>` | Konten sampingan (sidebar) |
| `<footer>` | Bagian footer halaman/section |
| `<figure>` | Konten ilustrasi (gambar + caption) |
| `<figcaption>` | Caption untuk figure |

### Keuntungan Semantic HTML
1. **Aksesibilitas** - Screen reader dapat memahami struktur
2. **SEO** - Mesin pencari lebih mudah memahami konten
3. **Maintainability** - Kode lebih mudah dibaca dan dipelihara

---

## Latihan

### Latihan 1: Halaman Profil Sederhana
Buat halaman HTML dengan konten:
- Heading nama kamu
- Paragraf tentang diri kamu
- Gambar (boleh placeholder)
- List hobi (minimal 3)

**Template:**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Profil Saya</title>
</head>
<body>
    <!-- TODO: Tambahkan heading nama -->

    <!-- TODO: Tambahkan gambar -->

    <!-- TODO: Tambahkan paragraf tentang diri sendiri -->

    <!-- TODO: Tambahkan list hobi -->
</body>
</html>
```

---

### Latihan 2: Halaman dengan Navigasi dan Link
Buat halaman dengan:
- Header berisi navigasi (Home, About, Contact)
- Konten dengan beberapa section (menggunakan id)
- Link yang mengarah ke masing-masing section
- Footer dengan link email

**Hint:** Gunakan `<a href="#id-section">` untuk link internal.

---

### Latihan 3: Tabel Data Siswa
Buat tabel yang menampilkan data siswa:

| No | Nama | Kelas | Nilai |
|----|------|-------|-------|
| 1 | Budi | XII-A | 85 |
| 2 | Ani | XII-B | 90 |
| 3 | Citra | XII-A | 88 |

Tambahkan:
- Header tabel dengan `<thead>`
- Body tabel dengan `<tbody>`
- Baris total rata-rata nilai (gunakan `colspan`)

---

### Latihan 4: Form Pendaftaran
Buat form pendaftaran dengan field:
- Nama lengkap (text)
- Email (email)
- Password (password)
- Tanggal lahir (date)
- Jenis kelamin (radio button)
- Kota asal (dropdown/select)
- Hobi (checkbox, minimal 3 pilihan)
- Alamat (textarea)
- Tombol Submit dan Reset

**Pastikan:**
- Setiap input memiliki `label` yang terhubung
- Gunakan atribut `required` untuk field wajib

---

## Tugas Mandiri

### Challenge: Website Portofolio Sederhana

Buat website portofolio dengan **3 halaman** yang saling terhubung:

#### Halaman 1: Home (`index.html`)
- Header dengan navigasi ke semua halaman
- Section hero (judul besar + tagline)
- Section "Tentang Saya" singkat
- Footer dengan copyright

#### Halaman 2: Portfolio (`portfolio.html`)
- Header dengan navigasi
- Daftar project (minimal 3) menggunakan:
  - Gambar project
  - Judul project
  - Deskripsi singkat
  - Link "Lihat Detail"
- Footer

#### Halaman 3: Contact (`contact.html`)
- Header dengan navigasi
- Informasi kontak (email, telepon, alamat)
- Form kontak (nama, email, subject, pesan)
- Footer

### Kriteria Penilaian
- [ ] Struktur HTML valid dan lengkap
- [ ] Navigasi berfungsi di semua halaman
- [ ] Menggunakan semantic HTML
- [ ] Form memiliki label yang benar
- [ ] Gambar memiliki atribut alt
- [ ] Kode rapi dan terstruktur

### Bonus
- [ ] Tambahkan favicon
- [ ] Tambahkan meta description
- [ ] Buat tampilan yang konsisten di semua halaman

---

## Referensi

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Validator](https://validator.w3.org/)

---

## Cheat Sheet

### Tag yang Sering Digunakan

```html
<!-- Struktur -->
<html> <head> <body> <header> <nav> <main> <footer>

<!-- Teks -->
<h1>-<h6> <p> <span> <br> <hr>

<!-- Format -->
<strong> <em> <mark> <del> <sub> <sup>

<!-- Link & Media -->
<a href=""> <img src="" alt="">

<!-- List -->
<ul> <ol> <li>

<!-- Tabel -->
<table> <thead> <tbody> <tr> <th> <td>

<!-- Form -->
<form> <input> <label> <select> <option> <textarea> <button>

<!-- Semantic -->
<article> <section> <aside> <figure> <figcaption>

<!-- Lainnya -->
<div> <button> <iframe>
```
### Latihan HTML 1 dan Challenge sudah dikerjakan di repositories yang berbeda
link nya dibawah
https://github.com/Delfianz/HTML1

## Inline vs Block Element

Sebelum melangkah lebih jauh, penting untuk memahami perbedaan dasar antara dua jenis elemen HTML.

### Block Element

Block element selalu **dimulai dari baris baru** dan mengambil **lebar penuh** yang tersedia.

```html
<div>Ini adalah div (block)</div>
<p>Ini adalah paragraf (block)</p>
<h1>Ini adalah heading (block)</h1>
<ul>
    <li>List item (block)</li>
</ul>
```

**Tag block yang umum:**
`<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<header>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`

### Inline Element

Inline element **tidak memulai baris baru** dan hanya mengambil **lebar sebesar kontennya**.

```html
<p>
    Ini teks biasa, lalu ada <strong>teks tebal</strong>, lalu ada
    <a href="#">link</a>, dan <span>span</span> — semuanya dalam satu baris.
</p>
```

**Tag inline yang umum:**
`<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<label>`, `<button>`, `<mark>`, `<small>`, `<sub>`, `<sup>`

### `<div>` vs `<span>`

| Tag | Tipe | Kegunaan |
|-----|------|----------|
| `<div>` | Block | Wadah/container untuk mengelompokkan elemen block |
| `<span>` | Inline | Wadah untuk mengelompokkan elemen inline dalam teks |

```html
<!-- div: mengelompokkan bagian halaman -->
<div class="kartu">
    <h2>Judul Kartu</h2>
    <p>Deskripsi kartu ini.</p>
</div>

<!-- span: menandai bagian tertentu dalam teks -->
<p>
    Harga produk ini adalah
    <span style="color: red; font-weight: bold;">Rp 150.000</span>
    dan stok masih tersedia.
</p>
```

### `<blockquote>` vs `<q>`

```html
<!-- blockquote: kutipan panjang (block) -->
<blockquote cite="https://react.dev">
    <p>React is the library for web and native user interfaces.</p>
    <footer>— React Documentation</footer>
</blockquote>

<!-- q: kutipan pendek (inline) -->
<p>Steve Jobs pernah berkata, <q>Stay hungry, stay foolish.</q></p>
```

---

## Elemen Media

### Video

Tag `<video>` digunakan untuk menyematkan video langsung di halaman HTML.

```html
<!-- Video dasar -->
<video src="video.mp4" controls></video>

<!-- Video dengan pengaturan lengkap -->
<video
    width="640"
    height="360"
    controls
    autoplay
    muted
    loop
    poster="thumbnail.jpg"
>
    <!-- Sumber alternatif untuk kompatibilitas browser -->
    <source src="video.mp4" type="video/mp4" />
    <source src="video.webm" type="video/webm" />
    <!-- Teks fallback jika browser tidak mendukung -->
    <p>Browser kamu tidak mendukung video HTML5.
        <a href="video.mp4">Download video di sini</a>.
    </p>
</video>
```

**Atribut `<video>`:**

| Atribut | Fungsi |
|---------|--------|
| `controls` | Menampilkan kontrol putar (play, pause, volume) |
| `autoplay` | Video otomatis diputar (butuh `muted` di Chrome) |
| `muted` | Menonaktifkan suara |
| `loop` | Video diulang terus |
| `poster` | Gambar thumbnail sebelum video diputar |
| `width` / `height` | Ukuran video |
| `preload` | Cara memuat video (`auto`, `metadata`, `none`) |

### Audio

Tag `<audio>` digunakan untuk menyematkan file audio.

```html
<!-- Audio dasar -->
<audio src="musik.mp3" controls></audio>

<!-- Audio dengan multiple source -->
<audio controls>
    <source src="musik.mp3" type="audio/mpeg" />
    <source src="musik.ogg" type="audio/ogg" />
    <p>Browser kamu tidak mendukung audio HTML5.</p>
</audio>
```

**Atribut `<audio>`:**

| Atribut | Fungsi |
|---------|--------|
| `controls` | Menampilkan kontrol audio |
| `autoplay` | Audio otomatis diputar |
| `muted` | Menonaktifkan suara |
| `loop` | Audio diulang terus |
| `preload` | Cara memuat audio |

### Figure & Figcaption

`<figure>` digunakan untuk membungkus media (gambar, video, kode) beserta keterangannya. `<figcaption>` adalah keterangan/caption-nya.

```html
<!-- Gambar dengan caption -->
<figure>
    <img src="gunung-bromo.jpg" alt="Pemandangan Gunung Bromo saat matahari terbit" width="600" />
    <figcaption>Gambar 1: Gunung Bromo, Jawa Timur - salah satu destinasi wisata terpopuler di Indonesia.</figcaption>
</figure>

<!-- Bisa juga untuk video -->
<figure>
    <video src="tutorial.mp4" controls width="600"></video>
    <figcaption>Video: Tutorial membuat halaman web sederhana.</figcaption>
</figure>

<!-- Bisa juga untuk kode -->
<figure>
    <pre><code>console.log("Hello, World!");</code></pre>
    <figcaption>Contoh kode JavaScript "Hello, World!"</figcaption>
</figure>
```

### Iframe

`<iframe>` (Inline Frame) digunakan untuk menyematkan halaman atau konten lain di dalam halaman HTML.

```html
<!-- Menyematkan halaman lain -->
<iframe
    src="https://www.wikipedia.org"
    width="800"
    height="500"
    title="Wikipedia"
></iframe>

<!-- Menyematkan Google Maps -->
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    title="Lokasi Kantor"
></iframe>

<!-- Menyematkan video YouTube -->
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video YouTube"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

> **Catatan Keamanan:** Selalu tambahkan atribut `title` pada iframe untuk aksesibilitas. Tidak semua website mengizinkan untuk di-embed dalam iframe.

### Picture (Gambar Responsif)

Tag `<picture>` memungkinkan browser memilih gambar yang paling sesuai berdasarkan ukuran layar atau format yang didukung.

```html
<picture>
    <!-- Untuk layar besar: gambar resolusi tinggi -->
    <source media="(min-width: 800px)" srcset="gambar-besar.jpg" />
    <!-- Untuk layar sedang -->
    <source media="(min-width: 400px)" srcset="gambar-sedang.jpg" />
    <!-- Fallback: jika browser tidak mendukung picture -->
    <img src="gambar-kecil.jpg" alt="Deskripsi gambar" />
</picture>
```

---

## Form Lanjutan

Di pertemuan 1 kita sudah belajar form dasar. Sekarang kita akan mempelajari input types tambahan, fitur validasi bawaan HTML5, dan cara mengelompokkan form.

### Input Types HTML5 Tambahan

```html
<form>
    <!-- Range / Slider -->
    <label for="volume">Volume: <span id="volLabel">50</span></label>
    <input type="range" id="volume" name="volume" min="0" max="100" value="50" />

    <!-- Color Picker -->
    <label for="warna">Warna Favorit:</label>
    <input type="color" id="warna" name="warna" value="#4f46e5" />

    <!-- Search -->
    <label for="cari">Cari:</label>
    <input type="search" id="cari" name="cari" placeholder="Ketik pencarian..." />

    <!-- URL -->
    <label for="website">Website:</label>
    <input type="url" id="website" name="website" placeholder="https://contoh.com" />

    <!-- Telepon -->
    <label for="telp">No. Telepon:</label>
    <input type="tel" id="telp" name="telp" placeholder="+62812345678" />

    <!-- Waktu -->
    <label for="waktu">Waktu:</label>
    <input type="time" id="waktu" name="waktu" />

    <!-- Bulan -->
    <label for="bulan">Bulan:</label>
    <input type="month" id="bulan" name="bulan" />

    <!-- Week -->
    <label for="minggu">Minggu:</label>
    <input type="week" id="minggu" name="minggu" />

    <!-- File Upload -->
    <label for="berkas">Upload File:</label>
    <input type="file" id="berkas" name="berkas" accept=".pdf,.jpg,.png" />

    <!-- Multiple File Upload -->
    <label for="foto">Upload Foto:</label>
    <input type="file" id="foto" name="foto" accept="image/*" multiple />

    <!-- Hidden Input (tidak terlihat, untuk data tersembunyi) -->
    <input type="hidden" name="user_id" value="12345" />
</form>
```

### Datalist (Autocomplete)

`<datalist>` memberikan saran pilihan pada input, seperti autocomplete.

```html
<label for="kota">Kota Asal:</label>
<input type="text" id="kota" name="kota" list="daftar-kota" placeholder="Ketik nama kota..." />

<datalist id="daftar-kota">
    <option value="Jakarta" />
    <option value="Bandung" />
    <option value="Surabaya" />
    <option value="Yogyakarta" />
    <option value="Medan" />
    <option value="Makassar" />
    <option value="Semarang" />
    <option value="Palembang" />
</datalist>
```

> `<datalist>` berbeda dengan `<select>`: pengguna tetap bisa mengetik bebas, datalist hanya memberikan saran.

### Fieldset & Legend

`<fieldset>` digunakan untuk mengelompokkan elemen form yang saling berkaitan. `<legend>` adalah judul dari kelompok tersebut.

```html
<form action="/daftar" method="POST">

    <fieldset>
        <legend>Informasi Pribadi</legend>

        <div>
            <label for="nama">Nama Lengkap:</label>
            <input type="text" id="nama" name="nama" required />
        </div>
        <div>
            <label for="ttl">Tanggal Lahir:</label>
            <input type="date" id="ttl" name="ttl" required />
        </div>
        <div>
            <p>Jenis Kelamin:</p>
            <input type="radio" id="pria" name="gender" value="pria" />
            <label for="pria">Pria</label>
            <input type="radio" id="wanita" name="gender" value="wanita" />
            <label for="wanita">Wanita</label>
        </div>
    </fieldset>

    <fieldset>
        <legend>Informasi Akun</legend>

        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label for="pass">Password:</label>
            <input type="password" id="pass" name="pass" minlength="8" required />
        </div>
        <div>
            <label for="konfirmasi">Konfirmasi Password:</label>
            <input type="password" id="konfirmasi" name="konfirmasi" required />
        </div>
    </fieldset>

    <fieldset>
        <legend>Minat & Ketertarikan</legend>

        <p>Pilih minat kamu (boleh lebih dari satu):</p>
        <input type="checkbox" id="coding" name="minat" value="coding" />
        <label for="coding">Coding</label>

        <input type="checkbox" id="desain" name="minat" value="desain" />
        <label for="desain">Desain</label>

        <input type="checkbox" id="bisnis" name="minat" value="bisnis" />
        <label for="bisnis">Bisnis</label>

        <input type="checkbox" id="data" name="minat" value="data" />
        <label for="data">Data Science</label>
    </fieldset>

    <button type="submit">Daftar</button>
</form>
```

### Validasi Form HTML5

HTML5 menyediakan validasi bawaan tanpa JavaScript.

```html
<form>
    <!-- required: field wajib diisi -->
    <input type="text" name="nama" required />

    <!-- minlength / maxlength: panjang teks minimum/maksimum -->
    <input type="text" name="username" minlength="3" maxlength="20" />

    <!-- min / max: nilai minimum/maksimum (untuk number, date, range) -->
    <input type="number" name="umur" min="17" max="60" />
    <input type="date" name="tanggal" min="2024-01-01" max="2024-12-31" />

    <!-- pattern: validasi menggunakan regex -->
    <!-- Contoh: hanya boleh huruf dan angka -->
    <input type="text" name="kode" pattern="[A-Za-z0-9]+" title="Hanya boleh huruf dan angka" />

    <!-- Contoh: format nomor telepon Indonesia -->
    <input
        type="tel"
        name="telp"
        pattern="(\+62|08)[0-9]{8,12}"
        title="Format: 08xx atau +62xx, 10-14 digit"
    />

    <!-- step: interval nilai (untuk number dan range) -->
    <input type="number" name="harga" min="0" max="1000000" step="1000" />

    <!-- novalidate: menonaktifkan validasi HTML5 di seluruh form -->
    <!-- (biasanya digunakan jika pakai validasi JavaScript sendiri) -->
    <!-- <form novalidate> -->

    <button type="submit">Kirim</button>
</form>
```

### Select Lanjutan

```html
<!-- Select dengan optgroup (mengelompokkan pilihan) -->
<label for="bahasa">Bahasa Pemrograman:</label>
<select id="bahasa" name="bahasa">
    <option value="">-- Pilih Bahasa --</option>

    <optgroup label="Frontend">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
    </optgroup>

    <optgroup label="Backend">
        <option value="python">Python</option>
        <option value="php">PHP</option>
        <option value="nodejs">Node.js</option>
        <option value="java">Java</option>
    </optgroup>

    <optgroup label="Mobile">
        <option value="swift">Swift</option>
        <option value="kotlin">Kotlin</option>
        <option value="flutter">Flutter/Dart</option>
    </optgroup>
</select>

<!-- Select multiple (pilih lebih dari satu) -->
<label for="skill">Skill (tahan Ctrl/Cmd untuk pilih banyak):</label>
<select id="skill" name="skill" multiple size="5">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="react">React</option>
    <option value="python">Python</option>
</select>
```

---

## Meta Tags & SEO Dasar

Tag `<meta>` berada di dalam `<head>` dan berisi informasi tentang halaman yang tidak ditampilkan langsung ke pengguna, tetapi penting untuk browser dan mesin pencari.

### Meta Tags Wajib

```html
<head>
    <!-- Encoding karakter (selalu gunakan UTF-8) -->
    <meta charset="UTF-8" />

    <!-- Tampilan di perangkat mobile (selalu sertakan) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Judul halaman (muncul di tab browser & hasil pencarian) -->
    <title>Toko Online Budi - Belanja Elektronik Terpercaya</title>
</head>
```

### Meta Tags untuk SEO

```html
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toko Online Budi - Belanja Elektronik Terpercaya</title>

    <!-- Deskripsi halaman (muncul di hasil pencarian Google, maks ~160 karakter) -->
    <meta name="description" content="Toko Online Budi menyediakan berbagai elektronik berkualitas dengan harga terjangkau. Pengiriman ke seluruh Indonesia." />

    <!-- Kata kunci (kurang penting saat ini, tapi tidak ada salahnya) -->
    <meta name="keywords" content="toko online, elektronik, laptop, smartphone, murah" />

    <!-- Nama penulis/pembuat halaman -->
    <meta name="author" content="Budi Santoso" />

    <!-- Robots: instruksi untuk mesin pencari -->
    <!-- index = boleh diindeks, follow = boleh mengikuti link -->
    <meta name="robots" content="index, follow" />
</head>
```

### Open Graph Meta Tags (Media Sosial)

Open Graph (OG) mengatur tampilan saat link dibagikan di media sosial (Facebook, WhatsApp, Twitter, dll).

```html
<head>
    <!-- ... meta tags lainnya ... -->

    <!-- Open Graph -->
    <meta property="og:title" content="Toko Online Budi - Belanja Elektronik Terpercaya" />
    <meta property="og:description" content="Toko Online Budi menyediakan berbagai elektronik berkualitas." />
    <meta property="og:image" content="https://tokobudi.com/images/og-image.jpg" />
    <meta property="og:url" content="https://tokobudi.com" />
    <meta property="og:type" content="website" />

    <!-- Twitter Card (khusus Twitter/X) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Toko Online Budi" />
    <meta name="twitter:description" content="Belanja elektronik terpercaya." />
    <meta name="twitter:image" content="https://tokobudi.com/images/twitter-card.jpg" />
</head>
```

### Favicon

Favicon adalah ikon kecil yang muncul di tab browser dan bookmark.

```html
<head>
    <!-- Favicon format ICO (paling kompatibel) -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <!-- Favicon format PNG (modern) -->
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <!-- Apple Touch Icon (untuk iPhone/iPad) -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</head>
```

### Link Tag Lainnya di `<head>`

```html
<head>
    <!-- Menghubungkan file CSS eksternal -->
    <link rel="stylesheet" href="styles.css" />

    <!-- Canonical URL (menghindari konten duplikat) -->
    <link rel="canonical" href="https://tokobudi.com/laptop" />

    <!-- Preconnect: koneksi awal ke domain lain untuk performa -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <!-- Preload: muat sumber daya penting lebih awal -->
    <link rel="preload" href="hero-image.jpg" as="image" />

    <!-- Stylesheet dari Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</head>
```

---

## HTML Entities

HTML entities digunakan untuk menampilkan karakter khusus yang memiliki makna di HTML, atau karakter yang tidak ada di keyboard.

### Mengapa Perlu Entities?

Karakter seperti `<`, `>`, dan `&` memiliki makna khusus di HTML. Jika ingin menampilkannya sebagai teks biasa, harus menggunakan entities.

```html
<!-- SALAH: browser akan mengira ini adalah tag -->
<p>Rumus: a < b && b > c</p>

<!-- BENAR: menggunakan entities -->
<p>Rumus: a &lt; b &amp;&amp; b &gt; c</p>
```

### Tabel Entities yang Sering Digunakan

| Karakter | Entity Name | Entity Number | Keterangan |
|----------|-------------|---------------|------------|
| `<` | `&lt;` | `&#60;` | Less than |
| `>` | `&gt;` | `&#62;` | Greater than |
| `&` | `&amp;` | `&#38;` | Ampersand |
| `"` | `&quot;` | `&#34;` | Tanda kutip |
| `'` | `&apos;` | `&#39;` | Apostrof |
| ` ` (spasi) | `&nbsp;` | `&#160;` | Non-breaking space |
| `©` | `&copy;` | `&#169;` | Copyright |
| `®` | `&reg;` | `&#174;` | Registered trademark |
| `™` | `&trade;` | `&#8482;` | Trademark |
| `€` | `&euro;` | `&#8364;` | Euro |
| `£` | `&pound;` | `&#163;` | Pound |
| `¥` | `&yen;` | `&#165;` | Yen |
| `→` | `&rarr;` | `&#8594;` | Panah kanan |
| `←` | `&larr;` | `&#8592;` | Panah kiri |
| `♥` | `&hearts;` | `&#9829;` | Hati |
| `★` | `&#9733;` | `&#9733;` | Bintang penuh |

### Contoh Penggunaan

```html
<p>Hak cipta &copy; 2025 Perusahaan Kami. All rights reserved.</p>

<p>Produk ini adalah merek terdaftar &reg; dari PT. Contoh Jaya.</p>

<p>Harga: &euro;99 atau &pound;85 atau &yen;15.000</p>

<!-- Non-breaking space: mencegah kata terpotong saat wrap -->
<p>Presiden&nbsp;Joko&nbsp;Widodo hadir dalam acara tersebut.</p>

<!-- Menampilkan kode HTML sebagai teks -->
<p>Untuk membuat heading, gunakan tag <code>&lt;h1&gt;</code> hingga <code>&lt;h6&gt;</code>.</p>
```

---

## Atribut Global

Atribut global dapat digunakan pada **semua elemen HTML**. Berikut yang paling penting:

### `id` dan `class`

```html
<!-- id: identifikasi unik, hanya boleh ada satu per halaman -->
<div id="header-utama">Header</div>
<p id="paragraf-intro">Paragraf perkenalan.</p>

<!-- class: bisa digunakan berulang kali, satu elemen bisa punya banyak class -->
<div class="kartu">Kartu 1</div>
<div class="kartu">Kartu 2</div>
<div class="kartu kartu-featured">Kartu Unggulan</div>
```

### `title`

Memberikan tooltip saat kursor diarahkan ke elemen.

```html
<p title="Ini adalah paragraf dengan tooltip">Arahkan kursor ke sini.</p>

<abbr title="HyperText Markup Language">HTML</abbr> adalah bahasa markup.

<a href="dokumen.pdf" title="Download dokumen PDF, ukuran 2.5MB">Download</a>
```

### `data-*` (Custom Data Attributes)

`data-*` digunakan untuk menyimpan data kustom yang tidak perlu ditampilkan ke pengguna, biasanya digunakan oleh JavaScript.

```html
<!-- Menyimpan data produk -->
<div class="produk" data-id="101" data-harga="150000" data-stok="25">
    <h3>Kaos Polos</h3>
    <button class="tombol-beli">Beli Sekarang</button>
</div>

<!-- Menyimpan data pengguna -->
<button data-user-id="42" data-aksi="hapus" class="btn-hapus">
    Hapus Akun
</button>

<!-- Mengakses dengan JavaScript -->
<!-- 
    const produk = document.querySelector('.produk');
    console.log(produk.dataset.id);    // "101"
    console.log(produk.dataset.harga); // "150000"
-->
```

### `tabindex`

Mengatur urutan fokus saat pengguna menekan Tab untuk navigasi keyboard.

```html
<!-- tabindex="0": ikuti urutan normal DOM -->
<button tabindex="0">Tombol Normal</button>

<!-- tabindex="-1": tidak bisa difokus dengan Tab (tapi bisa dengan JavaScript) -->
<div tabindex="-1" id="modal">Modal Dialog</div>

<!-- tabindex positif: urutan kustom (kurang disarankan) -->
<input tabindex="1" type="text" placeholder="Fokus pertama" />
<input tabindex="3" type="text" placeholder="Fokus ketiga" />
<input tabindex="2" type="text" placeholder="Fokus kedua" />
```

### `hidden`

Menyembunyikan elemen (seperti `display: none` di CSS).

```html
<p hidden>Paragraf ini tidak terlihat oleh pengguna.</p>

<div id="pesan-sukses" hidden>
    ✅ Data berhasil disimpan!
</div>
```

### `contenteditable`

Membuat konten elemen bisa diedit langsung oleh pengguna di browser.

```html
<div contenteditable="true" style="border: 1px solid #ccc; padding: 10px;">
    Klik teks ini untuk mengeditnya langsung di browser!
</div>
```

### `draggable`

Mengaktifkan fitur drag-and-drop pada elemen.

```html
<div draggable="true">
    Elemen ini bisa di-drag!
</div>
```

---

## Aksesibilitas HTML (A11y)

Aksesibilitas (disingkat A11y) adalah praktik membuat halaman web yang dapat digunakan oleh **semua orang**, termasuk pengguna dengan disabilitas (pengguna screen reader, keyboard-only, dll).

### Mengapa Aksesibilitas Penting?

1. **Inklusivitas** - Semua orang berhak mengakses informasi
2. **SEO** - Website yang aksesibel lebih disukai mesin pencari
3. **Legalitas** - Di beberapa negara, aksesibilitas web diwajibkan oleh hukum
4. **Pengalaman Pengguna** - Website yang aksesibel umumnya lebih mudah digunakan semua orang

### Alt Text yang Baik

```html
<!-- ❌ Buruk: tidak ada alt text -->
<img src="promo-lebaran.jpg" />

<!-- ❌ Buruk: alt text tidak deskriptif -->
<img src="promo-lebaran.jpg" alt="gambar" />

<!-- ❌ Buruk: mengulangi kata "gambar" -->
<img src="promo-lebaran.jpg" alt="gambar promo lebaran" />

<!-- ✅ Baik: deskriptif dan informatif -->
<img src="promo-lebaran.jpg" alt="Promo Lebaran: diskon 50% untuk semua produk elektronik, berlaku 1-10 April 2025" />

<!-- Gambar dekoratif: gunakan alt="" (kosong) agar screen reader melewatinya -->
<img src="garis-dekoratif.png" alt="" />
```

### Label pada Form

```html
<!-- ❌ Buruk: input tanpa label -->
<input type="text" placeholder="Nama" />

<!-- ❌ Buruk: label tidak terhubung ke input -->
<label>Nama</label>
<input type="text" />

<!-- ✅ Baik cara 1: menggunakan for & id -->
<label for="nama-lengkap">Nama Lengkap:</label>
<input type="text" id="nama-lengkap" name="nama" />

<!-- ✅ Baik cara 2: input di dalam label -->
<label>
    Nama Lengkap:
    <input type="text" name="nama" />
</label>
```

### ARIA (Accessible Rich Internet Applications)

ARIA adalah atribut tambahan untuk meningkatkan aksesibilitas ketika HTML semantik saja tidak cukup.

```html
<!-- aria-label: label untuk elemen yang tidak memiliki teks terlihat -->
<button aria-label="Tutup dialog">✕</button>

<nav aria-label="Navigasi utama">
    <a href="/">Home</a>
    <a href="/about">Tentang</a>
</nav>

<!-- aria-hidden: menyembunyikan elemen dari screen reader -->
<!-- (untuk elemen dekoratif atau yang sudah ada teks alternatifnya) -->
<span aria-hidden="true">★★★★☆</span>
<span class="sr-only">Rating: 4 dari 5 bintang</span>

<!-- aria-required: menandai field wajib (gunakan bersama required) -->
<input type="text" required aria-required="true" />

<!-- aria-expanded: menandai apakah elemen diperluas atau tidak -->
<button aria-expanded="false" aria-controls="dropdown-menu">
    Menu
</button>
<ul id="dropdown-menu" hidden>
    <li><a href="/">Home</a></li>
    <li><a href="/about">Tentang</a></li>
</ul>

<!-- role: mendefinisikan peran elemen secara eksplisit -->
<div role="alert">
    ⚠️ Sesi Anda akan berakhir dalam 5 menit.
</div>

<div role="navigation" aria-label="Breadcrumb">
    <a href="/">Home</a> &rsaquo;
    <a href="/produk">Produk</a> &rsaquo;
    <span aria-current="page">Laptop</span>
</div>
```

### Navigasi Keyboard

Pastikan semua fungsi bisa diakses melalui keyboard (Tab, Enter, Space, Arrow keys):

```html
<!-- ✅ Button: bisa diakses keyboard secara default -->
<button onclick="aksi()">Klik Saya</button>

<!-- ❌ Div sebagai tombol: tidak bisa diakses keyboard -->
<div onclick="aksi()">Klik Saya</div>

<!-- ✅ Jika harus menggunakan div, tambahkan role dan tabindex -->
<div role="button" tabindex="0" onclick="aksi()" onkeydown="if(event.key==='Enter')aksi()">
    Klik Saya
</div>
```

**Tips Aksesibilitas Umum:**
- Selalu gunakan tag HTML yang semantik (`<button>` bukan `<div>` untuk tombol)
- Pastikan kontras warna teks dengan latar belakang cukup (rasio minimal 4.5:1)
- Jangan andalkan warna saja untuk menyampaikan informasi
- Sertakan `<caption>` atau `aria-label` pada tabel kompleks
- Gunakan heading secara berurutan (`<h1>` → `<h2>` → `<h3>`)

---

## Latihan

### Latihan 1: Halaman Multimedia

Buat halaman HTML yang menampilkan galeri multimedia:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Galeri Multimedia</title>
</head>
<body>

    <header>
        <h1>Galeri Multimedia Saya</h1>
    </header>

    <main>
        <!-- TODO 1: Tambahkan section "Galeri Foto" dengan minimal 3 gambar -->
        <!-- Setiap gambar harus dibungkus dalam figure + figcaption -->
        <!-- Gunakan https://picsum.photos/400/300 untuk gambar placeholder -->

        <!-- TODO 2: Tambahkan section "Video Pilihan" -->
        <!-- Embed video YouTube favorit kamu menggunakan iframe -->

        <!-- TODO 3: Tambahkan section "Peta Lokasi" -->
        <!-- Embed Google Maps (lokasi kota kamu) menggunakan iframe -->
    </main>

    <footer>
        <p>&copy; 2025 Nama Kamu. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

### Latihan 2: Form Pendaftaran Kursus Lengkap

Buat form pendaftaran kursus online dengan fieldset:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pendaftaran Kursus Online</title>
</head>
<body>
    <h1>Form Pendaftaran Kursus Online</h1>

    <form action="/daftar" method="POST">

        <!-- TODO: Buat fieldset "Data Diri" dengan field: -->
        <!-- nama lengkap (text, required), email (email, required), -->
        <!-- no. telepon (tel, pattern validasi), tanggal lahir (date) -->

        <!-- TODO: Buat fieldset "Pilihan Kursus" dengan: -->
        <!-- dropdown kursus menggunakan optgroup (minimal 2 kategori, 3 kursus/kategori) -->
        <!-- datalist kota asal -->
        <!-- radio button: metode belajar (Online/Offline/Hybrid) -->

        <!-- TODO: Buat fieldset "Pengalaman" dengan: -->
        <!-- checkbox skill yang sudah dikuasai (minimal 5 pilihan) -->
        <!-- select level pengalaman (Pemula/Menengah/Mahir) -->
        <!-- textarea "Ceritakan tujuan belajar kamu" (required, minlength="50") -->

        <!-- TODO: Buat fieldset "Upload Dokumen" dengan: -->
        <!-- input file untuk foto profil (accept hanya gambar) -->
        <!-- input file untuk CV (accept .pdf saja) -->

        <!-- TODO: Checkbox persetujuan syarat & ketentuan (required) -->

        <button type="submit">Daftar Sekarang</button>
        <button type="reset">Reset Form</button>
    </form>
</body>
</html>
```

---

### Latihan 3: Halaman dengan Meta Tags Lengkap

Lengkapi bagian `<head>` dari template berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- TODO: Tambahkan charset dan viewport -->

    <!-- TODO: Tambahkan title yang SEO-friendly -->

    <!-- TODO: Tambahkan meta description (maks 160 karakter) -->

    <!-- TODO: Tambahkan meta author -->

    <!-- TODO: Tambahkan Open Graph tags (og:title, og:description, og:image, og:url) -->

    <!-- TODO: Tambahkan favicon (boleh gunakan emoji sebagai SVG favicon) -->
    <!-- Hint: <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛒</text></svg>" /> -->
</head>
<body>
    <h1>Toko Online Saya</h1>
    <p>Selamat datang di toko online kami!</p>
</body>
</html>
```

---

### Latihan 4: Perbaiki Aksesibilitas

Temukan dan perbaiki semua masalah aksesibilitas pada kode berikut:

```html
<!-- Kode BERMASALAH - perbaiki semua kesalahan aksesibilitas -->
<!DOCTYPE html>
<html>
<head>
    <title>Blog</title>
</head>
<body>

    <!-- Masalah 1: Tidak ada lang attribute di html -->
    <!-- Masalah 2: Tidak ada meta charset dan viewport -->

    <div>
        <!-- Masalah 3: Navigasi tidak menggunakan tag semantic yang tepat -->
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/kontak">Kontak</a>
    </div>

    <div>
        <!-- Masalah 4: Heading tidak berurutan -->
        <h3>Artikel Terbaru</h3>

        <div>
            <!-- Masalah 5: Gambar tanpa alt text -->
            <img src="artikel1.jpg" />
            <h5>Judul Artikel 1</h5>
            <p>Deskripsi artikel 1...</p>
            <!-- Masalah 6: Div digunakan sebagai tombol -->
            <div onclick="bacaLebih(1)">Baca Selengkapnya</div>
        </div>

        <div>
            <img src="artikel2.jpg" alt="gambar" />
            <h5>Judul Artikel 2</h5>
            <p>Deskripsi artikel 2...</p>
            <div onclick="bacaLebih(2)">Baca Selengkapnya</div>
        </div>
    </div>

    <div>
        <!-- Masalah 7: Form tanpa label yang terhubung -->
        <h3>Berlangganan Newsletter</h3>
        <form>
            Email: <input type="text" placeholder="email kamu" />
            <!-- Masalah 8: Input email menggunakan type="text" -->
            <div onclick="daftar()">Daftar</div>
            <!-- Masalah 9: Tombol bukan menggunakan tag button -->
        </form>
    </div>

    <div>
        <!-- Masalah 10: Tidak ada info copyright yang jelas dan tidak pakai footer -->
        Hak Cipta 2025
    </div>

</body>
</html>
```

---

## Tugas Mandiri

### Challenge: Website Blog Pribadi yang Aksesibel

Buat website **Blog Pribadi** yang terdiri dari **2 halaman** dengan standar aksesibilitas dan SEO yang baik:

#### Halaman 1: Beranda Blog (`index.html`)

**Bagian `<head>` harus memiliki:**
- Charset, viewport, title
- Meta description dan author
- Open Graph tags
- Favicon

**Konten halaman:**
- `<header>` dengan navigasi menggunakan `<nav>` (link ke index.html dan artikel.html)
- Section hero: judul blog + tagline + foto profil (dengan alt text deskriptif)
- Section "Artikel Terbaru": minimal 3 preview artikel
  - Setiap artikel berisi: gambar (dengan figure + figcaption), judul (h2), tanggal, cuplikan teks, tombol "Baca Selengkapnya"
  - Setiap tombol harus menggunakan tag `<a>` atau `<button>`, **bukan div**
- Section "Tentang Saya": foto + paragraf perkenalan + list keahlian
- `<footer>` dengan copyright entity `&copy;` dan link media sosial

#### Halaman 2: Halaman Artikel (`artikel.html`)

**Konten halaman:**
- `<header>` dengan navigasi yang sama
- `<main>` berisi satu artikel panjang dengan:
  - Heading yang berurutan (h1 → h2 → h3)
  - Minimal 3 paragraf
  - Satu gambar (figure + figcaption dengan alt text yang baik)
  - Satu blockquote dengan atribut `cite`
  - Satu tabel data sederhana (dengan `<caption>`)
  - Daftar (ul atau ol)
  - HTML entities minimal 3 jenis
- `<aside>` berisi "Artikel Terkait" (list link minimal 3)
- `<footer>` yang sama

#### Kriteria Penilaian:

- [ ] Meta tags lengkap di kedua halaman
- [ ] Semua gambar memiliki alt text yang deskriptif
- [ ] Semua input form memiliki label yang terhubung
- [ ] Menggunakan semantic HTML dengan benar
- [ ] Heading berurutan (tidak melompat)
- [ ] Navigasi menggunakan `<nav>` dan dapat diakses keyboard
- [ ] HTML entities digunakan dengan benar
- [ ] Fieldset dan legend untuk form (jika ada)
- [ ] Kode valid (cek dengan [validator.w3.org](https://validator.w3.org))

#### Fitur Bonus (Nilai Tambah):
- [ ] Tambahkan tabel dengan `colspan` atau `rowspan`
- [ ] Tambahkan elemen `<video>` atau `<audio>`
- [ ] Tambahkan `aria-label` pada elemen yang membutuhkan
- [ ] Tambahkan `data-*` attribute pada elemen yang relevan

---

## Ringkasan Materi

| Topik | Elemen/Atribut Kunci |
|-------|----------------------|
| Block vs Inline | `<div>`, `<span>`, `<blockquote>`, `<q>` |
| Media | `<video>`, `<audio>`, `<figure>`, `<figcaption>`, `<iframe>`, `<picture>` |
| Form Lanjutan | `<datalist>`, `<fieldset>`, `<legend>`, `<optgroup>`, `type="range/color/file"` |
| Validasi Form | `required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, `step` |
| Meta & SEO | `<meta name>`, `<meta property>` (OG), `<link rel="icon">` |
| HTML Entities | `&lt;`, `&gt;`, `&amp;`, `&copy;`, `&nbsp;` |
| Atribut Global | `id`, `class`, `title`, `data-*`, `tabindex`, `hidden` |
| Aksesibilitas | `alt`, `aria-label`, `aria-hidden`, `role`, `label[for]` |

---

### Latihan HTML 2 dan Challenge sudah dikerjakan di repositories yang berbeda
link nya dibawah
https://github.com/Delfianz/HTML2

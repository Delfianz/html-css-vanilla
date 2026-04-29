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
|                   | 1.14 Tantangan HTML 1 : Website Portofolio Sederhana       | 16 Menit   |
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
|                   | 2.12 Tantangan HTML 2 : Website Blog Pribadi yang Aksesibel| 45 Menit   |

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


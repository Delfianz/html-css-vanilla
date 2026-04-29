# Basic CSS
| Objective         | Key Result                                                 |  Time Goal |
|-------------------|------------------------------------------------------------|------------|
| CSS               | 1.1 Pengertian CSS                                         | 1 Menit    |
|                   | 1.2 Cara Menambahkan CSS                                   | 1 Menit    |
|                   | 1.3 Selector CSS                                           | 1 Menit    |
|                   | 1.4 Warna dan Background                                   | 1 Menit    |
|                   | 1.5 Text Styling                                           | 1 Menit    |
|                   | 1.6 Box Model                                              | 5 Menit    |
|                   | 1.7 Display dan Layout Dasar                               | 5 Menit    |
|                   | 1.8 Pseudo Class dan Pseudo Element                        | 5 Menit    |
|                   | 1.9 Latihan  CSS 0 : Styling Paragraf                      | 15 Menit   |
|                   | 1.11 Latihan  CSS 0 : Styling Judul                        | 15 Menit   |
|                   | 1.12 Latihan CSS 0 : Box Model                             | 15 Menit   |
|                   | 1.13 Challenge: Membuat Halaman Website dengan CSS         | 16 Menit   |
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

# CSS - Pertemuan 3: CSS Dasar, Selector, dan Box Model

## Daftar Isi
1. Review Pertemuan Sebelumnya
2. Pengertian CSS
3. Cara Menambahkan CSS
4. Selector CSS
5. Warna dan Background
6. Styling Teks
7. Box Model
8. Display dan Layout Dasar
9. Pseudo Class dan Pseudo Element
10. Latihan
11. Tugas Mandiri

## Review Pertemuan Sebelumnya 
Pada pertemuan sebelumnya kita telah mempelajari HTML sebagai dasar pembuatan halaman web, di antaranya:

- ✅ Struktur dasar dokumen HTML
- ✅ Heading dan paragraf
- ✅ Link dan gambar
- ✅ List dan tabel
- ✅ Form dasar
- ✅ Semantic HTML
- ✅ Media seperti video dan audio

HTML digunakan untuk membuat struktur halaman web, tetapi tampilannya masih sangat sederhana.

Pada pertemuan ini kita akan mempelajari CSS (Cascading Style Sheets) yang digunakan untuk mengatur tampilan halaman HTML agar lebih menarik dan rapi.

## Pengertian CSS
CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan atau desain dari halaman web.

Dengan CSS kita dapat mengatur:
- Warna teks
- Ukuran huruf
- Jarak antar elemen
- Layout halaman
- Background
- Animasi sederhana
- Contoh HTML tanpa CSS:

<p>Ini adalah paragraf</p>

Contoh HTML dengan CSS:

p {
    color: blue;
    font-size: 18px;
}

Hasilnya teks paragraf akan berubah menjadi berwarna biru dan lebih besar.

# Cara Menambahkan CSS

Ada tiga cara utama untuk menambahkan CSS pada halaman HTML.

## Inline CSS
CSS ditulis langsung di dalam tag HTML menggunakan atribut style.

<p style="color:red; font-size:20px;">
Teks ini berwarna merah
</p>

Kelebihan:
- Mudah digunakan untuk perubahan kecil

Kekurangan:
- Sulit dikelola jika halaman web besar
- Internal CSS

## Internal CSS
CSS ditulis di dalam tag <style> pada bagian <head>.

<head>
<style>
p {
    color: blue;
    font-size: 18px;
}
</style>
</head>

Biasanya digunakan untuk website sederhana yang hanya memiliki satu halaman.

## External CSS
CSS ditulis di file terpisah dengan ekstensi .css

HTML:

<link rel="stylesheet" href="style.css">

File style.css:

p {
    color: green;
    font-size: 18px;
}

Kelebihan:
- Kode lebih rapi
- Mudah digunakan kembali
- Cocok untuk website besar

# Selector CSS
Selector digunakan untuk memilih elemen HTML yang akan diberi style.

## Element Selector
Memilih elemen berdasarkan nama tag.

p {
    color: blue;
}

Semua <p> akan berubah menjadi biru.

## Class Selector
Menggunakan atribut class.

HTML:

<p class="judul">Ini adalah judul</p>

CSS:

.judul {
    color: red;
    font-weight: bold;
}

## ID Selector
Digunakan untuk elemen yang unik.

HTML:

<h1 id="header">Website Saya</h1>

CSS:

#header {
    color: purple;
}

## Group Selector
Digunakan untuk memilih beberapa elemen sekaligus.

h1, h2, h3 {
    color: navy;
}

## Descendant Selector
Digunakan untuk memilih elemen yang berada di dalam elemen lain.

div p {
    color: green;
}

Artinya semua <p> yang berada di dalam <div> akan berubah warna menjadi hijau.

# Warna dan Background
CSS memungkinkan kita mengatur warna teks dan latar belakang.

## Warna Teks
p {
    color: red;
}

Format warna dapat ditulis dengan beberapa cara:

## Nama warna
color: blue;

## HEX
color: #ff0000;

## RGB
color: rgb(255,0,0);

# Background Color
Digunakan untuk mengubah warna latar belakang.

body {
    background-color: lightgray;
}

## Background Image
Digunakan untuk menambahkan gambar sebagai latar belakang.

body {
    background-image: url("background.jpg");
}

# Styling Teks
CSS juga digunakan untuk mengatur tampilan teks.

## Font Size
p {
    font-size: 20px;
}

## Font Family
p {
    font-family: Arial, sans-serif;
}

## Text Align
Digunakan untuk mengatur posisi teks.

h1 {
    text-align: center;
}

## Font Weight
Digunakan untuk membuat teks tebal.

p {
    font-weight: bold;
}

## Text Decoration
Biasanya digunakan untuk mengatur tampilan link.

a {
    text-decoration: none;
}

# Box Model
Setiap elemen HTML dianggap sebagai sebuah kotak.
Box model terdiri dari:
1. Content
2. Padding
3. Border
4. Margin

Contoh penggunaan:

div {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}

### Penjelasan:
| Properti  | Fungsi                         |
| Width     | Mengatur lebar elemen          |
| Padding   | Jarak antara konten dan border |
| Border	| Garis tepi elemen              |
| Margin	| Jarak antar elemen             |

# Display dan Layout Dasar
Properti display digunakan untuk mengatur bagaimana elemen ditampilkan.

## Block Element
Elemen block akan selalu berada pada baris baru.
Contoh:
- div
- p
- h1

## Inline Element
Elemen inline tidak memulai baris baru.
Contoh:
- span
- a
- strong

## Inline Block
Gabungan antara inline dan block.

img {
    display: inline-block;
}

## Menyembunyikan Elemen
Elemen dapat disembunyikan menggunakan:

display: none;

# Pseudo Class dan Pseudo Element
Pseudo class digunakan untuk memberikan style berdasarkan kondisi tertentu.
Contoh:
a:hover {
    color: red;
}

Saat kursor diarahkan ke link, warnanya berubah.

Contoh lain:
a:visited
a:active
a:focus

Pseudo element digunakan untuk memodifikasi bagian tertentu dari elemen.

Contoh:
p::first-letter {
    font-size: 30px;
    color: red;
}

Huruf pertama pada paragraf akan lebih besar.

Pseudo element lain:
::before
::after
::first-line

# Latihan

## Latihan 1: Styling Paragraf
Buat halaman HTML dengan 3 paragraf.
Gunakan CSS untuk:
1. Mengubah warna teks
2. Mengubah ukuran font
3. Menambahkan background color

## Latihan 2: Styling Judul
Buat halaman dengan elemen:
- h1
- h2
- h3

Atur dengan CSS:
- h1 → warna biru
- h2 → warna hijau
- h3 → warna merah

## Latihan 3: Box Model
Buat sebuah <div> dengan:
- width: 300px
- padding: 20px
- border: 2px solid
- margin: 20px
Isi dengan teks bebas.

# Tugas Mandiri
Challenge: Membuat Halaman Website dengan CSS
Buat halaman website sederhana yang terdiri dari:
## Header
Berisi judul website.

## Navigasi
Link menu:
- Home
- Artikel
- Kontak

## Konten
Minimal berisi:
- 1 judul
- 2 paragraf
- 1 gambar

## Footer
Berisi copyright.
Gunakan CSS untuk:
- Mengatur warna background
- Mengatur ukuran teks
- Mengatur margin dan padding
- Menghilangkan garis pada link

# Ringkasan Materi
| Topik	                | Properti / Konsep
| CSS	                | Bahasa untuk mengatur tampilan HTML
| Cara menambahkan CSS	|Inline, Internal, External
| Selector	            | Element, Class, ID
| Warna	                | color, background-color
| Teks	                | font-size, font-family, text-align
| Box Model	            | margin, border, padding
| Layout	            | display block, inline
| Interaksi	            | pseudo class

# Referensi

MDN Web Docs - CSS
https://developer.mozilla.org/en-US/docs/Web/CSS

W3Schools - CSS Tutorial
https://www.w3schools.com/css/

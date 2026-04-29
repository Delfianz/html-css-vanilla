# Basic CSS
| Objective         | Key Result                                                                                     |  Time Goal |
|-------------------|------------------------------------------------------------------------------------------------|------------|
| CSS               | 1.1 Pengertian CSS                                                                             | 1 Menit    |
|                   | 1.2 Cara Menambahkan CSS                                                                       | 1 Menit    |
|                   | 1.3 Selector CSS                                                                               | 1 Menit    |
|                   | 1.4 Warna dan Background                                                                       | 1 Menit    |
|                   | 1.5 Text Styling                                                                               | 1 Menit    |
|                   | 1.6 Box Model                                                                                  | 5 Menit    |
|                   | 1.7 Display dan Layout Dasar                                                                   | 5 Menit    |
|                   | 1.8 Pseudo Class dan Pseudo Element                                                            | 5 Menit    |
|                   | 1.9 Latihan  CSS 0 : Styling Paragraf                                                          | 15 Menit   |
|                   | 1.11 Latihan  CSS 0 : Styling Judul                                                            | 15 Menit   |
|                   | 1.12 Latihan CSS 0 : Box Model                                                                 | 15 Menit   |
|                   | 1.13 Challenge CSS 0 : Membuat Halaman Website dengan CSS                                      | 30 Menit   |
|                   | 2.1 Pengertian Flexbox                                                                         | 8 Menit    |
|                   | 2.2 Konsep Dasar Flexbox                                                                       | 10 Menit   |
|                   | 2.3 Properti pada Flex Container                                                               | 15 Menit   |
|                   | 2.4 Properti pada Flex Item                                                                    | 10 Menit   |
|                   | 2.5 Contoh Layout Menggunakan Flexbox                                                          | 10 Menit   |
|                   | 2.6 Latihan CSS 1 :  Flexbox Horizontal                                                        | 15 Menit   |
|                   | 2.7 Latihan CSS 1 : Centering dengan Flexbox                                                   | 15 Menit   |
|                   | 2.8 Latihan CSS 1 :  Layout Kartu                                                              | 15 Menit   |
|                   | 2.9 Challenge CSS 1: Membuat Layout Website dengan Flexbox                                     | 20 Menit   |
|                   | 3.1 Pengertian Responsive Design                                                               | 3 Menit    |
|                   | 3.2 Mengapa Responsive Design Penting                                                          | 3 Menit    |
|                   | 3.3 Pengertian Media Query                                                                     | 5 Menit    |
|                   | 3.4 Struktur Media Query                                                                       | 15 Menit   |
|                   | 3.5 Contoh Penggunaan Media Query                                                              | 20 Menit   |
|                   | 3.6 Latihan CSS 2 : Buat layout card menggunakan flexbox                                       | 30 Menit   |
|                   | 3.7 Latihan CSS 2 : Membuat navbar yang responsive                                             | 30 Menit   |
|                   | 3.8 Challenge CSS 2 : Tambahkan responsive design pada website yang sudah kamu buat sebelumnya.| 50 Menit   |

# CSS 0 : CSS Dasar, Selector, dan Box Model

## Daftar Isi
1. [Review Pertemuan Sebelumnya](#review-pertemuan-sebelumnya)
2. [Pengertian CSS](#pengertian-css)
3. [Cara Menambahkan CSS](#cara-menambahkan-css)
4. [Selector CSS](#selector-css)
5. [Warna dan Background](#warna-dan-background)
6. [Styling Teks](#styling-teks)
7. [Box Model](#box-model)
8. [Display dan Layout Dasar](#display-dan-layout-dasar)
9. [Pseudo Class dan Pseudo Element](pseudo-class-dan-pseudo-element)
10. [Latihan](#latihan)
11. [Tugas Mandiri](#tugas-mandiri)

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

```html
<p>Ini adalah paragraf</p>
```
Contoh HTML dengan CSS:

```css
p {
    color: blue;
    font-size: 18px;
}
```
Hasilnya teks paragraf akan berubah menjadi berwarna biru dan lebih besar.

# Cara Menambahkan CSS

Ada tiga cara utama untuk menambahkan CSS pada halaman HTML.

## Inline CSS
CSS ditulis langsung di dalam tag HTML menggunakan atribut style.
```css
<p style="color:red; font-size:20px;">
Teks ini berwarna merah
</p>
```
Kelebihan:
- Mudah digunakan untuk perubahan kecil

Kekurangan:
- Sulit dikelola jika halaman web besar
- Internal CSS

## Internal CSS
CSS ditulis di dalam tag <style> pada bagian <head>.
```html
<head>
<style>
p {
    color: blue;
    font-size: 18px;
}
</style>
</head>
```
Biasanya digunakan untuk website sederhana yang hanya memiliki satu halaman.

## External CSS
CSS ditulis di file terpisah dengan ekstensi .css

HTML:
```html
<link rel="stylesheet" href="style.css">
```
File style.css:
```css
p {
    color: green;
    font-size: 18px;
}
```
Kelebihan:
- Kode lebih rapi
- Mudah digunakan kembali
- Cocok untuk website besar

# Selector CSS
Selector digunakan untuk memilih elemen HTML yang akan diberi style.

## Element Selector
Memilih elemen berdasarkan nama tag.
```css
p {
    color: blue;
}
```
Semua `<p>` akan berubah menjadi biru.

## Class Selector
Menggunakan atribut class.

HTML:
```html
<p class="judul">Ini adalah judul</p>
```
CSS:
```css
.judul {
    color: red;
    font-weight: bold;
}
```
## ID Selector
Digunakan untuk elemen yang unik.

HTML:
```html
<h1 id="header">Website Saya</h1>
```
CSS:
```css
#header {
    color: purple;
}
```
## Group Selector
Digunakan untuk memilih beberapa elemen sekaligus.
```css
h1, h2, h3 {
    color: navy;
}
```
## Descendant Selector
Digunakan untuk memilih elemen yang berada di dalam elemen lain.
```css
div p {
    color: green;
}
```
Artinya semua `<p>` yang berada di dalam `<div>` akan berubah warna menjadi hijau.

# Warna dan Background
CSS memungkinkan kita mengatur warna teks dan latar belakang.

## Warna Teks
```css
p {
    color: red;
}
```
Format warna dapat ditulis dengan beberapa cara:

## Nama warna
```css
color: blue;
```
## HEX
```css
color: #ff0000;
```
## RGB
```css
color: rgb(255,0,0);
```
# Background Color
Digunakan untuk mengubah warna latar belakang.
```css
body {
    background-color: lightgray;
}
```
## Background Image
Digunakan untuk menambahkan gambar sebagai latar belakang.
```css
body {
    background-image: url("background.jpg");
}
```
# Styling Teks
CSS juga digunakan untuk mengatur tampilan teks.

## Font Size
```css
p {
    font-size: 20px;
}
```
## Font Family
```css
p {
    font-family: Arial, sans-serif;
}
```
## Text Align
Digunakan untuk mengatur posisi teks.
```css
h1 {
    text-align: center;
}
```
## Font Weight
Digunakan untuk membuat teks tebal.
```css
p {
    font-weight: bold;
}
```
## Text Decoration
Biasanya digunakan untuk mengatur tampilan link.
```css
a {
    text-decoration: none;
}
```
# Box Model
Setiap elemen HTML dianggap sebagai sebuah kotak.
Box model terdiri dari:
1. Content
2. Padding
3. Border
4. Margin

Contoh penggunaan:
```css
div {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```
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
- `<div>`
- `<p>`
- `<h1>`

## Inline Element
Elemen inline tidak memulai baris baru.
Contoh:
- `<span>`
- `<a>`
- `<strong>`

## Inline Block
Gabungan antara inline dan block.
```css
img {
    display: inline-block;
}
```
## Menyembunyikan Elemen
Elemen dapat disembunyikan menggunakan:
```css
display: none;
```
# Pseudo Class dan Pseudo Element
Pseudo class digunakan untuk memberikan style berdasarkan kondisi tertentu.
Contoh:
```css
a:hover {
    color: red;
}
```
Saat kursor diarahkan ke link, warnanya berubah.

Contoh lain:
```css
a:visited
a:active
a:focus
```
Pseudo element digunakan untuk memodifikasi bagian tertentu dari elemen.

Contoh:
```css
p::first-letter {
    font-size: 30px;
    color: red;
}
```
Huruf pertama pada paragraf akan lebih besar.

Pseudo element lain:
```css
::before
::after
::first-line
```
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
Buat sebuah `<div>` dengan:
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

## Latihan CSS 0 dan Challange sudah ada di repositori yang berbeda
### Link dibawah
https://github.com/Delfianz/CSS0

# CSS 1 : CSS Dasar, Selector, dan Box Model
## Daftar Isi
1. [Review Pertemuan Sebelumnya](#review-pertemuan-sebelumnya)
2. [Pengertian CSS](#pengertian-css)
3. [Cara Menambahkan CSS](#cara-menambahkan-css)
4. [Selector CSS](#selector-css)
5. [Warna dan Background](#warna-dan-background)
6. [Styling Teks](#styling-teks)
7. [Box Model](#box-model)
8. [Display dan Layout Dasar](#display-dan-layout-dasar)
9. [Pseudo Class dan Pseudo Element](#pseudo-class-dan-pseudo-element)
10. [Latihan](#latihan)
11. [Tugas Mandiri](#tugas-mandiri)

---    

## Review Pertemuan Sebelumnya
Pada pertemuan sebelumnya kita telah mempelajari HTML sebagai dasar pembuatan halaman web, di antaranya:

- ✅ Struktur dasar dokumen HTML
- ✅ Heading dan paragraf
- ✅ Link dan gambar
- ✅ List dan tabel
- ✅ Form dasar
- ✅ Semantic HTML
- ✅ Media seperti video dan audio

HTML digunakan untuk **membuat struktur halaman web**, tetapi tampilannya masih sangat sederhana.

Pada pertemuan ini kita akan mempelajari **CSS (Cascading Style Sheets)** yang digunakan untuk **mengatur tampilan halaman HTML agar lebih menarik dan rapi.**

## Pengertian CSS
CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk **mengatur tampilan atau desain dari halaman web.**

Dengan CSS kita dapat mengatur:

- Warna teks
- Ukuran huruf
- Jarak antar elemen
- Layout halaman
- Background
- Animasi sederhana

Contoh HTML tanpa CSS:
```html
<p>Ini adalah paragraf</p>
```
Contoh HTML dengan CSS:
```css
p {
    color: blue;
    font-size: 18px;
}
```
Hasilnya teks paragraf akan berubah menjadi berwarna biru dan lebih besar.

## Cara Menambahkan CSS
Ada tiga cara utama untuk menambahkan CSS pada halaman HTML.

### Inline CSS
CSS ditulis langsung di dalam tag HTML menggunakan atribut style.
```css
<p style="color:red; font-size:20px;">
Teks ini berwarna merah
</p>
```
Kelebihan:
- Mudah digunakan untuk perubahan kecil

Kekurangan:
- Sulit dikelola jika halaman web besar

### Internal CSS
CSS ditulis di dalam tag <style> pada bagian <head>.
```html
<head>
<style>
p {
    color: blue;
    font-size: 18px;
}
</style>
</head>
```
Biasanya digunakan untuk website sederhana yang hanya memiliki satu halaman.

### External CSS
CSS ditulis di file terpisah dengan ekstensi .css.

HTML:
```html
<link rel="stylesheet" href="style.css">
```
File style.css:
```css
p {
    color: green;
    font-size: 18px;
}
```
Kelebihan:
- Kode lebih rapi
- Mudah digunakan kembali
- Cocok untuk website besar

## Selector CSS
Selector digunakan untuk memilih elemen HTML yang akan diberi style.

### Element Selector
Memilih elemen berdasarkan nama tag.
```css
p {
    color: blue;
}
```
Semua `<p>` akan berubah menjadi biru.

### Class Selector
Menggunakan atribut class.

HTML:
```html
<p class="judul">Ini adalah judul</p>
```
CSS:
```css
.judul {
    color: red;
    font-weight: bold;
}
```
### ID Selector
Digunakan untuk elemen yang unik.

HTML:
```html
<h1 id="header">Website Saya</h1>
```
CSS:
```css
#header {
    color: purple;
}
```
### Group Selector
Digunakan untuk memilih beberapa elemen sekaligus.
```css
h1, h2, h3 {
    color: navy;
}
```
### Descendant Selector
Digunakan untuk memilih elemen yang berada di dalam elemen lain.
```css
div p {
    color: green;
}
```
Artinya semua `<p>` yang berada di dalam `<div>` akan berubah warna menjadi hijau.

## Warna dan Background
CSS memungkinkan kita mengatur warna teks dan latar belakang.

### Warna Teks
```css
p {
    color: red;
}
```
Format warna dapat ditulis dengan beberapa cara:

### Nama warna
```css
color: blue;
HEX
color: #ff0000;
RGB
color: rgb(255,0,0);
```
### Background Color
Digunakan untuk mengubah warna latar belakang.
```css
body {
    background-color: lightgray;
}
```
### Background Image
Digunakan untuk menambahkan gambar sebagai latar belakang.
```css
body {
    background-image: url("background.jpg");
}
```
## Styling Teks
CSS juga digunakan untuk mengatur tampilan teks.

### Font Size
```css
p {
    font-size: 20px;
}
```
### Font Family
```css
p {
    font-family: Arial, sans-serif;
}
```
### Text Align

Digunakan untuk mengatur posisi teks.
```css
h1 {
    text-align: center;
}
```
### Font Weight
Digunakan untuk membuat teks tebal.
```css
p {
    font-weight: bold;
}
```
### Text Decoration
Biasanya digunakan untuk mengatur tampilan link.
```css
a {
    text-decoration: none;
}
```
## Box Model
Setiap elemen HTML dianggap sebagai sebuah kotak.

Box model terdiri dari:
- Content
- Padding
- Border
- Margin
Contoh penggunaan:
```css
div {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```
Penjelasan:
| Properti	    | Fungsi                        |
| width	        | Mengatur lebar elemen         |
| padding	    | Jarak antara konten dan border|
| border	    | Garis tepi elemen             |
| margin	    | Jarak antar elemen            |

## Display dan Layout Dasar
Properti display digunakan untuk mengatur bagaimana elemen ditampilkan.

### Block Element
Elemen block akan selalu berada pada baris baru.

Contoh:
- `<div>`
- `<p>`
- `<h1>`

### Inline Element
Elemen inline tidak memulai baris baru.

Contoh:
- `<span>`
- `<a>`
- `<strong>`

### Inline Block
Gabungan antara inline dan block.
```css
img {
    display: inline-block;
}
```
### Menyembunyikan Elemen
Elemen dapat disembunyikan menggunakan:
```css
display: none;
```
## Pseudo Class dan Pseudo Element
Pseudo class digunakan untuk memberikan style berdasarkan kondisi tertentu.
Contoh:
```css
a:hover {
    color: red;
}
```
Saat kursor diarahkan ke link, warnanya berubah.

Contoh lain:
```css
a:visited
a:active
a:focus
```
Pseudo element digunakan untuk memodifikasi bagian tertentu dari elemen.

Contoh:
```css
p::first-letter {
    font-size: 30px;
    color: red;
}
```
Huruf pertama pada paragraf akan lebih besar.

Pseudo element lain:
```css
::before
::after
::first-line
```
## Latihan
### Latihan 1: Styling Paragraf

Buat halaman HTML dengan 3 paragraf.

Gunakan CSS untuk:
- Mengubah warna teks
- Mengubah ukuran font
- Menambahkan background color

### Latihan 2: Styling Judul
Buat halaman dengan elemen:
- `<h1>`
- `<h2>`
- `<h3>`

Atur dengan CSS:
- `<h1>` → warna biru
- `<h2>` → warna hijau
- `<h3>` → warna merah

### Latihan 3: Box Model
Buat sebuah <div> dengan:
```css
width: 300px
padding: 20px
border: 2px solid
margin: 20px
```
Isi dengan teks bebas.

## Tugas Mandiri
### Challenge: Membuat Halaman Website dengan CSS
Buat halaman website sederhana yang terdiri dari:

### Header
- Berisi judul website.

### Navigasi
Link menu:
- Home
- Artikel
- Kontak

### Konten
Minimal berisi:
- 1 judul
- 2 paragraf
- 1 gambar

### Footer
- Berisi copyright.

Gunakan CSS untuk:
- Mengatur warna background
- Mengatur ukuran teks
- Mengatur margin dan padding
- Menghilangkan garis pada link

## Ringkasan Materi
| Topik	                 | Properti / Konsep                  | 
|------------------------|------------------------------------|
| CSS	                 | Bahasa untuk mengatur tampilan HTML|
| Cara menambahkan CSS	 | Inline, Internal, External         |
| Selector	             | Element, Class, ID                 |
| Warna	                 | color, background-color            |
| Teks	                 | font-size, font-family, text-align |
| Box Model	             | margin, border, padding            | 
| Layout	             | display block, inline              |
| Interaksi	             | pseudo class                       |

## Referensi

MDN Web Docs - CSS
https://developer.mozilla.org/en-US/docs/Web/CSS

W3Schools - CSS Tutorial
https://www.w3schools.com/css/

### Latihan CSS 1 dan challenge nya sudah berada di repositori yang berbeda
## Link dibawah 
https://github.com/Delfianz/

# CSS 1 : Responsive Design & Media Query

## Daftar Isi
1. [Pengertian Responsive Design](#pengertian-responsive-design)
2. [Mengapa Responsive Design Penting](#mengapa-responsive-design-penting)
3. [Pengertian Media Query](#pengertian-media-query)
4. [Struktur Media Query](#struktur-media-query)
5. [Contoh Penggunaan Media Query](#contoh-penggunaan-media-query)
6. [Latihan](#latihan)
7. [Tugas Mandiri](#tugas-mandiri)
   
## Pengertian Responsive Design
Responsive Design adalah teknik dalam pembuatan website agar tampilan website dapat menyesuaikan dengan ukuran layar perangkat.

Contoh perangkat:
- 📱 Smartphone
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop

Website yang responsive akan tetap rapi walaupun dibuka di layar kecil atau besar.

## Mengapa Responsive Design Penting
Saat ini sebagian besar pengguna internet membuka website menggunakan smartphone.
**Tanpa responsive design, website bisa menjadi:**
- tulisan terlalu kecil
- layout berantakan
- harus scroll ke samping

**Dengan responsive design:**
- ✔ tampilan lebih rapi
- ✔ mudah dibaca
- ✔ lebih nyaman digunakan

## Pengertian Media Query
Media Query adalah fitur pada CSS yang digunakan untuk mengubah style berdasarkan ukuran layar perangkat.
Contoh:
```css
@media (max-width: 768px) {

}
```
Artinya:
➡️ CSS di dalamnya hanya berlaku jika lebar layar kurang dari 768px.
Biasanya ukuran ini adalah tablet atau HP.

## Struktur Media Query
Contoh dasar:
```css
@media (max-width: 768px) {

    body {
        background-color: red;
    }

}
```
**Penjelasan:**

| Bagian	| Fungsi                    |
| @media	| memulai media query       |
| max-width	| batas maksimum lebar layar|
| 768px	    | ukuran layar              |

## Contoh Penggunaan Media Query
### Contoh Layout Card
Misalnya kamu punya card seperti ini:
```css
.container {
    display: flex;
    gap: 20px;
}
```
Di laptop tampilannya:
```html
CARD   CARD   CARD
```
Namun di HP akan terlalu sempit.

## Menggunakan Media Query
Tambahkan ini:
```css
@media (max-width: 768px) {

    .container {
        flex-direction: column;
    }

}
```
Hasilnya di HP:

CARD
CARD
CARD

Card akan menjadi vertikal.

### Contoh Lengkap

CSS:
```css
.container {
    display: flex;
    gap: 20px;
}

.card {
    background-color: blueviolet;
    padding: 15px;
    border-radius: 10px;
    flex: 1;
}

@media (max-width: 768px) {

    .container {
        flex-direction: column;
    }

}
```
### Breakpoint yang Sering Dipakai

Breakpoint adalah batas ukuran layar.

| Perangkat	| Ukuran | 
| HP	    | 480px  | 
| Tablet	| 768px  |
| Laptop	| 1024px |
| Desktop	| 1200px |

Contoh:
```css
@media (max-width: 480px)
```
Untuk smartphone.

## Latihan
### Latihan 1
**Buat layout card menggunakan flexbox.**
Jika layar kecil (HP), ubah menjadi vertikal menggunakan media query.

### Latihan 2
**Buat navbar seperti ini:**
Home   Artikel   Kontak

Jika layar kecil:

Home
Artikel
Kontak

## Tugas Mandiri
### Tambahkan responsive design pada website yang sudah kamu buat sebelumnya.
Ketentuan:
**1. Navbar**
Jika layar kecil → menu menjadi vertikal.

**2. Card**
Jika layar kecil → card menjadi 1 kolom.

**3. Gambar**
Atur agar gambar menyesuaikan ukuran card.

Gunakan:
```css
img {
    width: 100%;
}
```

## Ringkasan Materi
| Konsep	        | Fungsi                                |
|-------------------|---------------------------------------|
| Responsive Design	| menyesuaikan tampilan website         |
| Media Query	    | mengatur CSS berdasarkan ukuran layar |
| max-width	        | batas maksimum layar                  |
| Breakpoint	    | ukuran layar tertentu                 |

## Referensi

MDN Web Docs – Media Query
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries



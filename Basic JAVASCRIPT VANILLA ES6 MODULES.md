# Basic JAVASCRIPT VANILLA ES6 MODULES
| Objective                         | Key Result                                                                   |  Time Goal |
|-----------------------------------|------------------------------------------------------------------------------|------------|
| JAVASCRIPT VANILLA ES6 MODULES    | 1.1 Pendahuluan                                                              | 1 Menit    |
|                                   | 1.2 Konsep Dasar ES6 Modules                                                 | 5 Menit    |
|                                   | 1.3 Export & Import                                                          | 30 Menit   |
|                                   | 1.4 Jenis Export                                                             | 10 Menit   |
|                                   | 1.5 Penggunaan di Browser                                                    | 10 Menit   |
|                                   | 1.6 Struktur Project Modular                                                 | 15 Menit   |
|                                   | 1.7 Best Practice                                                            | 20 Menit   |
|                                   | 1.8 Latihan                                                                  | 30 Menit   |
|                                   | 1.9 Tugas Mandiri                                                          | 15 Menit   |
|                                   | 1.11                                                             | 15 Menit   |
|                                   | 1.12                                                                 | 15 Menit   |
|                                   | 1.13                                      | 30 Menit   |
|                                   | 2.1                                                                   | 8 Menit    |
|                                   | 2.2                                                                       | 10 Menit   |
|                                   | 2.3                                                              | 15 Menit   |
|                                   | 2.4                                                               | 10 Menit   |
|                                   | 2.5                                                       | 10 Menit   |
|                                   | 2.6                                                   | 15 Menit   |
|                                   | 2.7                                                 | 15 Menit   |
|                                   |                                                  | 15 Menit   |

# JavaScript Vanilla - Pertemuan: ES6 Modules

## Daftar Isi
1. Pengenalan ES6 Modules
2. Mengapa Menggunakan Modules?
3. Export dan Import
4. Named Export
5. Default Export
6. Multiple Export
7. Alias Import dan Export
8. Struktur Folder Project
9. Dynamic Import
10. Best Practices
11. Latihan
12. Tugas Mandiri
13. Ringkasan Materi

---

# Pengenalan ES6 Modules

ES6 Modules (ECMAScript Modules / ESM) adalah sistem modular bawaan JavaScript yang memungkinkan kode dipecah menjadi beberapa file agar lebih rapi, mudah dikelola, dan mudah digunakan kembali.

Sebelum ES6 Modules, developer sering menulis semua kode dalam satu file JavaScript besar yang sulit dipelihara.

Keuntungan:
- Kode lebih terstruktur
- Reusable
- Mudah dimaintain
- Mengurangi konflik nama variabel
- Cocok untuk aplikasi skala besar

---

# Mengapa Menggunakan Modules?

Tanpa module:

```javascript
// file1.js
const nama = "Budi";

// file2.js
const nama = "Andi"; // Error atau konflik
```

Dengan module:

```javascript
// user.js
export const nama = "Budi";

// app.js
import { nama } from "./user.js";

console.log(nama);
```

Setiap module memiliki scope sendiri sehingga lebih aman.

---

# Export dan Import

Module harus diekspor terlebih dahulu sebelum dapat digunakan di file lain.

## Export

```javascript
export const kampus = "Universitas Contoh";
```

## Import

```javascript
import { kampus } from "./kampus.js";

console.log(kampus);
```

---

# Named Export

Named export digunakan ketika ingin mengekspor banyak item dari satu file.

```javascript
export const phi = 3.14;

export function luasLingkaran(r){
    return phi * r * r;
}
```

Import:

```javascript
import { phi, luasLingkaran } from "./math.js";

console.log(phi);
console.log(luasLingkaran(5));
```

---

# Default Export

Satu file hanya boleh memiliki satu default export.

```javascript
export default class User {
    constructor(nama){
        this.nama = nama;
    }
}
```

Import:

```javascript
import User from "./User.js";

const u = new User("Budi");
```

Perbedaan:

```javascript
// named export
import { User } from "./User.js";

// default export
import User from "./User.js";
```

---

# Multiple Export

```javascript
export const PI = 3.14;

export function tambah(a,b){
    return a+b;
}

export function kurang(a,b){
    return a-b;
}
```

Import:

```javascript
import { PI, tambah, kurang } from "./math.js";
```

Import seluruh isi:

```javascript
import * as MathUtil from "./math.js";

console.log(MathUtil.PI);
```

---

# Alias Import dan Export

Mengganti nama saat export:

```javascript
const nama = "Andi";

export { nama as userName };
```

Mengganti nama saat import:

```javascript
import { userName as namaMahasiswa }
from "./user.js";
```

---

# Struktur Folder Project

```text
project/
│
├── index.html
├── js/
│   ├── app.js
│   ├── utils.js
│   ├── user.js
│   └── product.js
```

index.html:

```html
<script type="module" src="./js/app.js"></script>
```

app.js:

```javascript
import { tambah } from "./utils.js";

console.log(tambah(5,3));
```

---

# Dynamic Import

Module dapat dimuat saat dibutuhkan.

```javascript
document
    .getElementById("btn")
    .addEventListener("click", async () => {

    const module =
        await import("./utils.js");

    console.log(module.tambah(5,2));
});
```

Keuntungan:
- Loading lebih cepat
- Mengurangi ukuran bundle awal
- Cocok untuk fitur opsional

---

# Best Practices

## 1. Satu Tanggung Jawab per File

```javascript
// user.js
export class User {}
```

```javascript
// product.js
export class Product {}
```

## 2. Gunakan Nama yang Jelas

```javascript
export function calculateTotalPrice(){}
```

Hindari:

```javascript
export function ctp(){}
```

## 3. Kelompokkan Berdasarkan Fitur

```text
modules/
│
├── auth/
├── products/
├── dashboard/
```

## 4. Hindari Circular Dependency

Jangan membuat module saling mengimpor secara berulang.

```javascript
// A import B
// B import A
```

Karena dapat menyebabkan bug sulit dilacak.

---

# Latihan

## Latihan 1

Buat file:

```text
math.js
app.js
```

math.js:

- export fungsi tambah()
- export fungsi kurang()
- export fungsi kali()

app.js:

- import semua fungsi
- tampilkan hasil ke console

---

## Latihan 2

Buat module User:

```javascript
class User{
    constructor(nama,email){
        this.nama = nama;
        this.email = email;
    }
}

export default User;
```

Import ke app.js dan buat minimal 3 objek.

---

## Latihan 3

Buat module:

```text
product.js
cart.js
app.js
```

Product menyimpan data produk.

Cart menyimpan daftar produk.

App menghubungkan keduanya.

---

# Tugas Mandiri

## Mini Project: Sistem Manajemen Mahasiswa

Struktur:

```text
project/
│
├── index.html
├── js/
│   ├── app.js
│   ├── student.js
│   ├── course.js
│   └── helper.js
```

### student.js

- Class Student
- atribut:
  - nama
  - nim
  - prodi

### course.js

- Class Course
- atribut:
  - kode
  - namaMataKuliah
  - sks

### helper.js

Buat fungsi:

```javascript
generateId()
formatNama()
```

### app.js

- import semua module
- buat minimal 5 mahasiswa
- buat minimal 3 mata kuliah
- tampilkan data ke console

### Kriteria Penilaian

- Menggunakan ES6 Modules
- Menggunakan export/import dengan benar
- Struktur folder rapi
- Tidak ada kode duplikat
- Program berjalan tanpa error

---

# Ringkasan Materi

| Topik | Konsep |
|--------|---------|
| ES6 Modules | Sistem modular JavaScript |
| export | Mengekspor variabel, fungsi, class |
| import | Menggunakan module lain |
| Named Export | Banyak export dalam satu file |
| Default Export | Satu export utama |
| Alias | Mengubah nama saat import/export |
| Dynamic Import | Import saat runtime |
| Best Practices | Struktur kode yang rapi |

---

# Referensi

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://javascript.info/modules
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

---

**Selamat Belajar JavaScript ES6 Modules!**

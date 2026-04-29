# Basic JAVASCRIPT VANILLA ES6 MODULES
| Objective                         | Key Result                                                                   |  Time Goal |
|-----------------------------------|------------------------------------------------------------------------------|------------|
| JAVASCRIPT VANILLA ES6 MODULES    | 1.1 Pendahuluan                                                              | 1 Menit    |
|                                   | 1.2 Konsep Dasar ES6 Modules                                                 | 5 Menit    |
|                                   | 1.3 Export & Import                                                          | 10 Menit   |
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

# JavaScript : Vanilla ES6 Modules

## Daftar Isi
1. Pendahuluan  
2. Konsep Dasar ES6 Modules  
3. Export & Import  
4. Jenis Export  
5. Penggunaan di Browser  
6. Struktur Project Modular  
7. Best Practice  
8. Latihan  
9. Tugas Mandiri  

---

## Pendahuluan

### Apa itu ES6 Modules?
ES6 Modules adalah fitur pada JavaScript modern yang memungkinkan kita **memecah kode menjadi beberapa file (modular)** agar lebih rapi dan mudah dikelola.

### Mengapa Menggunakan Modules?
- **Kode lebih terstruktur**
- **Reusable (bisa digunakan ulang)**
- **Mudah maintenance**
- **Menghindari global variable**

### Tools yang Dibutuhkan
1. Text Editor (VS Code, dll)
2. Browser modern (Chrome, Firefox)

---

## Konsep Dasar ES6 Modules

Dalam ES6 Modules:
- Setiap file = 1 module
- Gunakan:
  - `export` → untuk mengirim
  - `import` → untuk menerima

---

## Export & Import

### Contoh Sederhana

📁 `math.js`
```javascript
export function tambah(a, b) {
    return a + b;
}

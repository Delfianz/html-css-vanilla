import Student from "./student.js";
import Course from "./course.js";
import {
    generateId,
    formatNama
} from "./helper.js";

const students = [
    new Student(
        formatNama("Andi"),
        generateId(),
        "Informatika"
    ),

    new Student(
        formatNama("Budi"),
        generateId(),
        "Sistem Informasi"
    ),

    new Student(
        formatNama("Citra"),
        generateId(),
        "Teknik Komputer"
    ),

    new Student(
        formatNama("Dina"),
        generateId(),
        "Informatika"
    ),

    new Student(
        formatNama("Eko"),
        generateId(),
        "Sistem Informasi"
    )
];

const courses = [
    new Course(
        "IF101",
        "Algoritma",
        3
    ),

    new Course(
        "IF102",
        "Basis Data",
        3
    ),

    new Course(
        "IF103",
        "Pemrograman Web",
        4
    )
];

console.log("=== DATA MAHASISWA ===");
students.forEach(student => {
    console.log(student);
});

console.log(
    "\n=== DATA MATA KULIAH ==="
);

courses.forEach(course => {
    console.log(course);
});
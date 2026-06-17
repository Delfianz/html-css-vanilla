import Product from "./product.js";
import Cart from "./cart.js";

const p1 = new Product(
    1,
    "Monitor",
    10000000
);

const p2 = new Product(
    2,
    "Processor",
    50000000
);

const p3 = new Product(
    3,
    "RAM",
    30000000
);

const cart = new Cart();

cart.tambahProduk(p1);
cart.tambahProduk(p2);
cart.tambahProduk(p3);

cart.tampilkanProduk();
export default class Cart {
    constructor(){
        this.product = [];
    }

    tambahProduk(product){
        this.product.push(product);
    }

    tampilkanProduk() {
        this.product.forEach(product => {
            console.log(product.id);
            console.log(product.nama);
            console.log(product.harga);
            console.log("----------------");
        });
}
}
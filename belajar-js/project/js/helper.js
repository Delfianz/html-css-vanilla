export function generateId(){
    return Math.floor(
        Math.random() * 10000
    );
}

export function formatNama(nama){
    return nama.toUpperCase();
}
//Menangkap pilihan player
var p = prompt("Silakan pilih: Gajah, Semut, Orang");


// Membangkitkan bilangan random dr 0-1
var comp = Math.random();
if(comp < 0.34){
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67){
    comp = 'orang';
} else{
    comp = 'Semut';
}
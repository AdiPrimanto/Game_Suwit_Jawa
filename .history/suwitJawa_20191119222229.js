//Menangkap pilihan player
var p = prompt("Silakan pilih: gajah, semut, orang");


//Membangkitkan bilangan random dr 0-1
var comp = Math.random();
if(comp < 0.34){
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67){
    comp = 'orang';
} else{
    comp = 'semut';
}

// console.log(comp);

//Menentukan rules
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

var hasil = '';
//Menentukan rules
if( p == comp){
    hasil = 'SERI';
} else if( p == 'gajah'){
    if( comp == 'orang'){
        hasil = 'MENANG';
    } else{
        hasil = 'KALAH';
    }
} else if( p)
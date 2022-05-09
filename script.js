// menentukan pilihan user
var p = prompt('Pilihlah : gajah, orang, semut');
// menentukan pilihan computer & membangkitkan bilangan random
var comp = Math.random();
if (comp < 0.36) {
    comp = 'gajah';
} else if (comp >= 0.36 && comp < 0.62) {
    comp = 'orang';
} else {
    comp = 'semut';
}
// menetukan rules permainan
var hasil = '';
if (p == comp) {
    hasil = 'SERI!';
} else if (p == 'gajah') {
    hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
} else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if (p == 'semut') {
    hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
} else {
    alert('Pilihan yang kamu masukan salah!')
}
// hasil
alert('Kamu memilih : ' + p + '\nComputer memilih : ' + comp + '\nMaka hasilnya kamu : ' + hasil);
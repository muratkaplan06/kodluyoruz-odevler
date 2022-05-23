let myname = prompt("isminizi giriniz.");
let info = document.querySelector("#myname");
info.innerHTML = `${myname}`;
var tarih = new Date();
var saat = tarih.getHours();
var dakika = tarih.getMinutes();
var saniye = tarih.getSeconds();
var gun = tarih.getDay();
switch (gun) {
    case 1:
        g = "Pazartesi";
        break;
    case 2:
        g = "Salı";
        break;
    case 3:
        g = "Çarşamba";
        break;
    case 4:
        g = "Perşembe";
        break;
    case 5:
        g = "cuma";
        break;
    case 6:
        g = "Cumartesi";
        break;
    case 7:
        g = "Pazar";
        break;
}
let cl = document.querySelector("#myclock");
cl.innerHTML = `${saat}` + ":" + `${dakika}` + ":" + `${saniye}` + " " + g;
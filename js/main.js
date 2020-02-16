// Coded by DarkCode
// Subscribe and Support YouTube Channel in https://youtube.com/c/DarkCode
// And follow me in https://github.com/MULTIMEDIA1720
// And me? https://www.linkedin.com/in/Fadhlidi
// Mod script by me



var comingdate = new Date("Mar 1, 2020 00:00:00");

var h = document.getElementById('h');
var j = document.getElementById('j');
var m = document.getElementById('m');
var d = document.getElementById('d');

var x = setInterval(function () {
    var now = new Date();
    var feb = comingdate.getTime() - now.getTime();
    var hari = Math.floor(feb / (1000 * 60 * 60 * 24));
    var jam = Math.floor(feb % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var menit = Math.floor(feb % (1000 * 60 * 60) / (1000 * 60));
    var detik = Math.floor(feb % (1000 * 60) / (1000));

    h.innerHTML = hari;
    j.innerHTML = jam;
    m.innerHTML = menit;
    d.innerHTML = detik;

    if (feb <= 0) clearInterval(x);


}, 1000);

function getTrueNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}

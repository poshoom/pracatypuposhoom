// script.js

document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('main').style.marginLeft= '0';
});

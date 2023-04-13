function getValue() {
    var Inputvalue = document.getElementById('myInput').value;

    if (Inputvalue.trim() === '') {
        alert('а где же мыло?!');
    } else if (Inputvalue.indexOf('@') === -1 || Inputvalue.indexOf('.') === -1) {
        alert('Че забыл @ или .?!');
    } else {
        alert("за тобой выехали!");
    }
}
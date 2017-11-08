for(var i = 0; i < 10; i++) {
    var div = document.createElement('div');
    div.onclick = function() {
        alert("you clicked on a box #" + i);
    }
    document.getElementsByTagName('body')[0].appendChild(div);
}
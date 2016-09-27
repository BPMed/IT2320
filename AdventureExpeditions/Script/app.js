//Opens Links in a new Window.
var anchors = document.getElementsByClassName("new_window");

for (var i = 0; i < anchors.length; i++) {
    anchors[i].onclick = function () { };
};

for (var i = 0; i < anchors.length; i++) {
    anchors[i].onclick = function () {
        window.open(this.href);
        return false;
    };
};

//Displays the Current Date at the bottom of the page.
var today = new Date();
document.write("Today`s date: ");
document.write(today.toDateString());

//Lightbox for the center 4 pictures.
//This is currently not working correctly.
function startLightBox() {
    var lbBg = document.getElementById("lightBoxBg");
    var lb = document.getElementById("lightBox");


}

function dismiss() {
    var lbBg = document.getElementById("lightBoxBg");
    var lb = document.getElementById("lightBox");

    lbBg.style.display = "none";
    lb.style.display = "none";
}
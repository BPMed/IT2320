//Opens Links in a new Window.
var anchors = document.getElementsByClassName("new_window");

for (var i=0; i < anchors.length; i++) {
    anchors[i].onclick = function() { };
	};

for (var i=0; i < anchors.length; i++) {
    anchors[i].onclick = function() {
        window.open(this.href);
        return false;
    };
};

//Displays the Current Date at the bottom of the page.
var today = new Date();
document.write("Today`s date: ");
document.write(today.toDateString());

//Hides the center Pictures
function myFunction() {
    var x = document.getElementById('myDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
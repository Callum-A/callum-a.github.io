var i = 0;
var textOptions = ["I'm Callum, welcome to my website.", "System.out.println(\"Hey, I'm Callum\");", "Hey there I'm Callum."];
var speed = 100;
txt = textOptions[Math.floor(Math.random() * textOptions.length)];
window.onload = function() {
    typeWriter();
};

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hi").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
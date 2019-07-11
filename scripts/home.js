function hideNav() {
    var navBar = document.getElementById("navBar");
    if(navBar.style.display === "none"){
        navBar.style.display = "block";
        document.getElementById("hideNav").innerHTML = "Hide Navigation Bar";
    }else {
        navBar.style.display = "none";
        document.getElementById("hideNav").innerHTML = "Show Navigation Bar";
    }

}

function openInNewTab(href) {
    window.open(href);
}
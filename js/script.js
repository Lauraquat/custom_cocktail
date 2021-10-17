function closeMenu() {
    let overlay = document.getElementById("overlay");
    if (overlay.checked == true) {
        overlay.style.height = "0";
    } else {
        overlay.style.height = "100vh";
    }
}

// function openMenu() {
//     document.getElementById("overlay").style.height = "100vh";
// }
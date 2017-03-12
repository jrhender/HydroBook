function fixMain() {
    var topBar = document.getElementById("topBar");
    var main = document.getElementById("pageContent");
    var height = document.body.offsetHeight;
    main.style.height = height + 'px';
}
window.addEventListener("load", fixMain, false);
window.addEventListener("resize", fixMain, false);

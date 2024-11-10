function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function onclicky() {
    var x = document.getElementsByClassName("page");
    Array.from(x).forEach(page => {
        if (!page.classList.contains("cover")) {
            if (page.style.display === "none") {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        }

    });
}

docReady(function () {
    Array.from(document.getElementsByClassName("side")).forEach(element => {
        element.setAttribute("onclick", "onclicky()");
    });
});
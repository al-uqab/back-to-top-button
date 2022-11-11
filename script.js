'use strict'

const backToTop = document.querySelector('.btt-btn');
backToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.onscroll = function (e) {
    e.preventDefault();
    this.scrollY >= 1000 ? backToTop.classList.add("show")
        : backToTop.classList.remove("show");
}
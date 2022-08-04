function animationIconSeeMore() {
    iconSeeMore = document.getElementById("iconSeeMore")

    iconSeeMore.classList.add("animate__bounce")
    setInterval(() => {
        iconSeeMore.classList.remove("animate__bounce")
        setTimeout(() => {
            iconSeeMore.classList.add("animate__bounce")
        }, 2000);
    }, 3000);
}
animationIconSeeMore();

window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

iconMobile = document.querySelector("header .iconMobile")
menuMobile = document.querySelector(".menuMobile")
seeMore = document.querySelector("div.seeMore")
isOpen = false

$(iconMobile).click(function () {
    $(menuMobile).slideToggle('slow')
    $(seeMore).toggleClass("relative")
})
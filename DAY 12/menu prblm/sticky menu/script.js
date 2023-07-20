window.addEventListener("scroll", function () {
    const menuContainer = document.querySelector(".menu-container");
    if (window.pageYOffset > 15) {
        menuContainer.style.top = "0";
    } else {
        menuContainer.style.top = "-15px";
    }
});
// const menuContainer = document.querySelector(".menu-container");
// const menuHeight = menuContainer.offsetHeight;
// const content = document.getElementById("content");

// function updateMenuPosition() {
//     if (window.pageYOffset > 15) {
//         menuContainer.style.top = "0";
//         content.style.paddingTop = `${menuHeight}px`;
//         menuContainer.classList.add("sticky");
//     } else {
//         menuContainer.style.top = "-15px";
//         content.style.paddingTop = "0";
//         menuContainer.classList.remove("sticky");
//     }
// }

// window.addEventListener("scroll", updateMenuPosition);
// window.addEventListener("resize", updateMenuPosition); // To handle window resize


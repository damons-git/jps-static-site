// JS script to decrease opacity of all navigation menu options
// that are not in mouse focus.
//
// This script is only active for screen sizes where the header based navigation is present.
// This is device screens greater than 800px in width.

function navOpacity() {
    let navItems = document.querySelectorAll(".nav-link")

    navItems.forEach(element => {
        let siblingArr = Array.from(navItems)
        let currentIndex = siblingArr.indexOf(element)
        siblingArr.splice(currentIndex, 1)

        // Decrease opacity of non-hovered nav items on mouse over
        element.addEventListener("mouseover", (event) => {
            siblingArr.forEach(elem => {
                elem.querySelector("span").style.opacity = 0.35;
                elem.querySelector("i").style.opacity = 0.35;
            })
        })

        // Increase opacity of non-hovered nav items on mouse out
        element.addEventListener("mouseout", (event) => {
            siblingArr.forEach(elem => {
                elem.querySelector("span").style.opacity = 1.0;
                elem.querySelector("i").style.opacity = 1.0;
            })
        })
    })
}

window.addEventListener('load', () => {
    navOpacity()
})
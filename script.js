const darkModeButton =
    document.querySelector("#dark-mode-button");

darkModeButton.addEventListener("click", function () {

    // Toggle dark mode
    document.body.classList.toggle("dark-mode");

    // Check whether dark mode is now ON
    const darkMode =
        document.body.classList.contains("dark-mode");


    // Update car
    if (window.setCarDarkMode) {
        window.setCarDarkMode(darkMode);
    }


    // Update spotlight
    if (window.setBeamDarkMode) {
        window.setBeamDarkMode(darkMode);
    }

});


let timer;
let previousMouseX = null;

window.addEventListener("mousemove", function (event) {
    let metadata = document.getElementById("metadata");
    
    if (previousMouseX === null) {
        previousMouseX = event.clientX;
        return;
    }

    if (previousMouseX !== event.clientX) {
        metadata.style.opacity = 0;
        clearTimeout(timer);
        timer = setTimeout(function () {
            metadata.style.opacity = 1;
        }, 500);
    }
    
    previousMouseX = event.clientX;

})
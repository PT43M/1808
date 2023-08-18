function animateZoom(box) {
    let initialScale = 0;
    let scaleInterval = setInterval(() => {
        initialScale += 0.1;
        box.style.transform = `scale(${initialScale})`;

        if (initialScale >= 1) {
            clearInterval(scaleInterval);
        }
    }, 100); // Interval for the zoom effect
}

function scrollPoem() {
    const poemElem = document.getElementById('poemPlaceholder');
    // Reset animation to restart it
    poemElem.style.animation = 'none';
    setTimeout(() => {
        poemElem.style.animation = '';
    }, 10);
}

function repositionCongratsText() {
    const poemElem = document.getElementById('poemPlaceholder');
    poemElem.innerHTML = "Herzlichen Glückwunsch";
    poemElem.style.animation = 'none';
    poemElem.style.transform = 'translateY(-50%)';
}

function displayPasswordPrompt() {
    document.getElementById('passwordPrompt').style.display = 'block';
}

function validatePassword(input) {
    const password = "obDASwasWIRD?";
    const errorMessage = document.querySelector('.error-message');
    if (input.value === password) {
        document.getElementById('zoomBoxGreen').style.display = 'none';
        document.getElementById('zoomBoxWhite').style.display = 'none';
    } else {
        errorMessage.textContent = 'Merkste Selber';
    }
}

document.querySelector('input[type=password]').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        validatePassword(this);
    }
});

// Start animations and interactions
animateZoom('zoomBoxYellow');
animateZoom('zoomBoxWhite');
setTimeout(() => {
    animateZoom('zoomBoxGreen');
    scrollPoem();
    setTimeout(repositionCongratsText, 10000); // 10 seconds for the poem to finish
    setTimeout(displayPasswordPrompt, 12000); // 2 seconds after the poem finishes
}, 1000); // After 1 second

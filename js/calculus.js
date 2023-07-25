function getAnswer() {
    try {
        document.getElementById('calcDisplay').innerText =
            math.evaluate(document.getElementById('calcDisplay').innerText);
    }
    catch (error) {
        alert("Error:Invalid Expression!");
        return "Error:Invalid Expression!";
    }
    
    
}

function addToDisplay(character) {
    if (document.getElementById('calcDisplay').innerText != "0")
        document.getElementById('calcDisplay').innerText += character;
    else document.getElementById('calcDisplay').innerText = character;
}

function resetDisplay() {
    document.getElementById('calcDisplay').innerText = 0;
}

function remofDisplay() {
    let disp = document.getElementById('calcDisplay').innerText;
    if (disp.length == 1) {
        document.getElementById('calcDisplay').innerText = 0;
    }
    else {
        document.getElementById('calcDisplay').innerText = disp.substring(0, disp.length - 1);
    }
    
}
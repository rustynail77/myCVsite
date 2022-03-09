function matrixFunc(currClass){
    if (currClass == "matrix") {
        document.getElementById("matrix").className = "matrix-stop";
        document.getElementById("matrix-button").innerText = "Take the Blue Pill";
    } else {
        document.getElementById("matrix").className = "matrix";
        document.getElementById("matrix-button").innerText = "Take the Red Pill";
    }
}

function clearScreen(showThis) {
    if (document.querySelector("#machineText")) document.querySelector("#cursorer").remove();
    if (document.querySelector("#machineText")) document.querySelector("#machineText").remove();
    document.querySelector(".textLine").style.paddingTop = "45px";

    let container = document.getElementById(showThis);
    document.getElementById("experience").style.display = "none";
    document.getElementById("general-me").style.display = "none";
    document.getElementById("education").style.display = "none";

    container.style.display = "flex";
}

function machineText(target, message, index, interval) {
    targetElement = document.querySelector(target);
    if (index < message.length) {
        if (message[index]=='%') {
            if (targetElement) targetElement.textContent = '';
            index++;    
        } else {
            if (targetElement) targetElement.textContent += message[index++];
        }
        
        function randInterval(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        const timeLine = setTimeout(function() {
          machineText(target, message, index, interval);
        }, randInterval(100,interval));
    }
}

const matrixFlow = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
      }, 2000);
});

matrixFlow.then(() => {
    machineText("#machineText", "Wake up, Neo...%Press one of the buttons above...", 0, 300);
    });
    

document.getElementById("experience-but").addEventListener("click", ()=>clearScreen("experience"));
document.getElementById("general-but").addEventListener("click", ()=>clearScreen("general-me"));
document.getElementById("education-but").addEventListener("click", ()=>clearScreen("education"));

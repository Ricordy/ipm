

function load(){

    

    loop();
    

    
}

function loop() {
    var bpm = document.getElementById("BPM");
    bpm.innerHTML = getRandomArbitrary(60,90) + "BPM";
}

function getRandomArbitrary(min, max) {
    return Math.trunc((Math.random() * (max - min) + min));
}



setInterval(loop, 3000);
let count = 0;
func = () => {
    count++;
    document.querySelector("#count").innerText = count;
    var audio = new Audio('PUNCH 2.mp3');
    audio.loop = false;
    audio.volume = 0.2;
    audio.play();
}

maya = () => {
    document.querySelector("#p2").innerText = "Maya-kol";
    document.getElementById("img3").style.backgroundImage = 'url("style/magic.jpg")';
    document.getElementById("img3").style.backgroundSize = "cover";
}
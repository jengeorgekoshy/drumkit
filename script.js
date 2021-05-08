for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerHtml = this.innerHTML;
        playingSounds(innerHtml);
        animation(innerHtml);
    }
    )
}

document.addEventListener("keypress", function (e) {
    playingSounds(e.key);
    animation(e.key);
})


function playingSounds(key) {
    switch (key) {
        case 'a':
        case 'A':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 's':
        case 'S':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 'd':
        case 'D':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'f':
        case 'F':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
        case 'J':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
        case 'K':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
        case 'L':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(key);
    }

}


function animation(key) {
    document.querySelector("." + key).classList.add('pressed');
    setTimeout(function () {
        document.querySelector("." + key).classList.remove('pressed');
    }, 100)
}
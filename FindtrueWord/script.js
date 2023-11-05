var main = document.querySelector('#word');
var ul = document.querySelector('#ul');
var word = ["CAT", "CAKE", "PENGUEN", "APPLE", "PURPLE"];
var guessedLetters = [];

function random() {
    var randomNumber = Math.floor(Math.random() * 5);
    var word_random = word[randomNumber];
    return word_random;
}
var randomfunc = random();
function enterLetter(e) {
    var choose = e.key.toUpperCase();
    console.log("Your Chose:", choose);
    console.log("Word:", randomfunc);
    if (randomfunc.includes(choose)) {
        alert("Congratulation!!!True letter:", choose);
        guessedLetters.push(choose);
        yenile();
    }
}

function createLi() {
    ul.innerHTML = '';
    for (var i = 0; i < randomfunc.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = '-';
    }
}

function yenile() {
    for (var i = 0; i < randomfunc.length; i++) {
        if (guessedLetters.includes(randomfunc[i])) {
            ul.children[i].innerHTML = randomfunc[i];
        }
    }
}

window.addEventListener("keyup", enterLetter);
createLi();

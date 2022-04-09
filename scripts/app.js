// constant variables
const passwords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E",
                    "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
                    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
                    "x", "y", "z", "!", "@", "#", "$", "^", "&", "*",];
const btn = document.getElementById("btn");
const password = document.querySelector(".password");
const copyBtn = document.getElementById("copyBtn");

// set length of text area to the password length
password.setAttribute('size', 10);

// function to get and display new password
btn.addEventListener('click', function() {
    let newPassword = "";
    for(let i = 0; i < 10; i++) {
        newPassword += passwords[getRandomNumber()];
    }
    password.value = newPassword;
})

// function to get random number
function getRandomNumber() {
    return Math.floor(Math.random() * passwords.length);
}

// function to copy new password
copyBtn.addEventListener('click', function() {
    password.select();
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value);

    alert("Copied");
})
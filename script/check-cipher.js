const temperature = 20;

const cipherButton = document.querySelector("#submit-cipher");
cipherButton.addEventListener("click", () => {
    const cipherAttempt = document.querySelector("#cipher-attempt");

    if(isCorrect(parseInt(cipherAttempt.value))) {
        window.location.href = "../pages/decryption.html";
    } else {
        alert("Wrong");
    }
});

function isCorrect(cipherAttempt) {
    if(cipherAttempt !== "") {
        if(cipherAttempt == temperature) {
            return true;
        }
    } else {
        return false;
    }
}

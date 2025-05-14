document.addEventListener("DOMContentLoaded", () => {
    const temperature = 20;
    
    const cipherButton = document.querySelector("#submit-cipher");
    cipherButton.addEventListener("click", () => {
        const cipherAttempt = parseInt(document.querySelector("#cipher-attempt").value);
    
        if(isCorrect(cipherAttempt)) {
            window.location.href = "pages/final-decryption.html";
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
});
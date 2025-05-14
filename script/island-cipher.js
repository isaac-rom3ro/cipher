document.addEventListener("DOMContentLoaded", () => {
    const island = "Santa Helena";
    const person = "Napoleão";

    const cipherButton = document.querySelector("#submit-cipher");
    cipherButton.addEventListener("click", () => {
        const cipherAttempt = document.querySelector("#cipher-attempt").value.trim();

        if(isCorrect(cipherAttempt, island)) {
            let finalAnswer = prompt("Quem morreu nessa ilha?");

            if(isCorrect(finalAnswer, person)) {
                alert("CONGRATS");
            } else {
                alert("NOP!");
            }

        } else {
            alert("Sorry wrong!");
        }
    });
});


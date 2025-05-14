document.addEventListener("DOMContentLoaded", () => {
    const island = "Santa Helena";
    const person = "Napoleão";

    const cipherButton = document.querySelector("#submit-cipher");
    cipherButton.addEventListener("click", () => {
        const cipherAttempt = document.querySelector("#cipher-attempt").value.trim();

        if(isCorrect(cipherAttempt, island)) {
            let finalAnswer = prompt("Quem morreu nessa ilha?");

            if(isCorrect(finalAnswer, person)) {
                alert("PARABÉNS, VOCÊS ESTÃO LIVRES!");
            } else {
                alert("INCORRETO, NÃO HÁ NADA QUE POSSAMOS FAZER?");
            }

        } else {
            alert("EROU!");
        }
    });
});


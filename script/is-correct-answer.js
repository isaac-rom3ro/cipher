    function isCorrect(cipherAttempt, correctAnswer) {
        if(cipherAttempt !== "") {
            if(cipherAttempt ==  correctAnswer) {
                return true;
            }
        }

        return false;
    }
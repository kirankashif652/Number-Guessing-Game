
    var targetNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 0;

    function makeGuess() {
        var guessInput = document.getElementById('guessInput');
        var message = document.getElementById('message');
        var guess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(guess)) {
            message.textContent = "Please enter a valid number.";
            return;
        }

        if (guess < targetNumber) {
            message.textContent = "Too low! Try again.";
        } else if (guess > targetNumber) {
            message.textContent = "Too high! Try again.";
        } else {
            message.textContent = `Congratulations! You've guessed the number in ${attempts} attempts.`;
            
            targetNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
        }

        guessInput.value = '';
        guessInput.focus();
    }

    

document.addEventListener('DOMContentLoaded', () => {
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    ; // 5 minutes in seconds


    // Start the timer
    startTimer = function () {
        timerInterval = setInterval(updateTimer, 1000);
    }

    // Update the timer display
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        // Format minutes and seconds to always show 2 digits
        const minutesStr = String(minutes).padStart(2, '0');
        const secondsStr = String(seconds).padStart(2, '0');

        // Update minutes digits
        updateDigits(minutesElement, minutesStr);
        // Update seconds digits
        updateDigits(secondsElement, secondsStr);

        // Decrease time left
        timeLeft--;

        // Stop the timer when it reaches 0
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            if (gameEnded) {
                setTimeout(function () { restartTimer() }, 1500)
            }
            $('.save').trigger('click')
        }
    }

    // Update individual digits
    function updateDigits(container, newValue) {
        const digits = container.querySelectorAll('.digit');
        const digit2 = container.querySelectorAll('.digit2');

        digits.forEach((digit, index) => {
            const currentDigit = digit.textContent;
            const newDigit = newValue[index];

            // Only animate if the digit has changed
            if (currentDigit !== newDigit) {
                digit.textContent = newDigit; // Update the digit
                digit.classList.add('write'); // Add writing animation

                // Add glow animation based on remaining time
                if (timeLeft <= 5) {
                    digit.classList.add('glow-red');
                    if (rolled) {
                        $('#roll').trigger('click')
                    }
                    // Red glow for <= 10 seconds
                } else if (timeLeft <= 20) {
                    digit2.forEach((e) => {
                        e.classList.add('glow-yellow'); // Yellow glow for <= 20 seconds
                    });
                } else {
                    digit.classList.add('glow'); // Default glow for > 20 seconds
                }

                // Remove animations after they complete
                setTimeout(() => {
                    digit.classList.remove('write', 'glow', 'glow-yellow', 'glow-red');
                }, 500); // Match the duration of the CSS animation
            }
        });
    }

    // Restart the timer
    restartTimer = function () {
        clearInterval(timerInterval); // Stop the current timer
        timeLeft = intialTime;
        updateTimer(); // Update the display immediately
        startTimer(); // Start the timer again
    }

});


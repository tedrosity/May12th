// Countdown to May 1st, 2024
const targetDate = new Date('2024-05-12T22:00:00').getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        // Countdown is still active
        countdownElement.innerText = `Countdown: ${formatTime(timeRemaining)}`;
    } else {
        // Countdown has ended
        countdownElement.innerText = 'Continue';
    }
}

function formatTime(milliseconds) {
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

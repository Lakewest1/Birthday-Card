document.addEventListener("DOMContentLoaded", function() {
    const birthdayMessageElement = document.getElementById("birthdayMessage");

    const messages = [
        "Wishing you a fantastic birthday!",
        "May your special day be filled with joy and laughter!",
        "Happy Birthday to an amazing person!"
    ];

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    function changeMessage() {
        const randomMessage = getRandomMessage();
        birthdayMessageElement.textContent = randomMessage;
        birthdayMessageElement.style.animation = 'none';
        void birthdayMessageElement.offsetWidth; // Trigger reflow
        birthdayMessageElement.style.animation = null;
    }

    // Change message every 5 seconds (5000 milliseconds)
    setInterval(changeMessage, 5000);
});

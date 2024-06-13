function nextPage() {
    window.location.href = "yes.html";
}
$(document).ready(function() {
    $(".container")
        .mouseenter(function() {
            $(".card").stop().animate({
                    top: "-90px"
                },
                "slow"
            );
        })
        .mouseleave(function() {
            $(".card").stop().animate({
                    top: 0
                },
                "slow"
            );
        });
});

 const birthdayMessages = [
      "Wishing you a day filled with love, joy, and surprises!",
      "May your birthday be as sweet as you are!",
      "Here's to another year of wonderful adventures!",
      "Wishing you endless happiness and love on your special day!",
   "Sending you warmest wishes for a fantastic birthday!",
       "Happy birthday to the guy who lights up my life! May your day be filled with joy and laughter.",
    "Wishing you a birthday filled with love, laughter, and all the happiness in the world!",
    "Happy birthday to the most amazing guy! May your special day be as wonderful as you are.",
    "Here's to another year of adventures and unforgettable moments! Happy birthday!",
    "On your special day, I wish you all the happiness and success in the world. Happy birthday!",
    "Sending you warm wishes and big hugs on your birthday! Have an incredible day, my dear.",
    "Happy birthday to the guy who brings so much love and laughter into my life. Cheers to you!",
    "May this birthday be the beginning of a year filled with happy memories and wonderful moments.",
    "Wishing you a fantastic birthday filled with everything you love most! Enjoy your special day!",
    "Happy birthday to the guy who makes every day brighter with his presence. You deserve the best!",
    "Here's to celebrating you and all the amazing qualities that make you so special. Happy birthday!",
    "May your birthday be as incredible as you are, and may all your dreams come true. Cheers!",
    "Sending you oceans of love and mountains of joy on your birthday! Have a fantastic day!",
    "Happy birthday to the guy who means the world to me. Thank you for being amazing in every way!",
    "Wishing you a birthday that's just as awesome as you are! Enjoy every moment, my dear.",
    "May this birthday be the beginning of your best year yet! Here's to health, happiness, and love.",
    "Happy birthday to the guy who stole my heart! May your day be filled with love and laughter.",
    "Wishing you a birthday filled with endless laughter, unforgettable moments, and boundless joy!",
    "Here's to celebrating the incredible person you are today and every day. Happy birthday!",
    "May your birthday be as extraordinary as you are, and may this year be your best one yet. Cheers!"
    ];

    let messageIndex = 0;
    const messageElement = document.getElementById('birthdayMessage');

    function changeBirthdayMessage() {
      messageIndex = (messageIndex + 1) % birthdayMessages.length;
      messageElement.textContent = birthdayMessages[messageIndex];
    }

    setInterval(changeBirthdayMessage, 5000); // Change message every 5 seconds

    function startConfetti() {
      const confettiCanvas = document.getElementById('confetti');
      const ctx = confettiCanvas.getContext('2d');
      const pieces = [];

      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      function createPiece() {
        return {
          x: Math.random() * confettiCanvas.width,
          y: Math.random() * confettiCanvas.height,
          size: random(10, 20),
          angle: random(0, 2 * Math.PI),
          color: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${random(0.5, 1)})`,
          rotationSpeed: random(-0.2, 0.2),
          drift: random(1, 5),
        };
      }

      function drawPiece(piece) {
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size, 0, 2 * Math.PI);
        ctx.fillStyle = piece.color;
        ctx.fill();
      }

      function updatePiece(piece) {
        piece.x += Math.cos(piece.angle) * piece.drift;
        piece.y += Math.sin(piece.angle) * piece.drift;
        piece.angle += piece.rotationSpeed;

        if (piece.y > confettiCanvas.height) {
          piece.y = 0;
        }
      }

      function updateConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        for (const piece of pieces) {
          updatePiece(piece);
          drawPiece(piece);
        }

        requestAnimationFrame(updateConfetti);
      }

      for (let i = 0; i < 100; i++) {
        pieces.push(createPiece());
      }

      updateConfetti();
    }




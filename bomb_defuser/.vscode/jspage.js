document.addEventListener("DOMContentLoaded", function() {
    let timerEl = document.getElementById("timer");
    let defuserEl = document.getElementById("defuser");
    let countdown = 10;

    let intervalId = setInterval(function() {
        countdown = countdown - 1;
        timerEl.textContent = countdown;
        if (countdown === 0) {
            timerEl.textContent = "BOOM";
            clearInterval(intervalId);
            document.getElementById("imgSrc").src = "https://media4.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=790b76117b0e183c68565dec24d6183167e61ea1f481b69c&rid=giphy.gif&ct=g";
        }
    }, 1000);

    defuserEl.addEventListener("keydown", function(event) {
        let bombDefuserText = defuserEl.value;
        if (event.key === "Enter" && bombDefuserText === "stop" && countdown !== 0) {
            timerEl.textContent = "You did it!";
            clearInterval(intervalId);
        }
    });
});

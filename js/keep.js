function waitTimer() {
    let alert = document.getElementById("roll");
    alert.style.pointerEvents = "none";
    setTimeout(function () {
        alert.style.pointerEvents = "auto";
    }, 1000);
}
function dieNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollDice() {
    document.getElementById('roll').addEventListener('click', function () {
        waitTimer()
        let totalScore = parseInt($('#count').text());
        const rollResult = dieNumber();

        const cube = document.getElementById('cube');

        // Determine the rotation based on the roll result
        let xRotation = 0;
        let yRotation = 0;

        switch (rollResult) {
            case 1:
                xRotation = 0; yRotation = 0;
                break;
            case 2:
                xRotation = 0; yRotation = 180;
                break;
            case 3:
                xRotation = 0; yRotation = -90;
                break;
            case 4:
                xRotation = 0; yRotation = 90;
                break;
            case 5:
                xRotation = -90; yRotation = 0;
                break;
            case 6:
                xRotation = 90; yRotation = 0;
                break;
        }

        // Apply the rotation to the cube
        cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(360deg)`;

        totalScore += rollResult;
        $('#count').text(totalScore)
        $('#rollone').val(rollResult)

    });

}
function SaveScore() {
    let player = $(".playerSwitch").val()
    let playerResult = parseInt($("#count").text())
    let playerGoal1 = parseInt($(".score1").text())
      console.log(playerResult)
    if (player === "1") {
        $("#count").text("0")
        $(".playerSwitch").val("2")
        playerGoal1 += playerResult
console.log(player)
    }
    return playerGoal1

}
function SaveScore2() {
    let player = $(".playerSwitch").val()
    let playerResult = parseInt($("#count").text())
    let playerGoal2 = parseInt($(".score2").text())
    if (player === "2") {
        $("#count").text("0")
        $(".playerSwitch").val("1")
        playerGoal2 += playerResult
     
    }
    return playerGoal2

}
function rollOneSWichplayer() {
    let player = $(".playerSwitch").val()
    let rollone = parseInt($("#rollone").val())
    let playerResult = parseInt($("#count").text())
    let playerGoal1 = parseInt($(".score1").text())
    let playerGoal2 = parseInt($(".score2").text())
    console.log("Roll result:", rollone);
    if (player === "1" && rollone === "1") {
        $("#count").text("0")
        $(".playerSwitch").val("2")
        $('#rollone').text("2")
        playerGoal1 += playerResult
        return playerGoal1


    } else if (player === "2" && rollone === "1") {
        $("#count").text("0")
        playerGoal2 += playerResult
        $(".playerSwitch").val("1")
        $('#rollone').text("2")
        return playerGoal2
    }
}

window.onload = function () {
    rollDice()
    // rollOneSWichplayer()
    $('.save').on('click', function () {
        $(".score1").text(SaveScore())
        $(".score2").text(SaveScore2())
    })
}

 // let playerResult = newGame.record
        // let playerGoal1 =  parseInt($(".score1").text())
        // let playerGoal2 = parseInt($(".score2").text())
         // let player = newGame.findPlayer(userName)
        // console.log(newGame)
        // console.log("this is : " + player.userName)
        // newGame.record = parseInt($("#count").text())

let aiRolling = true;

function rollAI() {
    let rollResult = dieNumber();
    let totalScore = parseInt($("#count").text());
    let goalThreshold = 15;
    let dontRoll1 = 10;
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let button3 = document.querySelector(".save");

    $('#rollone').val(rollResult);
    const cube = document.getElementById('cube');


    setTimeout(function () {
        if (rollResult !== 1 || totalScore >= dontRoll1) {
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


            cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(360deg)`;
        }
 

        if (rollResult === 1 && totalScore >= dontRoll1) {
            $("#count").text("0");
            $(".playerSwitch").val("1");
            $(".nm1").addClass("active");
            $(".nm2").removeClass("active");
            $(".mn").addClass("active2");
            $(".mn1").removeClass("active2");
            button2.style.pointerEvents = "auto";
            button3.style.pointerEvents = "auto";
            button1.style.pointerEvents = "auto";
            aiRolling = false;
        } else {
            if (rollResult !== 1) {
                totalScore += rollResult;
            }
            $('#count').text(totalScore);

            if (totalScore >= goalThreshold) {
                setTimeout(function () {
                    $(".save").trigger('click');
                }, 2500);
                aiRolling = false;
            }
        }

       if(aiRolling) {
            setTimeout(rollAI, 1600);
        }
    }, 3500);
}


function rollOneSwitchAi() {
    const rollResult = dieNumber();
    $('#rollone').val(rollResult)

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
    cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(360deg)`;

    let playerSw = $(".playerSwitch").val();
    let playerGoal1 = parseInt($(".score1").text());
    let totalScore = parseInt($('#count').text());
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let button3 = document.querySelector(".save");

    if (rollResult === 1) {
        $("#count").text("0");
        if (playerSw === "1") {
            $(".playerSwitch").val("2");
            playerGoal1 += 0;
            $(".score1").text(playerGoal1);
            $(".nm2").addClass("active");
            $(".nm1").removeClass("active");
            $(".mn1").addClass("active2");
            $(".mn").removeClass("active2");
            button2.style.pointerEvents = "none";
            button3.style.pointerEvents = "none"
            button1.style.pointerEvents = "none"
            aiRolling = true
            rollAI()
        }
    } else {
        aiRolling = false
        totalScore += rollResult;
        $('#count').text(totalScore);
    }
}
function saveSWichplayerAi() {
    let playerSw = $(".playerSwitch").val()
    let userName = playerSw === "1" ? $("#player1").val() : $("#player2").val();
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let button3 = document.querySelector(".save");

    let playerResult = parseInt($("#count").text());
    let playerGoal1 = parseInt($(".score1").text());
    let playerGoal2 = parseInt($(".score2").text());

    let player = newGame.findPlayer(userName);
    // const cube = document.getElementById('cube');

    console.log(playerSw)
    if (playerSw === "1") {
        aiRolling = true
        $("#count").text("0")
        $(".playerSwitch").val("2")
        if (aiRolling) {
            playerGoal1 += playerResult
            player.score = playerGoal1
            $(".score1").text(playerGoal1)
            $(".nm2").addClass("active")
            $(".nm1").removeClass("active")
            $(".mn1").addClass("active2")
            $(".mn").removeClass("active2")
            button2.style.pointerEvents = "none";
            button3.style.pointerEvents = "none"
            button1.style.pointerEvents = "none"

            rollAI()

        }

    } else if (playerSw === "2") {
        aiRolling = false
        $("#count").text("0")
        $(".playerSwitch").val("1")
        playerGoal2 += playerResult
        player.score = playerGoal2
        $(".score2").text(playerGoal2)
        $(".nm1").addClass("active")
        $(".nm2").removeClass("active")
        $(".mn").addClass("active2")
        $(".mn1").removeClass("active2")
        button2.style.pointerEvents = "auto";
        button3.style.pointerEvents = "auto";
        button1.style.pointerEvents = "auto";

    }
}
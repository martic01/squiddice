


function rollAI() {
    let rollResult = dieNumber();
    let button = document.querySelectorAll(".offses");
    let winSave = goal - playerGoal2
    let catch1 = playerGoal1 <= goal
    let catch2 = playerGoal2 <= goal

    rollOne = rollResult;
    const cube = document.getElementById('cube');


    timeOut = setTimeout(function () {
        if (rollOne !== 1 || playerResult >= dontRoll1) {
            let xRotation = 0;
            let yRotation = 0;


            switch (rollOne) {
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


        if (rollOne === 1 && playerResult >= dontRoll1) {
              rolled = true
            playerResult = 0;
            $('#count').text(playerResult);
            playerSw = 1;
            $(".nm1").addClass("active");
            $(".nm2").removeClass("active");
            $(".mn").addClass("active2");
            $(".mn1").removeClass("active2");
            $(".offses").removeClass("offed");
            if (catch1 && catch2) {
                button.forEach(el => {
                    el.style.pointerEvents = "auto";
                });
            }
            aiRolling = false
            turnOneMessage()
            restartTimer()
        } else {
            if (rollOne !== 1) {
                playerResult += rollOne;
            }
            $('#count').text(playerResult);

            if (playerResult >= goalThreshold || playerResult >= winSave) {
                setTimeout(function () {
                    $(".save").trigger('click');
                    let playing1 = $("#player1").val()
                    let playing2 = $("#player2").val()

                    if (!aiRolling) {
                        clearTimeout(timeOut)
                        $(".turn").html(`<s>${playing2} 456</s>`).css('color', 'red')
                        $(".word").text("Saved is record")
                        timeTurn = setTimeout(function () {
                            $(".turn").html(`${playing1} 001`).css('color', 'green')
                            $(".word").text("turn")
                        }, 3500);
                    }

                }, 2500);
                aiRolling = false;

            }
        }

        if (aiRolling) {
            setTimeout(rollAI, 1600);
        }
    }, 3500);
}


function rollOneSwitchAi() {
    const rollResult = dieNumber();
    let lead = playerGoal1 >= playerGoal2
    let gap = playerGoal2 - playerGoal1
    let catch1 = playerGoal1 <= goal
    let catch2 = playerGoal2 <= goal
    rollOne = rollResult

    const cube = document.getElementById('cube');
    if (stages === 1 && playerResult <= 25 && playerGoal1 === 0) {
        if (rollOne === 1) {
            rollOne += 1
        }
    } else if (stages === 1 && !lead) {
        if (rollOne === 1 && playerResult <= gap + 5) {
            rollOne += 1
        }
    } else if (stages === 2 && playerResult <= 15 && playerGoal1 === 0) {
        if (rollOne === 1) {
            rollOne += 1
        }
    } else if (stages === 2 && !lead) {
        if (rollOne === 1 && playerResult <= gap + 1) {
            rollOne += 1

        }
    }

    // Determine the rotation based on the roll result
    let xRotation = 0;
    let yRotation = 0;

    switch (rollOne) {
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


    let button = document.querySelectorAll(".offses");

    if (rollOne === 1) {
        playerResult = 0;
        rolled = true
        $('#count').text(playerResult);
        if (playerSw === 1) {
            playerSw = 2;
            playerGoal1 += 0;
            $(".score1").text(playerGoal1);
            $(".nm2").addClass("active");
            $(".nm1").removeClass("active");
            $(".mn1").addClass("active2");
            $(".mn").removeClass("active2");
            $(".offses").addClass("offed");
            if (catch1 && catch2) {
                button.forEach(el => {
                    el.style.pointerEvents = "none";
                });
            }
            aiRolling = true
            turnOneMessage()
            rollAI()
            restartTimer()
        }
    } else {
        aiRolling = false
        playerResult += rollOne;
        $('#count').text(playerResult);
    }
}
function saveSWichplayerAi() {
    let userName = playerSw === 1 ? $("#player1").val() : $("#player2").val();
    let button = document.querySelectorAll(".offses");
    let catch1 = playerGoal1 <= goal
    let catch2 = playerGoal2 <= goal
    let player = newGame.findPlayer(userName);

    if (playerSw === 1) {
        // Saving Player 1's score
        aiRolling = true;
        playerGoal1 += playerResult;
        player.score = playerGoal1;
        $(".score1").text(playerGoal1);

        // Switch to Player 2 (AI's turn)
        playerSw = 2;
        $(".nm2").addClass("active");
        $(".nm1").removeClass("active");
        $(".mn1").addClass("active2");
        $(".mn").removeClass("active2");
        $(".offses").addClass("offed");
        if (catch1 && catch2) {
            button.forEach(el => {
                el.style.pointerEvents = "none";
            });
        };
      
        let lowCheck = playerGoal1 - playerGoal2
        let over = 30
        let checkedLow = lowCheck >= over

        if (checkedLow && stages === 1) {
            goalThreshold = 7;
            dontRoll1 = 7;
        } else if (!checkedLow && stages === 1) {
            goalThreshold = 6;
            dontRoll1 = 4;
        }
        else if (checkedLow && stages === 2) {
            goalThreshold = 12;
            dontRoll1 = 12;
        } else if (!checkedLow && stages === 2) {
            goalThreshold = 12;
            dontRoll1 = 8;
        }
        else if (checkedLow && stages === 3) {
            goalThreshold = 24;
            dontRoll1 = 24;
        } else if (!checkedLow && stages === 3) {
            goalThreshold = 16;
            dontRoll1 = 12;
        }
        else if (checkedLow && stages === 4) {
            goalThreshold = 29;
            dontRoll1 = 29;
        } else if (!checkedLow && stages === 4) {
            goalThreshold = 25;
            dontRoll1 = 18;
        }


        turnSavedMessage(); // Show the message for saving
        rollAI(); 
        restartTimer()// Trigger AI's roll
        playerResult = 0;

    } else if (playerSw === 2) {
        // Saving Player 2's (AI's) score
        aiRolling = false;
        playerGoal2 += playerResult;
        player.score = playerGoal2;
        $(".score2").text(playerGoal2);

        // Switch to Player 1 (human's turn)
        playerSw = 1;
        $(".nm1").addClass("active");
        $(".nm2").removeClass("active");
        $(".mn").addClass("active2");
        $(".mn1").removeClass("active2");
        $(".offses").removeClass("offed")
        if (catch1 && catch2) {
            button.forEach(el => {
                el.style.pointerEvents = "auto";
            });
        }

        turnSavedMessage(); // Show the message for saving
        restartTimer()
        playerResult = 0;
    }
    $('#count').text(playerResult);
}
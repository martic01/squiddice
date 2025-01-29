// Utility


function waitTimer(button) {
    // let alert = 
    button.style.pointerEvents = "none";
    setTimeout(function () {
        button.style.pointerEvents = "auto";
    }, 900);
}
function waitTimer2(button) {
    // let alert = 
    button.style.pointerEvents = "none";
    setTimeout(function () {
        button.style.pointerEvents = "auto";
    }, 2000);
}

function learn() {
    $(".learn").hide();
    setTimeout(function () {
        $(".learn").slideDown();

        // Ensure the video plays if autoplay is blocked
        const videoElement = $(".vid")[0];
        if (videoElement) {
            videoElement.muted = true; // Ensure it's muted to meet autoplay policies
            videoElement.play().catch((error) => {
                console.error("Autoplay failed: ", error);
            });
        }

        ok();
    }, 1500);
}

function ok() {
    $(".ler").hide()
    setTimeout(function () {
        $(".ler").show()
    }, 5000);
}
function effectTimer() {
    let effectFigure = 20
    let deduct = playerGoal1 - playerGoal2
    let inverseDeduct = deduct * -1
    let catchin = deduct >= effectFigure
    let catchin2 = inverseDeduct >= effectFigure
    let catch1 = playerGoal1 > playerGoal2
    if (catchin && catch1) {
        $(".effect").fadeIn()
        $(".eff").html(`<img src="img/animated-fire.gif">`)
        $(".effe").html(`<img  class="eff1" src="img/img sad gif.gif">`)
        setTimeout(function () {
            $(".effect").fadeOut()
        }, 2000);
    } else if (catchin2 && !catch1) {
        $(".effect").fadeIn()
        $(".eff").html(`<img  class="eff1" src="img/img sad gif.gif">`)
        $(".effe").html(`<img src="img/animated-fire.gif">`)
        setTimeout(function () {
            $(".effect").hide()
        }, 2000);
    }
}
function refresh() {
    $(".resimg").addClass("fast")
    setTimeout(function () {
        $(".resimg").removeClass("fast")
    }, 700);
}

function dicAnime() {
    $(".dieimg").addClass("fast")
    setTimeout(function () {
        $(".dieimg").removeClass("fast")
    }, 700);
}
function saveAnime() {
    $(".saveimg").addClass("shake")
    setTimeout(function () {
        $(".saveimg").removeClass("shake")
    }, 700);
}
function startGame() {
    $(".go").slideUp()
    $(".input-cont").addClass("animateremove")
    setTimeout(function () {
        $(".input-cont").fadeOut()
        $(".input-cont").removeClass("animateremove")
    }, 2700);
}

function limit(input) {
    let long = input.length
    let realLength = 12
    let rule = long > realLength
    let message = "Nick name too long 11 letters only"
    if (rule) {
        $("h4").text(message).css("color", "red");
        return input.slice(0, realLength)
    }
    $("h4").text("");
    return input.toUpperCase();
}
function limitGoal(input) {
    let high = 200
    let low = 50
    let rule = input > high
    let rule2 = input < low
    let message = "Goal cant be higher than 200"
    let message2 = 'Goal Cant be less than 50'
    if (rule) {
        $("h4").text(message).css("color", "red");
        return input = 200
    } else if (rule2) {
        $("h4").text(message2).css("color", "red");
        return input = 50
    }
    $("h4").text("");
    return input;
}

function dieNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Bussiness Logic

function game() {
    this.players = {}
    this.record = 0
}



game.prototype.addPlayer = function (player) {
    this.players[player.userName] = player;
};


game.prototype.findPlayer = function (userName) {
    if (this.players[userName] != undefined) {
        return this.players[userName];
    }
    return false;
};

function Player(username) {
    this.userName = username;
    this.score = 0;
}

function turnOneMessage() {
    let playing1 = $("#player1").val()
    let playing2 = $("#player2").val()
    if (showTurn) {
        $(".turn").html(`<s>${playing1} 001</s>`).css('color', 'red')
        $(".word").text("rolled 1")
        timeTurn = setTimeout(function () {
            $(".turn").html(`${playing2} 456`).css('color', 'green')
            $(".word").text("turn")
        }, 3000);
    } else if (!showTurn) {
        $(".turn").html(`<s>${playing2} 456</s>`).css('color', 'red')
        $(".word").text("rolled 1")
        timeTurn = setTimeout(function () {
            $(".turn").html(`${playing1} 001`).css('color', 'green')
            $(".word").text("turn")
        }, 3500);
    }
}

function turnSavedMessage() {
    let playing1 = $("#player1").val()
    let playing2 = $("#player2").val()
    if (showTurn) {
        $(".turn").html(`<s>${playing1} 001</s>`).css('color', 'red')
        $(".word").text("Saved is record")
        timeTurn = setTimeout(function () {
            $(".turn").html(`${playing2} 456`).css('color', 'green')
            $(".word").text("turn")
        }, 3000);
    } else if (!showTurn) {
        $(".turn").html(`<s>${playing2} 456</s>`).css('color', 'red')
        $(".word").text("Saved is record")
        timeTurn = setTimeout(function () {
            $(".turn").html(`${playing1} 001`).css('color', 'green')
            $(".word").text("turn")
        }, 3500);
    }
}


function saveSWichplayer() {
    if (playerSw === 1) {
        playerSw = 2
        playerGoal1 += playerResult
        $(".score1").text(playerGoal1)
        $(".nm2").addClass("active")
        $(".nm1").removeClass("active")
        $(".mn1").addClass("active2")
        $(".mn").removeClass("active2")
        playerResult = 0;
        showTurn = true
        turnSavedMessage()
    } else if (playerSw === 2) {
        playerSw = 1
        playerGoal2 += playerResult
        $(".score2").text(playerGoal2)
        $(".nm1").addClass("active")
        $(".nm2").removeClass("active")
        $(".mn").addClass("active2")
        $(".mn1").removeClass("active2")
        playerResult = 0;
        showTurn = false
        turnSavedMessage()
    }
    $('#count').text(playerResult);
}

function rollOneSwitch() {

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

    // Apply the rotation to the cube
    cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) rotateZ(360deg)`;


    if (rollResult === 1) {
        playerResult = 0;
        $('#count').text(playerResult);
        if (playerSw === 1) {
            playerSw = 2;
            playerGoal1 += 0;
            $(".score1").text(playerGoal1);
            $(".nm2").addClass("active");
            $(".nm1").removeClass("active");
            $(".mn1").addClass("active2");
            $(".mn").removeClass("active2");
            showTurn = true
            turnOneMessage()
        } else if (playerSw === 2) {
            playerSw = 1;
            playerGoal2 += 0;
            $(".score2").text(playerGoal2);
            $(".nm1").addClass("active");
            $(".nm2").removeClass("active");
            $(".mn").addClass("active2");
            $(".mn1").removeClass("active2");
            showTurn = false
            turnOneMessage()
        }
    } else {

        playerResult += rollResult;
        $('#count').text(playerResult);
    }
}

function resetGame() {
    aiRolling = false;
    clearTimeout(timeTurn)
    clearTimeout(timeOut)
    showTurn = true;
    playerGoal1 = 0;
    playerGoal2 = 0;
    playerResult = 0;
    playerSw = 1;
    if (bar === 100) {
        bar = 0
        $(".mesbar").text(`Full bar is 100 coin`)
    }
    $('.bar').removeClass('alert');
    $('.lvmes').text(``);
    $("h4").text("You can input your Nick name").css("color", "white");
    $(".levelmes").text(level);
    $(".mes").fadeIn()
    $(".incree").fadeOut()
    $(".see").slideUp()
    $(".mission").text(goal)
    $(".score1").text(playerGoal1);
    $(".score2").text(playerGoal2);
    $('#count').text(playerResult);
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let button3 = document.querySelector(".save");
    let button4 = document.querySelector(".backna");
    let barGrow = document.querySelector(".bar");
    barGrow.style = `transition:2s;
                     width:${bar}%;`
    let playing1 = $("#player1").val()
    $(".turn").text(`${playing1} 001`)
    $(".word").text("rolls first")
    button3.style.pointerEvents = "auto";
    button2.style.pointerEvents = "auto";
    button1.style.pointerEvents = "auto"
    button4.style.pointerEvents = "auto"

    $('#rollone').val("");

    $(".nm1").addClass("active");
    $(".nm2").removeClass("active");
    $(".mn").removeClass("active2");
    $(".mn1").removeClass("active2");

    const cube = document.getElementById('cube');
    cube.style.transform = `rotateX(0) rotateY(0) rotateZ(360deg)`;
}

let newGame = new game();
// Utility
let playerSw = 1
let playerResult = 0;
let playerGoal1 = 0;
let playerGoal2 = 0;
let showTurn = true

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
    $(".learn").hide()
    setTimeout(function () {
        $(".learn").slideDown()
        ok
    }, 1500);
}
function ok() {
    $(".ler").hide()
    setTimeout(function () {
        $(".ler").show()
    }, 3000);
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
        $(".input-cont").hide()
        $(".input-cont").removeClass("animateremove")
    }, 3000);
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
        $(".turn").text(playing1)
        $(".word").text("rolled 1")
        setTimeout(function () {
            $(".turn").text(playing2)
            $(".word").text("turn")
        }, 3000);
    } else if (!showTurn) {
        $(".turn").text(playing2)
        $(".word").text("rolled 1")
        setTimeout(function () {
            $(".turn").text(playing1)
            $(".word").text("turn")
        }, 3500);
    }
}

function turnSavedMessage() {
    let playing1 = $("#player1").val()
    let playing2 = $("#player2").val()
    if (showTurn) {
        $(".turn").text(playing1)
        $(".word").text("Saved is record")
        setTimeout(function () {
            $(".turn").text(playing2)
            $(".word").text("turn")
        }, 3000);
    } else if (!showTurn) {
        $(".turn").text(playing2)
        $(".word").text("Saved is record")
        setTimeout(function () {
            $(".turn").text(playing1)
            $(".word").text("turn")
        }, 3500);
    }
}


function saveSWichplayer() {
    let userName = playerSw === 1 ? $("#player1").val() : $("#player2").val();

    let player = newGame.findPlayer(userName);
    if (player) {

        const cube = document.getElementById('cube');
        cube.style.transform = `rotateX(0) rotateY(0) rotateZ(360deg)`;

        if (playerSw === 1) {
            playerSw = 2
            playerGoal1 += playerResult
            player.score = playerGoal1
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
            player.score = playerGoal2
            $(".score2").text(playerGoal2)
            $(".nm1").addClass("active")
            $(".nm2").removeClass("active")
            $(".mn").addClass("active2")
            $(".mn1").removeClass("active2")
            playerResult = 0;
            showTurn = false
            turnSavedMessage()
        }
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
function completeGame() {

    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let player1nm = $(".player1").text().toUpperCase()
    let player2nm = $(".player2").text().toUpperCase()
    let goal = 100
    let deduct = playerGoal1 - playerGoal2
    let catch1 = playerGoal1 >= goal
    let catch2 = playerGoal2 >= goal
    let check1 = playerGoal1 > playerGoal2
    let check2 = playerGoal2 > playerGoal1



    if (catch1 || catch2) {
        clearTimeout(timeOut)
        aiRolling = false
        $(".see").show()
        if (check1) {
            $(".winnm").text(player1nm)
            $(".winsc").text(deduct)

            $(".mes").fadeOut()
            button1.style.pointerEvents = "none";
            button2.style.pointerEvents = "none";

            $(".incree").show()
            setTimeout(function () {
                $(".incree").fadeOut()
            }, 5000);

            if (stages === 1) {
                coin += gA[1]
                $(".goldw").text(gA[1])
            } else if (stages === 2) {
                coin += gA[3]
                $(".goldw").text(gA[3])
            } else if (stages === 3) {
                coin += gA[3] + gA[0]
                $(".goldw").text(gA[3] + gA[0])
            } else if (stages === 4) {
                coin += gA[5]
                $(".goldw").text(gA[5])
            }
        } else if (check2) {
            aiRolling = false
            $(".winnm").text(player2nm)
            $(".winsc").text(deduct * -1)

            $(".mes").fadeOut()
            button2.style.pointerEvents = "none";
            button1.style.pointerEvents = "none";

            if (stages === 2) {
                coin -= gA[1]
                $(".goldw").text(gA[1])
            } else if (stages === 3) {
                coin -= gA[2]
                $(".goldw").text(gA[2])
            } else if (stages === 4) {
                coin -= gA[3] + gA[0]
                $(".goldw").text(gA[3] + gA[0])
            }

        }
        if (coin < 0) {
            coin = 0
        }

        $(".gold").text(coin)
    }
    if (coin >= gA[3] && state === 1) {
        $('.open1').prop('disabled', false).removeClass('locked');
        $('.nextlv').addClass('alert');
        $('.cned').text(gA[3]);
        coin -= gA[3]
        state = 2
        newState = 2

    } else if (coin >= gA[4] && state === 2 && stages === 2) {
        $('.open2').prop('disabled', false).removeClass('locked');
        $('.nextlv').addClass('alert');
        $('.cned').text(gA[4]);
        coin -= gA[4]
        state = 3
        newState = 3
    } else if (coin >= gA[6] && state === 3 && stages === 3) {
        $('.open3').prop('disabled', false).removeClass('locked');
        $('.nextlv').addClass('alert');
        $('.cned').text(gA[6]);
        coin -= gA[6]
        state = 4
        newState = 4
    } else if (state === 4) {
        $('.nextlv').removeClass('alert');
        $('.cned').text('');
        state = 5
        newState = 5
    } else {
        $('.nextlv').removeClass('alert');
        $('.cned').text('');
    }
}

function resetGame() {
    aiRolling = false;
    clearTimeout(timeOut)
    playerGoal1 = 0;
    playerGoal2 = 0;
    playerResult = 0;
    playerSw = 1;
    $(".score1").text(playerGoal1);
    $(".score2").text(playerGoal2);
    $('#count').text(playerResult);
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let button3 = document.querySelector(".save");
    let playing1 = $("#player1").val()
    $(".turn").text(playing1)
    $(".word").text("rolls first")
    button3.style.pointerEvents = "auto";
    button2.style.pointerEvents = "auto";
    button1.style.pointerEvents = "auto"

    $('#rollone').val("");

    $(".nm1").addClass("active");
    $(".nm2").removeClass("active");
    $(".mn").removeClass("active2");
    $(".mn1").removeClass("active2");

    const cube = document.getElementById('cube');
    cube.style.transform = `rotateX(0) rotateY(0) rotateZ(360deg)`;
}

let newGame = new game();
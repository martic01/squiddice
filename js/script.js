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
function refresh() {
    $(".reset").addClass("fast")
    setTimeout(function () {
        $(".reset").removeClass("fast")
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

function rollDice() {
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

function dieNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function saveSWichplayer() {
    let playerSw = $(".playerSwitch").val()
    let userName = playerSw === "1" ? $("#player1").val() : $("#player2").val();

    let player = newGame.findPlayer(userName);
    if (player) {
        let playerResult = parseInt($("#count").text())
        let playerGoal1 = parseInt($(".score1").text())
        let playerGoal2 = parseInt($(".score2").text())

        const cube = document.getElementById('cube');
        cube.style.transform = `rotateX(0) rotateY(0) rotateZ(360deg)`;

        if (playerSw === "1") {
            $("#count").text("0")
            $(".playerSwitch").val("2")
            playerGoal1 += playerResult
            player.score = playerGoal1
            $(".score1").text(playerGoal1)
            $(".nm2").addClass("active")
            $(".nm1").removeClass("active")
            $(".mn1").addClass("active2")
            $(".mn").removeClass("active2")
        } else if (playerSw === "2") {
            $("#count").text("0")
            $(".playerSwitch").val("1")
            playerGoal2 += playerResult
            player.score = playerGoal2
            $(".score2").text(playerGoal2)
            $(".nm1").addClass("active")
            $(".nm2").removeClass("active")
            $(".mn").addClass("active2")
            $(".mn1").removeClass("active2")

        }
    }
}

function rollOneSwitch() {
    let rollResult = parseInt($('#rollone').val())
    let playerSw = $(".playerSwitch").val()
    let playerGoal1 = parseInt($(".score1").text())
    let playerGoal2 = parseInt($(".score2").text())
    let totalScore = parseInt($('#count').text());

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
        } else if (playerSw === "2") {
            $(".playerSwitch").val("1");
            playerGoal2 += 0;
            $(".score2").text(playerGoal2);
            $(".nm1").addClass("active");
            $(".nm2").removeClass("active");
            $(".mn").addClass("active2");
            $(".mn1").removeClass("active2");
        }
    } else {

        totalScore += rollResult;
        $('#count').text(totalScore);
    }
}
function completeGame() {
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".reset");
    let player1nm = $(".player1").text().toUpperCase()
    let player2nm = $(".player2").text().toUpperCase()
    let playerGoal1 = parseInt($(".score1").text())
    let playerGoal2 = parseInt($(".score2").text())
    let goal = 10
    let deduct = playerGoal1 - playerGoal2
    let catch1 = playerGoal1 >= goal
    let catch2 = playerGoal2 >= goal
    let check1 = playerGoal1 > playerGoal2
    let check2 = playerGoal2 > playerGoal1
    if (catch1 || catch2) {
        $(".see").show()
        if (check1) {
            $(".winnm").text(player1nm)
            $(".winsc").text(deduct)
            button1.style.pointerEvents = "none";
            button2.style.pointerEvents = "none";
        } else if (check2) {
            $(".winnm").text(player2nm)
            $(".winsc").text(deduct * -1)
            button2.style.pointerEvents = "none";
            button1.style.pointerEvents = "none";
        }
    }
}

function resetGame() {
    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".reset");
    button2.style.pointerEvents = "auto";
    button1.style.pointerEvents = "auto";
    $(".score1").text("0");
    $(".score2").text("0");
    $("#count").text("0");
    $(".playerSwitch").val("1");
    $('#rollone').val("");

    $(".nm1").addClass("active");
    $(".nm2").removeClass("active");
    $(".mn").removeClass("active2");
    $(".mn1").removeClass("active2");

    const cube = document.getElementById('cube');
    cube.style.transform = `rotateX(0) rotateY(0) rotateZ(360deg)`;
}

let newGame = new game();



$(document).ready(function () {
    $(".start").click(function () {
        let inputtedUsername1 = $("#player1").val().trim()
        let inputtedUsername2 = $("#player2").val().trim()
        if (inputtedUsername1 !== "" && inputtedUsername2 !== "") {
            startGame()
            let playerOne = new Player(inputtedUsername1);
            let playerTwo = new Player(inputtedUsername2);
            newGame.addPlayer(playerOne);
            newGame.addPlayer(playerTwo);
            $(".player1").text(playerOne.userName.toUpperCase())
            $(".player2").text(playerTwo.userName.toUpperCase())
        } else {
            $("h4").text("Fill the input").css("color", "red");
        }
    })
});

window.onload = function () {
    document.getElementById('roll').addEventListener('click', function () {
        let button = document.getElementById("roll");
        waitTimer(button)
        rollDice()
        rollOneSwitch()
        completeGame()
        newGame.record = parseInt($("#count").text())
    });

    $('.save').on('click', function () {
        let button = document.querySelector(".save");
        waitTimer2(button)
        saveSWichplayer()
        completeGame()
    });

    $('.inc').on('input', function () {
        let index = $(".inc").index(this)
        let input = $(this).val()
        $("h4").text("");
        switch (index) {
            case 0:
                $('.inc').eq(index).val(limit(input))
                break
            default:
                $('.inc').eq(index).val(limit(input))
        }
    })

    $(".reset").click(function () {
        refresh()
        resetGame();
    });
    $(".playagain").click(function () {
        $(".go").slideDown()
        $(".input-cont").show()
        resetGame();
        $(".see").hide()
    });
}
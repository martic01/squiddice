

$(document).ready(function () {
    $(".pack").hide()
    $(".cont").hide()
    $(".gold").text(coin)
    learn()
    $(".ler").click(function () {
        $('.learn').slideUp()
    })
    $(".about").click(function () {
        $('.learn').slideToggle()
    })
    $(".hum").click(function () {
        playerVSai = 2;
        stages = 0;
        clearInterval(timerInterval)
        timeLeft = intialTime
        stages = 0;
        // Hide elements
        $(".cashin, .nextlv, .coinwin").hide();

        // Reset text and UI elements
        level = ' ';
        $('.inputimg').html('<img src="img/useer.png">');
        $('.chose').slideUp();
        $('.go2').slideDown();

        // Reset player 2 input
        $("#player2").val('PLAYER😇').prop("readonly", false);
    });

    $(".bot").click(function () {
        playerVSai = 1;
        clearInterval(timerInterval)
        timeLeft = intialTime
        stages = 1;
        // Show necessary elements
        $(".nextlv, .cashin, .coinwin").show();

        // Reset and update text/UI elements
        level = ' ';
        $(".main-cont").hide();
        $(".level").show();
        $('.inputimg').html('<img src="img/bot p.png">');
        $('.chose').slideUp();
        $('.go2').slideDown();

        // Update player 2 settings
        $("#player2").prop("readonly", true).val('MarticAM.AI💻');

        // Reset the game state
    });

    $(".arrw").click(function () {
        $('.go2').slideUp()
        $('.chose').slideDown()
        $('.inputimg').html(`<img src="img/die inm.jpeg">`)
    })


    $(".start").click(function () {
        $('.soundch').removeClass('coll');
        if (active === 1) {
            $(".audio").html(`<audio class="aud" src="audio/favorite.mp3" autoplay loop> `)
            $('.sd1').addClass('coll');
            SC1 = false
        } else if (active === 2) {
            $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
            $('.sd2').addClass('coll')
            SC2 = false
        }


        $(".levelmes").text(level)
        let inputtedUsername1 = $("#player1").val().trim()
        let inputtedUsername2 = $("#player2").val().trim()
        let point = parseInt($("#playergoal").val())
        lead1 = 0;
        lead2 = 0;
        $(".lead1").text(lead1)
        $(".lead2").text(lead2)
        if (inputtedUsername1 !== "" && inputtedUsername2 !== "" && point !== '' && point >= 50 && point <= 200) {
            startGame()
            let playerOne = new Player(`${inputtedUsername1} 001`);
            let playerTwo = new Player(`${inputtedUsername2} 456`);
            newGame.addPlayer(playerOne);
            newGame.addPlayer(playerTwo);
            $(".player1").text(playerOne.userName.toUpperCase())
            $(".player2").text(playerTwo.userName.toUpperCase())
            goal = point
            resetGame()
        } else {
            $(".error").text("Fill the input").css("color", "red");
            $('.goalpoint').val(limitGoal(point))
        }


    });

    document.getElementById('roll').addEventListener('click', function () {
        let button = document.getElementById("roll");
        if (timeLeft > 10) {
            rolled = false
        }
        dicAnime()
        if (playerVSai === 1) {
            rollOneSwitchAi()
        } else if (playerVSai === 2) {
            rollOneSwitch()
            waitTimer(button)
            newGame.record = parseInt($("#count").text())
        }

    });

    $('.save').on('click', function () {
        let button = document.querySelector(".save");
        rolled = true
        saveAnime()
        if (playerVSai === 1) {
            saveSWichplayerAi()
            completeGame()
            effectTimer()
        } else if (playerVSai === 2) {
            saveSWichplayer()
            completeGame()
            effectTimer()
            waitTimer2(button)
            aiRolling = false
        }
    });

    $('.inc').on('input', function () {
        let input = $(this).val()
        $(".error").text("");
        $(this).val(limit(input))
    })

    $('.goalpoint').on('input', function () {
        $(".error").text("");

    })

    $(".resimg").click(function () {
        refresh()
        resetGame();
    });
    $(".playagain").click(function () {
        resetGame();
    });
    $(".backna").click(function () {
        clearInterval(timerInterval)
        timeLeft = intialTime
        $('.see').hide()
        $('.digit').text("0");

        if (playerVSai === 1) {
            $(".main-cont").hide()
            $(".level").show()
            back = true
        } else {
            $(".input-cont").show()
            $(".go2").slideDown()
            $(".level").hide()

        }
    });

    $(".backun").click(function () {
        resetGame();
        clearInterval(timerInterval)
        $(".go").hide()
        $(".chose").slideDown()
        $(".input-cont").show()
        $(".level").hide()
        $(".main-cont").show()
        $(".paced").slideUp()
        $('.inputimg').html(`<img src="img/die inm.jpeg">`)
    });

    $(".setin").click(() => {
        $(".pack").toggle();
        setTimeout(() => $(".pack").slideUp(), 10000);
    });

    $("#pick").click(() => {
        $(".paced").slideToggle();
        setTimeout(() => $(".paced").slideUp(), 15000);
    });

    $(".nextlv").click(function () {
        resetGame();
        lead1 = 0;
        lead2 = 0;
        $(".lead1").text(lead1)
        $(".lead2").text(lead2)
        if (state <= 4) {

            if (newState === 2) {
                $('.open1').trigger('click');
                $(".gold").text(coin)

            } else if (newState === 3) {
                $('.open2').trigger('click');
                $(".gold").text(coin)

            } else if (newState === 4) {
                $('.open3').trigger('click');
                $(".gold").text(coin)

            } else if (state === 4) {
                $('.nextlv').removeClass('alert');
                $('.cned').text('');

            }
        } else if (state >= 4) {
            if (newState2 === 2) {
                $('.open1').trigger('click');
            } else if (newState2 === 3) {
                $('.open2').trigger('click');
            } else if (newState2 === 4) {
                $('.open3').trigger('click');
            }
        }
    });

});
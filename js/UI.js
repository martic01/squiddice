

$(document).ready(function () {
    $(".pack").hide()
    $(".gold").text(coin)
    learn()
    $(".ler").click(function () {
        $('.learn').slideUp()
    })
    $(".about").click(function () {
        $('.learn').slideToggle()
    })
    $(".hum").click(function () {

        playerVSai = 2
        stages = 0
        $(".cashin").hide()
        $(".nextlv").hide()
        $(".coinwin").hide()
        $(".levelmes").text('');
        $('.inputimg').html(`<img src="img/useer.png">`)
        $('.chose').slideUp()
        $('.go2').slideDown()
        $("#player2").val('PLAYER')
        $("#player2").prop("readonly", false)
    })
    $(".bot").click(function () {

        playerVSai = 1
        $(".nextlv").show()
        $(".cashin").show()
        $(".coinwin").show()
        $(".levelmes").text('');
        $(".main-cont").hide()
        $(".level").show()
        $('.inputimg').html(`<img src="img/bot p.png">`)
        $('.chose').slideUp()
        $('.go2').slideDown()
        $("#player2").prop("readonly", true)
        $("#player2").val('MarticAM.AI')
        resetGame();

    })
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
            $('.sd2').addClass('coll');
            SC2 = false
        }
        resetGame()
        let inputtedUsername1 = $("#player1").val().trim()
        let inputtedUsername2 = $("#player2").val().trim()
        if (inputtedUsername1 !== "" && inputtedUsername2 !== "") {
            startGame()
            let playerOne = new Player(`${inputtedUsername1} 001`);
            let playerTwo = new Player(`${inputtedUsername2} 456`);
            newGame.addPlayer(playerOne);
            newGame.addPlayer(playerTwo);
            $(".player1").text(playerOne.userName.toUpperCase())
            $(".player2").text(playerTwo.userName.toUpperCase())
        } else {
            $("h4").text("Fill the input").css("color", "red");
        }


    });

    document.getElementById('roll').addEventListener('click', function () {
        let button = document.getElementById("roll");
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

    $(".resimg").click(function () {
        refresh()
        resetGame();
    });
    $(".playagain").click(function () {
        resetGame();
    });

    $(".off").click(function () {
        active = Math.floor(Math.random() * 2) + 1

        if (!SDcheck) {
            $('.soundch').removeClass('coll');
            if (off) {
                off = false
                $('.sdsw').text('OFF');
                if (active === 1) {
                    $(".audio").html(`<audio class="aud" src="audio/favorite.mp3" autoplay loop> `)
                    $('.sd1').addClass('coll');
                    SC2 = true
                    SC1 = false
                } else if (active === 2) {
                    $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
                    $('.sd2').addClass('coll');
                   
                    SC1 = true
                    SC2 = false
                }
                console.log(off);

            } else {
                off = true
                $(".audio").html(``)
                $('.sdsw').text('ON');
                active = 0
                $('.soundch').removeClass('coll');
                SC2 = false
                SC1 = false
            }
        } else {
            off = true
            SDcheck = false
            SC2 = false
            SC1 = false
            $(".audio").html(``)
            $('.sdsw').text('ON');
            active = 0
            $('.soundch').removeClass('coll');
        }
    });

    $(".backna").click(function () {
        resetGame();
        if (playerVSai === 1) {
            $(".main-cont").hide()
            $(".level").show()
        } else {
            $(".input-cont").show()
            $(".go2").slideDown()
            $(".level").hide()

        }
    });

    $(".backun").click(function () {
        resetGame();
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

    $(".soundch").click(function () {
        let index = $(".soundch").index(this);
        $('.soundch').removeClass('coll');
        if (index === 0) {
            if (SC1) {
                $(".audio").html(`<audio class="aud" src="audio/favorite.mp3" autoplay loop> `)
                SC1 = false
                SC2 = true
                active = 1
                SDcheck = true
                $(this).addClass('coll');
            } else {
                $(".audio").html(``)
                SC2 = true
                SC1 = true
                active = 0
                SDcheck = false
                $(this).removeClass('coll');
            }
        } else if (index === 1) {
            if (SC2) {
                $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
                SC2 = false
                SC1 = true
                active = 2
                SDcheck = true
                $(this).addClass('coll');
            } else {
                $(".audio").html(``)
                SC1 = true
                SC2 = true
                active = 0
                SDcheck = false
                $(this).removeClass('coll');
            }
        }
    });


});
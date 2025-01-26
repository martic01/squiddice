let playerVSai;
let newState = 1
let newState2 = 1

$(document).ready(function () {
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
        $("#player2").val('PLAYER 2')
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
        $(".audio").html(`<audio class="aud" src="audio/pig dice sound.mp3" autoplay loop>`)
        $(".mission").text(goal)
        let button1 = document.querySelector("#roll");
        let button2 = document.querySelector(".reset");
        let button3 = document.querySelector(".save");
        let playing1 = $("#player1").val()
        $(".mes").fadeIn()
        button2.style.pointerEvents = "auto";
        button3.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        $(".turn").text(playing1)

        if (playerVSai === 1) {
            let inputtedUsername1 = $("#player1").val().trim()
            let inputtedUsername2 = $("#player2").val()
            if (inputtedUsername1 !== "") {
                startGame()
                let playerOne = new Player(inputtedUsername1);
                let playerTwo = new Player(inputtedUsername2);
                newGame.addPlayer(playerOne);
                newGame.addPlayer(playerTwo);
                $(".player1").text(playerOne.userName.toUpperCase())
                $(".player2").text(playerTwo.userName)
            } else {
                $("h4").text("Fill the input").css("color", "red");
            }
        } else if (playerVSai === 2) {
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
        aiRolling = false
    });
    $(".playagain").click(function () {
        aiRolling = false
        resetGame();
        $(".incree").fadeOut()
        $(".see").slideUp()
        $(".mes").fadeIn()
    });
    $(".off").click(function () {
        $(".audio").html(`<audio class="aud" src="audio/pig dice sound.mp3" autoplay loop>`)
        $(".aud").prop("muted", false)
        $(".off").hide()
        $(".on").toggle()
    });
    $(".on").click(function () {
        $(".aud").prop("muted", true)
        $(".on").hide()
        $(".off").toggle()
    });

    $(".backna").click(function () {
        resetGame();
        $(".see").hide()
        $(".incree").fadeOut()
        $(".levelmes").text('');
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

        $(".see").hide()
        $(".level").hide()
        $(".main-cont").show()
        $('.inputimg').html(`<img src="img/die inm.jpeg">`)
    });

    $(".setin").click(() => {
        $(".pack").toggle();
        setTimeout(() => $(".pack").hide(), 10000);
    });

    $("#pick").click(() => {
        $(".paced").slideToggle();
        setTimeout(() => $(".paced").slideUp(), 15000);
    });

    $(".nextlv").click(function () {
        $(".mes").fadeIn()
        resetGame();

        $(".see").hide()
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

    function applyStyles(className) {
        $(`.${className}`).click(function () {
            let index = $(`.${className}`).index(this);
            let c = ["white", "red", "yellow", "blue", "pink", "green", "black"];
            let cA = ["#ffffffbb", "#f5193ebb", "#f8fc0dbb", "#1c0cf1af", "#ffc0cbbc", "#3afd12bb"];
            let gradients = ["#0000003f", c[index], "#0000003f"];

            $(`.${className}`).removeClass('coll');
            $(this).addClass('coll');

            document.querySelector(".pack").style.backgroundColor = c[index];


            document.querySelector(".main-cont").style = `background: linear-gradient(90deg, ${gradients});`;

            document.querySelectorAll(".tool, .usernmhum").forEach(el => {
                el.style.backgroundColor = cA[index];
            });

            const elements = [
                { selector: ".butt", style: "backgroundColor", value: cA[index] },
                { selector: ".inputimg", style: "backgroundColor", value: cA[index] },
                { selector: ".diepig", style: "color", value: c[index] },
                { selector: ".tcl", style: "color", value: c[index] },
                { selector: ".pl", style: "textShadow", value: `0 0 10px ${c[index]}` },
                { selector: ".bbt", style: "border", value: `5px solid ${c[index]}` }
            ];

            elements.forEach(({ selector, style, value }) =>
                document.querySelectorAll(selector).forEach(el => el.style[style] = value)
            );
            if (className === 'colour') {
                $(".main-cont").hide()
            }

            if (index === 0) {
                document.querySelector(".levelmes").style.color = c[6];
                document.querySelector(".ar").style.color[6];
                document.querySelector(".ar2").style.color = "#252323";
            } else if (index === 2 || index === 4) {
                document.querySelector(".levelmes").style.color = c[7];
                document.querySelector(".ar").style.color[7];
                document.querySelector(".ar2").style.color = "#252323";
            } else {
                document.querySelector(".levelmes").style.color = c[index];
                document.querySelector(".ar").style.color = c[index];
                document.querySelector(".ar2").style.color = c[index - 1];
            }
        });
    }

    // Apply the function to both classes
    applyStyles("colour");
    applyStyles("pikcol");

});
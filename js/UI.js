
$(document).ready(function () {
    learn()
    $(".ler").click(function () {
        $('.learn').slideUp()
    })
    $(".about").click(function () {
        $('.learn').slideToggle()
    })
    $(".hum").click(function () {
        $('.Ai').val("2")
        $('.inputimg').html(`<img src="img/useer.png">`)
        $('.chose').slideUp()
        $('.go2').slideDown()
        $("#player2").val('PLAYER 2')
        $("#player2").prop("readonly", false)
    })
    $(".bot").click(function () {
        $('.Ai').val("1")
        $('.inputimg').html(`<img src="img/bot p.png">`)
        $('.chose').slideUp()
        $('.go2').slideDown()
        $("#player2").prop("readonly", true)
        $("#player2").val('MarticAM.AI')
    })
    $(".arrw").click(function () {
        $('.go2').slideUp()
        $('.chose').slideDown()
        $('.inputimg').html(`<img src="img/die inm.jpeg">`)
    })
    $(".start").click(function () {
        $(".audio").html(`<audio class="aud" src="audio/pig dice sound.mp3" autoplay loop>`)
        let button1 = document.querySelector("#roll");
        let button2 = document.querySelector(".reset");
        let button3 = document.querySelector(".save");
        let playing1 = $("#player1").val()
        $(".mes").fadeIn()
        button2.style.pointerEvents = "auto";
        button3.style.pointerEvents = "auto"
        button1.style.pointerEvents = "auto"
        $(".turn").text(playing1)
        let playerVSai = $('.Ai').val()
        if (playerVSai === "1") {
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
        } else if (playerVSai === "2") {
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

    })
});

window.onload = function () {
    document.getElementById('roll').addEventListener('click', function () {
        let button = document.getElementById("roll");
        let playerVSai = $('.Ai').val()
        dicAnime()
        if (playerVSai === "1") {
            rollOneSwitchAi()
        } else if (playerVSai === "2") {
            rollOneSwitch()
            completeGame()
            waitTimer(button)
            newGame.record = parseInt($("#count").text())
        }

    });

    $('.save').on('click', function () {
        let button = document.querySelector(".save");
        let playerVSai = $('.Ai').val()
        saveAnime()
        if (playerVSai === "1") {
            saveSWichplayerAi()
            completeGame()
            effectTimer()
        } else if (playerVSai === "2") {
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
        $(".go").slideUp()
        $(".chose").slideDown()
        $(".input-cont").show()
        resetGame();
        $(".see").hide()
        $('.inputimg').html(`<img src="img/die inm.jpeg">`)
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
        $(".main-cont").hide()
        $(".level").show()
        resetGame();
    });

    $(".backun").click(function () {
        aiRolling = false
        $(".go").hide()
        $(".chose").slideDown()
        $(".input-cont").show()
        resetGame();
        $(".see").hide()
        $(".level").hide()
        $(".main-cont").show()
        $('.inputimg').html(`<img src="img/die inm.jpeg">`)
    });

    $(".free").click(function () {
        $(".main-cont").show()
        $(".level").hide()
        resetGame();
    });
    $(".setin").click(function () {
        $(".pack").toggle()
        setTimeout(function(){
            $(".pack").hide()
        },10000)
    });
    $("#pick").click(function () {
        $(".pack").show()
        setTimeout(function(){
            $(".pack").hide()
        },13000)
        $(".main-cont").hide()
        $(".level").show()
    });


    $(".colour").click(function () {
        let index = $(".colour").index(this);
        let c = ["white", "red", "yellow", "blue", "pink", "green"];
        let cA = ["#ffffffbb", "#f5193ebb", "#f8fc0dbb", "#1c0cf1af", "#ffc0cbbc", "#3afd12bb"];

        let gradients = ["#0000003f", c[index], "#0000003f"];

        $(".colour").removeClass('coll');
        $(this).addClass('coll');
        
        document.querySelector(".pack").style.backgroundColor = c[index];
        document.querySelector(".tool").style.backgroundColor = cA[index];
        document.querySelector(".main-cont").style = `background: linear-gradient(90deg, ${gradients});`;
        
        const elements = [
            { selector: ".butt", style: "backgroundColor", value: cA[index] },
            { selector: ".inputimg", style: "backgroundColor", value: cA[index] },
            { selector: ".diepig", style: "color", value: c[index] },
            { selector: ".tcl", style: "color", value: c[index] },
            { selector: ".pl", style: "textShadow", value: `0 0 10px ${c[index]}`,
            selector: ".bbt", style: "border", value: `5px solid ${c[index]}`
         }
        ];
        $(".main-cont").hide()
        elements.forEach(({ selector, style, value }) => 
            document.querySelectorAll(selector).forEach(el => el.style[style] = value)
        );
    });
}
function completeGame() {

    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
    let barGrow = document.querySelector(".bar");
    let player1nm = $(".player1").text().toUpperCase()
    let player2nm = $(".player2").text().toUpperCase()
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
            if (playerVSai === 1) {
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

                if (bar + bL[0] < 100 && stages === 1) {
                    bar += bL[0]

                } else if (bar + bL[1] < 100 && stages === 2) {
                    bar += bL[1]
                } else if (bar + bL[2] < 100 && stages === 3) {
                    bar += bL[2]
                } else if (bar + bL[3] < 100 && stages === 4) {
                    bar += bL[3]

                } else {
                    bar += (100 - bar)
                    $(".mesbar").html(`Task ✔. Got <span class='colgolgin'>100</span>coin`)
                    coin += gA[4]
                }

                barGrow.style = `transition:2s;
                width:${bar}%;`
                console.log(bar);

                count[0]++
            } else if (playerVSai === 2) {
                count[2]++
            }
            $(".mes").fadeOut()
            button1.style.pointerEvents = "none";
            button2.style.pointerEvents = "none";

            $(".incree").show()
            setTimeout(function () {
                $(".incree").fadeOut()
            }, 5000);


        } else if (check2) {
            aiRolling = false
            $(".winnm").text(player2nm)
            $(".winsc").text(deduct * -1)
            $(".mes").fadeOut()
            if (playerVSai === 1) {
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
                count[1]++
            } else if (playerVSai === 2) {
                count[3]++
            }
            button2.style.pointerEvents = "none";
            button1.style.pointerEvents = "none";




        }
        if (coin < 0) {
            coin = 0
        }

        $(".gold").text(coin)


        if (playerVSai === 1) {

            if (coin >= gA[3] && check1 && state === 1 && stages === 1) {
                $('.open1').prop('disabled', false).removeClass('locked');
                $('.nextlv').show();
                $('.nextlv').addClass('alert');
                $('.cned').text(gA[3]);
                coin -= gA[3]
                state = newState = 2


            } else if (coin >= gA[4] && check1 && state === 2 && stages === 2) {
                $('.open2').prop('disabled', false).removeClass('locked');
                $('.nextlv').show();
                $('.nextlv').addClass('alert');
                $('.cned').text(gA[4]);
                coin -= gA[4]
                state = newState = 3

            } else if (coin >= gA[6] && check1 && state === 3 && stages === 3) {
                $('.open3').prop('disabled', false).removeClass('locked');
                $('.nextlv').show();
                $('.nextlv').addClass('alert');
                $('.cned').text(gA[6]);
                coin -= gA[6]
                state = newState = 4

            } else if (state === 4) {
                state = newState = 5

            } else {
                if (state === 1 && $('.open1').prop('disabled') && stages === 1) {
                    $('.nextlv').hide();
                    $('.lvmes').text(`You need up to ${gA[3]} to unlock the next level`);
                } else if (state === 2 && $('.open2').prop('disabled') && stages === 2) {
                    $('.nextlv').hide();
                    $('.lvmes').text(`You need up to ${gA[4]} to unlock the next level`);
                } else if (state === 3 && $('.open3').prop('disabled') && stages === 3) {
                    $('.lvmes').text(`You need up to ${gA[6]} to unlock the next level`);
                    $('.nextlv').hide();
                } else {
                    if(stages < 3){
                        $('.lvmes').text(``);
                        $('.nextlv').show();
                    }
                }
                $('.nextlv').removeClass('alert');
                $('.cned').text('');
            }

            recordAi.push([player1nm, playerGoal1, player2nm, playerGoal2, deduct, level])
            console.log(recordAi);

        } else if (playerVSai === 2) {
            recordHum.push([player1nm, playerGoal1, player2nm, playerGoal2, deduct])
            console.log(recordHum);
        }
    }



}


$(document).ready(function () {

    function applyStyles(className) {
        $(`.${className}`).click(function () {
            let index = $(`.${className}`).index(this);
            let c = ["white", "red", "yellow", "blue", "pink", "green", "black"];
            let cA = ["#ffffffbb", "#f5193ebb", "#f8fc0dbb", "#1c0cf1af", "#ffc0cbbc", "#3afd12bb"];
            let gradients = ["#0000003f", c[index], "#0000003f"];

            $(`.${className}`).removeClass('coll');
            $(`.${className}`).text('');
            $(`.pikcol`).removeClass('coll');
            $(`.pikcol`).text('');
            $(this).addClass('coll');
            $(this).text(`✔`);
            $('.pikcol').eq(index).addClass('coll');
            $('.pikcol').eq(index).text(`✔`);

            document.querySelector(".pack").style.backgroundColor = c[index];


            document.querySelector(".main-cont").style = `background: linear-gradient(90deg, ${gradients});`;

            document.querySelectorAll(".tool, .usernmhum,.his").forEach(el => {
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

    $(".pikcol").click(function () {
        let index = $(`.pikcol`).index(this);
        $(".colour").eq(index).trigger('click')
        $(".main-cont").show()
    });

    // Apply the function to both classes
    applyStyles("colour");

});
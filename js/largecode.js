function completeGame() {

    let button1 = document.querySelector("#roll");
    let button2 = document.querySelector(".resimg");
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
                count[0]++
            }else if(playerVSai === 2){
                count[2]++
            }
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
            if (playerVSai === 1) {
                count[1]++
            }else if(playerVSai === 2){
                count[3]++
            }
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
        if (playerVSai === 1) {
            recordAi.push([player1nm, playerGoal1, player2nm, playerGoal2, deduct,level])
            console.log(recordAi);
            
        }else if(playerVSai === 2){
            recordHum.push([player1nm, playerGoal1, player2nm, playerGoal2, deduct])
            console.log(recordHum);
        }
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
   
    
    console.log(count);
    
}


$(document).ready(function () {

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
let stages = 1
let coin = 30
let state = 1
let time = 400
let gA = [10, 20, 30, 40, 100, 70, 350]

$(document).ready(function () {
    $(".bbtn").click(function () {
        resetGame();
        let index = $('.bbtn').index(this);
        let stageNm = $(this).find('p span').text();
        $(".levelmes").text(`${stageNm}`);

        console.log(index)
        if (index === 0) {
          setTimeout(()=>{
            $(".main-cont").show()
            $(".level").hide();
        },time)
            goalThreshold = 6;
            dontRoll1 = 4;
            stages = 1
            newState2 = 2
            $(".nextlv").show()
        } else if (index === 1) {
          setTimeout(()=>{
            $(".main-cont").show()
            $(".level").hide();
        },time)
            goalThreshold = 12;
            dontRoll1 = 8;
            stages = 2
            newState2 = 3
            if(state === 2){
                $(".gold").text(coin)
            }
            $(".hidecoin1").hide()
            $(".nextlv").show()
            $(".display1").html(`<span>Medium</span>`)
        } else if (index === 2) {
          setTimeout(()=>{
            $(".main-cont").show()
            $(".level").hide();
        },time)
            goalThreshold = 16;
            dontRoll1 = 12;
            stages = 3
            newState2 = 4
            if(state === 3){
                $(".gold").text(coin)
            }
            $(".hidecoin2").hide()
            $(".nextlv").show()
            $(".display2").html(`<span>Hard</span>`)
        } else if (index === 3) {
          setTimeout(()=>{
            $(".main-cont").show()
            $(".level").hide();
        },time)
            goalThreshold = 25;
            dontRoll1 = 18;
            stages = 4
            if(state === 4){
                $(".gold").text(coin)
            }
            $(".hidecoin3").hide()
            $(".nextlv").hide()
            $(".display3").html(`<span>Master</span>`)
        }
    });
});
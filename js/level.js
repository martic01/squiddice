let stages = 1
let coin = 20
let gA = [10,20,30,40,50,70]

$(document).ready(function () {
    $(".bbtn").click(function () {
         resetGame();
         $(".gold").text(coin)
        let index = $('.bbtn').index(this);
        let stageNm = $(this).find('p span').text();
        $(".levelmes").text(`${stageNm}`);
       
        console.log(index)
        if (index === 0) {
            $(".main-cont").show();
            $(".level").hide();
            goalThreshold = 6;
            dontRoll1 = 4;
           stages = 1
        }else if (index === 1) {
            $(".main-cont").show();
            $(".level").hide();
            goalThreshold = 12;
            dontRoll1 = 8;
           stages = 2
        }else if (index === 2) {
            $(".main-cont").show();
            $(".level").hide();
            goalThreshold = 16;
            dontRoll1 = 12;
           stages = 3
        }else if (index === 3) {
            $(".main-cont").show();
            $(".level").hide();
            goalThreshold = 25;
            dontRoll1 = 18;
            stages = 4
        
        }
    });
});
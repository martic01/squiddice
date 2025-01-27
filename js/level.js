

$(document).ready(function () {
    $(".bbtn").click(function () {
        resetGame();
        $(".paced").slideUp()
        let index = $('.bbtn').index(this);
        
        if (index === 0) {
              level = "Easy"
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
               level = "Medium"
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
            level = "Hard"
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
            level = "Master"
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
        $(".levelmes").text(level);
    });
});
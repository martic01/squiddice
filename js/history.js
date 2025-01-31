$(document).ready(function(){
    // function updateChart() {
    //     let win = parseInt($("#winInput").val());
    //     let lose = parseInt($("#loseInput").val());
    //     let remaining = 100 - (win + lose);

    //     if (remaining < 0) {
    //         alert("Total percentage cannot exceed 100%");
    //         return;
    //     }

    //     let gradient = `conic-gradient(
    //         green 0% ${win}%, 
    //         red ${win}% ${win + lose}%, 
    //         gray ${win + lose}% 100%
    //     )`;
    //     $("#pieChart").css("transition", '.3s');
    //     $("#pieChart").css("background", gradient);
    // }

    // $("#updateChart").click(updateChart);
    // updateChart();

    $(".his").click(() => {
        $(".history").show();
    });
    $(".cancel").click(function()  {
        $(".history").addClass('leave').show();
        setTimeout(function(){$(".history").removeClass('leave').hide();},1100)
    });


});
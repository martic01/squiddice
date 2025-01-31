$(document).ready(function(){
    function updateChart() {
        let cal = (count[0] + count[1])
        let win = count[0]
        let lose = count[1]

        if (remaining < 0) {
            alert("Total percentage cannot exceed 100%");
            return;
        }

        let gradient = `conic-gradient(
            green 0% ${win}%, 
            red ${win}% ${win + lose}%, 
            gray ${win + lose}% 100%
        )`;
        $("#pieChart").css("transition", '.3s');
        $("#pieChart").css("background", gradient);
    }


    $(".his").click(() => {
        $(".history").show();
        updateChart()
    });
    $(".cancel").click(function()  {
        $(".history").addClass('leave').show();
        setTimeout(function(){$(".history").removeClass('leave').hide();},1100)
    });


});
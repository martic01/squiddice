$(document).ready(function () {
    function updateChart() {
        let cal1 = parseInt((count[0] / (count[0] + count[1])) * 100)
        let cal2 = parseInt((count[1] / (count[0] + count[1])) * 100)
        let win = cal1
        let lose = cal2

        if (isNaN(win || lose)) {
            win = 0
            lose = 0
            $(".pieChart").css("background-color", 'white');
        } else {

            let gradient = `conic-gradient(
             #093d09 0% ${win}%, 
            #3a0505 ${win}% 100%
        )`;

            $(".pieChart").css("background", gradient);
        }

        if (win > lose) {
            $(".pieChart").css("border", "3px solid green")
        } else if (win < lose) {
            $(".pieChart").css("border", "3px solid red")
        } else {
            $(".pieChart").css("border", "3px solid grey")
        }
        $('.win').text(`${win}%`)
        $('.lose').text(`${lose}%`)
    }


    $(".his").click(() => {
        $(".history").show();
        updateChart()
    });
    $(".cancel").click(function () {
        $(".history").addClass('leave').show();
        setTimeout(function () { $(".history").removeClass('leave').hide(); }, 1100)
    });


});
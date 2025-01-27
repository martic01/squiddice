$(".soundch").click(function () {
    let index = $(".soundch").index(this);
    $('.soundch').removeClass('coll');
    if (index === 0) {
        if (SC1) {
            $(".audio").html(`<audio class="aud" src="audio/favorite.mp3" autoplay loop> `)
            SC1 = false
            SC2 = true
            active = 1
            SDcheck = true
            $(this).addClass('coll');
        } else {
            $(".audio").html(``)
            SC2 = true
            SC1 = true
            active = 0
            SDcheck = false
            $(this).removeClass('coll');
        }
    } else if (index === 1) {
        if (SC2) {
            $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
            SC2 = false
            SC1 = true
            active = 2
            SDcheck = true
            $(this).addClass('coll');
        } else {
            $(".audio").html(``)
            SC1 = true
            SC2 = true
            active = 0
            SDcheck = false
            $(this).removeClass('coll');
        }
    }
});

$(".off").click(function () {
    active = Math.floor(Math.random() * 2) + 1

    if (!SDcheck) {
        $('.soundch').removeClass('coll');
        if (off) {
            off = false
            $('.sdsw').text('OFF');
            if (active === 1) {
                $(".audio").html(`<audio class="aud" src="audio/favorite.mp3" autoplay loop> `)
                $('.sd1').addClass('coll');
                SC2 = true
                SC1 = false
            } else if (active === 2) {
                $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
                $('.sd2').addClass('coll');
               
                SC1 = true
                SC2 = false
            }
            console.log(off);

        } else {
            off = true
            $(".audio").html(``)
            $('.sdsw').text('ON');
            active = 0
            $('.soundch').removeClass('coll');
            SC2 = false
            SC1 = false
        }
    } else {
        off = true
        SDcheck = false
        SC2 = false
        SC1 = false
        $(".audio").html(``)
        $('.sdsw').text('ON');
        active = 0
        $('.soundch').removeClass('coll');
    }
});
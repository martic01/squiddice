$(document).ready(function () {
    $(".soundch").click(function () {
        let index = $(".soundch").index(this);
        $('.soundch').removeClass('coll');
        $('.soundch').find('p span').text('🔈');

        if (index === 0) {
            if (SC1) {
                $(".audio").html(`<audio class="aud" src="audio/favorite.mp3" autoplay loop> `)
                SC1 = false
                SC2 = true
                active = 1
                SDcheck = true
                off = false
                $(this).addClass('coll');
                $(this).find('p span').text('🔊');
                $('.sdsw').text('OFF');
            } else {
                $(".audio").html(``)
                SC2 = true
                SC1 = true
                active = 0
                SDcheck = false
                off = true
                $(this).removeClass('coll');
                $(this).find('p span').text('🔈');
                $('.sdsw').text('ON');
            }
        } else if (index === 1) {
            if (SC2) {
                $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
                SC2 = false
                SC1 = true
                active = 2
                SDcheck = true
                off = false
                $(this).addClass('coll');
                $(this).find('p span').text('🔊');
                $('.sdsw').text('OFF');
            } else {
                $(".audio").html(``)
                SC1 = true
                SC2 = true
                active = 0
                SDcheck = false
                off = true
                $(this).removeClass('coll');
                $(this).find('p span').text('🔈');
                $('.sdsw').text('ON');
            }
        }
    });

    $(".off").click(function () {
        if (!SDcheck) {
            if (off) {
                active = Math.floor(Math.random() * 2) + 1
                if (active === 1) {
                    $('.sd1').trigger('click');
                } else if (active === 2) {
                    $('.sd2').trigger('click');
                }
            } else {
                if (active === 1) {
                    $('.sd1').trigger('click');
                } else if (active === 2) {
                    $('.sd2').trigger('click');
                }
            }
        } else {
            off = true
            SDcheck = false
            if (active === 1) {
                $('.sd1').trigger('click');
            } else if (active === 2) {
                $('.sd2').trigger('click');
            }
            $('.sdsw').text('ON');
            active = 0
        }
    });
});
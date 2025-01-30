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
                SC3 = true
                SC4 = true
                active = 1
                off = false
                $(this).addClass('coll');
                $(this).find('p span').text('🔊');
                $('.sdsw').text('OFF');
            } else {
                $(".audio").html(``)
                SC1 = true
                SC2 = true
                SC3 = true
                SC4 = true
                active = 0
                off = true
                $(this).removeClass('coll');
                $(this).find('p span').text('🔈');
                $('.sdsw').text('ON');
            }
        } else if (index === 1) {
            if (SC2) {
                $(".audio").html(`<audio class="aud" src="audio/drill.mp3" autoplay loop> `)
                SC1 = true
                SC2 = false
                SC3 = true
                SC4 = true
                active = 2
                off = false
                $(this).addClass('coll');
                $(this).find('p span').text('🔊');
                $('.sdsw').text('OFF');
            } else {
                $(".audio").html(``)
                SC1 = true
                SC2 = true
                SC3 = true
                SC4 = true
                active = 0
                off = true
                $(this).removeClass('coll');
                $(this).find('p span').text('🔈');
                $('.sdsw').text('ON');
            }
        } else if (index === 2) {
            if (SC3) {
                $(".audio").html(`<audio class="aud" src="audio/squid amapiano.mp3" autoplay loop> `)
                SC1 = true
                SC2 = true
                SC3 = false
                SC4 = true
                active = 3
                off = false
                $(this).addClass('coll');
                $(this).find('p span').text('🔊');
                $('.sdsw').text('OFF');
            } else {
                $(".audio").html(``)
                SC1 = true
                SC2 = true
                SC3 = true
                SC4 = true
                active = 0
                off = true
                $(this).removeClass('coll');
                $(this).find('p span').text('🔈');
                $('.sdsw').text('ON');
            }
        } else if (index === 3) {
            if (SC4) {
                $(".audio").html(`<audio class="aud" src="audio/mingle squid.mp3" autoplay loop> `)
                SC1 = true
                SC2 = true
                SC3 = true
                SC4 = false
                active = 4
                off = false
                $(this).addClass('coll');
                $(this).find('p span').text('🔊');
                $('.sdsw').text('OFF');
            } else {
                $(".audio").html(``)
                SC1 = true
                SC2 = true
                SC3 = true
                SC4 = true
                active = 0
                off = true
                $(this).removeClass('coll');
                $(this).find('p span').text('🔈');
                $('.sdsw').text('ON');
            }
        }

    });

    $(".off").click(function () {
        if (off || !off) {
            active = Math.floor(Math.random() * 4) + 1
            if (active === 1) {
                $('.sd1').trigger('click');
            } else if (active === 2) {
                $('.sd2').trigger('click');
            } else if (active === 3) {
                $('.sd3').trigger('click');
            } else if (active === 4) {
                $('.sd4').trigger('click');
            }
        }
    });

    $('.sd3').trigger('click');
});
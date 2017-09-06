$(function () {
    $('.owl-carousel').owlCarousel({
        margin: 0,
        loop: false,
        nav: true,
        items: 1,
        touchDrag: true,
        mouseDrag: false,
        pullDrag: false,
        navText: ["<button class='md-button md-button--fab'><i class=\"material-icons\">chevron_left</i></button>", "<button class='md-button md-button--fab'><i class=\"material-icons\">chevron_right</i></button>"]
    });
    changeColor();
    let owl = $('.owl-carousel');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function (event) {
        setTimeout(function () {
            changeColor();
        }, 1);
        if ($('.owl-next').hasClass('disabled')) {
            $('.md-introduction__nav').css('display', 'none');
        }
    });
    $('#nav-prev').click(function () {
        $('.owl-prev').click();
    });
    $('#nav-next').click(function () {
        $('.owl-next').click();
    });
    $('#ok-button').click(function () {
        $('.md-introduction').css('display', 'none')
    });


    // $('.owl-next').css('display','none');
    // $('.owl-previous').css('display','none');
    // $('.owl-dot').click(false);
    // $('.owl-next').on('click', function () {
    //     if ($('.owl-next').hasClass('disabled')) {
    //         $('.owl-nav').css('justify-content', 'flex-end');
    //         $('.owl-prev').css('display', 'none');
    //         $('.owl-next').html("Get Started").removeClass('disabled').on('click', function () {
    //             $('.md-introduction').css('display', 'none');
    //         });
    //     }
    // });
});

function changeColor() {
    let color = $('.owl-stage').find('.active > .item').css("background-color");
    let metaThemeColor = $("meta[name=theme-color]");
    metaThemeColor.attr("content", color);
}

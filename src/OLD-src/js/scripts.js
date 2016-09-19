$(document).ready(function () {

    var itemGrid = $('.item-grid'),
        movingPanel = $('.moving-panel'),
        point = $('.point'),
        bg = $('.bg');


    $('body::after').css('height', $(document).height() + 'px');
    itemGrid.css('height', $(window).height() - 100 + 'px');


    point.on('click', function () {
        var id = $(this).attr('data-id');
        if ($(this).attr('data-cur') == "0") {
            movingPanel.toggleClass("opened-panel").css('left', '-120%');
            movingPanel.attr('data-curr', '0');
            point.addClass('blur');
            bg.addClass('blur');
            $(this).removeClass('blur');
            if ($(id).css('display') == 'none') {
                $(id).css('display', 'block');
                setTimeout(function () {
                    $(id).css('left', '-90px');
                }, 50);
            } else {
                $(id).css('left', '-90px');
            }
            $(this).attr('data-cur', "1");
        } else {
            movingPanel.toggleClass("opened-panel").css('left', '-120%');
            point.attr('data-cur', "0");
            bg.removeClass('blur');
            point.removeClass('blur');
        }
    });
    $('.close').on('click', function () {
        point.attr('data-cur', '0');
        movingPanel.toggleClass("opened-panel").css('left', '-120%');
        setTimeout(function () {
            movingPanel.css('display', 'none');
        }, 500);
        bg.removeClass('blur');
        point.removeClass('blur');
    });
    $(window).on('resize', function () {
        $('body::after').css('height', $(document).height() + 'px');
    });

    itemGrid.mCustomScrollbar({
        theme: "minimal"
    });
});

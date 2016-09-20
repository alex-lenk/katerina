$(document).ready(function () {

    $('.bg').css('height', $(document).height() + 'px');
    $('.tab-block').css('height', $(window).height() - 100 + 'px');
    $('.table-container').css('height', $(window).height() - 150 + 'px');
    var k, massiveOftables = [];
    var numbOftab;
    var tabId;
//Выезжающие панели
    $('.point').on('click', function () {
        var i = 6;
        var id = $(this).attr('data-id');
        var index = $(this).attr('data-index');
        var h1Width, contHeight;


        $('.moving-panel').css({
            'display': 'none',
            'left': '-120%'
        });
        $('.bg').removeClass('blur');
        while (i--) {
            if (index <= i) {
                $('[data-index="' + i + '"]').addClass('blur');
            } else break;
        }
        $(id).css('display', 'block');
        setTimeout(function () {
            $(id).css('left', '-60px');
            h1Width = $(id).find('h2').css('width');
            $('.hr').css('width', 'calc(100% - ' + h1Width + ')');
            contHeight = $(id).find('.content').height();
            $('.content').css('margin-left', (contHeight / 10) + 'px');

            //записываем высоту таблиц, заносим в массив
            var active = $(id).find('.tab.active').attr('data-id');
            tabId = active;
            $(active).css('display', 'block');
            numbOftab = $(active).find('.drop-nav ul').children().length;
            if (numbOftab) {
                k = numbOftab;
                while (k) {
                    $(tabId).find('[data-n="' + k + '"]').css({
                        'height': 'auto'
                    });
                    $(tabId).find('[data-n="' + k + '"]').css({
                        'height': $(tabId).find('[data-n="' + k + '"]').height() + 'px'
                    });
                    massiveOftables[k] = $(tabId).find('[data-n="' + k + '"]').css('height');

                    k--;
                }
            }
        }, 50);

        $('.drop-nav li').removeClass('active');
        $('.drop-nav li:first-child').addClass('active');
        $('.drop-tab').removeClass('active');
        $('.drop-tab:first-child').addClass('active');
        $('.bg').addClass('blur');
    });

//Закрыть панель
    $('.close').on('click', function () {
        var i = 6;
        $('.point').attr('data-cur', '0');
        $('.moving-panel').css('left', '-120%');
        setTimeout(function () {
            $('.moving-panel').css('display', 'none');
        }, 500);
        $('.bg').removeClass('blur');
        $('.point').removeClass('blur');

        // обнуляем все табы
        $('.tab').removeClass('active');
        $('.tab:first-of-type').addClass('active');
        $('.tab-block').css('display', 'none');
        $('.drop-nav li').removeClass('active');
        $('.drop-nav li:first-of-type').addClass('active');
        k = massiveOftables.length;
        while (k--) {
            $('[data-n="' + k + '"]').css({
                'height': massiveOftables[k]
            });
        }
        while (i--) {
            $('#p' + i + 'c1').css('display', 'block');
        }
    });

//Изменение размера браузерного окна
    $(window).on('resize', function () {
        $('.bg').css('height', $(window).height() + 'px');
        $('.tab-block').css('height', $(window).height() - 100 + 'px');
        $('.table-container').css('height', $(window).height() - 100 + 'px');
    });

//вкладки с контентом
    $('.tab').on('click', function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        tabId = $(this).attr('data-id');
        $('.tab-block').css('display', 'none');
        $(tabId).css('display', 'block');
        //
        //таблицы, обнуление таблиц
        numbOftab = $(tabId).find('.drop-nav ul').children().length;
        if (numbOftab) {
            k = numbOftab;
            while (k) {
                $(tabId).find('[data-n="' + k + '"]').css({
                    'height': 'auto'
                });
                $(tabId).find('[data-n="' + k + '"]').css({
                    'height': $(tabId).find('[data-n="' + k + '"]').height() + 'px'
                });
                massiveOftables[k] = $(tabId).find('[data-n="' + k + '"]').css('height');

                k--;
            }
        }
        $('.drop-nav li').removeClass('active');
        $('.drop-nav li:first-child').addClass('active');
        $('.drop-tab').removeClass('active');
        $('.drop-tab:first-child').addClass('active');
    });


//таблицы 
    $('.drop-nav li').on('click', function () {
        var id = $(this).attr('data-id');
        var i = 1, n = $(id).attr('data-n');
        k = numbOftab;
        while (k) {
            $(tabId).find('[data-n="' + k + '"]').css({
                'height': massiveOftables[k]
            });
            k--;
        }
        while (n > i) {
            $(tabId).find('[data-n="' + i + '"]').css('height', '35px');
            i++;
        }
        $('.drop-nav li').removeClass('active');
        $(this).addClass('active');
        $('.drop-tab').removeClass('active');
        $(id).addClass('active');
    });


//Слайдер
    setInterval(function () {
        slide();
    }, 10000);
    function slide() {
        var current = $('.slider').attr('data-current');
        var last = $('.slider').children().last().attr('data-number');
        $('.slider').append($('.slider').children().first().clone());
        $('.slider').find('[data-number="' + current + '"]').css({
            'opacity': '0'
        });
        $('.slider').children().last().attr('data-number', +last + 1);
        current++
        $('.slider').find('[data-number="' + current + '"]').css({
            'opacity': '1'
        });
        $('.slider').attr('data-current', current);
        setTimeout(function () {
            $('.slider').children().first().remove();
        }, 700);
    }


//CustomScrollbar
    $(".item-grid").mCustomScrollbar({
        theme: 'minimal'
    });
    $(".table-container").mCustomScrollbar({
        theme: 'minimal'
    });
});
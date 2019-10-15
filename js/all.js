$(document).ready(function () {
    AOS.init();
    AOS.init({
        duration: 700,
        easing: 'ease-in-sine'
    });
 
    /*載入動畫設定*/
    setTimeout(pageloading, 3500);
    function pageloading() {
        $('.pageloading').fadeOut(800);
    }
    setTimeout(bodyloading, 5500);
    function bodyloading() {
        $('body').fadeIn();
    }
    // 選單
    $('#nav_logo').click(function () { $('html,body').animate({ scrollTop: 0}, 1000); });
    $('#nav_experience').click(function () { $('html,body').animate({ scrollTop: $('.experience').offset().top }, 1000); });
    $('#nav_ability').click(function () { $('html,body').animate({ scrollTop: $('.ability').offset().top }, 1000); });
    $('#nav_work').click(function () { $('html,body').animate({ scrollTop: $('.work_01').offset().top }, 1000); });
    $('#nav_contact').click(function () { $('html,body').animate({ scrollTop: $('.contact').offset().top }, 1000); });

	/*作品遞增*/
    var time01 = 0;
    var time02 = 0;
    var time03 = 0;
    function count01() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= $('.work_01').offset().top) {
            time01 += 1
            $('.count-01').text(time01);
            if (time01 >= 15) {
                clearInterval(timer1);
            }
        }
    }
    function count02() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= $('.work_01').offset().top) {
            time02 += 1
            $('.count-02').text(time02);
            if (time01 >= 5) {
                clearInterval(timer2);
            }
        }
    }    
    function count03() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= $('.work_01').offset().top) {
            time03 += 1
            $('.count-03').text(time03);
            if (time03 >= 6) {
                clearInterval(timer3);
            }
        }
    }
    var timer1 = setInterval(count01, 80);
    var timer2 = setInterval(count02, 80);
    var timer3 = setInterval(count03, 80);
   
});
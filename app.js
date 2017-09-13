$(document).ready(function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    $(window).on("load", function () {
        $(window).scroll(function () {
            $("#header-aboutme").css("opacity", 1 - $(window).scrollTop() / 300);
            $('#background1').css("opacity", 1 - $(window).scrollTop() / 800);
            //        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            //        $(".fade").each(function () {
            //            /* Check the location of each desired element */
            //            var objectBottom = $(this).offset().top + $(this).outerHeight();
            //
            //            /* If the element is completely within bounds of the window, fade it in */
            //            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            //                if ($(this).css("opacity") == 0) {
            //                    $(this).fadeTo(250, 1);
            //                }
            //            } else { //object goes out of view (scrolling up)
            //                if ($(this).css("opacity") == 1) {
            //                    $(this).fadeTo(250, 0);
            //                }
            //            }
            //        });
        }).scroll(); //invoke scroll-handler on page-load
    });

    $('video').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls")
        } else {
            this.setAttribute("controls", "controls")
        }
    });

    $('video').hover(function () {
        $(this).get(0).play();
    });

    $('video').mouseleave(function () {
        $(this).get(0).pause();
    });

});

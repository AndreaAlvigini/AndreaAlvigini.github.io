$(document).ready(function() {
    //SLIDE IN TEXT 
    function textSlide(id, delay) {
        const subtitle = $("#" + id);
        setTimeout(function () {
            subtitle.css("opacity", "1");
            subtitle.css("transform", "translateY(0)");
        }, delay);
    }
    textSlide("subtitle", 200);
    textSlide("maintitle", 400);

    //HAMBURGER AUTOCLOSE
    function viewportWidthCustom(customWidth) {
        let viewport = $(window).width();
        if (viewport < customWidth) {
            const navbarToggler = $("#navbar-toggler");
            const menuLinks = $(".navbar-nav .nav-link");
            menuLinks.on("click", function() {
                if (!navbarToggler.hasClass("collapsed")) {
                    navbarToggler.trigger("click");
                }
            });
        }
    }
    viewportWidthCustom(576);

    //NAVBAR Trasparent move
    function navBarTransition() {
        const navbar = $(".navbar");

        $(window).scroll(function () {
            let viewport = $(window).width();
            const scrollY = $(window).scrollTop();
            const maxScroll = 150;
            const backgroundColor = `rgba(235, 235, 235, ${Math.min(scrollY / maxScroll, 1)})`;
            navbar.css("background-color", backgroundColor);

            if (scrollY >= maxScroll) {
                navbar.removeClass("transparent").addClass("white");
            } else {
                navbar.addClass("transparent").removeClass("white");
            }
        });
    }
    navBarTransition();

    //PROGRESSBAR
    $(".progress").each(function () {
        let value = $(this).attr("data-value");
        let bar = $(this).find(".progress-bar");
        bar.css("width", value);
        setTimeout(function () {
            bar.css("width", value);
        }, 500);
    });

    //SCROLL TO TOP
    let mybutton = $("#myBtn");
    $(window).scroll(function () {
        if ($(document).scrollTop() > 20) {
            mybutton.css("display", "block");
        } else {
            mybutton.css("display", "none");
        }
    });

    mybutton.click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 500);
    });
});

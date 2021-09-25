$(document).ready(function () {

    var btn_home = $('#btn-nav-home'),
        btn_about_me = $('#btn-nav-about-me'),
        btn_resume = $('#btn-nav-resume'),
        btn_portfolio = $('#btn-nav-portfolio'),
        section_home = $("#home"),
        section_about_me = $("#about-me"),
        section_resume = $("#resume"),
        section_portfolio = $("#portfolio");

    btn_home.click(function () {
        eClickBtn(btn_home)
        setSectionActive(btn_home);
    }
    );
    btn_resume.click(function () {
        eClickBtn(btn_resume);
        setSectionActive(btn_resume);
    });
    btn_about_me.click(function () {
        eClickBtn(btn_about_me);
        setSectionActive(btn_about_me);
    });
    btn_portfolio.click(function () {
        eClickBtn(btn_portfolio);
        setSectionActive(btn_portfolio);
    });

    function eClickBtn(btn) {
        switch (btn) {
            case btn_home:
                btn_home.find("i").addClass("active");
                btn_about_me.find("i").removeClass("active");
                btn_resume.find("i").removeClass("active");
                btn_portfolio.find("i").removeClass("active");
                break;
            case btn_about_me:
                btn_about_me.find("i").addClass("active");
                btn_home.find("i").removeClass("active");
                btn_resume.find("i").removeClass("active");
                btn_portfolio.find("i").removeClass("active");
                break;
            case btn_resume:
                btn_resume.find("i").addClass("active");
                btn_about_me.find("i").removeClass("active");
                btn_portfolio.find("i").removeClass("active");
                btn_home.find("i").removeClass("active");
                break;
            case btn_portfolio:
                btn_portfolio.find("i").addClass("active");
                btn_about_me.find("i").removeClass("active");
                btn_resume.find("i").removeClass("active");
                btn_home.find("i").removeClass("active");
                break;

            default:
                console.log("default")
                break;
        }
    }
    function setSectionActive(btn) {
        switch (btn) {
            case btn_home:
                section_home.addClass('section-active');
                section_about_me.removeClass('section-active')
                section_resume.removeClass('section-active');
                section_portfolio.removeClass('section-active');
                break;
            case btn_about_me:
                section_about_me.addClass('section-active');
                section_home.removeClass('section-active')
                section_resume.removeClass('section-active');
                section_portfolio.removeClass('section-active');
                break;
            case btn_resume:
                section_resume.addClass('section-active');
                section_about_me.removeClass('section-active')
                section_home.removeClass('section-active');
                section_portfolio.removeClass('section-active');
                break;
            case btn_portfolio:
                section_portfolio.addClass('section-active');
                section_about_me.removeClass('section-active')
                section_resume.removeClass('section-active');
                section_home.removeClass('section-active');
                break;

            default:
                break;
        }
    }

});
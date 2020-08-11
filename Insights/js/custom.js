// chatbox related
function openForm() {
    document.getElementById("chatform").style.display = "block";
    document.getElementById("chatInit").style.display = "none";
}

// chatbox related
function closeForm() {
    document.getElementById("chatform").style.display = "none";
    document.getElementById("chatInit").style.display = "block";
}

// Scroll to top
$(document).ready(function () {
    var btn = $('#scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '500');
    });

});

// Menu links related
$(document).ready(function () {

    // Products Menu Script
    $("#navbarDropdown").mouseenter(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        $("#pro-cat").show();
        $("#navbarDropdown").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });

        // Hide for supportandservices
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // hide for resources
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // hide for about us
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

    });

    $("#pro-cat").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });
    });

    // Service and support
    $("#dropdownSupport").mouseenter(function () {
        $("#supportservice").show();
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        // hide for products
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // hide for resources
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // hide for about us
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        $("#dropdownSupport").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });
    });

    $("#supportservice").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });
    });

    // Resources
    $("#dropdownresource").mouseenter(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        $("#resources").show();
        $("#dropdownresource").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });

        // hide for products
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // Hide for supportandservices
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // hide for about us
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

    });

    $("#resources").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });
    });

    // About
    $("#dropdownabout").mouseenter(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '0.4');
        $("#about").show();
        $("#dropdownabout").css({
            'border-top': '4px solid #122a88',
            'background-color': '#e2e7fe'
        });

        // hide for products
        $("#pro-cat").hide();
        $("#navbarDropdown").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // Hide for supportandservices
        $("#supportservice").hide();
        $("#dropdownSupport").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

        // hide for resources
        $("#resources").hide();
        $("#dropdownresource").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });

    });

    $("#about").mouseleave(function () {
        $(".banner,.about,.bgyellow,.service-bod,.sectionpoints,.tryforfree,.footer-bg,.footbg").css('opacity', '1');
        $("#about").hide();
        $("#dropdownabout").css({
            'border-top': '0px solid #122a88',
            'background-color': '#f8f9fa'
        });
    });
});
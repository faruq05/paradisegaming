$(document).ready(function () {

    $(".one").click(function () {
        $(this).addClass("nav_activate").siblings().removeClass("nav_activate");
    });
});
function fancyStart() {
    var animateSpeed = 1000;

    $('.logo').hide();
    $('#Hello').hide();
    $('#Hello').fadeIn(animateSpeed);
    $('.logo').delay(1.1*animateSpeed).fadeIn(animateSpeed);
}

function zoomStart() {
    var animateSpeed = 1000;
    var moveDist = "75px";

    $('.logo').hide();

    $('#Hello').hide();
    $('#Hello').fadeIn(animateSpeed);


    $('#email').css({"position":"relative","left":"-"+moveDist, "top":"-"+moveDist});
    $('#email').delay(animateSpeed)
        .animate({"left":"0px", "top":"0px"}, animateSpeed);

    $('#linkedin').css({"position":"relative","left":moveDist, "top":"-"+moveDist});
    $('#linkedin').delay(animateSpeed)
        .animate({"left":"0px", "top":"0px"}, animateSpeed);

    $('#twitter').css({"position":"relative","left":"-"+moveDist, "top":moveDist});
    $('#twitter').delay(animateSpeed)
        .animate({"left":"0px", "top":"0px"}, animateSpeed);

    $('#github').css({"position":"relative","left":moveDist, "top":moveDist});
    $('#github').delay(animateSpeed)
        .animate({"left":"0px", "top":"0px"}, animateSpeed);



    $('.logo').delay(1.1*animateSpeed).fadeIn(animateSpeed);


}

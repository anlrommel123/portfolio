$(function(){


    //Collapse navbar
    function navbarCollapse() {
        if ($('#mainNav').offset().top > 100) {
            //console.log(1)
            $('#mainNav').addClass('navbar-shrink');
        } else {
            $('#mainNav').removeClass('navbar-shrink');
            //console.log(0)
        }
    }
    
    navbarCollapse()

    $(window).scroll(navbarCollapse)

})
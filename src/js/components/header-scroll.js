let position = $(window).scrollTop(); 

let headerHeight = $(".pages-header").height() + 100;

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if( scroll > headerHeight){
        if(scroll > position) {
            $(".pages-header").removeClass('header-fixed animated fadeInDown');
        } else {
            $(".pages-header").addClass('header-fixed animated fadeInDown');
        }
    }else if(scroll < 5){
        $(".pages-header").removeClass('header-fixed animated fadeInDown');
    }
    position = scroll;
});
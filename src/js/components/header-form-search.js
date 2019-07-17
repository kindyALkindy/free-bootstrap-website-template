$('.toggle-form').on('click',function(){
    $('body').toggleClass('open-form-search');
    let $inputSearch = $("#form-header-search");
    $inputSearch.toggleClass('focus');
    if( $inputSearch.hasClass('focus')){
        $inputSearch.focus();
    }else{
        $inputSearch.blur();
    }
});


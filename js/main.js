$(document).ready(function(){
    $('.burger__menu').click(function(event) {
        $('.burger__menu, .header').toggleClass('active');
        $('body').toggleClass('lock');
    })    
})
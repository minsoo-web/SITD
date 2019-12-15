$(function(){
    menu = $('nav ul');

    $('#toggle-btn').on('click',function(e){
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w= $(this).width();
        if(w>580 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });
    $('nav li').on('click',function(e){
        var w= $(window).width();
        if(w < 580){
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
}); 

// //smooth scrolling

// $('a[href*="#"]')
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function(event){
//         location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')
//         &&
//         location.hostname == this.hostname
//     }{
//         var target=$(this.hash);
//         target = target.length ? target : $('[name=]'+this.hash.slice(1))
//     })
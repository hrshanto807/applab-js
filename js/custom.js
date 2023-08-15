jQuery(document).ready(function () {
    jQuery('.amader-main-slider').owlCarousel({
        items:1,        
        autoplay:true,
        loop:true,
        autoplayTimeout:3000,        
        nav:true,
        center:true,        
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     480:{
        //         items:2
        //     },
        //     768:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     },
        // },
    });

    jQuery('.single-faq:first-child').children('.single-faq-content').slideDown().prev('.single-faq-heading').addClass('active-accordian');

    jQuery('.single-faq-heading').click(function () { 
        jQuery(this).addClass('active-accordian').next().slideToggle().parent('.single-faq').siblings('.single-faq').children('.single-faq-content').hide();


        jQuery(this).parent('.single-faq').siblings('.single-faq').children('.single-faq-heading').removeClass('active-accordian');
    });
    
 });
 
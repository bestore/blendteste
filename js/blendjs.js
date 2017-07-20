$(document).ready(function(){

$('.owl-carousel').owlCarousel({
    lazyLoad: true,
    loop:true,
    margin: 230,
    stagePadding: 0,
    items: 10,    
    nav:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,

 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})



 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'positionFromTop': 120,
      'showImageNumberLabel': false
    })



var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


    

 


});


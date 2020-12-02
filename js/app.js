$(document).ready(function(){
   $('.swiper-wrapper').slick({
      arrows: false,
      // autoplay: true,
      // autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear',

      responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             centerPadding: '40px',
             slidesToShow: 1
           }
         },
         {
           breakpoint: 670,
           settings: {
             arrows: false,
             centerPadding: '40px',
             slidesToShow: 1
           }
         },
         {
            breakpoint: 320,
            settings: {
             arrows: false,
             slidesToShow: 1
           }

         },
       ]
   });
 });
$(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});



$(document).ready(function () {
       
$('.slider-1').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',


  responsive: [
        {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
    
    
});
     
     
     
$('.work-slider').slick({
  slidesToShow: 5,
    rtl:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});

        
$('.slider-2').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',


responsive: [
        {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:585,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
    
});

        
$('.blog-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

responsive: [
        {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
    
    
    
});




    $(".package-info").matchHeight();
        $(".package-info-2").matchHeight();
            $(".service").matchHeight();


    $(".service-item-2").matchHeight();
    
    $(".blog-content").matchHeight();

    $(".blog-content p").matchHeight();

            $(".footer-menu h5").matchHeight();

             $(".footer-menu-ul").matchHeight();

       $('.counter').counterUp({
    delay: 20, // the delay time in ms
    time: 1000 // the speed time in ms
  });
  
    

    
});





  var swiper = new Swiper('.swiper-container-2', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
            rotate: 0,
            stretch: 5,
            depth: 100,
            modifier: 5,
            slideShadows : true,
            },
            pagination: {
            el: '.swiper-pagination',
            },
       
       loop:true,
       
        });






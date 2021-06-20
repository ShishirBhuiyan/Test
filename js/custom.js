


// Owl Carousel Start..................
$(document).ready(function() {
 


/*     $('.ok').click(function(){
        $('.navigation').toggleClass('open');
        $(".toggles .line").toggleClass("active");
    }); 

    $('.normal').click(function(){

        $('.navigation').toggleClass('open');

        if(this.parentElement){
            $(this.parentElement).toggleClass('active');
            if(this.parentElement.parentElement){
                $(this.parentElement.parentElement.firstElementChild.lastElementChild).toggleClass('change');
            }
        }
        if(this.parentElement.offsetParent){
            $(this.parentElement.offsetParent).toggleClass('active');
            if(this.parentElement.offsetParent.previousElementSibling.lastElementChild){
                $(this.parentElement.offsetParent.previousElementSibling.lastElementChild).toggleClass('change') 
            }
        }
    });


    $(".span-arrow").click(function(){
       $(this.lastElementChild).toggleClass('change');
       $(this.nextElementSibling).toggleClass('active');
    }); */
  var ok = $(window).scrollTop();
    $(window).scroll(function(){
        if($(window).scrollTop() >= 500){
            $('.sticky').addClass('start');
        }else{
            $('.sticky').removeClass('start');
        }
    })


    $('.slider').slick({
        //dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1500,
        
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});
// Owl Carousel End..................













// Owl Carousel Start..................
$(document).ready(function() {
 
    $('.ok').click(function(){
        $('.navigation').slideToggle();
        $(".toggles .line").toggleClass("active");
    }); 

    $('.searchquery').click(function(){
        $(".search").toggleClass("show");
    }); 

var width = $(window).width();
if(width < 700){
    $('.normal').click(function(){

        $('.navigation').slideToggle();
        $(".toggles .line").toggleClass("active");

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
    });
}




    $('.content').slick({
        //dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow:'.prev',
        nextArrow:'.next'
        
    });

});
// Owl Carousel End..................










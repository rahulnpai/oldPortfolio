$(window).on("load", function(){

	//$(".loader .inner").fadeOut(1300, function() {
	//$(".loader").fadeOut(750);

    
     $(".items").isotope({

        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }


    });

});

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 3900,
		pagination: false
	});

	var typed = new Typed(".typed",{

		strings: ["Web Developer.","Coder.","Student."],
		typeSpeed: 80,
		loop: true,
		startDelay: 1200,
		showCursor: false

	});

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });




    var skillsTopOffSet = $('.skillsSec').offset().top;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffSet -$(window).height() + 200){

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                $(this.el).find('.percent').text(Math.round(percent));
                }
            });


        }

    });

    var countUpFinished = false;
    var statsTopOffSet = $('.statsSec').offset().top;
    $(window).scroll(function(){
        if(!countUpFinished && window.pageYOffset > statsTopOffSet - $(window).height() +200){


            $('.counter').each(function(){

                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);

            });

            countUpFinished = true;

        }


    });

    $("[data-fancybox]").fancybox();

   


    $("#filters a").click(function(){

        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");

         $(".items").isotope({

            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }


         });

        return false;




    });


    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 60}, "slow");

    });



    const nav = $("#navigation");
    const navTop =nav.offset().top;
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){

        var body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else{
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }


});

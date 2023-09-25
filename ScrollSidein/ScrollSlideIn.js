$(window).scroll(function() {
        var element = $(".class");//InputClassName
        var scrollPosition = $(window).scrollTop() + $(window).height();
        var elementPosition = element.offset().top;
        if (scrollPosition > elementPosition) {
            element.css({
                "opacity": "1", 
                "transform": "translateY(0)" 
            });
        }
         if (scrollPosition < elementPosition) {
            element.css({
                "opacity": "0", 
                "transform": "translateY(100px)" 
            });
        }
    });
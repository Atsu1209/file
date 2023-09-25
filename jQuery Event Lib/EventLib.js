 $(".link").hover(
            function(){
              
                $(".link").css("color","#191970");
            },
            function(){
       
                $(".link").css("color","#00bfff");
            }
        );

$(".under").hover(
            function(){
                $(".under").css("text-decoration","underline");
            },
            function(){
                $(".under").css("text-decoration","none");
            });

$(".scroll").click(function() {
            
            $("html, body").animate({
                scrollTop: $(".scobj").offset().top
            }, 1000); 
           
            return false;
        });
$(".link").hover(
            function(){
              
                $(".link").css("color","#191970");
            },
            function(){
       
                $(".link").css("color","#00bfff");
            }
        );

$("#under").hover(
            function(){
                $("#under").css("text-decoration","underline");
            },
            function(){
                $("#under").css("text-decoration","none");
            });

$("#scroll").click(function() {
            
            $("html, body").animate({
                scrollTop: $("#scobj").offset().top
            }, 1000); 
           
            return false;
        });
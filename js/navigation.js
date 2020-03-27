$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 110) {
                    $(".top-nav").css('background-color', '#043669');
                    $(".top-nav").css('transition-duration', '0.3s');
                    $(".logo img").css('width', '145px');
                    $(".logo img").css('transition-duration', '0.3s');
                } else {
                    $(".top-nav").css('background-color', 'transparent');
                    $(".logo img").css('width', '216px');
                }
            });
    
     });
        

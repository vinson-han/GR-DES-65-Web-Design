
            $( document ).ready( function() {
                $(".figcaption").hover(
                    function() { $( this ).stop().animate( { opacity:1 }, 700, "easeOutQuad" ); },
                    function() { $( this ).stop().animate( { opacity:0 }, 700, "easeOutQuad" ); }
                )
            });

    

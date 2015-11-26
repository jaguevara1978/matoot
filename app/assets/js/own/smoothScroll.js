/**Alex*/
$( function( ) {
    'use strict';
    
    var $window = $( window );       //Window object
    var scrollTime = 0.5;            //Scroll time
    var scrollDistance = 280;        //Distance. Use smaller value for shorter scroll and greater value for longer scroll
        
    $window.on( "mousewheel DOMMouseScroll", function( event ){
        
        event.preventDefault( );    
                                        
        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop( );
        var finalScroll = scrollTop - parseInt( delta * scrollDistance );
            
        TweenMax.to( $window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power0.easeOut,
                autoKill: true,
                overwrite: 5                            
            } );
    } );
} );
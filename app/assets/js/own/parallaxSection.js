/**Alex*/$( function( ) {    'use strict';    //caching window and body, setting the body background attachment to fixed    var $window = $( window );    var $body = $( 'body' ).css( 'background-attachment' , 'fixed' );    //scroll amount - the less it is, the more noticable the effect is     var scrollAmount = -2;    //functuon executed while we're scrolling     $window.scroll(function() {        //moving the background position         $body.css( 'background-position', 'center ' + parseInt( $window.scrollTop( ) / scrollAmount ) + 'px' );     });});
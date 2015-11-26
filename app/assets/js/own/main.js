$( function( ) {
    'use strict';

    var videoSeen = false;

    var Main = {

        init: function( ) {
            //Header Settings
            this.headerSettings( );

            //Feature Section
            this.featureSection( );

            //Sticky
            this.stickyItems( );

            //Header Options
            this.headerOptions( );

            //Main Menu
            this.mainMenu( );

            //Bg Loader
            this.bgLoader( );

            //Animation Bg
            this.animatedBg( );

            //Filters
            this.filters( );

            //Portfolio Fields
            this.portfolioFields( );

            //Section Full Width
            this.fullWidth( );

            //Fixed Sidebar
            this.fixedSidebar( );

            //Progress Bars
            this.progressBars( );

            //Accordion Toggles
            this.accordionToggle( );

            //Tabs
            this.tabs( );

            //Info Box
            this.infoBox( );

            //Team
            this.team( );

            //partners
            this.advancedPartners( );

            //Video Bg
            this.videoBg( );

            //Back to top
            this.backtoTop( );

            //Carousel
            this.carousel( );

            //Isotope
            this.isotope( );

            //Hovers
            this.hovers( );

            //Slider
            //this.slider( );

            //Magnific Popup
            this.popUp( );

            //Map
            this.map( );

            //Animations
            this.animations( );

            //Contact Form
            this.contactForm( );

            //Testimonial
            this.testimonial( );

            //Stamp Gallery
            this.stampGallery( );

            //Fit Vid
            this.fitVid( );
        },

        headerSettings: function( ) {

            var header = $('#matoot-header'),
                headerHeight = parseInt(header.attr('data-height')),
                logo = header.find('.matoot-logo'),
                element = header.find('img');

            header.css('height',headerHeight);
            logo.css('height',headerHeight);
            logo.find('img').css('max-height',headerHeight);

            if(!$('#matoot-feature-section').length && !isMobile.any( )){
                header.css('position','fixed');
            }

            //Show Header
            imagesLoaded(element,function( ){

                header.animate( { 'opacity': 1 }, 500 );
                $( '#matoot-wrapper' ).css( 'visibility', 'visible' );
                $( '.matoot-sub-title span' ).stop( true,true ).transition( { x: 0, delay:600 }, 600, 'cubic-bezier( 0.77, 0, 0.175, 1 )' );

            });

        },

        stickyItems: function( ){
            if( !isMobile.any( ) && $( window ).width( ) > 1023 ){

                $('#matoot-header').sticky({ topSpacing: 0 });

            }
        },

        headerOptions: function( ) {

            $('.matoot-header-search-btn').click(function( ){

                setTimeout(function ( ) {
                    $('#matoot-search-modal').find('#matoot-search').focus( );
                }, 100);

            });

        },

        mainMenu: function( ) {

            var mainMenu = $('.matoot-main-menu'),
                menuItem = mainMenu.find(' > ul > li '),
                subMenu = menuItem.find(' ul '),
                btnMenu = $('<div/>', {'class':'matoot-mainmenu-btn'});
                //Alex - Unused
                //var $this = this;

            menuItem.addClass('matoot-menu-item');
            subMenu.addClass('matoot-submenu');
            subMenu.parent( ).addClass('matoot-have-child');
            btnMenu.prependTo('.matoot-have-child');

            $('.matoot-menu-btn').click(function(event){


                $('#matoot-wrapper').toggleClass('menu-open');

                $('.matoot-main-menu').css('display','block');
                if(Modernizr.csstransitions){
                    $('.matoot-main-menu > ul ').transition({ x: 0 },500,'cubic-bezier(0,0.9,0.3,1)', {queue: false});
                    $('.matoot-close-btn ').transition({ x: 0, delay: 900 },300,'cubic-bezier(0,0.9,0.3,1)');
                }

                event.preventDefault( );

                if(Modernizr.csstransitions){
                    menuItem.each(function(i) {
                        $(this).transition({ x: 0, delay:i*200 },600,'cubic-bezier(0,0.9,0.3,1)', {queue: false});
                    });
                }
            });


            $('.matoot-mainmenu-btn').click(function( ){

                $(this).parent( ).toggleClass('active');
                $(this).parent( ).find(' > .matoot-submenu ').slideToggle(200);

            });
            $('.matoot-close-btn').click(function (event){

                $('#matoot-wrapper').toggleClass('menu-open');

                if(!Modernizr.csstransitions) {
                    subMenu.css('display','none');
                    menuItem.removeClass('active');
                    $('.matoot-main-menu').css('display','none');
                } else {
                    menuItem.transition({ x: 320 },0);
                    $(this).transition({ x: 320 },600,'cubic-bezier(0,0.9,0.3,1)', {queue: false});
                    $('.matoot-main-menu > ul ').transition({ x: 320 },600,'cubic-bezier(0,0.9,0.3,1)',function( ){

                        subMenu.css('display','none');
                        menuItem.removeClass('active');
                        $('.matoot-main-menu').css('display','none');

                    });
                }

                event.preventDefault( );
            });

        },

        featureSection: function( ){

            if ( isMobile.any( ) ) {
                if( window.location !== window.parent.location ) {
                    if($('#matoot-feature-section').hasClass('matoot-fullscreen')) {
                        $('#matoot-feature-section').attr('data-height', '500').removeClass('matoot-fullscreen');
                    }
                }
            }

            if( $( '#matoot-feature-section' ).hasClass( 'matoot-fullscreen' ) ) {
                var windowHeight = $( window ).height( ),
                    windowWidth = $( window ).width( ),
                    headerHeight = $( '#matoot-header' ).attr( 'data-height' );

                var videoHeight = $( '#feature-bg-video' ).outerHeight( );
/*
                console.log( 'videoHeight: '+videoHeight );
                console.log( 'windowHeight: '+windowHeight );
                console.log( 'headerHeight: '+headerHeight );
*/
                
                // If the window height is bigger than the video's height
                // Then I calculate the section height and header position based
                // on the video's height.
                if ( videoHeight != null && windowHeight > videoHeight ) {
                    $('#matoot-feature-section').css( { 'height':videoHeight } );
                    $('#matoot-theme-body').css( { 'top':videoHeight } );
                // The features section must fill the whole window and the menu must be on the bottom.
                } else { 
                    $( '#matoot-feature-section' ).css( { 'height':windowHeight - headerHeight } );
                    $( '#matoot-theme-body' ).css( { 'top':windowHeight - headerHeight } );
                }

                if( isMobile.any( ) ) {
                    $( '#matoot-feature-section' ).css( { 'position':'relative' } );
                    $( '#matoot-theme-body' ).css( { 'top':0 } );
                }


            } else {

                var featureHeight = $('#matoot-feature-section').attr('data-height');

                $('#matoot-feature-section').css({'height':featureHeight});
                $('#matoot-theme-body').css({'top':parseInt(featureHeight)});

                if(isMobile.any( )) {
                    $('#matoot-feature-section').css({'position':'relative'});
                    $('#matoot-theme-body').css({'top':0});
                }

            }

            //Feature Slider
            if( $( '.matoot-feature-element.matoot-slider' ).length && $( '#matoot-feature-section' ).hasClass( 'matoot-fullscreen' ) ) {

                $( '.matoot-feature-element.matoot-slider' ).find( '.slides li' ).css( { 'height': windowHeight - headerHeight, 'width': windowWidth } );

                if( !isMobile.any( ) ) {
                    $( window ).on( "scroll", function( ) {

                        var $scroll = $( window ).scrollTop( );

                        $( '.matoot-feature-element.matoot-slider' ).find( '.matoot-slider-caption' ).css( { 'opacity' : ( 1 - $scroll / 600 ) } );


                    });
                }
            } else {

                $( '.matoot-feature-element.matoot-slider' ).find( '.slides li' ).css( { 'height': parseInt( featureHeight ) } );

            }

            //Feature Map
            if($('.matoot-feature-element.matoot-map').length && $('#matoot-feature-section').hasClass('matoot-fullscreen')) {

                if(isMobile.any( )) {
                    $('#matoot-feature-section, .matoot-feature-element.matoot-map').css({'height':windowHeight/2, 'width':windowWidth});
                    $('#matoot-theme-body').css({'top':windowHeight/2});
                } else {
                    $('.matoot-feature-element.matoot-map').css({'height':windowHeight - headerHeight, 'width':windowWidth});
                }

            } else {

                $('.matoot-feature-element.matoot-map').css({'height':parseInt(featureHeight)});

            }

        },

        slider: function( ) {
            $( '.matoot-slider' ).each( function( ) {
                var $that = $( this );
                $that.flexslider( {
                    animation: 'fade',
                    controlNav: false,
                    smoothHeight: false,
                    animationSpeed: 1500,
                    easing: 'swing',
                    nextText: ' ',
                    prevText: ' ',
                    directionNav: true,
                    pauseOnHover: false,
                    animationLoop: true,
                    useCSS: true,
                    slideshowSpeed: 3500,
                    startAt: 1,
                } );
            } );
        },

        testimonial: function( ){

            $('.matoot-testimonial-carousel').each(function( ){
                var $that = $(this);
                $that.flexslider({
                    animation: "slide",
                    controlNav: true,
                    animationLoop: true,
                    slideshowSpeed: 3000,
                    pauseOnHover: true,
                    directionNav: false,
                    smoothHeight: true
                });
            });

        },

        bgLoader: function( ) {

            $('.matoot-bg-image').each(function ( ) {
                function imageUrl(input) {
                    return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
                }
                var image = new Image( ),
                    $that = $(this);
                image.src = imageUrl($that.css('background-image'));
                image.onload = function ( ) {
                    $that.animate({'opacity':1},300);
                };
            });

        },

        animatedBg: function( ){

            if($('.matoot-animated-bg').length){
                var bgPosition = 0;
                setInterval(function( ){
                    bgPosition++;
                    $('.matoot-animated-bg').css('background-position',bgPosition+'px 0px');
                },75);
            }

        },

        popUp: function( ){

            //IMAGE
            $('.matoot-image-popup').magnificPopup({
                type: 'image',
                fixedContentPos: false,
                fixedBgPos: false,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });

            //GALLERY
            $('.matoot-gallery-popup').magnificPopup({
                delegate: 'a',
                type: 'image',
                fixedContentPos: false,
                fixedBgPos: false,
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.find('.matoot-hover-title').html( );
                    }
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });

            //VIDEOS
            $('.matoot-youtube-popup, .matoot-vimeo-popup').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                fixedContentPos: false,
                fixedBgPos: false,
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false
            });

            //INLINE TYPE
            $('.matoot-header-options-popup').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: false,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'mfp-bg my-mfp-zoom-in',
                focus: '#modal-autofocus' // Alex - The focus will go to any object called with this id
            });
        },

        animations: function( ) {
            if( isMobile.any( ) ) {
                $( '.matoot-animated-item' ).css( 'opacity', 1 );
            } else {
                $( '.matoot-animated-item' ).each( function( ) {
                    var timeDelay = $( this ).attr( 'data-delay' );
                    $( this ).appear( function( ) {
                    var $that = $( this );
                        setTimeout( function ( ) {
                            $that.addClass( 'animated' );
                        }, timeDelay );
                    },{ accX: 0, accY: -300 } );
                });
            }
        },

        carousel: function( ) {

            $('.matoot-carousel').each(function( ){
                var carousel = $(this),
                    carouselItem = carousel.find('.matoot-carousel-item'),
                    element = carousel.find('img'),
                    columns = parseInt($(this).attr('data-columns'));

                this.calculateColumns = function( ){

                    if($(window).width( ) < 801 && $(window).width( ) > 385) {
                        columns = 2;
                    } else
                    if($(window).width( ) < 385) {
                        columns = 1;
                    }
                    else {
                        columns = parseInt($(this).attr('data-columns'));
                    }

                }
                this.calculateColumns( );

                imagesLoaded(element,function( ){

                    var itemWidth = carousel.width( ) / columns;
                    carousel.animate( { 'opacity': 1.0 } );

                    carousel.carouFredSel({
                        auto: {
                            play: true,
                            timeoutDuration: 2000
                        },
                        scroll : {
                            fx: "crossfade",
                            duration: 2000,
                            easing: "swing",
                            pauseOnHover: true
                        },
                        prev: '#prev2',
                        next: '#next2',
                        pagination: "#pager2",
                        
                        circular: true,             // Determines whether the carousel should be circular.
                        infinite: true,             // Determines whether the carousel should be infinite. Note: It is possible to create a non-circular, infinite carousel, but it is not possible to create a circular, non-infinite carousel.
                        responsive: true,           // Determines whether the carousel should be responsive. If true, the items will be resized to fill the carousel.
                        direction: "left",          // The direction to scroll the carousel. Possible values: "right", "left", "up" or "down".
                        //width: null,              // The width of the carousel. Can be null (width will be calculated), a number, "variable" (automatically resize the carousel when scrolling items with variable widths), "auto" (measure the widest item) or a percentage like "100%" (only applies on horizontal carousels)
                        height: 'auto',           // The height of the carousel. Can be null (width will be calculated), a number, "variable" (automatically resize the carousel when scrolling items with variable heights), "auto" (measure the tallest item) or a percentage like "100%" (only applies on vertical carousels)
                        align: "center",            // Whether and how to align the items inside a fixed width/height. Possible values: "center", "left", "right" or false.
                        //padding: [ 10, 10, 30, 10 ],            // Padding around the carousel (top, right, bottom and left). For example: [10, 20, 30, 40] (top, right, bottom, left) or [0, 50] (top/bottom, left/right).
                        //synchronise: null,        // Selector and options for the carousel to synchronise: [string selector, boolean inheritOptions, boolean sameDirection, number deviation] For example: ["#foo2", true, true, 0]
                        cookie: true,               // Determines whether the carousel should start at its last viewed position. The cookie is stored until the browser is closed. Can be a string to set a specific name for the cookie to prevent multiple carousels from using the same cookie.
                        //onCreate: null,           // Function that will be called after the carousel has been created. Receives a map of all data.
                        swipe: {
                            onMouse: true,
                            onTouch: true
                        },
                        items: {
                        //    height : 'auto',
                            width  : itemWidth,
                            visible: columns
                        }
                    },{
                        wrapper: {
                            element: "div",
                            classname: "matoot-carousel-inner"
                        }
                    });

                });

                if(isMobile.any( )){
                    carouselItem.each(function( ){

                        var carouselLink = $(this).find('.matoot-btn');
                        //Alex - Unused
                        //var carouselLinkClone = $('<a/>', {'class':'matoot-carousel-btn'});

                        carouselLink.clone( ).attr('class','matoot-carousel-btn').empty( ).prependTo($(this));

                    });
                }

            });
        },

        isotope: function( ) {

            $('.matoot-isotope-container').each( function( ) {
                var $container = $(this),
                    layout = $(this).attr('data-layout'),
                    isotopeItem = $(this).find('.matoot-isotope-item'),
                    element = $container.find('img'),
                    columns = parseInt($(this).attr('data-columns'));


                this.isotopeColumns = function( ){

                    if($(window).width( ) < 801 && $(window).width( ) > 385) {
                        columns = 2;
                    } else
                    if($(window).width( ) < 385) {
                        columns = 1;
                    }
                    else {
                        columns = parseInt($(this).attr('data-columns'));
                    }

                }
                this.isotopeColumns( );

                isotopeItem.css('width',parseInt(($container.width( ) / columns),10));
                // Alex - Instance Unused
                //imagesLoaded(element,function(instance){
                imagesLoaded( element,function( ) {
                    $container.isotope({
                        itemSelector: isotopeItem,
                        layoutMode: layout,
                        columnWidth: parseInt(($container.width( ) / columns ),10)
                    });
                    $container.animate({'opacity': 1},1300);
                });

                $container.parent( ).find('.matoot-filter li').click(function( ){
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector
                    });
                    $(this).addClass('selected').siblings( ).removeClass('selected');
                });

                $(window).smartresize(function( ){
                    $container.isotope({
                        itemSelector: isotopeItem,
                        layoutMode: layout,
                        columnWidth: parseInt(($container.width( ) / columns ),10)
                    });
                });
            });

        },

        stampGallery: function( ){

            $('.matoot-stamp-masonry').each( function( ) {
                var $container = $(this),
                    item = $container.find('.matoot-stamp-element'),
                    cornerStamp = $container.find('.matoot-corner-stamp'),
                    element = $container.find('img'),
                    columns = parseInt($(this).attr('data-columns'));

                this.galleryColumns = function( ){

                    if($(window).width( ) < 801 && $(window).width( ) > 385) {
                        columns = 2;
                    } else
                    if($(window).width( ) < 385) {
                        columns = 1;
                    }
                    else {
                        columns = parseInt($(this).attr('data-columns'));
                    }

                }
                this.galleryColumns( );

                item.css('width', parseInt($container.width( ) / columns));
                if($('html').hasClass('matoot-mobile') ) {
                    cornerStamp.css('width', item.width( ) +2);
                } else {
                    cornerStamp.css('width', item.width( )*2 +4);
                }

                // Alex - Instance Unused
                //imagesLoaded(element,function(instance){
                imagesLoaded( element,function( ) {
                    $container.isotope({
                        itemSelector: item,
                        masonry: {
                            columnWidth: parseInt($container.width( ) / columns),
                            cornerStampSelector: cornerStamp
                        }
                    });
                    $container.animate({'opacity': 1},600);
                });

                $(window).smartresize(function( ){
                    $container.isotope({
                        itemSelector: item,
                        masonry: {
                            columnWidth: parseInt($container.width( ) / columns),
                            cornerStampSelector: cornerStamp
                        }
                    });
                });
            });

        },

        filters: function( ){

            var item = $('.matoot-blog-label .matoot-filter li');
            if(item.parent( ).parent( ).parent( ).hasClass('matoot-related-post')) return;
            item.each( function( ) {
                var itemWidth = $(this).outerWidth( );

                if($('html.matoot-mobile').length){
                    $(this).css({'width':itemWidth + 10});
                    return;
                }
                if($(this).hasClass('selected')) {
                    $(this).css({'width':itemWidth + 10});
                } else {
                    $(this).css({'width':30});
                }


                $(this).hover(function( ){
                    $(this).css({'width':itemWidth  + 10});
                },function( ){
                    if($(this).hasClass('selected')) return;
                    $(this).css({'width':30});

                });

                $(this).click(function( ){
                    $(this).css({'width':itemWidth  + 10}).siblings( ).css({'width':30});
                });

            });

        },

        portfolioFields: function( ){

            $('.matoot-fields li .matoot-fields-title').click(function ( ) {
                $(this)
                    .toggleClass('active').next( ).slideToggle(350)
                    .parent( ).siblings( ).find('.matoot-fields-title').removeClass('active')
                    .next( ).slideUp(350);
            });

        },

        hovers: function( ){

            $(' .matoot-hover-item ').each( function( ) {

                $(this).hoverdir( );

            });

        },

        fullWidth: function( ) {

            var $outerSpace = Math.ceil( (($(window).width( ) - parseInt($('.matoot-main-content').width( ))) / 2) );

            $('.matoot-main-content .matoot-section, .matoot-partner-advanced li').each(function( ){

                if($('.matoot-sidebar').length && $(window).width( ) > 959){
                    if($('.matoot-right-sidebar').length){
                        $(this).css({
                            'margin-left': - $outerSpace ,
                            'margin-right': - ($outerSpace + $('.matoot-sidebar').outerWidth( ) + 30),
                            'padding-left':  $outerSpace,
                            'padding-right':  ($outerSpace + $('.matoot-sidebar').outerWidth( ) + 30)
                        });
                    } else {
                        $(this).css({
                            'margin-left': - ($outerSpace + $('.matoot-sidebar').outerWidth( ) + 30) ,
                            'margin-right': - $outerSpace,
                            'padding-left':  ($outerSpace + $('.matoot-sidebar').outerWidth( ) + 30),
                            'padding-right':  $outerSpace
                        });
                    }
                } else {
                $(this).css({
                    'margin-left': - $outerSpace ,
                    'margin-right': - $outerSpace,
                    'padding-left':  $outerSpace,
                    'padding-right':  $outerSpace
                });
                }
            });

            $('.matoot-fullwidth-element').each(function( ){

                if($('.matoot-sidebar').length && $(window).width( ) > 959){
                    if($('.matoot-right-sidebar').length){
                        $(this).css({
                            'margin-left': - $outerSpace ,
                            'margin-right': - ($outerSpace + $('.matoot-sidebar').outerWidth( ) + 30)
                        });
                    } else {
                        $(this).css({
                            'margin-left': - ($outerSpace + $('.matoot-sidebar').outerWidth( ) + 30) ,
                            'margin-right': - $outerSpace
                        });
                    }
                } else {
                $(this).css({
                    'margin-left': - $outerSpace ,
                    'margin-right': - $outerSpace
                });
                }

            });

        },

        fixedSidebar: function( ){

            var sidebar = $('.matoot-sidebar.matoot-fixed-sidebar'),
                content = $('.matoot-main-content'),
                contentWidth = content.outerWidth( ),
                top = 150,
                margin = 0;


            if(!$('.matoot-left-sidebar').length) {
                margin = contentWidth +30;
            }

            $(window).on('scroll', function( ) {

                if(!sidebar.length || sidebar.height( ) >= content.height( ) ) return;
                var contentTop = content.offset( ).top,
                    contentHeight = content.height( ),
                    sidebarHeight = sidebar.height( ),
                    contentBottom = contentTop + contentHeight;

                    if( $(window).scrollTop( ) > contentTop - top && $(window).scrollTop( ) < contentBottom - ( top + sidebarHeight )){
                        sidebar.css({'position':'fixed', 'margin-left':margin, 'top':top, 'bottom':'auto'});
                    }
                    else if( $(window).scrollTop( ) > contentTop ){
                        sidebar.css({'position':'absolute', 'margin-left':margin, 'top':'auto', 'bottom':0});
                    }
                    else if( $(window).scrollTop( ) < contentTop ){
                        sidebar.css({'position':'static', 'margin-left':0, 'top':'auto', 'bottom':0});
                    }
            });

        },

        progressBars: function( ){

            $('.matoot-progress-bar').each(function( ) {
                var val = $(this).attr('data-value'),
                    percentage = $('<div class="matoot-percentage">'+ val + '%'+'</div>');
                $(this).find('.matoot-bar-line').delay(1000).animate({width: val + '%'}, 1200, 'easeOutBack');
                percentage.appendTo($(this).find('.matoot-bar'));
                $(this).find('.matoot-percentage').delay(1200).animate({left: val + '%'}, 1200, 'easeOutBack');
            });

        },

        accordionToggle: function( ){

            $('.matoot-toggle-wrapper li.active').find('.matoot-title').addClass('active');
            $('.matoot-toggle-wrapper li .matoot-title').click(function ( ) {
                $(this)
                    .toggleClass('active')
                    .next( ).slideToggle(350);
            });

            $('.matoot-accordion-wrapper li.active').find('.matoot-title').addClass('active');
            $('.matoot-accordion-wrapper li .matoot-title').click(function ( ) {
                $(this)
                    .toggleClass('active').next( ).slideToggle(350)
                    .parent( ).siblings( ).find('.matoot-title').removeClass('active')
                    .next( ).slideUp(350);
            });

        },

        tabs: function( ){

            this.titleSize = function( ){
                $('.matoot-horizontal-tab').each(function( ){
                    var numberTitles = $(this).find('.matoot-tabs-title li').size( ),
                        tabTitles = $(this).find('.matoot-tabs-title');

                    if($(window).width( ) < 641 ){
                        $(this).find('.matoot-tabs-title li').css('width', '');
                    } else {
                        $(this).find('.matoot-tabs-title li').css('width', tabTitles.width( ) / numberTitles).parent( ).animate({'opacity':1},900);
                    }
                });
            }
            this.titleSize( );
            $(window).resize(this.titleSize);

            $('.matoot-tabs-title li').click(function ( ) {
                $(this).addClass('active').siblings( ).removeClass('active');
                $(this).parent( ).parent( ).find('.matoot-tabs-wrapper').find('.matoot-tab-content').eq($(this).index( )).addClass('active').siblings( ).removeClass('active');
            });

        },

        infoBox: function( ){

            var infoMessage = $('.matoot-message'),
            closeBtn = infoMessage.find($('.matoot-close'));
            closeBtn.click(function ( ) {
                $(this).parent( ).slideUp(150);
            });

        },

        team: function( ){

            $('.matoot-team-item').each(function ( ) {
                var $that = $(this),
                    teamMedia = $that.find('.matoot-team-media'),
                    teamPerson = $that.find('.matoot-team-person'),
                    teamSocial = $that.find('.matoot-team-social');

                function matoot_team_size( ) {
                    teamMedia.css('height',teamMedia.width( ));
                }
                matoot_team_size( );
                $(window).resize(matoot_team_size);

                $that.hover(function( ){
                    teamPerson.stop( ).animate({'top': - teamSocial.height( )},{queue:false,duration:200, easing:'easeOutQuart'});
                    console.log(teamSocial.height( ));
                }, function( ) {
                    teamPerson.stop( ).animate({'top': 0},{queue:false,duration:400, easing:'easeInOutQuad'});
                });
            });

        },

        advancedPartners: function( ){

            $('.matoot-partner-advanced').each(function ( ) {

                var partners = $(this).find('li'),
                    partnersNumber = partners.size( ),
                    cnt = -1;

                partners.each(function ( ) {

                    cnt++;
                    $(this).find('.matoot-partner-color').css('opacity',cnt * (1 / partnersNumber));

                });

                partners.click(function( ){

                    $(this).find('.matoot-partner-content').slideToggle(600, 'easeOutBack');
                });

            });

        },

        map: function( ){

            $('.matoot-map').each( function( ) {
                var map = $(this),
                    address = map.attr('data-address'),
                    maptype = map.attr('data-maptype');

                map.css({'opacity':0});

                map.gMap({
                    maptype: maptype,
                    scrollwheel: false,
                    draggable: false,
                    zoom: 14,
                    controls: {
                        zoomControl: true,
                        zoomControlOptions: {
                            style:google.maps.ZoomControlStyle.SMALL,
                            position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        mapTypeControl:false
                    },
                    markers: [
                        {
                            address: address,
                            popup: false,
                        }
                    ],
                    icon:
                        {
                            image:              "images/markers/markers.png",
                            shadow:             false,
                            iconsize:           [90, 54],
                            shadowsize:         false,
                            iconanchor:         [45, 60],
                            infowindowanchor:   [20, 60]
                        }
                });
                map.delay(600).animate({'opacity':1});

            });

        },

        videoBg: function( ){
        
            if(!isMobile.any( )){
                $('.matoot-video-bg-element').css('display','block');
                $('.matoot-video-bg-element').each(function( ){
                    var video = $(this),
                        videoHeight = video.height( ),
                        videoSectionHeight = video.parent( ).outerHeight( );

                    //set video top position
                    if( videoSectionHeight >= videoHeight ){
                        video.css('top', -(videoSectionHeight - videoHeight) /2 );
                    } else {
                        video.css('top', -videoSectionHeight /2 );
                    }

                });
            } else{
                $('.matoot-video-bg-element').css('display','none');
            }

        },

        fitVid: function( ){

            // $(".matoot-video, .matoot-media").fitVids( );

        },

        backtoTop: function( ){

            var btnUp = $('<div/>', {'class':'matoot-top-btn'});
                btnUp.appendTo('#matoot-wrapper');

            $( '.matoot-top-btn' ).click( function( ) {
                $( 'html, body' ).animate( { scrollTop: 0 }, 1200, 'easeInOutQuad' );
            } );

            $( window ).on( 'scroll', function( ) {
                if ( $( this ).scrollTop( ) > 300 ) {
                    $( '.matoot-top-btn' ).addClass( 'active' );
                    $( '#bounce-arrow' ).fadeOut( 1000 );
                } else {
                    $( '.matoot-top-btn' ).removeClass( 'active' );
                    $( '#bounce-arrow' ).fadeIn( 1000 );
                }
            } );

        },

        contactForm: function( ){

            $.fn.resetForm = function ( ) {
              $(this).each (function( ) { this.reset( ); });
            }

            $('.matoot-form-button').click(function( ){

                var currentForm = $(this).closest('form.matoot-form');

                var nameElem = currentForm.find("[name='name']").first( );
                var emailElem = currentForm.find("[name='email']").first( );
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

                currentForm.find(".matoot-form-result").removeClass('active').html("");

                if ( '' === nameElem.val( ) ){
                    currentForm.find(".matoot-form-result").addClass('active').html("Name must not be empty!");
                    nameElem.focus( );
                } else if ( !emailReg.test( emailElem.val( ) ) || '' === emailElem.val( ) ) {
                    currentForm.find(".matoot-form-result").addClass('active').html("Invalid Email, please provide a correct email!");
                    emailElem.focus( );
                } else {

                    $.post( 'assets/send-form.php', currentForm.serialize( ),  function(response) {
                        console.log(response);
                        if ( 'sent' == response ) {
                            currentForm.find(".matoot-form-result").addClass('active').html("Your email was sent!");
                            currentForm.resetForm( );
                        } else {
                            currentForm.find(".matoot-form-result").addClass('active').html("Your email failed, try again later!");
                        }
                    });
                }
                return false;

            });

        }

    };

    var isMobile = {
        Android: function( ) {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function( ) {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function( ) {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function( ) {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function( ) {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function( ) {
            return (isMobile.Android( ) || isMobile.BlackBerry( ) || isMobile.iOS( ) || isMobile.Opera( ) || isMobile.Windows( ));
        }
    };

    Main.init( );

    //Window Resize
    $(window).afterResize(function( ) {

        //Header Settings
        Main.headerSettings( );

        //Feature Section
        Main.featureSection( );

        //Section Full Width
        Main.fullWidth( );

        //Carousel
        Main.carousel( );

        //Isotope
        Main.isotope( );

        //Stamp Gallery
        Main.stampGallery( );

        //Fixed Sidebar
        Main.fixedSidebar( );

        //Slider
        Main.slider( );

        //Map
        Main.map( );

    });

    $( document ).ready( function( ) {
        //Parallax Slider
        if ( !isMobile.any( ) ) {
            $( '.scene' ).parallax( );
        }

        // onClick for Start Slider button, in case you want to see
        // The other scenes and do not want to wait to see the video
        $( '#start-slider-btn' ).click( function( ) {
            Main.slider( );
        } );

        // onClick for the play presentation video button on the Scene
        $( '#play-video-btn' ).click( function( ) {
            videoSeen = true;

            // Sets the video iframe the same window size
            $( '.matoot-popup-video' ).width( $( window ).width( ) );
            $( '.matoot-popup-video' ).height( $( window ).height( ) );

            // Play video immediatly
            //$( '#presentation-video' ).get( 0 ).play( ); 
        } );

        $( window ).resize( function( ) {
            $( '.matoot-popup-video' ).width( $( window ).width( ) );
            $( '.matoot-popup-video' ).height( $( window ).height( ) );
        } );


        // onClick over any video should play or pause
        $( 'video' ).click( function( event ) {
            var offset = $( this ).offset( );
            var height = $( this ).height( );
            var y = ( event.pageY - offset.top - height ) * -1;
            if ( y > 35 ) {
                /*jshint -W030 */
                this.paused ? this.play( ) : this.pause( );
            }        
    
            return false;
        } );

        // I should wait 10 seconds before sliding the scenes
        setTimeout( function ( ) {
            Main.slider( );
        }, 10000 );
    } );
} );
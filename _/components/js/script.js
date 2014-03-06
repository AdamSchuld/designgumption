<!-- This is the file that will get minified -->
    // Navigation
    (function() {

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function init() {

        var menu = document.getElementById( 'bt-menu' ),
            trigger = menu.querySelector( 'a.bt-menu-trigger' ),
            // event type (if mobile, use touch events)
            eventtype = mobilecheck() ? 'touchstart' : 'click',
            resetMenu = function() {
                classie.remove( menu, 'bt-menu-open' );
                classie.add( menu, 'bt-menu-close' );
            },
            closeClickFn = function( ev ) {
                resetMenu();
                overlay.removeEventListener( eventtype, closeClickFn );
            };

        var overlay = document.createElement('div');
        overlay.className = 'bt-overlay';
        menu.appendChild( overlay );

        trigger.addEventListener( eventtype, function( ev ) {
            ev.stopPropagation();
            ev.preventDefault();

            if( classie.has( menu, 'bt-menu-open' ) ) {
                resetMenu();
            }
            else {
                classie.remove( menu, 'bt-menu-close' );
                classie.add( menu, 'bt-menu-open' );
                overlay.addEventListener( eventtype, closeClickFn );
            }
        });

    }

    init();

})();



    // jQuery
    $(document).ready(function() {
        // Slide panel navigation
        $('.menu-link').bigSlide();

        // Image fill teaser banner
        //$('.diagonal-banner').imagefill();

        // Circle Image fill
        $('.logo-container').imagefill();

        // Text Rotator on User Experience
        $('.rotate').textrotator();

        // Owl Carousel
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            slideSpeed : 600,
            itemsCustom : [
                [0, 1],
                [595, 2],
                [1295, 3]
            ],
            pagination : false
        });

        // Owl Custom Pagination Handlers
        $('.right-btn').click(function(){
            owl.trigger('owl.next');
        });

        $('.left-btn').click(function(){
            owl.trigger('owl.prev');
        });

        // lightbox
        var activityIndicatorOn = function()
            {
                $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
            },
            activityIndicatorOff = function()
            {
                $( '#imagelightbox-loading' ).remove();
            },

            overlayOn = function()
            {
                $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
            },
            overlayOff = function()
            {
                $( '#imagelightbox-overlay' ).remove();
            },

            closeButtonOn = function( instance )
            {
                $( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
            },
            closeButtonOff = function()
            {
                $( '#imagelightbox-close' ).remove();
            },

            captionOn = function()
            {
                var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
                if( description.length > 0 )
                    $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
            },
            captionOff = function()
            {
                $( '#imagelightbox-caption' ).remove();
            },

            navigationOn = function( instance, selector )
            {
                var images = $( selector );
                if( images.length )
                {
                    var nav = $( '<div id="imagelightbox-nav"></div>' );
                    for( var i = 0; i < images.length; i++ )
                        nav.append( '<a href="#"></a>' );

                    nav.appendTo( 'body' );
                    nav.on( 'click touchend', function(){ return false; });

                    var navItems = nav.find( 'a' );
                    navItems.on( 'click touchend', function()
                    {
                        var $this = $( this );
                        if( images.eq( $this.index() ).attr( 'href' ) != $( '#imagelightbox' ).attr( 'src' ) )
                            instance.switchImageLightbox( $this.index() );

                        navItems.removeClass( 'active' );
                        navItems.eq( $this.index() ).addClass( 'active' );

                        return false;
                    })
                    .on( 'touchend', function(){ return false; });
                }
            },
            navigationUpdate = function( selector )
            {
                var items = $( '#imagelightbox-nav a' );
                items.removeClass( 'active' );
                items.eq( $( selector ).filter( '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
            },
            navigationOff = function()
            {
                $( '#imagelightbox-nav' ).remove();
            };

       var selectorA = 'a[data-imagelightbox="sporrior"]';
       var instanceA = $( selectorA ).imageLightbox(
        {
            onStart:        function() { navigationOn( instanceA, selectorA ); overlayOn(); closeButtonOn( instanceA ); },
            onEnd:          function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); navigationOff(); },
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { navigationUpdate( selectorA ); captionOff(); activityIndicatorOff(); }
        });

       var selectorB = 'a[data-imagelightbox="adidas"]';
       var instanceB = $( selectorB ).imageLightbox(
        {
            onStart:        function() { navigationOn( instanceB, selectorB ); overlayOn(); closeButtonOn( instanceB ); },
            onEnd:          function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); navigationOff(); },
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { navigationUpdate( selectorB ); captionOff(); activityIndicatorOff(); }
        });

       var selectorC = 'a[data-imagelightbox="tru"]';
       var instanceC = $( selectorC ).imageLightbox(
        {
            onStart:        function() { navigationOn( instanceC, selectorC ); overlayOn(); closeButtonOn( instanceC ); },
            onEnd:          function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); navigationOff(); },
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { navigationUpdate( selectorC ); captionOff(); activityIndicatorOff(); }
        });

       var selectorD = 'a[data-imagelightbox="integra"]';
       var instanceD = $( selectorD ).imageLightbox(
        {
            onStart:        function() { navigationOn( instanceD, selectorD ); overlayOn(); closeButtonOn( instanceD ); },
            onEnd:          function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); navigationOff(); },
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { navigationUpdate( selectorD ); captionOff(); activityIndicatorOff(); }
        });

       var selectorE = 'a[data-imagelightbox="movie"]';
       var instanceE = $( selectorE ).imageLightbox(
        {
            onStart:        function() { navigationOn( instanceE, selectorE ); overlayOn(); closeButtonOn( instanceE ); },
            onEnd:          function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); navigationOff(); },
            onLoadStart:    function() { activityIndicatorOn(); },
            onLoadEnd:      function() { navigationUpdate( selectorE ); captionOff(); activityIndicatorOff(); }
        });



    });


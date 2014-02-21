<!-- This is the file that will get minified -->
    $(document).ready(function() {
        // Slide panel navigation
        $('.menu-link').bigSlide();

        // Image fill responsive image handling
        $('.inverted-triangle').imagefill();

        // Image fill teaser banner
        //$('.diagonal-banner').imagefill();

        // Circle Image fill
        $('.logo-container').imagefill();

        // Text Rotator on User Experience
        $('.rotate').textrotator();

        // Owl Carousel
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            autoPlay : true,
            stopOnHover : true,
            paginationSpeed : 800,
            itemsCustom : [
                [0, 1],
                [465, 2],
                [1080, 3]
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
    });


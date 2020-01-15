jQuery(document).ready(function($) {

    var colorful_logos = ["ort_color.png", "ortov_color.png", "mehayom_color.png", "sukeret_color.png", "otzma_color.png"];
    var white_logos = ["ort_white.png", "ortov_white.png", "mehayom_white.png", "sukeret_white.png", "otzma_white.png"];
    var url = everest_child.url;

    $("#menu-main li:nth-child(4)").attr('tabindex','0');

    $(".sub-menu li:nth-child(4)").removeAttr( "tabindex" );

    // Change logos to color version when accessible light background mode is on
    //first click
    $(".pojo-a11y-btn-light-background").click(function () {
        set_color_logos();
    });
    //for new page
    setTimeout(function () {
        if($('body').hasClass('pojo-a11y-light-background')){
            set_color_logos();
        }
    }, 5);


    //Change logos to white version when exiting light background mode
    $(".pojo-a11y-btn-grayscale").click(function () {
        set_white_logos();
    });
    $(".pojo-a11y-btn-high-contrast").click(function () {
        set_white_logos();
    });
    $(".pojo-a11y-btn-negative-contrast").click(function () {
        set_white_logos();
    });
    $(".pojo-a11y-btn-reset").click(function () {
        set_white_logos();
    });


    /* Fix: When zooming to 200% part of the accessibility nav is not visivle*/
    document.addEventListener('keydown', function(event) {
        if(event.keyCode === 17){
            if(window.devicePixelRatio > 1 && window.devicePixelRatio < 1.75) {
                $( '#pojo-a11y-toolbar' ).each(function () {
                    this.style.setProperty('top', '150px', 'important');
                })

            }
            else if(window.devicePixelRatio >= 1.75) {
                $( '#pojo-a11y-toolbar' ).each(function () {
                    this.style.setProperty('z-index', '99999');
                    this.style.setProperty('top', '50px', 'important');
                })
            }
        }
    });

    /**
     * Set colored logos
     */
    function set_color_logos() {
        var gallery_icons = $("footer").find(".gallery-icon");
        for(var i=0 ; i<gallery_icons.length ; i++){
            if(gallery_icons[i] && colorful_logos[i]){
                $(gallery_icons[i]).find('img').attr("src",url+"/assets/images/" + colorful_logos[i]);
            }
        }
        //gallery_icons.css('width', '100%');
    }

    /**
     * Set white logos
     */
    function set_white_logos() {
        var gallery_icons = $("footer").find(".gallery-icon");
        for(var i=0 ; i<gallery_icons.length ; i++){
            if(gallery_icons[i] && white_logos[i]){
                $(gallery_icons[i]).find('img').attr("src",url+"/assets/images/" + white_logos[i]);
            }
        }
        //gallery_icons.css('width', '100%');
    }
});


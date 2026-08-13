  WebFont.load({ google: {families: ['Roboto+Condensed:400italic,700italic,400,700:latin,cyrillic-ext,latin-ext']}}); 
  var myfonts;
  myfonts = SiteParameters.theme_fonts.split(",");
  var i;
  for (i = 0; i < myfonts.length; i++) {
  WebFont.load({ google: {families: [myfonts[i]+':400,300,500,600,700,800,900']}}); 
  }

(function($) {
    "use strict";

// $ Sticky Header
// ======================

$(document).ready(function(){
    $("#medicom_header").sticky({topSpacing:0});
});
$(document).ready(function(){
        var head = $( '#medicom_header2' );
    $( '.medicom-waypoint' ).each( function(i) {
        var el = $( this ),
            animClassDown = "hide",
            animClassUp = "";
     
        el.waypoint( function( direction ) {
            if( direction === 'down' ) {
                head.attr('class', 'medicom-header2 medicom-header-large header-6 ' + animClassDown);
            }
            else if( direction === 'up' ){
                head.attr('class', 'medicom-header2 medicom-header-large header-6 ' + animClassUp);
            }
        }, { offset: '-10px' } );
    } );
});
// Dropdown
//----------

$(document).ready(function(){
    $( '.menu-item-has-children' ).each( function() {
        $(this).addClass('dropdown');
    });
    
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('>.dropdown-menu').stop(true, true).delay(50).fadeIn(400);
    }, function() {
      $(this).find('>.dropdown-menu').stop(true, true).delay(300).fadeOut(400);
    });  

});

// Mega Menu
//----------
$(document).ready(function(){
$( ".multi .dropdown-menu .dropdown-menu" ).removeClass( "dropdown-menu" );
});
// Tab Active
// ======================
$(window).load(function() { 
    if( $('body').find('.tab-content').length>0 ) {       
            $('.tab-content div:first-child').addClass('active in');
    }
});
// Comment Class
// ======================
$(document).ready(function($) {
    $('#commentrespond  input#submit').addClass('buton b_inherit buton-2 buton-mini');
});

// Pretty Photo
// ====================== 
$(document).ready(function(){
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: "light_square"
    });
  });
// TOGGLE
// ======================
$(document).ready(function() {
    $('.toggle').each(function() {
        var tis = $(this);
        tis.click(function() {
            tis.next('div').slideToggle( 400, "easeInCirc", function() {
            tis.toggleClass('title-active'); 
            });
        });
    });
});

// Our Client's SAY
// ======================
$(window).load(function() {
  $('.happyclientslider').flexslider({
    directionNav: false,
    animation: "fade",
    animationLoop: true,
    itemWidth: 684,
    itemMargin: 0,
    minItems: 1,
    maxItems: 1
  });
});
var w = $(window).width();
$(document).ready(function() {
 $(window).resize(function(){ var nw = $(window).width(); if ( w != nw ) {
  setTimeout(function(){ 
    var w = $(window).width();
    var fredItemHeight = 0; 
    var fredHeight = 0;
    var fredVis = 3;
    if ( w > 1199 ) {
        fredItemHeight = 139;
        fredHeight = 427;   
    }
    if ( w < 1200 && w > 979 ) {
        fredItemHeight = 144;
        fredHeight = 600;
    }
    if ( w < 980 && w > 767 ) {
        fredItemHeight = "auto";
        fredHeight = "variable";
        fredVis = 2;
    }
    if ( w < 768 && w > 480 ) {
        fredItemHeight = 144;
        fredHeight = 532;
    }

    if ( w < 481 ) {
        fredItemHeight = 144;
        fredHeight = "variable";
        fredVis = 1;
    }
    if( $('body').find('.latest-post-slider').length>0 ) {  
    $(".latest-post-slider").carouFredSel({
            width: "100%",
            height: fredHeight,
            responsive: false,
            circular: false,
            infinite: false,
            scroll: 1,
            direction: "up",
            auto: false,
            items: {
                
                height: fredItemHeight,
                visible: {
                    min: fredVis,
                    max: fredVis
                }
            },
            prev    : { 
                button  : ".blog-widget .prev",
                key     : "left"
            },
            next    : { 
                button  : ".blog-widget .next",
                key     : "right"
            }
            
    });
    }
  }, 100);   
   } });
});
$(window).load(function() {
    var w = $(window).width();
    var fredItemHeight = 0; 
    var fredHeight = 0;
    var fredVis = 3;
    if ( w > 1199 ) {
        fredItemHeight = 139;
        fredHeight = 427;   
    }
    if ( w < 1200 && w > 979 ) {
        fredItemHeight = 144;
        fredHeight = 600;
    }
    if ( w < 980 && w > 767 ) {
        fredItemHeight = "auto";
        fredHeight = "variable";
        fredVis = 2;
    }
    if ( w < 768 && w > 480 ) {
        fredItemHeight = 144;
        fredHeight = 532;
    }

    if ( w < 481 ) {
        fredItemHeight = 144;
        fredHeight = "variable";
        fredVis = 1;
    }
    if( $('body').find('.latest-post-slider').length>0 ) {                            
    $(".latest-post-slider").carouFredSel({
            width: "100%",
            height: fredHeight,
            responsive: false,
            circular: false,
            infinite: false,
            scroll: 1,
            direction: "up",
            auto: false,
            items: {
                
                height: fredItemHeight,
                visible: {
                    min: fredVis,
                    max: fredVis
                }
            },
            prev    : { 
                button  : ".blog-widget .prev",
                key     : "left"
            },
            next    : { 
                button  : ".blog-widget .next",
                key     : "right"
            }
            
    });
    }
    });
// Post Slider
// ======================
$(window).load(function() {
  $('.post-slider').flexslider({
    controlNav: false,             
    directionNav: true,  
    animation: "fade",
    animationLoop: false,
    itemWidth: 805,
    itemMargin: 0,
    minItems: 1,
    maxItems: 1,
    prevText: "",
    nextText: ""
  });
});
// Parallax Plugin
// ======================
$(document).ready(function(){
if ( $( window ).width() > 1024 ) { 
  $.stellar({
    horizontalScrolling: false,
    scrollProperty: 'scroll',
    positionProperty: 'position',
  });
}
});

// BLOG
// Style Two Column with Sidebar
// ======================
var container = $('.blog-style-two-column').imagesLoaded( function() {
  container.masonry({
  itemSelector: '.post-item',
  columnWidth: 10,
  gutter: 25
  });
  container.masonry();
});


// ANIMATION
// ======================
$(document).ready(function() {
   var myclasses;
   var myclass;
   var ekclass;
$('.blind').waypoint(function() {
   myclasses = this.className;
   myclass = myclasses.split(" ");
   ekclass = myclass[0].split("-");
    if ( ekclass[0] !== "no_animation" && myclass[1] === "blind") {
                $(this).addClass('v '+ekclass[0]);
                                                   }
}, { offset: '70%' });
});

// ANIMATION SIDEBAR
// ======================
$(document).ready(function() {
   var myclasses;
   var myclass;
   var ekclass;
$('.blindy').waypoint(function() {
   myclasses = this.className;
   myclass = myclasses.split(" ");
   ekclass = myclass[0].split("-");
    if ( ekclass[0] !== "no_animation" && myclass[1] === "blindy") {
                $(this).addClass('v '+ekclass[0]);
                                                   }
}, { offset: '160%' });
});

})(jQuery);
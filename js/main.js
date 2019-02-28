/*!
 * Start Bootstrap - Grayscale v5.0.5 (https://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
 */

!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-70},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:100});var a=function(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};a(),e(window).scroll(a)}(jQuery);



// owl slder 
$(document).ready(function() {
    $('.productitems').owlCarousel({
    loop: false,
    dot:false,
    responsiveClass: true,
    responsive: {
    0: {
    items: 1,
    nav: true,
    margin: 10
    },
    500: {
    items: 1,
    nav: false,
    margin: 20
    },
    700: {
    items: 1,
    nav: false,
    margin: 20
    },
    1000: {
    items: 1,
    nav: true,
    loop: false,
    margin: 20
    }
    }
    })   
    })


// owl slder team

$(document).ready(function() {
$('.teams').owlCarousel({
loop: false,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: true,
margin: 0
},
500: {
items: 2,
nav: false,
margin: -30
},
700: {
items: 3,
nav: false,
margin: -30
},
1000: {
items: 4,
nav: true,
loop: false,
margin: -30
}
}
})   
})

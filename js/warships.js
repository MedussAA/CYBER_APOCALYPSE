;(function () {
    'use strict';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var callingWarships = function() {
        console.log("Warships are being called! Prepare for action!");
    };

    var fullHeight = function() {
        // Your fullHeight function code goes here
    };

    // ... (rest of the existing functions)

    // Document on load.
    $(function(){
        parallax();
        fullHeight();
        clickMenu();
        windowScroll();
        navigationSection();

        // Animations
        homeAnimate();
        exploreAnimate();
        gettingStartedAnimate();
        pricingAnimate();
        servicesAnimate();
        teamAnimate();
        footerAnimate();
        counter();
        counterWayPoint();

        // Call the new function
        callingWarships();
    });
}());

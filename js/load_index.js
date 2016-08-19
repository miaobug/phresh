/**
 * Created by miaorui on 16/8/9.
 */

$(document).ready(function() {
    $('.navigation').click(function(){
        $(this).attr('aria-expanded','false');
        $(this).removeClass('in');
    });

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', '3', '4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#c99', '#ee9', '#e9e'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            if(index == 1){
                $('#s1-words-img').removeClass('in');
                $('#s1-words-img').addClass('out');
            }
        },
        afterLoad: function(anchorLink, index){
            console.log(anchorLink, index);
            if(index == 1){
                $('#s1-words-img').removeClass('out');
                $('#s1-words-img').addClass('in');
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log(slideIndex);

        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

        }
    });

    $('#header').css('top', '0px');
    $('#header-mobile').css('top', '0px');
});

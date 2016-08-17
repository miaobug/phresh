/**
 * Created by miaorui on 16/8/9.
 */

$(document).ready(function() {
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
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
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
        sectionsColor : ['#ccc', '#ccc', '#ccc', '#ccc'],
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

                $('#s1-more').removeClass('more-in');
                $('#s1-more').addClass('more-out');
            }
            if(index == 2){
                $('#s2-robot-img').removeClass('s2-in');
                $('#s2-robot-img').addClass('s2-out');
                $('#s2-robot-img-liang').removeClass('s2-in');
                $('#s2-robot-img-liang').addClass('s2-out');
                $('#s2-middle-img').removeClass('s2-in');
                $('#s2-middle-img').addClass('s2-out');
                $('#s2-view-more').removeClass('s2-in');
                $('#s2-view-more').addClass('s2-out');
            }
            if(index == 3){

                $('#s3-bad-staw').removeClass('s3-in');
                $('#s3-bad-staw').addClass('s3-out');
                $('#s3-left').removeClass('s3-in');
                $('#s3-left').addClass('s3-out');
                $('#s3-left-word').removeClass('s3-in');
                $('#s3-left-word').addClass('s3-out');
                $('#s3-right').removeClass('s3-in');
                $('#s3-right').addClass('s3-out');
                $('#s3-right-word').removeClass('s3-in');
                $('#s3-right-word').addClass('s3-out');
                $('#s3-sentence-1').removeClass('s3-in');
                $('#s3-sentence-1').addClass('s3-out');
                $('#s3-sentence-2').removeClass('s3-in');
                $('#s3-sentence-2').addClass('s3-out');
                $('#s3-sentence-3').removeClass('s3-in');
                $('#s3-sentence-3').addClass('s3-out');
                $('#s3-sentence-4').removeClass('s3-in');
                $('#s3-sentence-4').addClass('s3-out');
                //
                //$('#s3-left').css("display", "none");
                //$('#s3-left-word').css("display", "none");
                //$('#s3-right').css("display", "none");
                //$('#s3-right-word').css("display", "none");
            }
        },
        afterLoad: function(anchorLink, index){
            console.log(anchorLink, index);
            if(index == 1){
                $('#s1-words-img').removeClass('out');
                $('#s1-words-img').addClass('in');

                $('#s1-more').removeClass('more-out');
                $('#s1-more').addClass('more-in');
            }
            if(index == 2){
                $('#s2-robot-img').removeClass('s2-out');
                $('#s2-robot-img').addClass('s2-in');
                $('#s2-robot-img-liang').removeClass('s2-out');
                $('#s2-robot-img-liang').addClass('s2-in');
                $('#s2-middle-img').removeClass('s2-out');
                $('#s2-middle-img').addClass('s2-in');
                $('#s2-view-more').removeClass('s2-out');
                $('#s2-view-more').addClass('s2-in');
            }
            if(index == 3){
                //$('#s3-left').css("display", "");
                //$('#s3-left-word').css("display", "");
                //$('#s3-right').css("display", "");
                //$('#s3-right-word').css("display", "");

                $('#s3-bad-staw').removeClass('s3-out');
                $('#s3-bad-staw').addClass('s3-in');
                $('#s3-left').removeClass('s3-out');
                $('#s3-left').addClass('s3-in');
                $('#s3-left-word').removeClass('s3-out');
                $('#s3-left-word').addClass('s3-in');
                $('#s3-right').removeClass('s3-out');
                $('#s3-right').addClass('s3-in');
                $('#s3-right-word').removeClass('s3-out');
                $('#s3-right-word').addClass('s3-in');
                $('#s3-sentence-1').removeClass('s3-out');
                $('#s3-sentence-1').addClass('s3-in');
                $('#s3-sentence-2').removeClass('s3-out');
                $('#s3-sentence-2').addClass('s3-in');
                $('#s3-sentence-3').removeClass('s3-out');
                $('#s3-sentence-3').addClass('s3-in');
                $('#s3-sentence-4').removeClass('s3-out');
                $('#s3-sentence-4').addClass('s3-in');
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
});

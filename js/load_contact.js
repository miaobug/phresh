/**
 * Created by miaorui on 16/8/9.
 */

$(document).ready(function() {
    $('#header').css('top', '0px');
    $('#header-mobile').css('top', '0px');

    $('.navigation').click(function(){
        $(this).attr('aria-expanded','false');
        $(this).removeClass('in');
    });
});

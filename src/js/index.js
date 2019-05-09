import jQuery from 'jquery';
import 'bootstrap';
// import './slick.min.js';


window.jQuery = jQuery;
window.$ = jQuery;

require('./magnific-popup.js');
require('./slick.min.js');

$(document).ready(function() {
    $('.modal-form-link').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('search__link').addClass('search__link_active');
        $('.populer-place__form').show();
    });
    $('.symbol-clos').on('click', function (e) {
        e.preventDefault();
        $('.modal-form-link').removeClass('search__link_active');
        $('.modal-form-link').addClass('search__link');
        $('.populer-place__form').hide();
    });


    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        alignTop: true,
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });





// MAGNIFIC END

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
    });

    $('.single-item').slick({
        dots: true,
        slidesToShow: 1,
        // variableWidth: true,
        // adaptiveHeight: true,
        // width: '770px',
        // variableWidth: true,
        prevArrow: '<div class="arrows prev"><a href="#"></a></div>',
        nextArrow: '<div class="arrows next"><a href="#"></a></div>'
    });










});

import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){

    const $tablinks = $('.main__tabs a')
    const $tabcontent = $('.main__content')

    $tablinks.on('click', function(e){
        e.preventDefault();

        let $t = $(this)
        const id = $t.data('tab')
        const $tab = $(`.main__content[data-tab=${id}]`)

        $tabcontent.removeClass('main__content_show')
        $tablinks.removeClass('main__tab_active')

        $t.addClass('main__tab_active')
        $tab.addClass('main__content_show')
    })

    $('.catalogue-detail__switcher').on('click', function(e){
        e.preventDefault();
        $('.catalogue-detail__switcher').removeClass('catalogue-detail__switcher_active')
        $(this).addClass('catalogue-detail__switcher_active')

        $(this).hasClass('catalogue-detail__switcher-tile') ?
            $('.catalogue-detail__list').addClass('list_tile') :
            $('.catalogue-detail__list').removeClass('list_tile')
    })

    $('.js-type-phone').on('input', function(e){
        let $target = $(e.target),
            regexp = /[^+()\-0-9 ]+/g;
        $target.val($target.val().replace (regexp,''))
    })

    $('.js-show-more').on('click',function(){
        let text = $(this).closest('.container').find('.seo__text');
        text.toggleClass('seo__text_full');
        $(this).closest('.container').find('.seo__overlay').toggleClass('seo__overlay_hidden');
        text.hasClass('seo__text_full') ? $(this).text('Скрыть') : $(this).text('Показать еще')
    })

    $('.products__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: '0',
        arrows: true,
        infinite: true,
        dots:false
    })

    $('.projects__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: '0',
        arrows: true,
        infinite: true,
        dots:false
    })
})
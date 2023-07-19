import $ from 'jquery';
$(function(){
    $('.js-btn').on('click',function(e){
        e.preventDefault();
        $('.overlay').css('display','flex')
    })
    // $('body').on('click','#close-popup, .overlay', function(e){
    //     e.preventDefault();
    //     if($(e.target).closest('.overlay__form').length==0) $('.overlay').fadeOut('fast')
    // });
    $("#close-popup , .overlay").click(function(e) {
            console.log($(this))
        console.log(e.target)
        if (e.target == this) {

            $('.overlay').fadeOut('fast')

        }

    });

})
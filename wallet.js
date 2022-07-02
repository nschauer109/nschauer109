let state = 0;
$('.container').on('click', '.button', function() {
    let buttons = $('.button');
    let clickedButton = $(this);
    let topCardHolder = $('.card-large');
    let topCard = topCardHolder.children('.button');
    if(state===0){
        buttons.addClass('expanded');
        topCard.appendTo($('.button-wrap'));
        topCardHolder.remove();
        $('.container').prepend('<div class="card-large"></div>');
        state = 1;
    }
    else if(state===1){
        clickedButton.appendTo(topCardHolder);
        buttons.removeClass('expanded');
        state = 0;
    }
});

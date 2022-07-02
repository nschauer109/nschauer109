let state = 0;
$('.container').on('click', '.button', function() {
    let buttons = $('.button');
    let clickedButton = $(this);
    let topCardHolder = $('.card-large');
    let topCard = topCardHolder.children('.button');
    let nfc = $('.nfc');
    if(state===0){
        buttons.addClass('expanded');
        topCard.appendTo($('.button-wrap'));
        topCardHolder.remove();
        $('.container').prepend('<div class="card-large"></div>');
        nfc.css('display', 'none');
        nfc.css('top', '40%');
        state = 1;
    }
    else if(state===1){
        if(clickedButton.hasClass('buckeyes')){
            nfc.css('top', '60%');
        }
        clickedButton.appendTo(topCardHolder);
        buttons.removeClass('expanded');
        nfc.css('display', 'block');
        state = 0;
    }
});

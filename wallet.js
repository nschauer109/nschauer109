let state = 0;
$('.container').on('click', '.button', function() {
    let buttons = $('.button');
    let clickedButton = $(this);
    let topCardHolder = $('.card-large');
    let topCard = topCardHolder.children('.button');
    let nfc = $('.nfc');
    let wrap = $('.button-wrap');
    let extras = $('.ticket-extras');
    if(state===0){
        buttons.addClass('expanded');
        wrap.css('top', '120px');
        wrap.css('bottom', '');
        topCard.appendTo($('.button-wrap'));
        topCardHolder.remove();
        $('.container').prepend('<div class="card-large"></div>');
        extras.css('display', 'none');
        nfc.css('display', 'none');
        nfc.css('top', '40%');
        state = 1;
    }
    else if(state===1){
        if(clickedButton.hasClass('buckeyes')){
            nfc.css('top', '55%');
            extras.css('display', 'block');
        }
        wrap.css('top', '');
        wrap.css('bottom', '-80px');
        clickedButton.appendTo(topCardHolder);
        buttons.removeClass('expanded');
        nfc.css('display', 'block');
        state = 0;
    }
});

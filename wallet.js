let state = 0;
$('.container').on('click', '.button', function() {
    let buttons = $('.button');
    if(state===0){
        buttons.addClass('expanded');
        state = 1;
    }
    else if(state===1){
        let clickedButton = $(this);
        let topCardHolder = $('.card-large');
        let topCard = topCardHolder.children('.button');

        topCard.appendTo($('.button-wrap'));
        clickedButton.appendTo(topCardHolder);
        buttons.removeClass('expanded');
        state = 0;
    }
});

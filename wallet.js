$('.container').on('click', '.button', function() {
    let clickedButton = $(this);
    let topCardHolder = $('.card-large');
    let topCard = topCardHolder.children('.button');

    if(topCardHolder.children().length === 1) {
        //topCardHolder.prepend(this);
        topCard.appendTo($('.button-wrap'));
    }
    else {
        //topCardHolder.empty();
        //$('.button-wrap').prepend(topCard);
        clickedButton.appendTo(topCardHolder);
    }
});

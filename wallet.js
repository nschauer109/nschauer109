let state = 0;
$('.container').on('click', '.button', function() {
    let buttons = $('.button');
    let clickedButton = $(this);
    let topCardHolder = $('.card-large');
    let topCard = topCardHolder.children('.button');
    if(state===0){
        console.log("Expanding cards");
        buttons.addClass('expanded');
        console.log("Move top to bottom");
        topCard.appendTo($('.button-wrap'));
        state = 1;
    }
    else if(state===1){
        console.log("Move clicked to top");
        clickedButton.appendTo(topCardHolder);
        console.log("Collapse cards");
        buttons.removeClass('expanded');
        state = 0;
    }
});

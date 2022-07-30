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
        wrap.css('top', '40px');
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

$(document).ready(function() {
    let canvas = document.getElementById("buckeyes");
    let context = canvas.getContext("2d");
    let imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0);
        context.font = "47pt -apple-system, BlinkMacSystemFont, Helvetica, sans-serif";
        context.fillStyle = 'white';
        context.fillText("Sep 11, 2021", 670, 125);
        context.fillText("Oregon", 345, 595);
        context.fillText("35A", 45, 735);
        context.fillText("33", 530, 735);
        context.fillText("2", 950, 735);
        context.fillText("ENTER GATE 35", 45, 880);

        context.font = "30pt -apple-system, BlinkMacSystemFont, Helvetica, sans-serif";
        context.fillText("12:00 PM", 860, 60);

        let imgSrc = canvas.toDataURL("image/png");
        $('#buck_img').attr('src', imgSrc);
        canvas.style.display = "none";
    };
    imageObj.src = "images/buckeyes.png";
});

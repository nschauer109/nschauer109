// ***** GSAP Timeline Initialization *****
var animateCard1 = gsap.timeline({ paused: true });
var animateCard2 = gsap.timeline({ paused: true });
var animateCard3 = gsap.timeline({ paused: true });
var selectCard = gsap.timeline({ paused: true });

// ***** GSAP TimelineMax Initialization *****
var animateCurrentCard = new TimelineMax();

// ***** SCSS Parameters *****
var colors = {
    $black: "#111",
    $lightBlack: "#242224",
    $blue: "#1b2f69",
    $lightBlue: "#27408f",
    $white: "#fff",
    $lightWhite: "#dae4ee"
};
var cardPositions = {
    $top: {
        $marginTop: "-320px"
    },
    $behind: {
        $marginTop: "-30px",
        $marginTopNum: -30
    },
    $end: {
        $marginTop: "0px",
        $marginTopNum: 0
    },
    $widthLarge: 270,
    $widthSmall: 240
};

// ***** Animation Parameters Initialization *****
let rotateAxis = 180;
const duration = 0.5;

// ***** Variables Initialization *****
let bodyBackgroundColor = null;

// ***** Function : updateBalance : Start *****

// ***** Function : updateBalance : End *****

// ***** Function : setAnimationForExtraCards : Start *****
// ***** Function : setAnimationForExtraCards : End *****

// ***** Function : setAnimationForCard1 : Start *****
const setAnimationForCard1 = () => {
    const slide2MarginTop = $(".slide-2").css("margin-top");
    const slide3MarginTop = $(".slide-3").css("margin-top");

    animateCard1
        .to(".slide-1", duration, {
            ease: "back.inOut(1.7)",
            translateY: -200,
            width: cardPositions.$widthLarge
        })
        .set(".slide-1", { zIndex: 2 });
    if (slide2MarginTop === cardPositions.$end.$marginTop) {
        animateCard1
            .set(".slide-2", { zIndex: 1 })
            .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: cardPositions.$behind.$marginTopNum, width: cardPositions.$widthSmall });
    }
    if (slide3MarginTop === cardPositions.$end.$marginTop) {
        animateCard1
            .set(".slide-3", { zIndex: 1 })
            .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: cardPositions.$behind.$marginTopNum, width: cardPositions.$widthSmall });
    }
    animateCard1
        .to(".slide-1", {
            ease: "back",
            translateY: 0,
            marginTop: 0
        })
        .set(".slide-1", { marginTop: 0, zIndex: 3 });
};
// ***** Function : setAnimationForCard1 : End *****

// ***** Function : setAnimationForCard2 : Start *****
const setAnimationForCard2 = () => {
    const slide1MarginTop = $(".slide-1").css("margin-top");
    const slide3MarginTop = $(".slide-3").css("margin-top");

    animateCard2
        .to(".slide-2", duration, {
            ease: "back.inOut(1.7)",
            translateY: -200,
            width: cardPositions.$widthLarge
        })
        .set(".slide-2", { zIndex: 2 });
    if (slide1MarginTop === cardPositions.$end.$marginTop) {
        animateCard2
            .set(".slide-1", { zIndex: 1 })
            .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: cardPositions.$behind.$marginTopNum, width: cardPositions.$widthSmall });
    }
    if (slide3MarginTop === cardPositions.$end.$marginTop) {
        animateCard2
            .set(".slide-3", { zIndex: 1 })
            .to(".slide-3", duration/2, { ease: "back.inOut(1.7)", marginTop: cardPositions.$behind.$marginTopNum, width: cardPositions.$widthSmall });
    }
    animateCard2
        .to(".slide-2", {
            ease: "back",
            translateY: 0,
            marginTop: 0
        })
        .set(".slide-2", { marginTop: 0, zIndex: 3 });
};
// ***** Function : setAnimationForCard2 : End *****

// ***** Function : setAnimationForCard3 : Start *****
const setAnimationForCard3 = () => {
    const slide1MarginTop = $(".slide-1").css("margin-top");
    const slide2MarginTop = $(".slide-2").css("margin-top");

    animateCard3
        .to(".slide-3", duration, {
            ease: "back.inOut(1.7)",
            translateY: -200,
            width: cardPositions.$widthLarge
        })
        .set(".slide-3", { zIndex: 2 });
    if (slide1MarginTop === cardPositions.$end.$marginTop) {
        animateCard3
            .set(".slide-1", { zIndex: 1 })
            .to(".slide-1", duration/2, { ease: "back.inOut(1.7)", marginTop: cardPositions.$behind.$marginTopNum, width: cardPositions.$widthSmall });
    }
    if (slide2MarginTop === cardPositions.$end.$marginTop) {
        animateCard3
            .set(".slide-2", { zIndex: 1 })
            .to(".slide-2", duration/2, { ease: "back.inOut(1.7)", marginTop: cardPositions.$behind.$marginTopNum, width: cardPositions.$widthSmall });
    }
    animateCard3
        .to(".slide-3", {
            ease: "back",
            translateY: 0,
            marginTop: 0
        })
        .set(".slide-3", { marginTop: 0, zIndex: 3 });
};
// ***** Function : setAnimationForCard3 : End *****

// ***** Function : setCurrentCardAnimation : Start *****
const setCurrentCardAnimation = () => {
    const slide1MarginTop = $(".slide-1").css("margin-top");
    const slide2MarginTop = $(".slide-2").css("margin-top");
    const slide3MarginTop = $(".slide-3").css("margin-top");

    if (slide1MarginTop === cardPositions.$behind.$marginTop) {
        animateCurrentCard
            .set(".slide-1", { zIndex: 2 },0)
            .to(".slide-1",{
                ease: "back",
                marginTop: 0,
                width: cardPositions.$widthLarge
            },0);
    }
    if (slide2MarginTop === cardPositions.$behind.$marginTop) {
        animateCurrentCard
            .set(".slide-2", { zIndex: 2 }, 0)
            .to(".slide-2",{
                ease: "back",
                marginTop: 0,
                width: cardPositions.$widthLarge
            },0);
    }
    if (slide3MarginTop === cardPositions.$behind.$marginTop) {
        animateCurrentCard
            .set(".slide-3", { zIndex: 2 }, 0)
            .to(".slide-3", {
                ease: "back",
                marginTop: 0,
                width: cardPositions.$widthLarge
            },0);
    }
    if (slide1MarginTop === cardPositions.$top.$marginTop) {
        animateCurrentCard
            .set(".slide-1", { zIndex: 1 }, 0)
            .to(".slide-1",{
                ease: "back",
                marginTop: cardPositions.$behind.$marginTopNum,
                width: cardPositions.$widthSmall
            },0);
    }
    if (slide2MarginTop === cardPositions.$top.$marginTop) {
        animateCurrentCard
            .set(".slide-2", { zIndex: 1 }, 0)
            .to(".slide-2",{
                ease: "back",
                marginTop: cardPositions.$behind.$marginTopNum,
                width: cardPositions.$widthSmall
            },0);
    }
    if (slide3MarginTop === cardPositions.$top.$marginTop) {
        animateCurrentCard
            .set(".slide-3", { zIndex: 1 }, 0)
            .to(".slide-3",{
                ease: "back",
                marginTop: cardPositions.$behind.$marginTopNum,
                width: cardPositions.$widthSmall
            },0);
    }
};
// ***** Function : setCurrentCardAnimation : End *****

// ***** Event Handlers : Start *****
$(".slide-1").click(function () {
    const marginTop = $(this).css("margin-top");
    if (marginTop === cardPositions.$behind.$marginTop) {
        setAnimationForCard1();
        animateCard1.play();
    }
    if (marginTop === cardPositions.$end.$marginTop) {
        selectCard
            .to(".slide-1", {
                ease: "back",
                translateY: -360
            })
            .set(".slide-1", { translateY: 0, marginTop: -360 })
            .restart();
        setCurrentCardAnimation();
    }
});

$(".slide-2").click(function () {
    const marginTop = $(this).css("margin-top");
    if (marginTop === cardPositions.$behind.$marginTop) {
        setAnimationForCard2();
        animateCard2.play();
    }
    if (marginTop === cardPositions.$end.$marginTop) {
        selectCard
            .to(".slide-2", {
                ease: "back",
                translateY: cardPositions.$top.$marginTop
            })
            .set(".slide-2", { translateY: 0, marginTop: cardPositions.$top.$marginTop })
            .restart();
        setCurrentCardAnimation();
    }
});

$(".slide-3").click(function () {
    const marginTop = $(this).css("margin-top");
    if (marginTop === cardPositions.$behind.$marginTop) {
        setAnimationForCard3();
        animateCard3.play();
    }
    if (marginTop === cardPositions.$end.$marginTop) {
        selectCard
            .to(".slide-3", {
                ease: "back",
                translateY: cardPositions.$top.$marginTop
            })
            .set(".slide-3", { translateY: 0, marginTop: cardPositions.$top.$marginTop })
            .restart();
        setCurrentCardAnimation();
    }
});
// ***** Event Handlers : End *****

// ***** Clearing Timelines : Start *****
animateCurrentCard.eventCallback("onComplete", () => {
    animateCurrentCard.clear();
});
selectCard.eventCallback("onComplete", () => {
    selectCard.clear();
});
animateCard1.eventCallback("onComplete", () => {
    animateCard1.clear();
});
animateCard2.eventCallback("onComplete", () => {
    animateCard2.clear();
});
animateCard3.eventCallback("onComplete", () => {
    animateCard3.clear();
});
// ***** Clearing Timelines : End *****
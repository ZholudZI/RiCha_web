"use strict";
var leftstyleAlbom = 0, image_number = 1, leftstyleFeedBack = 0, achivmentTester = true;
const slider_line = document.getElementById("slide-line"), merch_image = document.getElementById("merch-image"), buy_button = document.getElementById("bye-merch"), feedback_slider = document.getElementById("feedback-block"),
    audio = new Audio("sounds/tube_falling.mp3"), Roman = new Audio("sounds/Roman.mp3"), Stephtan = new Audio("sounds/Stephtan.mp3"), deti = document.getElementById("easterEgg"), achivment_sound = new Audio("sounds/achivment.mp3");

function plusFunc() {
    if (leftstyleAlbom > -6750) {
        leftstyleAlbom -= 1350;
    } else {
        leftstyleAlbom = 0;
    }
    slider_line.style.left = `${leftstyleAlbom}px`;
}

function minusFunc() {
    if (leftstyleAlbom < 0) {
        leftstyleAlbom += 1350;
    } else {
        leftstyleAlbom = -6750;
    }
    slider_line.style.left = `${leftstyleAlbom}px`;
}

function slide_merch_left() {
        if (image_number > 1) {
            image_number--;
        } else {
            image_number = 3;
        }
    merch_image.style.opacity = "0%";
    setTimeout(function () { merch_image.src = `images/merch_${image_number}.png`; merch_image.style.opacity = "100%"}, 500);
}

function slide_merch_right() {
        if (image_number < 3) {
            image_number++;
        } else {
            image_number = 1;
        }
    merch_image.style.opacity = "0%";
    setTimeout(function () { merch_image.src = `images/merch_${image_number}.png`; merch_image.style.opacity = "100%"}, 500);
    }

function buy_button_animation() {
    buy_button.style.animation = "1s ease buy_button";
    audio.play();
    setTimeout(() => buy_button.style.animation = "none", 1000);
}

function slide_feedback_right() {
    if (leftstyleFeedBack > -2060) {
        leftstyleFeedBack -= 1030;
    } else leftstyleFeedBack = 0;
    feedback_slider.style.left = `${leftstyleFeedBack}px`
}

function slide_feedback_left() {
    if (leftstyleFeedBack < 0) {
        leftstyleFeedBack += 1030;
    } else leftstyleFeedBack = -2060;
    feedback_slider.style.left = `${leftstyleFeedBack}px`
}

function playRoman() {
    Roman.play();
}

function playStephtan() {
    Stephtan.play();
}

function achivment() {
    if (achivmentTester) {
        deti.style.animation = "5s ease achivmentAnim";
        setTimeout(() => achivment_sound.play(), 350);
        achivmentTester = false;
    }
}

/*function slide_merch_left() {
    if (cheker == true) {
        if (image_number > 1) {
            image_number--;
        } else {
            image_number = 3;
        }
        cheker = false;
        merch_image.style.animation = 'merchOpasAnim ease 1s';
        setTimeout(() => merch_image.src = `images/merch_${image_number}.png`, 500);
        setTimeout(function () { merch_image.style.animation = 'none'; cheker = true }, 1000);
    }
}

function slide_merch_right() {
    if (cheker == true) {
        if (image_number < 3) {
            image_number++;
        } else {
            image_number = 1;
        }
        cheker = false;
        merch_image.style.animation = 'ease merchOpasAnim 1s';
        setTimeout(() => merch_image.src = `images/merch_${image_number}.png`, 500);
        setTimeout(function () { merch_image.style.animation = 'none'; cheker = true }, 1000);
    }
}*/
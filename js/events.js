let count = 0;
let scrollinCount = 0;



let onScroll = () => {
    if(scrollinCount==0){
        slideUp();
        scrollinCount++;
    }
};

let slideDown = ()=> {
    $('.arrow-circle').removeClass('unanimate-arrow');
        $('.arrow-circle').addClass('animate-arrow');
        $('.branda').hide('slide',1000);
        $('.navbar-mine').animate({
            height: '100px',
        },1000,'swing');
        setTimeout(function () {
            $('.nav-links').show('blind',500);
        },1500)
};
let slideUp = () => {
    $('.arrow-circle').removeClass('animate-arrow');
    $('.arrow-circle').addClass('unanimate-arrow');
        $('.nav-links').css('display', 'none');
        $('.navbar-mine').animate({
            height: '50px',
        }, 1000, 'swing');
        setTimeout(function () {
            $('.branda').show('slide', 500);
        }, 1500);
};
let slide =() => {
    if(count==0){
        slideDown();
        count++;
        if(scrollinCount>0){
            scrollinCount--;
        }
    } else{
        slideUp();
        count--;
        if(scrollinCount>0){
            scrollinCount--;
        }
    }
};

let changeMeal = () =>{
    $('body').css({
        background: 'url(./image/background1.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    });
};

let changeBMR  = () =>{
    $('body').css({
        background: 'url(./image/background3.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    });
};
let changeBase = () =>{
    $('body').css({
        background: 'url(./image/backgorund2.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    });
};

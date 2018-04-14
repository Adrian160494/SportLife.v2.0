let count = 0;
let scrollinCount = 0;

let menuCount = 0;



let onScroll = () => {
    if(scrollinCount==0){
        slideUp();
        scrollinCount++;
    }
};

let slideDown = ()=> {
    $('.navbar-mine').css('background', 'rgba(100,100,100,0.8)');
    $('.arrow-circle').removeClass('unanimate-arrow');
        $('.arrow-circle').addClass('animate-arrow');
        $('.branda').hide('slide',1000);
        $('.navbar-mine').animate({
            height: '100px',
        },1000,'swing');
        setTimeout(function () {
            $('.nav-links').show('blind',500);
            $('.logo').show('slide',100);
        },1500)
};
let slideUp = () => {
    $('.navbar-mine').css('background', 'rgba(100,100,100,0.5)');
    $('.arrow-circle').removeClass('animate-arrow');
    $('.arrow-circle').addClass('unanimate-arrow');
        $('.nav-links').css('display', 'none');
        $('.logo').css('display','none');
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
    hideAllMobile();
};

let changeBMR  = () =>{
    $('body').css({
        background: 'url(./image/background3.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    });
    hideAllMobile();
};
let changeBase = () =>{
    $('body').css({
        background: 'url(./image/backgorund2.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    });
    hideAllMobile();

};

let changeCalc = () =>{
    $('body').css({
        background: 'url(./image/backgorund4.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    });
    hideAllMobile();

};

let showMobile =() => {
    $('.navigation-mobile').show('slide',1000);
};

let hideMobile = () => {
    $('.navigation-mobile').hide('blind',1000);
};

let menu = () => {
    if(menuCount==0){
        showMobile();
        menuCount++;
        $('.menuButton').removeClass('glyphicon-menu-hamburger');
        $('.menuButton').addClass('glyphicon-plus-sign');
        $('.menuButton').removeClass('unrotate');
        $('.menuButton').addClass('rotate');
    } else {
        hideMobile();
        menuCount=0;
        $('.menuButton').addClass('glyphicon-menu-hamburger');
        $('.menuButton').removeClass('glyphicon-plus-sign');
        $('.menuButton').addClass('unrotate');
        $('.menuButton').removeClass('rotate');
    }
}

let hideAllMobile = () => {
    hideMobile();
    menuCount=0;
    $('.menuButton').addClass('glyphicon-menu-hamburger');
    $('.menuButton').removeClass('glyphicon-plus-sign');
    $('.menuButton').addClass('unrotate');
    $('.menuButton').removeClass('rotate');
}



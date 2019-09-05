// 一屏高度
let clientHeight = window.screen.height;
let footer = document.getElementsByClassName('footer')[0];
window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scrollTop >= clientHeight - 300) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
};



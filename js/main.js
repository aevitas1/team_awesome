const mobileNavBtn = document.getElementById('menu-btn'),
    mobileNavTop = document.getElementById('top'),
    mobileNavCenter = document.getElementById('center'),
    mobileNavBottom = document.getElementById('bottom'),
    mobileNav = document.getElementById('mob-menu');

mobileNavBtn.addEventListener('click', function (e) {
    if (mobileNavBtn.classList.contains('m-active')) {
        mobileNavBtn.classList.remove('m-active');
        mobileNavTop.classList.remove('m-active');
        mobileNavCenter.classList.remove('m-active');
        mobileNavBottom.classList.remove('m-active');
        mobileNav.classList.remove('m-active');
        document.body.classList.remove('m-active')
    } else {
        mobileNavBtn.classList.add('m-active');
        mobileNavTop.classList.add('m-active');
        mobileNavCenter.classList.add('m-active');
        mobileNavBottom.classList.add('m-active');
        mobileNav.classList.add('m-active');
        document.body.classList.add('m-active')
    }
})
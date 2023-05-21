function copyMenu(){
    var dptCategory = document.querySelector('.dpt-cat');
    var dptplace = document.querySelector('.departments');
    dptplace.innerHTML = dptCategory.innerHTML;

    /////
    var mainNav = document.querySelector('.header-nav nav');
    var navplace = document.querySelector('.off-canvas nav')
    navplace.innerHTML = mainNav.innerHTML;
    //////

    var topNav = document.querySelector('.header-top .wrapper');
    var topplace = document.querySelector('.off-canvas .thetop-nav');
    topplace.innerHTML=topNav.innerHTML;

}

copyMenu();
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');
menuButton.addEventListener('click',function() {
    addClass.classList.toggle('showmenu')
});
closeButton.addEventListener('click',function(){
    addClass.classList.remove('showmenu')
});


const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click' ,toggle));
function toggle(e){
    e.preventDefault();
    submenu.forEach((item)=> item != this ? item.closest('.has-child').classList.remove('expand'):null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
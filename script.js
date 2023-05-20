function copyMenu(){
    var dptCategory = document.querySelector('dpt-cat');
    var dptplace = document.querySelector('departments');
    dptplace.innerHTML = dptCategory.innerHTML;
    var mainNav = document.querySelector('.header-nav nav');
    var navplace = document.querySelector('off-canvas nav')
    navplace.innerHTML = mainNav.innerHTML;
    var topNav = document.querySelector('.header-top');
    var topplace = document.querySelector('.off-canvas .thetop-nav');
    topplace.innerHTML=topNav.innerHTML;

}
copyMenu();
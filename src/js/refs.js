export default function getRefs (){
  return {
    openPopupBtnLogout: document.querySelector('[data-popup-open]'),
    closePopupBtnLogout: document.querySelector('[data-popup-close]'),
    cancelPopupBtnLogout: document.querySelector('[data-popup-cancel]'),
    backdropPopupLogout: document.querySelector('[data-popup]'),
    myAds: document.querySelector('.my-ads'),
    myAdsCardRender: document.querySelector('.my-ads-rend'), 
    exitAccount: document.querySelector('[data-exit]'),
    //Кнопки с классом is-login
    isLoginDelZ: document.querySelector('.sidenav__registry'),
    isLoginDelO: document.querySelector('.sidenav__menu-acount'),
    isLoginDelT: document.querySelector('.is-login'),
    isLoginDelTh: document.querySelector('.header-navigation__registry'),
    isLoginDelFo: document.querySelector('.header-navigation__menu-acount-logout'),
    isLoginDelF: document.querySelector('.header-navigation__menu-acount'),
  }
}
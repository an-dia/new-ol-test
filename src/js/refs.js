export default function getRefs (){
  return {
    openPopupBtnLogout: document.querySelector('[data-popup-open]'),
    closePopupBtnLogout: document.querySelector('[data-popup-close]'),
    cancelPopupBtnLogout: document.querySelector('[data-popup-cancel]'),
    backdropPopupLogout: document.querySelector('[data-popup]'),
   
  }
}
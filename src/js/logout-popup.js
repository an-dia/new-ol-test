import getRefs from './refs'

const refs = getRefs();

refs.openPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.closePopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.cancelPopupBtnLogout.addEventListener('click', onTogglePopUp);

function onTogglePopUp() {
  //  document.body.classList.toggle('popup-open');
  refs.backdropPopupLogout.classList.toggle('is-hidden');
}
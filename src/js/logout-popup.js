import getRefs from './refs'
// import {fetchLogout} from './fetch/fetchLogout';
const refs = getRefs();

refs.openPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.closePopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.cancelPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.exitAccount.addEventListener('click', onExitAccount);

function onTogglePopUp() {
  //  document.body.classList.toggle('popup-open');
  refs.backdropPopupLogout.classList.toggle('is-hidden');
}

function onExitAccount() {
 onTogglePopUp()
 }
import getRefs from './refs'
import { API_OLX } from './url';
import { fetchLogout } from './fetch/fetchLogout';

const refs = getRefs();

refs.openPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.closePopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.cancelPopupBtnLogout.addEventListener('click', onTogglePopUp);
refs.exitAccount.addEventListener('click', onExitAccount);

//Закрывает попап
function onTogglePopUp() {
  //  document.body.classList.toggle('popup-open');
  refs.backdropPopupLogout.classList.toggle('is-hidden');
}

//Выходbn из акаунта
async function onExitAccount() {
  try {
    const response = await fetchLogout(API_OLX);
   console.log( response);
   console.log('Я вышел из акаунта');
    // removeClass();
    onTogglePopUp();
  } catch (error) {
    console.log(error.message);
  }
 
}
 
// Удаляя класс, меняет в хэдэре выход на вход
function removeClass() {
  refs.isLoginDel.classList.remove('is-login');
  refs.isLoginDelZ.classList.remove('is-login');
  refs.isLoginDelO.classList.remove('is-login');
  refs.isLoginDelT.classList.remove('is-login'); 
  refs.isLoginDelTh.classList.remove('is-login'); 
  refs.isLoginDelFo.classList.remove('is-login'); 
  refs.isLoginDelF.classList.remove('is-login'); 
}
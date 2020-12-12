import getRefs from './refs';
import { API_OLX } from './url';
import { fetchCall } from './fetch/fetchCall';
import myAdsCardRenderTpl from '../templates/my-ads-card.hbs';
// import {test} from '../templates/test.json'

const refs = getRefs();

refs.myAdsCardRender.addEventListener('click', onRenderMyAdsCard)
//electronics
async function onRenderMyAdsCard() {
  const response = await fetchCall(API_OLX, 2);
  console.log(response);

  refs.myAds.insertAdjacentHTML('beforeend', myAdsCardRenderTpl(response.electronics))
  refs.myAdsCardRender.disabled = true;
}
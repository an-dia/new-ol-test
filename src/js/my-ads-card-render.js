import getRefs from './refs';
import myAdsCardRenderTpl from '../templates/my-ads-card.hbs';
import {test} from '../templates/test.json'

const refs = getRefs();

refs.myAdsCardRender.addEventListener('click', onRenderMyAdsCard)

function onRenderMyAdsCard(test) {
  refs.myAds.insertAdjacentHTML('beforeend', myAdsCardRenderTpl(test))
  refs.myAdsCardRender.disabled = true;
}
'use strict';

window.onhashchange = renderNewState;
function renderNewState() {
  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {
    state = {page: 'first'};
  } else {
    state = JSON.parse(state);
  }

  let page = '';

  switch(state.page) {
    case 'main':
      page ;
      break;
    case 'content':
      page ;
      break;
    case 'item':
      page ;
      break;
  }
  generatePage(page);
}

function generatePage(page) {

}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}
function switchToMain() {
  switchToState({page: 'main'});
}
function switchToContent() {
  switchToState({page: 'content'});
}
function switchToItem() {
  switchToState({page: 'item'});
}
renderNewState();

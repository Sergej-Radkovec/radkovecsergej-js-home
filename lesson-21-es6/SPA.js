'use strict';

const AjaxHandlerScript = "http://fe.it-academy.by/TestAjax2.php";
window.onhashchange = renderNewState;
let coursesArray = [];

function renderNewState() {
  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {
    state = 'main';
  }

  let page = '';
  const id = parseInt(state.replace(/\D+/g, ''));

  switch(state) {
    case 'main':
      page += '<h1>Энциклопедия</h1>';
      page += '<a href="#content">список статей здесь</a>';
      document.getElementById('page').innerHTML = page;
      break;
    case 'content':
      page += '<h3>Идёт загрузка страницы....</h3>';
      document.getElementById('page').innerHTML = page;
      $.ajax(AjaxHandlerScript, {
        type: 'GET', dataType: 'json',
        data: {func: 'COURSES_JSON'},
        success: coursesList, error: errorHandler
      });
      break;
    case `item-${id}`:
      page += '<h3>Идёт загрузка страницы....</h3>';
      document.getElementById('page').innerHTML = page;
       $.ajax(AjaxHandlerScript, {
          type: 'GET', dataType: 'html', data: {func: 'COURSE_INFO', id: id},
          success: courseInfo, error: errorHandler
      });
      break;
  }
}

renderNewState();

function coursesList(data) {
  let page = '';
  page += '<h1>Оглавление</h1>';
  let tmp = {};
  data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  data.forEach(elem => {
    let name = elem.name;
    let firstLetter = name.charAt(0).toUpperCase();
    if (!tmp[firstLetter]) {
      tmp[firstLetter] = 1;
      page += `<h2>${firstLetter}</h2>`;
      page += `<a href="#item-${elem.id}">${name}</a><br>`;
    } else {
      page += `<a href="#item-${elem.id}">${name}</a><br>`;
    }
  });
  coursesArray = data;
  document.getElementById('page').innerHTML = page;
}

function courseInfo(data) {
  let page = '';
  page += '<div style="display: inline-block; width: 30%">';
  for (let i = 0; i < 5; i++) {
    page += `<a href="#item-${coursesArray[i].id}">${coursesArray[i].name}</a><br>`;
  }
  page += '</div>';
  page += `<div style="display: inline-block; width: 60%">
              <h2>Название статьи</h2>
              <p>${data}</p>
          </div>`;
  document.getElementById('page').innerHTML = page;
}

function errorHandler(jqXHR, StatusStr, ErrorStr) {
  let page = '';
  page += '<h3>Что то пошло не так, попробуйте позже</h3>';
  document.getElementById('page').innerHTML = page;
  console.log(StatusStr + ' ' + ErrorStr);
}

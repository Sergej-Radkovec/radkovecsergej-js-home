'use strict';

var formTag = document.forms.addSiteForm;
formTag.onsubmit = ValidateInfoForm;

function ValidateInfoForm() {
  try {
    var devField = formTag.elements.dev;
    var devValue = devField.value;

    var nameField = formTag.elements.name;
    var nameValue = nameField.value;

    var urlField = formTag.elements.url;
    var urlValue = urlField.value;

    var emailField = formTag.elements.email;
    var emailValue = emailField.value;

    var descriptionField = formTag.elements.description;
    var descriptionValue = descriptionField.value;

    var placingField = formTag.elements.placing;
    var placingValue = placingField.value;

    if (devValue < 2) {
      alert('Разработчики должно быть длинее 2 символов');
      nameField.focus();
      return false;
    }

    if (nameValue < 2) {
      alert('Имя должно быть длинее 2 символов');
      devField.focus();
      return false;
    }

    if (!emailValue) {
      alert('Поле е-mail обязательно для заполнения!');
      emailField.focus();
      return false;
    }

    if (!urlValue) {
      alert('URL обязателен для заполнения для заполнения!');
      urlField.focus();
      return false;
    }

    if (!descriptionValue) {
      alert('Запоолните описание!');
      descriptionField.focus();
      return false;
    }

    if (placingValue === '') {
      alert('Вы не выбрали размещение!');
      document.getElementById('free').scrollIntoView();
      return false;
    }
    return true;
  } catch (Ex) {
    return false;
  }
}

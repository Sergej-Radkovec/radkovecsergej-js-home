(function () {
  function generateForm(parent, origForm, formFields) {

    var cloneForm = origForm.cloneNode(false);

    formFields.forEach(addFormElement);

    parent.replaceChild(cloneForm, origForm);

    function addFormElement(obj) {
      var label = labelCreate(obj.name, obj.label);
      cloneForm.appendChild(label);
      switch (obj.type) {
        case 'text':
          var textInput = inputTextCreate(obj);
          cloneForm.appendChild(textInput);
          break;
        case 'radio':
          var radioInput = inputRadioCreate(obj);
          for (var i = 0; i < radioInput.length; i++) {
            cloneForm.appendChild(radioInput[i]);
            var labelRadio = labelCreate(obj.variants[i].value, obj.variants[i].text);
            cloneForm.appendChild(labelRadio);
          }
          break;
        case 'checkbox':
          var checkbox = inputCheckboxCreate(obj);
          cloneForm.appendChild(checkbox);
          break;
        case 'select':
          var select = selectCreate(obj);
          cloneForm.appendChild(select);
          break;
        case 'textarea':
          addBr();
          var textarea = textareaCreate(obj);
          cloneForm.appendChild(textarea);
          break;
        case 'submit':
          var submit = submitCreate(obj);
          cloneForm.appendChild(submit);
          break;
      }
      addBr();
    }

    function addBr() {
      var br = document.createElement('br');
      cloneForm.appendChild(br);
    }

    function labelCreate(name, text) {
      var label = document.createElement('label');
      label.setAttribute('for', name);
      label.textContent = text;
      return label;
    }

    function inputTextCreate(obj) {
      var textInput = document.createElement('input');
      textInput.setAttribute('name', obj.name);
      textInput.setAttribute('id', obj.name);
      textInput.setAttribute('type', obj.type);
      return textInput;
    }

    function selectCreate(obj) {
      var select = document.createElement('select');
      select.setAttribute('name', obj.name);
      select.setAttribute('id', obj.name);
      for (var i = 0; i < obj.variants.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', obj.variants[i].value);
        option.textContent = obj.variants[i].text;
        select.appendChild(option);
      }
      return select;
    }

    function inputRadioCreate(obj) {
      var allRadio = [];
      for (var i = 0; i < obj.variants.length; i++) {
        var radio = document.createElement('input');
        radio.setAttribute('name', obj.name);
        radio.setAttribute('value', obj.variants[i].value);
        radio.setAttribute('id', obj.variants[i].value);
        radio.setAttribute('type', obj.type);
        radio.textContent = obj.variants[i].text;
        allRadio[i] = radio;
      }
      return allRadio;
    }

    function inputCheckboxCreate(obj) {
      var checkboxInput = document.createElement('input');
      checkboxInput.setAttribute('name', obj.name);
      checkboxInput.setAttribute('id', obj.name);
      checkboxInput.setAttribute('type', obj.type);
      checkboxInput.setAttribute('value', obj.value);
      return checkboxInput;
    }

    function textareaCreate(obj) {
      var textarea = document.createElement('textarea');
      textarea.setAttribute('name', obj.name);
      textarea.setAttribute('id', obj.name);
      textarea.setAttribute('type', obj.type);
      return textarea;
    }

    function submitCreate(obj) {
      var submit = document.createElement('input');
      submit.setAttribute('value', obj.value);
      submit.setAttribute('type', obj.type);
      return submit;
    }
  }

  var doc = document;
  var container = doc.body;
  var origForm = doc.forms.addSiteForm;
  var formFields = [
    {label: 'Разработчики:', type: 'text', name: 'dev', width: 200},
    {label: 'Название сайта:', type: 'text', name: 'name', width: 200},
    {label: 'URL сайта:', type: 'text', name: 'url', width: 200},
    {label: 'Дата запуска сайта:', type: 'text', name: 'date', width: 200},
    {label: 'Посетителей в сутки:', type: 'text', name: 'count', width: 200},
    {label: 'E-mail для связи:', type: 'text', name: 'email', width: 200},
    {label: 'Рубрика каталога:', type: 'select', name: 'catalog',
      variants: [
        {text: 'здоровье', value: 'health'},
        {text: 'домашний уют', value: 'comfort'},
        {text: 'бытовая техника', value: 'appliances'}], width: 200},
    {label: 'Размещение:', type: 'radio', name: 'placing',
      variants: [
        {text: 'Бесплатное', value: 'free'},
        {text: 'Платное', value: 'paid'},
        {text: 'VIP', value: 'vip'}], width: 200},
    {label: 'Разрешить отзывы:', type: 'checkbox', name: 'resolution', value: 1},
    {label: 'Описание сайта:', type: 'textarea', name: 'description', width: 400},
    {type: 'submit', value: 'Опубликовать'}];


  generateForm(container, origForm, formFields);
})();



(function () {
  function generateForm(parent, origForm, formFields) {

    var cloneForm = origForm.cloneNode(false);

    formFields.forEach(addFormElement);

    parent.replaceChild(cloneForm, origForm);

    function addFormElement(obj) {
      var label = labelCreate(obj.name, obj.label);
      cloneForm.appendChild(label);
      /*var input = inputCreate(obj.type, obj.name);
      cloneForm.appendChild(input);*/
      var select = selectCreate(obj);
      cloneForm.appendChild(select);
      addBr();
    }

    function addBr() {
      var br = document.createElement('br');
      cloneForm.appendChild(br);
    }

    function inputCreate(type, name) {
      if (type === 'text') {
        var input = document.createElement('input');
        input.setAttribute('name', name);
        input.setAttribute('id', name);
        return input;
      }
    }

    function labelCreate(name, text) {
      var label = document.createElement('label');
      label.setAttribute('for', name);
      label.textContent = text;
      return label;
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
  }

  var doc = document;
  var container = doc.body;
  var origForm = doc.forms.addSiteForm;
  var formFields = [
    /*{label: 'Разработчики:', type: 'text', width: 200},
    {label: 'Название сайта:', type: 'text', width: 200},
    {label: 'URL сайта:', type: 'text', width: 200},
    {label: 'Дата запуска сайта:', type: 'text', width: 200},
    {label: 'Посетителей в сутки:', type: 'text', width: 200},
    {label: 'E-mail для связи:', type: 'text', width: 200},*/
    {label: 'Рубрика каталога:', type: 'select',
      variants: [
        {text: 'здоровье', value: 'health'},
        {text: 'домашний уют', value: 'comfort'},
        {text: 'бытовая техника', value: 'appliances'}], width: 200}];
  generateForm(container, origForm, formFields);
})();



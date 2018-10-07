(function () {
  function generateForm(parent, origForm, formFields) {

    var cloneForm = origForm.cloneNode(false);

    formFields.forEach(addFormElement);

    parent.replaceChild(cloneForm, origForm);

    function addFormElement(obj) {
      var label = labelCreate(obj.name, obj.label);
      cloneForm.appendChild(label);
      var input = inputCreate(obj.type, obj.name);
      cloneForm.appendChild(input);
    }

    function inputCreate(type, name) {
      var input = doc.createElement('input');
      input.setAttribute('name', name);
      input.setAttribute('id', name);
      return input;
    }

    function labelCreate(name, text) {
      var label = doc.createElement('label');
      label.setAttribute('for', name);
      label.textContent = text;
      return label;
    }
  }

  var doc = document;
  var container = doc.body;
  var origForm = doc.forms.addSiteForm;
  var formFields = [{label: 'Разработчики:', type: 'text', width: 200}];

  generateForm(container, origForm, formFields);
})();



'use strict';

function THashStorage() {}

THashStorage.prototype.addValue = function (key, value) {
  this[key] = value;
};

THashStorage.prototype.getValue = function (key) {
  return this[key];
};

THashStorage.prototype.deleteValue = function (key) {
  delete this[key];
};

THashStorage.prototype.getKeys = function () {
  return Object.keys(this);
};

const drinkStorage =  new THashStorage();

document.querySelector('.btn-save').addEventListener('click', function () {
  const frmSave = document.forms.save;
  const elemName = frmSave.elements.name;
  const nameDrink = elemName.value;

  const elemAlcohol = frmSave.elements.alcohol;
  const alcogolDrink = elemAlcohol.value;

  const elemRecipe = frmSave.elements.recipe;
  const recipeDrink = elemRecipe.value;

  drinkStorage.addValue(nameDrink, [alcogolDrink, recipeDrink]);
  frmSave.reset();
});

const printWindow = document.querySelector('.printWindow');

document.querySelector('.btn-print-info').addEventListener('click', function () {
  printWindow.innerHTML = '';
  const namePrintDrink = document.getElementById('nameDrink').value;
  const drinkInfo = drinkStorage.getValue(namePrintDrink);
  document.getElementById('nameDrink').value = '';
  printWindow.innerHTML =  'напиток: ' +  '<strong>' + namePrintDrink + '</strong>' + '<br>'
    + 'алкогольный: ' + '<strong>' + drinkInfo[0] + '</strong><br>' + 'рецепт приготовления:'
    + '<br><strong>' + drinkInfo[1] + '</strong>';
});

document.querySelector('.btn-drink-list').addEventListener('click', function () {
  printWindow.innerHTML = '';
  printWindow.innerHTML = drinkStorage.getKeys();
});

document.querySelector('.btn-delete-drink').addEventListener('click', function () {
  printWindow.innerHTML = '';
  const nameDeleteDrink = document.getElementById('nameDeleteDrink').value;
  drinkStorage.deleteValue(nameDeleteDrink);
  printWindow.innerHTML = 'Напиток ' + nameDeleteDrink + ' удалён';
});

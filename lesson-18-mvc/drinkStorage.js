'use strict';

const drinkStorage =  new TLocalStorage('drinks');

document.querySelector('.btn-save-drink').addEventListener('click', function () {
  const frmSave = document.forms.saveDrink;
  const elemName = frmSave.elements.nameDrinks;
  const nameDrink = elemName.value;

  const elemAlcohol = frmSave.elements.alcohol;
  const alcoholDrink = elemAlcohol.value;

  const elemRecipe = frmSave.elements.recipeDrink;
  const recipeDrink = elemRecipe.value;

  drinkStorage.addValue(nameDrink, [alcoholDrink, recipeDrink]);
  frmSave.reset();
});

const printWindowDrink = document.querySelector('.printWindow');

document.querySelector('.btn-print-drink-info').addEventListener('click', function () {
  printWindowDrink.innerHTML = '';
  const namePrintDrink = document.getElementById('nameDrink').value;
  const drinkInfo = drinkStorage.getValue(namePrintDrink);
  document.getElementById('nameDrink').value = '';
  printWindowDrink.innerHTML =  'напиток: ' +  '<strong>' + namePrintDrink + '</strong>' + '<br>'
    + 'алкогольный: ' + '<strong>' + drinkInfo[0] + '</strong><br>' + 'рецепт приготовления:'
    + '<br><strong>' + drinkInfo[1] + '</strong>';
});

document.querySelector('.btn-drink-list').addEventListener('click', function () {
  printWindowDrink.innerHTML = '';
  printWindowDrink.innerHTML = drinkStorage.getKeys();
});

document.querySelector('.btn-delete-drink').addEventListener('click', function () {
  printWindowDrink.innerHTML = '';
  const nameDeleteDrink = document.getElementById('nameDeleteDrink').value;
  drinkStorage.deleteValue(nameDeleteDrink);
  printWindowDrink.innerHTML = 'Напиток ' + nameDeleteDrink + ' удалён';
});

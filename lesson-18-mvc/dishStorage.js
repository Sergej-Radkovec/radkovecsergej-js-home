'use strict';

const dishStorage =  new TLocalStorage('dishs');

document.querySelector('.btn-save-dish').addEventListener('click', function () {
  const frmSave = document.forms.saveDish;
  const elemName = frmSave.elements.nameDishs;
  const nameDish = elemName.value;

  const elemStatus = frmSave.elements.status;
  const statusDish = elemStatus.value;

  const elemRecipe = frmSave.elements.recipeDish;
  const recipeDish = elemRecipe.value;

  dishStorage.addValue(nameDish, [statusDish, recipeDish]);
  frmSave.reset();
});

const printWindowDish = document.querySelector('.printWindow');

document.querySelector('.btn-print-dish-info').addEventListener('click', function () {
  printWindowDish.innerHTML = '';
  const namePrintDish = document.getElementById('nameDish').value;
  const dishInfo = dishStorage.getValue(namePrintDish);
  document.getElementById('nameDish').value = '';
  printWindowDish.innerHTML =  'Блюдо: ' +  '<strong>' + namePrintDish + '</strong>' + '<br>'
    + 'вид готовки: ' + '<strong>' + dishInfo[0] + '</strong><br>' + 'рецепт приготовления:'
    + '<br><strong>' + dishInfo[1] + '</strong>';
});

document.querySelector('.btn-dish-list').addEventListener('click', function () {
  printWindowDish.innerHTML = '';
  printWindowDish.innerHTML = dishStorage.getKeys();
});

document.querySelector('.btn-delete-dish').addEventListener('click', function () {
  printWindowDish.innerHTML = '';
  const nameDeleteDish = document.getElementById('nameDeleteDish').value;
  dishStorage.deleteValue(nameDeleteDish);
  printWindowDish.innerHTML = 'Блюдо ' + nameDeleteDish + ' удалёно';
});

var firstName;
var secondName;
var lastName;
var fullYears;
var gender;
var pension = false;

do {
  firstName = prompt('Введите вашe имя:', '');
  if (firstName >= 0) {
    alert('Введите пожалуйста корректные данные');
  }
} while (firstName >= 0);

do {
  secondName = prompt('Введите вашe отчество:', '');
  if (secondName >= 0) {
    alert('Введите пожалуйста корректные данные');
  }
} while (secondName >= 0);

do {
  lastName = prompt('Введите вашу фамилию', '');
  if (lastName >= 0) {
    alert('Введите пожалуйста корректные данные');
  }
} while (lastName >= 0);

do {
  fullYears = parseInt(prompt('Сколько вам лет:', ''), 10);
  if (fullYears < 0 || fullYears > 150 || isNaN(fullYears)) {
    alert('Введите пожалуйста корректные данные');
  }
} while (fullYears < 0 || fullYears > 150 || isNaN(fullYears));

gender = confirm('Ваш пол - мужской?');

if (gender && (fullYears >= 63)) {
  pension = true;
} else if (!gender && (fullYears >= 58)) {
  pension = true;
}

var fullName = firstName + ' ' + secondName + ' ' + lastName;
var ageInDays = Math.floor(fullYears * 365.2425);
var futureYears = fullYears + 5;

gender = (gender) ? 'мужской' : 'женский';
pension = (pension) ? 'да' : 'нет';

var finalMessage = 'ваше ФИО: ' + fullName + '\n' +
  'ваш возраст в годах: ' + fullYears + '\n' +
  'ваш возраст в днях: ' + ageInDays + '\n' +
  'через 5 лет вам будет: ' + futureYears + '\n' +
  'ваш пол: ' + gender + '\n' +
  'вы на пенсии: ' + pension;

alert(finalMessage);

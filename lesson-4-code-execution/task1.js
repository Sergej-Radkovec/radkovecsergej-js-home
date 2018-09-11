function maxTasks(list) {
  var max = 0;
  var name;
  for (var key in list) {
    if (list[key] > max) {
      max = list[key];
      name = key;
    }
  }
  return name;
}
module.exports = maxTasks;


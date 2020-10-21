module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 != 0) {
    return false;
  }
  let arrayOfStringConfig = [];
  for(let i = 0; i < bracketsConfig.length; i++) {
    arrayOfStringConfig.push(bracketsConfig[i].join(''))
  }
  let attempt = 1;
  while (attempt) {
    for (let j = 0; j < arrayOfStringConfig.length; j++) {
      if (str.includes(arrayOfStringConfig[j])) {
        str = str.replace(arrayOfStringConfig[j], '');
          attempt++;
      }
    }
      attempt--;
  }
  return str.length == 0;
}

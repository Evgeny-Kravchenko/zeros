module.exports = function zeros(expression) {
  let count = 0;                                //Счётчик нулей
  let i = 0;                                    //Счётчик для проверки нечётных  факториалов (в случае если они все нечётные)
  let arr = expression.split("*");              //Разбиваем строку на массив факториалов-строк
  arr.forEach(item => {                         //Проверяем массив на то, что все значения это нечётные двойные факториалы
    if(item.includes("!!") && parseInt(item) % 2 != 0) {
      i++;
    }
  });
  if(arr.length == i ) return count;                                  //Если длина массива равна счётчику, то возвращаем ноль, так как умножение нечётных массивов не даёт в конце числа нули
  arr.forEach(item => {                                               //Проверяем остальные варианты двойного факториала
    if(item.includes("!!") && parseInt(item) % 2 == 0) {              //Если факториал двойной и чётный, то добавляем 2 нуля в случае чисел 100 75 50 25 и 1 ноль в случае чисел кратных 5
      for(let i =parseInt(item); i >= 5; i = i - 2) {                 
        if(i == 100 || i == 75 || i == 50 || i == 25) {
          count = count + 2;
          continue;
        }
        if(i % 5 == 0) {
          count++;
        }
      }
    } else if(item.includes("!!") && parseInt(item) % 2 != 0) {       //Если факториал двойной и нечётный, то делаем такую же проверку как и выше, только для его списка чисел
      for(let i =parseInt(item); i >= 5; i = i - 2) {
        if(i == 100 || i == 75 || i == 50 || i == 25) {
          count = count + 2;
          continue;          
        }
        if(i % 5 == 0) {
          count++;
        }
      }
    } else if(item.includes("!")) {                                   //Если факториал одинарный, то используем специальную формулу fact/5 + fact/5^2 и так далее пока > 0
      for(let i = 5; parseInt(item) / i > 0; i = i * i) {
        count = count + Math.floor(parseInt(item) / i)
      }
    }
  })
  return count;
}

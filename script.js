// задача №1
const fill = (arraySize, value) => {
  const result = Array(arraySize).fill(value)

  return result
}

const data1 = 12;
const valueToFill1 = 'a';
console.log(fill(data1, valueToFill1))

const data12 = 7;
const valueToFill2 = 'Мы уже приехали?';
console.log(fill(data12, valueToFill2))

const data13 = 3;
const valueToFill3 = 'Мама забери меня из программирования я ничего не понимаю';
console.log(fill(data13, valueToFill3))

// задача №2
const reverse = (array) => {
  const result = array.reverse()

  return result
 }

const data21 = [1, 2, 3];
console.log(reverse(data21)); // [3, 2, 1]

const data22 = ['Быть', 'или', 'не', 'быть?'];
console.log(reverse(data22)); // ['быть?', 'не', 'или', 'Быть']

const data23 = ['Схема', 'эвакуации', 'АААААААААААА'];
console.log(reverse(data23)); // ['АААААААААААА', 'эвакуации', 'Схема']

// задача №3
const compact = (array) => {
  const filtered = array.filter(Boolean)

  return filtered
}

const data31 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data31)) // [1, 2, 3]

const data32 = ["42", 0, false, "ответ на", undefined, '', "«Главный вопрос жизни,", null, "вселенной", "и вообще»"];
console.log(compact(data32)) // ["42", "ответ на", "«Главный вопрос жизни,", "вселенной", "и вообще»"]

const data33 = [0, 1, false, 2, 3, undefined, 4, null, 5, "с детства", '', "с рифмой я", undefined, "дружу"];
console.log(compact(data33)) // [1, 2, 3, 4, 5, 'с детства', 'с рифмой я', 'дружу']

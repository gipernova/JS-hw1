// 1. Вывести в консоль сообщение `"My first debug"`
console.log("My first debug")

// 2. Создать переменные возраст, кличка питомца и вывести в консоль
let age = 10
let name = "Gerda"

console.log(`The name of my dog is ${name}. She is ${age} years old.`)

// 3. Изменить возраст и вывести эти данные опять
age = 12
console.log(`The name of my dog is ${name}. She is ${age} years old.`)

// 4. Создать переменные каждого из типов (number, string и тд) в JS и с помощью typeof вывести в консоль тип
let myNumber = 25
console.log(typeof myNumber)

let myString = "Yo! Sup?"
console.log(typeof myString)

let myBool = true
console.log(typeof myBool)

const myObj = {
  hisName: "Anakin",
  hisSurname: "Skywalker",
  hisAge: 9,
  isOnGoodSide: true,
}
console.log(typeof myObj)

const myArr = [1, 9, 8, 4]
console.log(typeof myArr)

// 5. У объекта взять свойство isActive и вывести тип

const student = {
  name: "Vova",
  surname: "Yeromin",
  isActive: true,
}

console.log(typeof student.isActive)

// 6. Создать массивы из 5 элементов для таких сущностей: `фрукты, числа, студенты (массив объектов)`
const fruits = ["bananas", "apples", "raspberries", "cherries", "watermelons"]

const numbers = [8, 800, 555, 35, 35]

const students = [
  {
    name: "Vova",
    surname: "Yeromin",
    isActive: true,
  },
  {
    name: "Ivan",
    surname: "Petrov",
    isActive: false,
  },
  {
    name: "Petr",
    surname: "Ivanov",
    isActive: true,
  },
  {
    name: "Ivan",
    surname: "Ivanov",
    isActive: false,
  },
  {
    name: "Petr",
    surname: "Petrov",
    isActive: true,
  },
]

/* Со звездочкой: 
- Из массива чисел от 1 до 10 вывести первый и последний элемент*/
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(newArr[0])
console.log(newArr[newArr.length - 1])

/* - Используя объекта student (пункт 5) вывести сообщение
 `студент: {имя} {фамилия}, сейчас активен: {isActive}`*/

console.log(
  `студент: ${student.name} ${student.surname}, сейчас активен: ${student.isActive}`
)

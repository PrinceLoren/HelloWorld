// 'use strict'
//
// console.log('Запрос данных...')
//
// const req = new Promise(function(resolve, reject) {
//     setTimeout( () => {
//         console.log('Подготовка данных...')
//         const product = {
//             name: 'TV',
//             price: 400
//         }
//         resolve(product)
//     },2000)
// })
//
// req.then((product) => {
//      return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             product.status = 'available'
//             resolve(product)
//         }, 2000)
//     }).then(data => {
//         data.modified = true
//          return data
//          }).then((data) => {
//          console.log(data)
//      })
// }).catch(() => {
//     console.error('Error occurred')
// }).finally(() => {
//     console.log('Finally')
// })
//

// const test = time => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), time)
//     })
// }
//
// // test(1000).then(() => console.log('1000 ms '))
// // test(2000).then(() => console.log('2000 ms '))
//
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All')
// })
//
// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All')
// })

'use strict'

// FILTER

// const names = ['ivan', 'Ann', 'ksenia', 'igor']
//
// const shortNames = names.filter(function(name) {
//     return name.length < 5
// })
//
// console.log

// MAP

// let answers = ['Daniil', 'ArtEM', 'VldImir']
//
// const result = answers.map(item => item.toLowerCase())
//
// console.log(result)

// every/some

// const some = [4, 5, 5]

// console.log(some.some(item => typeof(item) === 'number'))

// console.log(some.every(item => typeof(item) === 'number'))


// reduce

// const arr = [4, 5 , 1, 3,2, 6]
//
//
//
// const res = arr.reduce((sum, current) => sum + current, 3)
//
// console.log(res)


// const arr = ['apple','beer','cheese']
//
//
//
// const res = arr.reduce((sum, current) => `${sum}, ${current}`)
//
// console.log(res)

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0])

console.log(newArr)
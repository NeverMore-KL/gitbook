// function test(res) {
//     return Promise.resolve(res)
//       .then(res => {
//         console.log("第一个then")
//         return res
//       })
//       .then(res => {
//         console.log("第二个then")
//         return Promise.reject('end')
//       .catch(res => {
//          console.log("进入了catch")
//         return res
//       })
//       .then(res => {
//         console.log("catch之后的then")
//       })
//   }

//   test('test')

function test(res) {
  return Promise.resolve(res)
    .then(res => {
      console.log('第一个then')
      return res
    })
    .then(res => {
      console.log('第二个then')
      return Promise.reject('end')
    })
    .catch(res => {
      console.log('进入了catch')
      return res
    })
    .then(res => {
      console.log('catch之后的then')
    })
}
test('hello')

let obj = { 1: 1 };
let oldArr = ['1', 1, obj, true];
oldArr.forEach(item => {
  item = 1;
});
console.log(oldArr);
// 首先token不是防止XSS的，而是为了防止CSRF的； 2、CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token
/**
 * @answer 2
 */

class B extends A {}

class C implements A {}

console.log(new B() instanceof A); // true
console.log(new C() instanceof A); // false
// extends 意味着 - 它从父母那里得到所有
// implements 在这种情况下几乎就像实现一个接口。子对象可以假装它是父...但它没有得到任何实现

//ES5
function sleep(callback, time) {
  if (typeof callback === 'function') setTimeout(callback, time);
}
//Generator
function* sleepGenerator(time) {
  yield new Promise(function(resolve, reject) {
    setTimeout(resolve, time);
  });
}
sleepGenerator(1000)
  .next()
  .value.then(() => {
    console.log(1);
  });

var fragment = document.createDocumentFragment();
fragment.appendChild(elem);

##1

```javascript
console.log(0 / 0)
```

<span style="color:green">答案:</span> {%s%}----NaN----{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}任何数值除以 0 都会导致错误(数学规定)而终止程序执行,但是在 JavaScript 中，会返回出 NaN，不影响后面程序{%ends%}

##2

```javascript
console.log(1 / 0)
```

<span style="color:green">答案:</span> {%s%}--------Infinity{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}比 0 大的数除以 0，则会得到无穷大，所以 js 用 Infinity 来显示出来{%ends%}

##3

```javascript
function foo() {
  let i = 1
  return function() {
    console.log(i)
  }
}
let bar = foo()
foo()
```

<span style="color:green">答案:</span> {%s%} 加长一点-------1{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}闭包啊啊啊啊啊啊啊啊{%ends%}

##4

```javascript
function foo() {
  console.log(a)
  var a = 1
  function a() {}
  var a = 123
  console.log(a)
}
foo()
```

<span style="color:green">答案:</span> {%s%}[Function: a]和 123{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}变量提升{%ends%}

##4

```javascript
//nodejs中
{
  var a = (b = [])
}

console.log(a, b, global.a, global.b)
```

<span style="color:green">答案:</span> {%s%}[ ][ ] undefined [ ]{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}var a =[ ]； b=[ ]-->global.b{%ends%}

##5

```javascript
var f = function g() {
  return 23
}
typeof g
```

<span style="color:green">答案:</span> {%s%}!!undefined!!{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}
https://www.w3.org/html/ig/zh/wiki/ES5/functions
{%ends%}

##6

```javascript
;(function() {
  console.log(Object.prototype.toString.call(arguments))
  console.log(arguments.isArray())
})()
```

<span style="color:green">答案:</span> {%s%}[object Arguments],arguments.isArray is not a function{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}
arguments 对象是所有（非箭头）函数中都可用的局部变量
arguments 对象不是一个 Array 。它类似于 Array，但除了 length 属性和索引元素之外没有任何 Array 属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的 Array
{%ends%}

##7

```javascript
var foo = {
  bar: function() {
    console.log(`---`, this.baz)
    return this.baz
  },
  baz: 1
}
var f1 = foo.bar
f1()
```

<span style="color:green">答案:</span> {%s%}--- udf{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}
var f1 = foo.bar 返回的就是 bar 的值，而不是其引用，那么 this 也就指的不是 foo 了
{%ends%}

##8

```javascript
function f() {
  return f
}
new f() instanceof f
```

<span style="color:green">答案:</span> {%s%}--- false ---{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}
当代码 new f()执行时，下面事情将会发生： <br>
1:一个新对象被创建。它继承自 f.prototype <br>
2:构造函数 f 被执行。执行的时候，相应的传参会被传入，同时上下文(this)会被指定为这个新实例。 <br> new f 等同于 new f()，只能用在不传递任何参数的情况。 <br>
3:如果构造函数返回了一个“对象”，那么这个对象会取代整个 new 出来的结果。如果构造函数没有返回对象，那么 new 出来的结果为步骤 1 创建的对象 <br>
like: <br>

function f() { <br>
return [] <br>
} <br>
new f() <br>
//output [] <br>
4:所以我们这里的 new f()返回的仍然是函数 f 本身，而并非他的实例
{%ends%}

##9

```javascript
var a = 10
function f1() {
  console.log(a)
}
f1()
;(function() {
  var a = 20
  f1()
})()
;(function(f2) {
  var a = 30
  f2()
})(f1)
```

<span style="color:green">答案:</span> {%s%}--- 10,10,10---{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}
调用的方法在指向的是全局变量
{%ends%}

##10

```javascript
add(1)(2)(3) //output 6
//如何实现这样的一个函数
```

<span style="color:green">答案:</span>
{%s%}

function add(x) {<br>
&emsp;&emsp;&emsp;&emsp; var sum = x;<br>
&emsp;&emsp;&emsp;&emsp; var tmp = function (y) {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; sum = sum + y;<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; return tmp;<br>
&emsp;&emsp;&emsp;&emsp;&emsp; };<br>
&emsp;&emsp;&emsp;&emsp;tmp.toString = function () {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;return sum;<br>
&emsp;&emsp;&emsp;&emsp;};<br>
&emsp;&emsp;&emsp;&emsp;return tmp;<br>
&emsp;&emsp;&emsp;&emsp;}<br>
{%ends%}
<span style="color:#EA6F5A">解析:</span> {%s%}
高阶函数
{%ends%}

##11

```
简述一下src与href的区别。
```

<span style="color:#EA6F5A">解析:</span> {%s%}
src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系。<br>

src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。<br>

`script src ="js.js"></script>`<br>

当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 js 脚本放在底部而不是头部。<br>

href 是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加<br>

`link href="common.css" rel="stylesheet"/>`<br>

那么浏览器会识别该文档为 css 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式来加载 css，而不是使用@import 方式。<br>
{%ends%}

##12

```javascript
undefined == null
undefined === null
```

<span style="color:green">答案:</span> {%s%}true , false{%ends%}

<span style="color:#EA6F5A">解析:</span> {%s%}
基本数据类型也就是原始数据类型(primitive)，引用数据类型就是复合数据类型(complex)，“undefined 实际上是从值 null 派生来的<br>
1995 年 JavaScript 诞生时，最初像 Java 一样，只设置了 null 作为表示"无"的值。<br>
根据 C 语言的传统，null 被设计成可以自动转为 0。<br>
首先，null 像在 Java 里一样，被当成一个对象。但是，JavaScript 的数据类型分成原始类型（primitive）和合成类型（complex）两大类，Brendan Eich 觉得表示"无"的值最好不是对象。<br>

其次，JavaScript 的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich 觉得，如果 null 自动转为 0，很不容易发现错误。<br>

因此，Brendan Eich 又设计了一个 undefined。<br>
所以就是当要判断变量是是否是 null 还是 undefined 需要用全等来判断
{%ends%}

##13

```
js执行会阻塞DOM树的解析和渲染，那么css加载会阻塞DOM树的解析和渲染吗
```

<span style="color:green">答案:</span> {%s%}css 加载不会阻塞 DOM 树解析，但是会阻塞 DOM 树渲染。{%ends%}

##14

```javascript
var a = '123456'
a.split('')
```

<span style="color:green">答案:</span> {%s%}["1","2","3","4","5","6"]{%ends%}
<span style="color:#EA6F5A">解析:</span> {%s%}
如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割。
{%ends%}

##15

```javascript
console.log(+new Date())
```

<span style="color:green">答案:</span> {%s%}当前的时间戳{%ends%}
<span style="color:#EA6F5A">解析:</span>
{%s%}
这是隐式转换的玄学，实质还是调用了 valueOf() 的方法。<br>
运算符 new 的优先级高于一元运算符 +，所以过程可以分解为：<br>
1:var time=new Date();<br>
2:+time<br>
3:根据 ECMAScript 定义的转换规则：ToNumber(time)<br>
4:time 是个日期对象，根据 ToNumber 的转换规则，所以相当于：ToNumber(ToPrimitive(time))<br>
5:根据 ToPrimitive 的转换规则：ToNumber(time.valueOf())，time.valueOf() 就是 原始值 得 <br>
6:到的是个时间戳，假设 time.valueOf()=1503479124652<br>
7:所以 ToNumber(1503479124652) 返回值是 1503479124652 这个数字。<br>
{%ends%}

##16

```
原生JS的window.onload与Jquery的$(document).ready(function(){})有什么不同？
```

<span style="color:green">答案:</span> {%s%}
window.onload()方法是必须等到页面内包括图片的所有元素加载完毕后才能执行。

\$(document).ready()是 DOM 结构绘制完毕后就执行，不必等到加载完毕。 {%ends%}

##17

```
css的伪类和伪元素的区别
```

<span style="color:green">答案:</span>
{%s%}
伪类一开始单单只是用来表示一些元素的动态状态，典型的就是链接的各个状态(LVHA)。随后 CSS2 标准扩展了其概念范围，使其成为了所有逻辑上存在但在文档树中却无须标识的“幽灵”分类。<br>

伪元素则代表了某个元素的子元素，这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中。 <br>{%ends%}

##18

```javascript
function test(res) {
  return Promise.resolve(res)
    .then(res => {
      console.log("第一个then")
      return res
    })
    .then(res => {
      console.log("第二个then")
      return Promise.reject('end')
    .catch(res => {
       console.log("进入了catch")
      return res
    })
    .then(res => {
      console.log("catch之后的then")
    })
}
test('test')
//问.catch之后的.then会执行吗
```

<span style="color:green">答案:</span>
{%s%}
------会------
{%ends%}
<span style="color:#EA6F5A">解析:</span>
{%s%}
1:catch()是 then()的语法糖<br>
2:then()返回的是一个 promise。
3:因为 then()和 catch()又返回了一个 promise，因此，后续调用可以串联起来。
{%ends%}

##19

```javascript
const a = {}
a.gf = '黑长直'
//这里用了const,为什么还可以给a加属性
```

<span style="color:green">答案:</span>
{%s%}

const 声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。例如，在引用内容是对象的情况下，这意味着可以改变对象的内容（例如，其参数）。
{%ends%}

##20

```
如何展示一个图片,比例永远是16:9?
```

<span style="color:green">答案:{%s%}通过 padding-bottom:56.25%{%ends%}</span>
<span style="color:#EA6F5A">解析:{%s%}
在 CSS 中 padding-top 或 padding-bottom 的百分比值是根据容器的 width 来计算的
{%ends%}</span>

```html
<style>
  div{
  postion:relative
  width:100%
  overflow: hidden;
  padding-bottom: 56.25%;
  }
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
<div><img src="xxx" /></div>
```

##20

```
如何实现一个链式调用
比如a.a1().a2().a3()
```

<span style="color:green">答案:{%s%}
var a = {<br>
a1(){<br>
return this<br>
}<br>
a2(){<br>
return this<br>
}<br>
}<br>
{%ends%}</span>

##21

```
script标签的defer、async的区别

```

<span style="color:green">答案:{%s%}defer 是在 HTML 解析完之后才会执行，如果是多个，按照加载的顺序依次执行<br>async 是在加载完成后立即执行，如果是多个，执行顺序和加载顺序无关<br>{%ends%}</span>

##22

```
用纯CSS创建一个三角形的原理是什么？
```

<span style="color:green">答案:
{%s%}
将 3 边的 border-color 设置为 transparent
{%ends%}</span>

##23

```
react+react-router4中如何做一个路由鉴权
```

<span style="color:green">答案:
{%s%}
可以通过 HOC 的方式处理
{%ends%}
</span>
##24

```
判断题:redux只能用在react当中吗?
```

<span style="color:green">答案:
{%s%}
错误
{%ends%}
</span>
<span style="color:#EA6F5A">解析:
{%s%}
Redux 是 !JavaScript! 状态容器，提供可预测化的状态管理。
{%ends%}
</span>

##25

```
什么是Polyfill
```

<span style="color:green">答案:
{%s%}
polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。
{%ends%}
</span>

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




1.loader的使用方式有几种，分别是什么

##  有三种，分别是配置，内联和cli三种
##  配置: loader: ['xxxx','xxxxxx']
##  内联: import Styles from 'style-loader!css-loader?modules!./style.css'
##  loader用!隔开，配置选项写在?后面
##  cli: webpack --module-bind 'css=style-loader!css-loader'

2.loader: ['style-loader','css-loader','sass-loader']这几个loader解析顺序是怎么样的

##  从右到左顺序解析, sass-loader, css-loader, style-loader

3.style-loader有什么作用

##  将css-loader打包好的css代码以style标签的形式插入到html文件中

4.resolve下的alias有什么作用

##  创建import或require的别名，
##  比如 alias:{
##      a: path.resolve(__dirname,'src/a')
##  }
##  那么你引入 import a from 'a/b'得到的就是 src/a/b

5.resolve中alias对象的key结尾加上$是什么意思,比如{a$:path.resolve(__dirname,'abc/bcd')}

##  绝对路径
##  import a from 'a' 解析为 abc/bcd
##  若使用 
##  import a from 'a/b' 会使用默认的普通解析

6.主进程和渲染进程发起ipc通信分别调用什么api

##  主进程调用ipcMain.send,渲染进程调用ipcRenderer.send

7.将electron打包成app实际上依赖的是哪个npm包

##  依赖的是electron-builder

8.主进程console.log和渲染进程console.log有什么区别

##  主进程打印在执行主进程的终端上，渲染进程打印在浏览器的控制台上

9.remote模块有什么作用

##  可以在渲染进程直接调用主进程的各种方法，不用再显示的发送进程间消息

10.electron5.0的更新亮点

##  主要的是将几个api promise化，还有其他的添加了几个获取macos系统颜色的api，添加了获取当前进程内存使用情况统计信息等

11.path.join和path.resolve有什么区别

##  path.join只是简单的将各个字符串联起来，而resolve会解析路径，你可以在resolve中使用相对路径

12.在node中直接console.log(this)打印出来的是什么

## 空对象

13.在node中有哪些宏任务,哪些微任务

## 宏任务:setTimeout,setInterval
## 微任务:promise, process.nextTick(让函数在事件轮询的下一个时间点执行)

14.node原生的能够创建服务的模块名字叫什么

## http

15.node中os模块有什么作用

## 查询系统信息以及一部分硬件信息

16.console.log(a)
   console.log(b)
   var a = 1
   let b = 2
   分别打印什么

## undefined和报错

17.css3如何实现0.5px的细线

## 使用transform

18.http状态码 3xx 是什么类型的状态码

## 重定向，要完成请求需要更进一步的操作

19.options请求在什么情况下会出现

## 跨域并且非简单类型的请求（put,delete,或请求头有自定义字段）
## 用于获取服务器的一些信息

20.http协议和https协议分别使用什么端口

## 80和443

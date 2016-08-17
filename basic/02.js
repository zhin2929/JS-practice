/*
2. Write a JavaScript program to print the contents of the current window.
*/

// 第一种方法
// 直接在一个按钮上添加 onclick="print()"; 即可，不需要JS代码，会自动调用print函数

// 第二种方法
// 添加响应事件

var btn = document.getElementById("btn");
btn.onclick = function () {
  window.print();
}

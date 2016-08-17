/*
5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

// html文件 有一个元素p 内容为 w3resource , id 为 str

var str = document.getElementById("str");
var textNode = str.childNodes[0];
var text = textNode.data;
setInterval(function () {
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
},100);

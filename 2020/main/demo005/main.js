var text = document.getElementById('text')

var shadow =''
for (let i = 0; i < 50; i++) {
    shadow += (shadow?',':'') + i*1 +'px '+i*1+'px 0 #01ded3'
}
text.style.textShadow = shadow

// // 获取元素
// var text = document.getElementById('text');
// var shadow = '';
// // 循环给阴影赋值
// for(var i = 0; i< 30 ; i++) {
//   shadow += (shadow ? ',': '') + i*1 +'px ' + i*1 +'px 0 #01ded3'
// }
// // 添加阴影
// text.style.textShadow = shadow;
// let base=require('./base.js');
// console.log('hello world',base.name);
// 对于css
import './index.css';
// 对于img
let logo=require('./images/logo.png');
let img=new Image();
img.style.width='150px';
img.style.height='20px';
img.src=logo;
document.querySelector('#logo1').appendChild(img);
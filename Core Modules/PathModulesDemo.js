const path=require('path');
var normalize=path.normalize('abc\\\\xyz\\def\\..\\');
var normalize1=path.normalize('abc\\\\xyz..');
console.log(normalize);
console.log(normalize1);

var basename=path.basename('D:\\WT\\Lab-3\\TABLE(A-3).html');
console.log("basename:- "+basename);
var dirname=path.dirname('D:\\WT\\Lab-3\\TABLE(A-3).html');
console.log("dirname:- "+dirname);
var extname=path.extname('D:\\WT\\Lab-3\\TABLE(A-3).html');
console.log("extname:- "+extname);

var relative=path.relative('D:\\WT-II\\UNITS','D:\\python\\Lib');
console.log("relative:- "+relative);

var resolve=path.resolve('D:\\WT-II\\UNITS','D:\\python\\Lib');
console.log("resolve:- "+resolve);
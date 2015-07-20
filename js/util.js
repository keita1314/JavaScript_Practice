/**
 * Created by keita on 15/7/20.
 */

//判断arr是否为一个数组，返回一个bool值
function isArray(arr){
    return Object.prototype.toString.call(o) === "[object Array]";
}
//判断fn是否一个函数，返回一个bool值
function isFunction(fn){
    return Object.prototype.toString.call(o) === "[object Function]";
}
function isString(str){
    return typeof str === "string";
}
function isNumber(num){
    return typeof num === "number";
}
function isUndefined(und){
    return typeof und === "undefined";
}
function isNull(nul){
    return typeof nul === "null";
}
function isBoolean(bool){
    return typeof bool === true || typeof bool === false;
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    var resultObj = new Object();
    for (var key in src){
        if(typeof(src[key]) === "object"){
            if(!(src[key] instanceof RegExp))
                resultObj[key] = cloneObject(src[key]);
        }else
            resultObj[key] = src[key];
    }
    return resultObj;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
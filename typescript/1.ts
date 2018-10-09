// 1.类型检查
// 2.接口
interface Student{
    firstName:string;
    lastName:string
}
function greet2(obj:Student){
    return obj.firstName+obj.lastName
}
console.log(greet2({firstName:'yue',lastName:'wang'}));

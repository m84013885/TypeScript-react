// 布尔类型
let isDone: boolean = false
let createdByBoolean: boolean = Boolean(1)

// 数字类型
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010
// ES6 中的八进制表示法
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

// 字符串类型
let myName: string = 'Tom'
// 模板字符串
let sentence: string = `Hello typescript`

// 空值
// 返回空值的函数
function alertName(): void {
    alert('My name is Tom')
}
// 默认空值
let unusable: void = undefined
// Null 和 Undefined
let u: undefined = undefined
let n: null = null

// 任意值
let myFavoriteNumberAny: any = 'seven'
myFavoriteNumberAny = 7
// 未声明类型的变量，默认为任意值
let something
something = 'seven'
something = 7
// 这样操作的话并不会以任意值来默认。类型推论（也就是说js的隐式转换）
/* 
报错内容
let myFavoriteNumber = 'seven'
myFavoriteNumber = 7 
等价于
let myFavoriteNumber: string = 'seven'
myFavoriteNumber = 7
*/

// 联合类型
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumberTest: string | number
myFavoriteNumberTest = 'seven'
// console.log(myFavoriteNumberTest.length) // 5
myFavoriteNumberTest = 7
// console.log(myFavoriteNumber.length) // 编译时报错
// 联合类型时，有可能你不确定类型，这种时候可以用到类型断言
function getLength(something: string | number): number {
    // 当只有something为字符串时才会找到
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
// 指定对象类型（指定形状的类型）
interface Object {
    name: string
    age: number
}
const object: Object = {
    name: '我',
    age: 18
}
// 比形状少了一些属性是不允许或者多一些属性也是不允许的
// 除了可选属性
interface Object1 {
    name?: string
    age: number
}
const object1: Object1 = {
    age: 18
}
// 任意属性
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}
// 一旦定义了任意属性，确定属性和可选属性的类型都必须是它的类型的子集（也就是可选属性和任意属性同时存在时，可选属性的类型必须和任意属性相同）
interface Person1 {
    name: string;
    age?: string;
    [propName: string]: string;
}
let tom: Person1 = {
    name: 'Tom',
    age: '25',
    gender: 'male'
}
// 只读属性
interface Person2 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
// id除了第一次赋值外，其余时候都没办法修改
let tom2: Person2 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
}

// 数组类型
let fibonacciNum: number[] = [1, 1, 2, 3, 5]
let fibonacciStr: string[] = ['1', '2', '3', '4', '5']
let fibonacciBool: boolean[] = [true, false]
let fibonacciVoid: void[] = [undefined, null]
// any在数组里的应用
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]
// 简单的函数表达式
// 参数类型与返回类型
function sum(num1: number, num2: number): number {
    return num1 + num2
}
// 不能有多余的参数以及缺少参数的情况

// 通过赋值来定义函数
let mySum1 = function (x: number, y: number): number {
    return x + y
}
// 其实这样的话是通过类型推断来决定mySum是函数而已，是不标准的，标准如下：
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}
// 首先要输入mySum2的类型，类型是函数类型，而函数类型包括输入的内容(x: number, y: number)，与输出的结果number，中间用=>表示是定义函数定义特有的符号
// 接口的方式定义函数，更为清晰
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}

// 可选参数
// 需要注意可选参数不能放在必须参数的前面
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}
let tomcat = buildName('Tom', 'Cat')
let tom1 = buildName('Tom')

// 参数默认值
function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName
}
let tomcat1 = buildName('Tom', 'Cat')
let tom3 = buildName('Tom')

// 剩余参数(和es6的方式类型，表示剩余的所有参数)
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item)
    });
}

let a: number[] = []
push(a, 1, 2, 3)
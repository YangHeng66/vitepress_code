# JavaScript 核心概念

JavaScript 是一种轻量级的解释型编程语言，最初被设计用于为网页添加交互功能，如今已发展成为全栈开发的重要语言。本文将介绍 JavaScript 的核心概念和基础知识。

## JavaScript 简介

JavaScript 是一种具有以下特点的编程语言：

- **解释型语言**：不需要编译，直接由浏览器解释执行
- **动态类型**：变量类型在运行时确定
- **面向对象**：基于原型的面向对象编程
- **函数式编程**：支持将函数作为参数传递和返回
- **单线程**：JavaScript 在浏览器中是单线程执行的
- **事件驱动**：通过事件处理用户交互

## 基础语法

### 变量声明

JavaScript 有三种声明变量的方式：

```javascript
// 使用var（函数作用域，可重复声明，有变量提升）
var name = "张三";

// 使用let（块级作用域，不可重复声明，无变量提升）
let age = 25;

// 使用const（块级作用域，不可重新赋值，无变量提升）
const PI = 3.14159;
```

::: tip 最佳实践

- 优先使用`const`声明变量
- 当变量需要重新赋值时使用`let`
- 避免使用`var`（除非有特殊需求）
  :::

### 数据类型

JavaScript 有七种基本数据类型：

1. **Number**：数字（整数和浮点数）

   ```javascript
   let count = 42;
   let price = 19.99;
   ```

2. **String**：字符串

   ```javascript
   let greeting = "你好，世界！";
   let name = "张三";
   let template = `我的名字是${name}`; // 模板字符串
   ```

3. **Boolean**：布尔值

   ```javascript
   let isActive = true;
   let isCompleted = false;
   ```

4. **Null**：空值

   ```javascript
   let user = null; // 表示一个空值
   ```

5. **Undefined**：未定义

   ```javascript
   let value; // 声明但未赋值的变量为undefined
   ```

6. **Symbol**：唯一标识符（ES6 新增）

   ```javascript
   const id = Symbol("id"); // 创建一个唯一的标识符
   ```

7. **BigInt**：大整数（ES2020 新增）
   ```javascript
   const bigNumber = 9007199254740991n; // 表示超过Number安全整数范围的整数
   ```

除了基本类型外，JavaScript 还有一种复杂类型：**Object**（对象）

```javascript
// 对象字面量
const person = {
  name: "张三",
  age: 25,
  isStudent: false,
};

// 数组（特殊的对象）
const fruits = ["苹果", "香蕉", "橙子"];

// 函数（也是对象）
function greet(name) {
  return `你好，${name}！`;
}
```

### 运算符

JavaScript 支持多种运算符：

#### 算术运算符

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 加法: 13
console.log(a - b); // 减法: 7
console.log(a * b); // 乘法: 30
console.log(a / b); // 除法: 3.3333...
console.log(a % b); // 取余: 1
console.log(a ** b); // 幂运算: 1000
```

#### 比较运算符

```javascript
console.log(a > b); // 大于: true
console.log(a < b); // 小于: false
console.log(a >= b); // 大于等于: true
console.log(a <= b); // 小于等于: false
console.log(a == b); // 等于（值相等）: false
console.log(a === b); // 严格等于（值和类型都相等）: false
console.log(a != b); // 不等于: true
console.log(a !== b); // 严格不等于: true
```

#### 逻辑运算符

```javascript
let x = true;
let y = false;

console.log(x && y); // 逻辑与: false
console.log(x || y); // 逻辑或: true
console.log(!x); // 逻辑非: false
```

### 条件语句

#### if...else 语句

```javascript
let hour = 14;

if (hour < 12) {
  console.log("上午好！");
} else if (hour < 18) {
  console.log("下午好！");
} else {
  console.log("晚上好！");
}
```

#### switch 语句

```javascript
let day = "星期一";

switch (day) {
  case "星期一":
    console.log("开始新的一周");
    break;
  case "星期五":
    console.log("周末快到了");
    break;
  case "星期六":
  case "星期日":
    console.log("周末愉快");
    break;
  default:
    console.log("普通工作日");
}
```

#### 三元运算符

```javascript
let age = 20;
let status = age >= 18 ? "成年" : "未成年";
console.log(status); // 输出: "成年"
```

### 循环语句

#### for 循环

```javascript
// 基本for循环
for (let i = 0; i < 5; i++) {
  console.log(i); // 输出: 0, 1, 2, 3, 4
}

// for...of循环（遍历可迭代对象的值）
const colors = ["红", "绿", "蓝"];
for (let color of colors) {
  console.log(color); // 输出: "红", "绿", "蓝"
}

// for...in循环（遍历对象的属性）
const person = { name: "张三", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // 输出: "name: 张三", "age: 25"
}
```

#### while 和 do...while 循环

```javascript
// while循环
let i = 0;
while (i < 5) {
  console.log(i); // 输出: 0, 1, 2, 3, 4
  i++;
}

// do...while循环（至少执行一次）
let j = 0;
do {
  console.log(j); // 输出: 0, 1, 2, 3, 4
  j++;
} while (j < 5);
```

## 函数

函数是 JavaScript 中的一等公民，可以像其他值一样被传递和操作。

### 函数声明

```javascript
// 函数声明
function greet(name) {
  return `你好，${name}！`;
}

console.log(greet("张三")); // 输出: "你好，张三！"
```

### 函数表达式

```javascript
// 函数表达式
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3)); // 输出: 8
```

### 箭头函数（ES6）

```javascript
// 箭头函数
const multiply = (a, b) => a * b;

console.log(multiply(4, 2)); // 输出: 8

// 多行箭头函数
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};
```

### 默认参数和剩余参数

```javascript
// 默认参数
function greet(name = "访客") {
  return `你好，${name}！`;
}

console.log(greet()); // 输出: "你好，访客！"

// 剩余参数
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 输出: 10
```

## 对象

对象是 JavaScript 中的核心概念，几乎所有东西都是对象或可以被视为对象。

### 对象字面量

```javascript
const person = {
  firstName: "张",
  lastName: "三",
  age: 25,

  // 方法
  getFullName() {
    return this.firstName + this.lastName;
  },
};

console.log(person.firstName); // 访问属性
console.log(person["lastName"]); // 另一种访问属性的方式
console.log(person.getFullName()); // 调用方法
```

### 构造函数和类

```javascript
// 构造函数
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    return this.firstName + this.lastName;
  };
}

const person1 = new Person("张", "三", 25);
console.log(person1.getFullName()); // 输出: "张三"

// ES6类语法
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    return `你好，我是${this.name}`;
  }

  // 静态方法
  static isValidEmail(email) {
    return email.includes("@");
  }
}

const user1 = new User("李四", "lisi@example.com");
console.log(user1.sayHello()); // 输出: "你好，我是李四"
console.log(User.isValidEmail("test@example.com")); // 输出: true
```

### 原型和继承

JavaScript 使用原型链实现继承：

```javascript
// 使用原型
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name}发出声音`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// 设置原型链
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 添加或覆盖方法
Dog.prototype.speak = function () {
  return `${this.name}汪汪叫`;
};

const dog = new Dog("旺财", "金毛");
console.log(dog.speak()); // 输出: "旺财汪汪叫"

// ES6类继承
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name}发出声音`;
  }
}

class Dog2 extends Animal2 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name}汪汪叫`;
  }
}

const dog2 = new Dog2("小黑", "拉布拉多");
console.log(dog2.speak()); // 输出: "小黑汪汪叫"
```

## 数组

数组是 JavaScript 中用于存储有序数据集合的特殊对象。

### 创建和访问数组

```javascript
// 创建数组
const fruits = ["苹果", "香蕉", "橙子"];

// 访问元素
console.log(fruits[0]); // 输出: "苹果"
console.log(fruits[1]); // 输出: "香蕉"

// 修改元素
fruits[1] = "葡萄";
console.log(fruits); // 输出: ["苹果", "葡萄", "橙子"]

// 数组长度
console.log(fruits.length); // 输出: 3
```

### 数组方法

```javascript
const numbers = [1, 2, 3, 4, 5];

// 添加和删除元素
numbers.push(6); // 在末尾添加元素
numbers.unshift(0); // 在开头添加元素
numbers.pop(); // 删除并返回最后一个元素
numbers.shift(); // 删除并返回第一个元素
numbers.splice(2, 1); // 从索引2开始删除1个元素

// 查找元素
console.log(numbers.indexOf(4)); // 查找元素的索引
console.log(numbers.includes(2)); // 检查数组是否包含某个元素
console.log(numbers.find((n) => n > 3)); // 查找满足条件的第一个元素

// 转换和组合
console.log(numbers.join("-")); // 将数组元素连接成字符串
console.log(numbers.concat([6, 7])); // 合并数组
console.log(numbers.slice(1, 3)); // 提取部分数组

// 迭代方法
numbers.forEach((n) => console.log(n)); // 遍历数组
const doubled = numbers.map((n) => n * 2); // 映射数组
const evenNumbers = numbers.filter((n) => n % 2 === 0); // 过滤数组
const sum = numbers.reduce((total, n) => total + n, 0); // 归约数组
const allPositive = numbers.every((n) => n > 0); // 检查所有元素是否满足条件
const hasEven = numbers.some((n) => n % 2 === 0); // 检查是否有元素满足条件
```

## 异步编程

JavaScript 中的异步编程是处理非阻塞操作的关键。

### 回调函数

```javascript
// 传统回调方式
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "张三", age: 25 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data); // 1秒后输出: { name: "张三", age: 25 }
});
```

### Promise

```javascript
// 使用Promise
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "张三" };
      // 成功时调用resolve
      resolve(user);
      // 失败时调用reject
      // reject(new Error("获取用户数据失败"));
    }, 1000);
  });
}

fetchUserData()
  .then((user) => {
    console.log(user);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("操作完成");
  });
```

### Async/Await

```javascript
// 使用async/await（基于Promise的语法糖）
async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log(user);

    const posts = await fetchUserPosts(user.id);
    console.log(posts);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("操作完成");
  }
}

getUserData();
```

## 模块化

JavaScript 模块化允许将代码分割成独立的、可重用的部分。

### ES6 模块

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// 默认导出
export default class Calculator {
  // 类实现...
}

// app.js
import Calculator, { add, subtract, PI } from "./math.js";

console.log(add(5, 3)); // 输出: 8
console.log(subtract(10, 4)); // 输出: 6
console.log(PI); // 输出: 3.14159

const calc = new Calculator();
// 使用Calculator...
```

## 错误处理

JavaScript 提供了多种错误处理机制。

### try...catch 语句

```javascript
try {
  // 可能会抛出错误的代码
  const result = someFunction();
  console.log(result);
} catch (error) {
  // 处理错误
  console.error("发生错误:", error.message);
} finally {
  // 无论是否有错误都会执行
  console.log("清理资源");
}
```

### 自定义错误

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("用户名不能为空");
  }
  if (user.age < 18) {
    throw new ValidationError("用户必须年满18岁");
  }
}

try {
  validateUser({ name: "张三", age: 16 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("验证错误:", error.message);
  } else {
    console.error("未知错误:", error);
  }
}
```

## JavaScript 最佳实践

1. **使用严格模式**：在文件或函数开头添加`"use strict";`
2. **避免全局变量**：使用模块和闭包隔离代码
3. **使用 const 和 let 代替 var**：更好的作用域控制
4. **使用===而非==**：避免类型转换带来的问题
5. **使用解构赋值**：简化代码
   ```javascript
   const { name, age } = person;
   const [first, second] = array;
   ```
6. **使用模板字符串**：更清晰的字符串拼接
7. **使用箭头函数**：简化函数语法并保持 this 上下文
8. **使用 Promise 或 async/await 处理异步操作**：避免回调地狱
9. **使用 try/catch 处理错误**：优雅地处理异常
10. **使用 ESLint 等工具**：保持代码质量和一致性

## 学习资源

- [MDN JavaScript 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [JavaScript.info](https://zh.javascript.info/)
- [ES6 入门教程](https://es6.ruanyifeng.com/)
- [JavaScript 30](https://javascript30.com/)（30 天 JavaScript 挑战）

## 下一步学习

掌握 JavaScript 基础后，你可以：

1. 学习前端框架（如 Vue.js 或 React）
2. 探索 Node.js 进行服务器端开发
3. 学习 TypeScript 增强类型安全
4. 深入学习 JavaScript 设计模式和高级概念

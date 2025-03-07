# HTML & CSS 基础

HTML（超文本标记语言）和 CSS（层叠样式表）是 Web 前端开发的基础，它们共同定义了网页的结构、内容和样式。

## HTML 简介

HTML（HyperText Markup Language，超文本标记语言）是创建网页的标准标记语言，用于描述网页的结构和内容。

### HTML 文档结构

一个基本的 HTML 文档结构如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>网页标题</title>
  </head>
  <body>
    <h1>这是一个标题</h1>
    <p>这是一个段落。</p>
  </body>
</html>
```

### 常用 HTML 标签

HTML 使用标签来标记内容，以下是一些常用的 HTML 标签：

#### 文本标签

- `<h1>` 到 `<h6>`：标题标签
- `<p>`：段落标签
- `<span>`：行内文本容器
- `<strong>` 或 `<b>`：加粗文本
- `<em>` 或 `<i>`：斜体文本

#### 列表标签

- `<ul>`：无序列表
- `<ol>`：有序列表
- `<li>`：列表项

```html
<ul>
  <li>无序列表项1</li>
  <li>无序列表项2</li>
</ul>

<ol>
  <li>有序列表项1</li>
  <li>有序列表项2</li>
</ol>
```

#### 链接和图片

- `<a>`：超链接
- `<img>`：图片

```html
<a href="https://www.example.com">这是一个链接</a>
<img src="image.jpg" alt="图片描述" />
```

#### 表单元素

- `<form>`：表单
- `<input>`：输入框
- `<button>`：按钮
- `<select>` 和 `<option>`：下拉选择框

```html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="用户名" />
  <input type="password" name="password" placeholder="密码" />
  <button type="submit">提交</button>
</form>
```

#### 语义化标签（HTML5）

- `<header>`：页眉
- `<nav>`：导航
- `<main>`：主要内容
- `<article>`：文章
- `<section>`：区块
- `<aside>`：侧边栏
- `<footer>`：页脚

## CSS 简介

CSS（Cascading Style Sheets，层叠样式表）用于设置 HTML 元素的样式和布局。

### CSS 语法

CSS 语法由选择器和声明块组成：

```css
选择器 {
  属性: 值;
  属性: 值;
}
```

例如：

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### CSS 选择器

CSS 选择器用于选择要样式化的 HTML 元素：

- **元素选择器**：根据标签名选择元素

  ```css
  p {
    color: red;
  }
  ```

- **类选择器**：根据 class 属性选择元素

  ```css
  .highlight {
    background-color: yellow;
  }
  ```

- **ID 选择器**：根据 id 属性选择元素

  ```css
  #header {
    height: 80px;
  }
  ```

- **属性选择器**：根据属性选择元素

  ```css
  input[type="text"] {
    border: 1px solid gray;
  }
  ```

- **伪类选择器**：选择特定状态的元素
  ```css
  a:hover {
    text-decoration: underline;
  }
  ```

### 盒模型

CSS 盒模型是 CSS 布局的基础，每个 HTML 元素都被视为一个矩形盒子，包含：内容(content)、内边距(padding)、边框(border)和外边距(margin)。

```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 1px solid black;
  margin: 30px;
}
```

### 布局技术

CSS 提供了多种布局技术：

#### 浮动布局

```css
.left {
  float: left;
  width: 30%;
}

.right {
  float: right;
  width: 70%;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

#### Flexbox 布局

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
}
```

#### Grid 布局

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

### 响应式设计

响应式设计使网页能够适应不同设备的屏幕尺寸：

```css
/* 移动设备 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

/* 桌面设备 */
@media (min-width: 769px) {
  .container {
    flex-direction: row;
  }
}
```

## HTML & CSS 最佳实践

1. **使用语义化标签**：选择能够准确描述内容的标签
2. **保持 CSS 选择器简单**：避免过度嵌套
3. **使用 CSS 类命名规范**：如 BEM（Block Element Modifier）
4. **移动优先设计**：先设计移动端样式，再逐步扩展到大屏幕
5. **模块化 CSS**：将样式分解为可重用的组件
6. **避免内联样式**：将样式放在外部 CSS 文件中
7. **优化性能**：减少 HTTP 请求，压缩 CSS 文件

## 实践示例

下面是一个结合 HTML 和 CSS 的简单页面示例：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>我的个人简介</title>
    <style>
      body {
        font-family: "Arial", sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        color: #333;
      }

      header {
        text-align: center;
        margin-bottom: 30px;
      }

      h1 {
        color: #2c3e50;
      }

      .profile-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }

      .profile-image {
        flex: 1;
        min-width: 200px;
      }

      .profile-image img {
        width: 100%;
        border-radius: 8px;
      }

      .profile-info {
        flex: 2;
        min-width: 300px;
      }

      .skills {
        margin-top: 20px;
      }

      .skill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .skill-tag {
        background-color: #3498db;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 14px;
      }

      @media (max-width: 600px) {
        .profile-container {
          flex-direction: column;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>我的个人简介</h1>
    </header>

    <main>
      <div class="profile-container">
        <div class="profile-image">
          <img src="https://via.placeholder.com/300" alt="个人照片" />
        </div>

        <div class="profile-info">
          <h2>关于我</h2>
          <p>
            你好！我是一名热爱编程的开发者。我喜欢学习新技术，解决复杂问题，并创建用户友好的应用程序。
          </p>

          <h3>个人信息</h3>
          <ul>
            <li><strong>姓名：</strong>张三</li>
            <li><strong>职业：</strong>前端开发工程师</li>
            <li><strong>邮箱：</strong>example@example.com</li>
          </ul>

          <div class="skills">
            <h3>技能</h3>
            <div class="skill-list">
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">响应式设计</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
```

## 学习资源

- [MDN Web 文档](https://developer.mozilla.org/zh-CN/)
- [W3Schools](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)（检查浏览器兼容性）

## 下一步学习

掌握 HTML 和 CSS 基础后，你可以：

1. 学习 CSS 预处理器（如 Sass 或 Less）
2. 探索 CSS 框架（如 Bootstrap 或 Tailwind CSS）
3. 学习 JavaScript 为网页添加交互功能
4. 深入学习响应式设计和移动优先开发

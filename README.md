# 编程技术文档站点

这是一个使用 VitePress 构建的编程技术文档站点，旨在提供全面的编程技术学习资源，帮助开发者从入门到精通各种编程技术。

## 项目介绍

本项目是一个综合性的技术学习资源，涵盖以下内容：

- 前端开发（HTML、CSS、JavaScript、Vue.js、React 等）
- 后端开发（Node.js、Python、数据库、API 设计等）
- 开发工具（Git、Docker、VS Code、命令行工具等）
- 最佳实践和编程技巧

## 技术栈

- [VitePress](https://vitepress.dev/)：基于 Vue 和 Vite 的静态站点生成器
- [Vue.js](https://vuejs.org/)：用于交互式组件和示例
- [Markdown](https://markdown.com.cn/)：所有内容均使用 Markdown 编写

## 本地开发

### 前置条件

- Node.js 16+
- pnpm（推荐）或 npm 或 yarn

### 安装依赖

```bash
# 使用pnpm（推荐）
pnpm install

# 或使用npm
npm install

# 或使用yarn
yarn install
```

### 启动开发服务器

```bash
# 使用pnpm
pnpm docs:dev

# 或使用npm
npm run docs:dev

# 或使用yarn
yarn docs:dev
```

启动后，访问 http://localhost:5173 查看文档站点。

### 构建静态站点

```bash
# 使用pnpm
pnpm docs:build

# 或使用npm
npm run docs:build

# 或使用yarn
yarn docs:build
```

构建完成后，静态文件将生成在`.vitepress/dist`目录中。

### 预览构建结果

```bash
# 使用pnpm
pnpm docs:preview

# 或使用npm
npm run docs:preview

# 或使用yarn
yarn docs:preview
```

## 项目结构

```
.
├── .vitepress/         # VitePress配置目录
│   └── config.mts      # VitePress配置文件
├── public/             # 静态资源目录
│   ├── logo.png        # 网站logo
│   └── hero.png        # 首页hero图片
├── guide/              # 指南模块
├── frontend/           # 前端技术模块
├── backend/            # 后端技术模块
├── tools/              # 开发工具模块
├── index.md            # 首页
├── about.md            # 关于页面
└── package.json        # 项目配置文件
```

## 自定义配置

### 修改网站信息

编辑`.vitepress/config.mts`文件，修改网站标题、描述和其他配置。

### 添加新内容

1. 在相应目录下创建 Markdown 文件
2. 在`.vitepress/config.mts`的`sidebar`配置中添加新页面链接

## 贡献指南

欢迎贡献内容！如果你想为本文档做出贡献，请：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 联系方式

如有任何问题或建议，请通过以下方式联系我们：

- GitHub Issues
- 电子邮件：example@example.com

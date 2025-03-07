import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程技术宝典",
  description: "系统化的编程学习平台，从零基础到高级工程师的完整技术成长路径",
  lang: "zh-CN",
  lastUpdated: true,

  // 站点级别的设置
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#3c8dbc" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3c8dbc" }],
    [
      "meta",
      {
        name: "keywords",
        content: "编程,开发,学习,教程,前端,后端,JavaScript,Python,技术文档",
      },
    ],
    ["link", { rel: "stylesheet", href: "/styles/custom.css" }],
  ],

  // 自定义markdown配置
  markdown: {
    lineNumbers: true,
    // 代码块中显示行号
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  // 站点配置
  cleanUrls: true, // 生成干净的URL（无.html后缀）
  appearance: true, // 允许用户切换深色/浅色模式
  ignoreDeadLinks: true, // 忽略死链接

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: "编程技术宝典",

    // 导航栏配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "学习路径",
        items: [
          { text: "前端开发路径", link: "/guide/path-frontend" },
          { text: "后端开发路径", link: "/guide/path-backend" },
          { text: "全栈开发路径", link: "/guide/path-fullstack" },
        ],
      },
      { text: "指南", link: "/guide/" },
      {
        text: "前端",
        items: [
          { text: "HTML & CSS", link: "/frontend/html-css" },
          { text: "JavaScript", link: "/frontend/javascript" },
          { text: "Vue.js", link: "/frontend/vue" },
          { text: "React", link: "/frontend/react" },
          { text: "前端工程化", link: "/frontend/engineering" },
        ],
      },
      {
        text: "后端",
        items: [
          { text: "Node.js", link: "/backend/nodejs" },
          { text: "Python", link: "/backend/python" },
          { text: "数据库", link: "/backend/database" },
          { text: "API设计", link: "/backend/api-design" },
          { text: "服务器部署", link: "/backend/deployment" },
        ],
      },
      { text: "工具", link: "/tools/" },
      { text: "关于", link: "/about" },
    ],

    // 侧边栏配置
    sidebar: {
      "/guide/": [
        {
          text: "入门指南",
          collapsed: false,
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "目录结构", link: "/guide/structure" },
          ],
        },
        {
          text: "学习路径",
          collapsed: false,
          items: [
            { text: "前端开发路径", link: "/guide/path-frontend" },
            { text: "后端开发路径", link: "/guide/path-backend" },
            { text: "全栈开发路径", link: "/guide/path-fullstack" },
          ],
        },
        {
          text: "最佳实践",
          collapsed: true,
          items: [
            { text: "编码规范", link: "/guide/coding-standards" },
            { text: "性能优化", link: "/guide/performance" },
            { text: "安全指南", link: "/guide/security" },
          ],
        },
      ],
      "/frontend/": [
        {
          text: "前端技术",
          collapsed: false,
          items: [
            { text: "概述", link: "/frontend/" },
            { text: "HTML & CSS", link: "/frontend/html-css" },
            { text: "JavaScript", link: "/frontend/javascript" },
            { text: "Vue.js", link: "/frontend/vue" },
            { text: "React", link: "/frontend/react" },
          ],
        },
        {
          text: "进阶主题",
          collapsed: true,
          items: [
            { text: "TypeScript", link: "/frontend/typescript" },
            { text: "前端工程化", link: "/frontend/engineering" },
            { text: "性能优化", link: "/frontend/performance" },
            { text: "测试", link: "/frontend/testing" },
            { text: "PWA", link: "/frontend/pwa" },
          ],
        },
      ],
      "/backend/": [
        {
          text: "后端技术",
          collapsed: false,
          items: [
            { text: "概述", link: "/backend/" },
            { text: "Node.js", link: "/backend/nodejs" },
            { text: "Python", link: "/backend/python" },
            { text: "数据库", link: "/backend/database" },
            { text: "API设计", link: "/backend/api-design" },
          ],
        },
        {
          text: "进阶主题",
          collapsed: true,
          items: [
            { text: "微服务", link: "/backend/microservices" },
            { text: "容器化", link: "/backend/containerization" },
            { text: "服务器部署", link: "/backend/deployment" },
            { text: "安全", link: "/backend/security" },
            { text: "性能优化", link: "/backend/performance" },
          ],
        },
      ],
      "/tools/": [
        {
          text: "开发工具",
          collapsed: false,
          items: [
            { text: "概述", link: "/tools/" },
            { text: "Git", link: "/tools/git" },
            { text: "Docker", link: "/tools/docker" },
            { text: "VS Code", link: "/tools/vscode" },
            { text: "命令行工具", link: "/tools/cli" },
          ],
        },
        {
          text: "开发环境",
          collapsed: true,
          items: [
            { text: "Node.js环境", link: "/tools/nodejs-env" },
            { text: "Python环境", link: "/tools/python-env" },
            { text: "数据库环境", link: "/tools/database-env" },
            { text: "CI/CD", link: "/tools/ci-cd" },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/your-username/your-repo" },
      { icon: "twitter", link: "https://twitter.com/your-username" },
      { icon: "discord", link: "https://discord.gg/your-server" },
    ],

    // 页脚配置
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "Copyright © 2023-present 编程技术宝典团队",
    },

    // 搜索配置
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    // 大纲配置
    outline: {
      level: "deep",
      label: "本页目录",
    },

    // 文档页脚配置
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 最后更新时间配置
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    // 编辑链接
    editLink: {
      pattern: "https://github.com/your-username/your-repo/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },

    // 自定义主题颜色
    colors: {
      brand: "#3c8dbc",
      brandLight: "#5bc0de",
      brandLighter: "#d9edf7",
      brandDark: "#2c6c8e",
      brandDarker: "#1c4a5f",
    },

    // 赞助商
    carbonAds: {
      code: "your-carbon-code",
      placement: "your-carbon-placement",
    },
  },
});

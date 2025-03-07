<!--
 * @Author: YangHeng66 yangheng66@gmail.com
 * @Date: 2025-03-07 10:37:33
 * @LastEditors: YangHeng66 yangheng66@gmail.com
 * @LastEditTime: 2025-03-07 10:58:58
 * @FilePath: \Vitepress_code\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

---

# https://vitepress.dev/reference/default-theme-home-page

layout: home

hero:
name: "编程技术宝典"
text: "系统化的编程学习平台"
tagline: 从零基础到高级工程师的完整技术成长路径
image:
src: /hero.png
alt: 编程技术文档
actions: - theme: brand
text: 开始学习
link: /guide/ - theme: alt
text: 查看示例
link: /frontend/html-css - theme: alt
text: GitHub
link: https://github.com/your-username/your-repo

features:

- icon: 📚
  title: 体系化学习
  details: 按照科学的学习路径，构建完整的知识体系，避免碎片化学习带来的困扰
  link: /guide/getting-started
  linkText: 学习路径
- icon: 🚀
  title: 实战驱动
  details: 每个知识点配有实战项目，理论结合实践，巩固所学知识，提升解决问题的能力
  link: /guide/
  linkText: 浏览项目
- icon: 🔍
  title: 深入浅出
  details: 复杂概念简单化，抽象问题具体化，通过生动的比喻和清晰的图解轻松掌握技术要点
  link: /frontend/javascript
  linkText: 查看示例
- icon: ⚡️
  title: 最佳实践
  details: 汇集行业一线开发经验和编码规范，让你的代码更专业，更易维护，更具扩展性
  link: /tools/
  linkText: 了解更多
- icon: 🌐
  title: 全栈覆盖
  details: 前端、后端、移动端、DevOps、云原生等全技术栈内容，满足不同阶段的学习需求
  link: /backend/
  linkText: 探索领域
- icon: 🤝
  title: 社区互动
  details: 加入活跃的技术社区，与其他开发者交流经验，解决疑难问题，共同成长
  link: /about
  linkText: 加入我们

head:

- - meta
  - name: keywords
    content: 编程, 开发, 学习, 教程, 前端, 后端, JavaScript, Python, 技术文档
- - meta
  - name: description
    content: 系统化的编程技术学习平台，从零基础到高级工程师的完整技术成长路径

---

<div class="custom-home-section">
  <div class="container">
    <div class="title">为什么选择我们的技术文档？</div>
    <div class="description">
      在信息爆炸的时代，高质量的学习资源尤为珍贵。我们的技术文档由一线开发者精心打造，注重实用性和系统性，帮助你在技术成长道路上事半功倍。
    </div>
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">🎯</div>
        <div class="feature-title">目标明确</div>
        <div class="feature-desc">清晰的学习目标和路径规划</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <div class="feature-title">持续更新</div>
        <div class="feature-desc">紧跟技术发展，定期更新内容</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">📱</div>
        <div class="feature-title">响应式设计</div>
        <div class="feature-desc">在任何设备上都能获得良好体验</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🌙</div>
        <div class="feature-title">暗黑模式</div>
        <div class="feature-desc">保护你的眼睛，提供舒适的阅读体验</div>
      </div>
    </div>
  </div>
</div>

<div class="custom-home-section alt">
  <div class="container">
    <div class="title">学习路径推荐</div>
    <div class="description">
      根据你的目标和兴趣，选择适合你的学习路径，系统化提升你的技术能力。
    </div>
    <div class="path-cards">
      <div class="path-card">
        <div class="path-title">前端开发工程师</div>
        <div class="path-steps">
          <div class="step">1. HTML & CSS基础</div>
          <div class="step">2. JavaScript核心概念</div>
          <div class="step">3. 前端框架（Vue/React）</div>
          <div class="step">4. 工程化与性能优化</div>
        </div>
        <a class="path-link" href="/frontend/">开始学习 →</a>
      </div>
      <div class="path-card">
        <div class="path-title">后端开发工程师</div>
        <div class="path-steps">
          <div class="step">1. 编程语言基础</div>
          <div class="step">2. 数据库与存储</div>
          <div class="step">3. API设计与开发</div>
          <div class="step">4. 服务架构与部署</div>
        </div>
        <a class="path-link" href="/backend/">开始学习 →</a>
      </div>
      <div class="path-card">
        <div class="path-title">全栈开发工程师</div>
        <div class="path-steps">
          <div class="step">1. 前端基础知识</div>
          <div class="step">2. 后端开发入门</div>
          <div class="step">3. 数据库与API</div>
          <div class="step">4. 全栈项目实战</div>
        </div>
        <a class="path-link" href="/guide/getting-started">开始学习 →</a>
      </div>
    </div>
  </div>
</div>

<style>
.custom-home-section {
  padding: 4rem 0;
  background-color: var(--vp-c-bg);
}

.custom-home-section.alt {
  background-color: var(--vp-c-bg-soft);
}

.custom-home-section .container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.custom-home-section .title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.custom-home-section .description {
  font-size: 1.1rem;
  text-align: center;
  max-width: 768px;
  margin: 0 auto 3rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.custom-home-section.alt .feature-item {
  background-color: var(--vp-c-bg);
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.feature-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.path-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.path-card {
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.path-card:hover {
  transform: translateY(-5px);
}

.path-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--vp-c-brand);
}

.path-steps {
  margin-bottom: 1.5rem;
}

.step {
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.step:last-child {
  border-bottom: none;
}

.path-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.path-link:hover {
  color: var(--vp-c-brand-dark);
}

@media (max-width: 768px) {
  .custom-home-section {
    padding: 3rem 0;
  }
  
  .custom-home-section .title {
    font-size: 1.8rem;
  }
  
  .custom-home-section .description {
    font-size: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .path-cards {
    grid-template-columns: 1fr;
  }
}
</style>

---

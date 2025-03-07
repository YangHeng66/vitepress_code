<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const categories = ref([
  { text: '前端开发', count: 12, link: '/frontend/', icon: '🌐' },
  { text: '后端开发', count: 8, link: '/backend/', icon: '⚙️' },
  { text: '开发工具', count: 6, link: '/tools/', icon: '🔧' },
  { text: '学习指南', count: 4, link: '/guide/', icon: '📖' }
])

const learningPaths = ref([
  {
    title: '前端开发路径',
    steps: [
      'HTML & CSS基础',
      'JavaScript核心概念',
      '前端框架（Vue/React）',
      '工程化与性能优化'
    ],
    link: '/frontend/'
  },
  {
    title: '后端开发路径',
    steps: [
      '编程语言基础',
      '数据库与存储',
      'API设计与开发',
      '服务架构与部署'
    ],
    link: '/backend/'
  },
  {
    title: '全栈开发路径',
    steps: [
      '前端基础知识',
      '后端开发入门',
      '数据库与API',
      '全栈项目实战'
    ],
    link: '/guide/getting-started'
  }
])
</script>

<div class="sky-blue-container">
  <!-- 简洁介绍区域 -->
  <div class="intro-section">
    <h2>系统化学习编程技术</h2>
    <p>这是一个专注于编程技术学习与分享的平台，帮助开发者构建完整的技术体系，从入门到精通。</p>
  </div>

  <!-- 分类导航区域 -->
  <div class="categories-section">
    <div class="category-grid">
      <a v-for="category in categories" :key="category.text" :href="category.link" class="category-card">
        <div class="category-icon">{{ category.icon }}</div>
        <h3 class="category-title">{{ category.text }}</h3>
        <span class="category-count">{{ category.count }}篇文章</span>
      </a>
    </div>
  </div>

  <!-- 学习路径区域 -->
  <div class="learning-paths-section">
    <h2>学习路径推荐</h2>
    <div class="path-grid">
      <div v-for="path in learningPaths" :key="path.title" class="path-card">
        <h3 class="path-title">{{ path.title }}</h3>
        <div class="path-steps">
          <div v-for="(step, index) in path.steps" :key="index" class="path-step">
            <span class="step-number">{{ index + 1 }}</span>
            <span class="step-text">{{ step }}</span>
          </div>
        </div>
        <a :href="path.link" class="path-link">开始学习</a>
      </div>
    </div>
  </div>
</div>

<style>
:root {
  --sky-blue: #3c8dbc;
  --sky-blue-light: #5bc0de;
  --sky-blue-lighter: #d9edf7;
  --sky-blue-dark: #2c6c8e;
  --sky-blue-darker: #1c4a5f;
  --white: #ffffff;
  --light-gray: #f8f9fa;
  --gray: #e9ecef;
  --text-dark: #343a40;
  --text-light: #6c757d;
}

/* 整体容器 */
.sky-blue-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: var(--text-dark);
}

/* 简洁介绍区域 */
.intro-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--sky-blue-lighter);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.intro-section h2 {
  font-size: 2rem;
  color: var(--sky-blue-dark);
  margin-bottom: 1rem;
  font-weight: 600;
}

.intro-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-dark);
}

/* 分类导航区域 */
.categories-section {
  margin-bottom: 4rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid var(--gray);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(60, 141, 188, 0.15);
  border-color: var(--sky-blue-light);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--sky-blue-dark);
  margin-bottom: 0.5rem;
  text-align: center;
}

.category-count {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* 学习路径区域 */
.learning-paths-section {
  margin-bottom: 3rem;
}

.learning-paths-section h2 {
  font-size: 1.8rem;
  color: var(--sky-blue-dark);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}

.path-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.path-card {
  background-color: var(--white);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--gray);
  transition: all 0.3s ease;
}

.path-card:hover {
  box-shadow: 0 8px 15px rgba(60, 141, 188, 0.15);
  border-color: var(--sky-blue-light);
}

.path-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--sky-blue-dark);
  margin-bottom: 1.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid var(--sky-blue-lighter);
}

.path-steps {
  margin-bottom: 1.5rem;
}

.path-step {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: var(--sky-blue);
  color: white;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.8rem;
  flex-shrink: 0;
}

.step-text {
  font-size: 1rem;
  color: var(--text-dark);
}

.path-link {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: var(--sky-blue);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
}

.path-link:hover {
  background-color: var(--sky-blue-dark);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .category-grid,
  .path-grid {
    grid-template-columns: 1fr;
  }
  
  .intro-section h2 {
    font-size: 1.6rem;
  }
  
  .intro-section p {
    font-size: 1rem;
  }
  
  .learning-paths-section h2 {
    font-size: 1.5rem;
  }
}

/* 覆盖VitePress默认样式 */
:root {
  --vp-c-brand: var(--sky-blue);
  --vp-c-brand-light: var(--sky-blue-light);
  --vp-c-brand-lighter: var(--sky-blue-lighter);
  --vp-c-brand-dark: var(--sky-blue-dark);
  --vp-c-brand-darker: var(--sky-blue-darker);
  --vp-button-brand-bg: var(--sky-blue);
  --vp-button-brand-hover-bg: var(--sky-blue-dark);
}

.VPHero .name,
.VPHero .text {
  color: var(--sky-blue-dark) !important;
}

.VPHero .tagline {
  color: var(--text-light) !important;
}

.VPFeature {
  border: 1px solid var(--gray);
  border-radius: 10px !important;
  transition: all 0.3s ease;
}

.VPFeature:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(60, 141, 188, 0.15) !important;
  border-color: var(--sky-blue-light);
}

.VPFeature .title {
  color: var(--sky-blue-dark) !important;
}

.VPFeature .details {
  color: var(--text-dark) !important;
}
</style>

---

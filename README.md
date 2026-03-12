# 🌤️ Weather Dashboard

一个现代化的天气仪表盘 Web 应用，提供实时天气查询、多城市管理、7 天预报及精美的数据可视化。

![Weather Dashboard](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 特性

- 🌡️ **实时天气显示**：显示当前温度、天气状况、体感温度等
- 📊 **数据可视化**：温度趋势图表、7 天预报
- 🏙️ **多城市管理**：快速切换不同城市的天气信息
- 🔍 **城市搜索**：支持模糊搜索城市名称
- 📱 **响应式设计**：完美适配移动端、平板和桌面
- 🌙 **深色模式**：支持亮色和深色主题切换
- ⚡ **高性能**：使用 React 19 和 Vite 构建，快速加载
- 🎨 **现代 UI**：采用极简主义设计 + 气象数据美学

## 🚀 快速开始

### 前置要求
- Node.js 22+
- pnpm 10+

### 安装

```bash
# 克隆仓库
git clone https://github.com/yzalist/weather-dashboard.git
cd weather-dashboard

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

访问 `http://localhost:3000` 查看应用。

### 构建

```bash
# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run preview
```

## 📁 项目结构

```
weather-dashboard/
├── client/                 # 前端应用
│   ├── src/
│   │   ├── pages/         # 页面组件
│   │   │   └── Home.tsx   # 主页面
│   │   ├── components/    # 可复用组件
│   │   ├── hooks/         # 自定义 Hooks
│   │   ├── lib/           # 工具函数
│   │   ├── contexts/      # React Context
│   │   ├── App.tsx        # 主应用组件
│   │   ├── main.tsx       # 入口文件
│   │   └── index.css      # 全局样式和设计系统
│   ├── public/            # 静态资源
│   └── index.html         # HTML 模板
├── .github/
│   └── workflows/         # GitHub Actions 工作流
├── ideas.md               # 设计理念文档
├── CONTRIBUTING.md        # 贡献指南
├── README.md              # 本文件
└── package.json           # 项目配置
```

## 🎨 设计系统

### 设计理念
**现代极简主义 + 气象数据美学**

项目采用极简的设计风格，通过精心设计的排版、色彩和布局，让复杂的气象数据变得易于理解且美观。

### 色彩系统

| 用途 | 颜色 | OKLCH | 说明 |
|------|------|-------|------|
| 主色 | 冷蓝 | `oklch(0.55 0.2 250)` | 专业、清爽 |
| 强调色 | 暖橙红 | `oklch(0.65 0.25 30)` | 热、警告 |
| 背景 | 几乎白 | `oklch(0.98 0.001 0)` | 清洁、现代 |
| 文字 | 深灰 | `oklch(0.25 0.01 0)` | 高对比度、易读 |

### 排版

- **标题字体**：Inter Bold (700)
- **正文字体**：Inter Regular (400)
- **数据字体**：Courier New (等宽)

## 🛠️ 技术栈

- **框架**：React 19 + TypeScript
- **样式**：TailwindCSS 4 + OKLCH 颜色系统
- **UI 组件**：shadcn/ui
- **路由**：Wouter
- **图表**：Recharts
- **图标**：Lucide React
- **构建工具**：Vite
- **包管理**：pnpm

## 📊 功能详情

### 主要功能

#### 1. 实时天气显示
- 当前温度和天气状况
- 体感温度
- 详细气象数据（湿度、风速、能见度、气压）
- 动态天气图标

#### 2. 温度趋势图表
- 24 小时温度变化曲线
- 交互式图表，支持悬停查看详细数据
- 响应式设计

#### 3. 7 天预报
- 每日高低温
- 天气状况
- 天气图标

#### 4. 城市管理
- 快速城市列表
- 点击切换城市
- 搜索功能

## 🔄 自动化工作流

项目使用 GitHub Actions 进行自动化：

### Daily Update Workflow
- **触发**：每天 UTC 09:00 或手动触发
- **功能**：
  - 生成每日更新记录
  - 自动提交和推送
  - 构建验证
  - 类型检查

```yaml
# 查看工作流配置
.github/workflows/daily-update.yml
```

## 📝 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

详见 [CONTRIBUTING.md](CONTRIBUTING.md)

### 提交规范

使用 Conventional Commits 格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型**：feat, fix, docs, style, refactor, perf, test, chore

**示例**：
```
feat(weather): add temperature trend chart

- Integrate Recharts for visualization
- Add hourly temperature data
- Responsive design support

Closes #123
```

## 🚀 部署

### Vercel（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### Netlify

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# 在 package.json 中添加
"homepage": "https://yzalist.github.io/weather-dashboard"

# 构建并部署
pnpm run build
# 然后推送 dist 到 gh-pages 分支
```

### 自托管

```bash
# 构建
pnpm run build

# 启动生产服务器
pnpm run start
```

## 🔄 数据源

目前项目使用 Mock 数据。要集成真实天气 API：

### 推荐的天气 API

1. **OpenWeatherMap**
   - 免费层：60 次/分钟
   - 文档：https://openweathermap.org/api

2. **WeatherAPI**
   - 免费层：1M 次/月
   - 文档：https://www.weatherapi.com/

3. **Open-Meteo**
   - 完全免费，无需 API Key
   - 文档：https://open-meteo.com/

### 集成步骤

1. 选择 API 提供商
2. 获取 API Key（如需要）
3. 创建 `client/src/lib/weatherApi.ts`
4. 实现数据获取函数
5. 更新 `Home.tsx` 中的数据逻辑

## 📱 浏览器支持

- Chrome/Edge：最新版本
- Firefox：最新版本
- Safari：最新版本
- 移动浏览器：iOS Safari 12+, Chrome Android

## 🎯 未来计划

- [ ] 集成真实天气 API
- [ ] 添加天气预警功能
- [ ] 支持多语言
- [ ] 用户偏好设置（保存城市、主题等）
- [ ] PWA 支持（离线访问）
- [ ] 天气历史数据
- [ ] 空气质量指数
- [ ] 紫外线指数

## 🐛 已知问题

目前暂无已知问题。如发现问题，请提交 [Issue](https://github.com/yzalist/weather-dashboard/issues)。

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [React](https://react.dev/) - UI 框架
- [TailwindCSS](https://tailwindcss.com/) - 样式框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Recharts](https://recharts.org/) - 图表库
- [Lucide React](https://lucide.dev/) - 图标库

## 📧 联系方式

- GitHub Issues：[提交问题](https://github.com/yzalist/weather-dashboard/issues)
- GitHub Discussions：[讨论](https://github.com/yzalist/weather-dashboard/discussions)

---

**⭐ 如果你喜欢这个项目，请给个 Star！**

Made with ❤️ by [yzalist](https://github.com/yzalist)

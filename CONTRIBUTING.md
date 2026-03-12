# Contributing to Weather Dashboard

感谢你对 Weather Dashboard 项目的兴趣！本文档提供了贡献指南。

## 开发流程

### 1. 克隆仓库
```bash
git clone https://github.com/yzalist/weather-dashboard.git
cd weather-dashboard
```

### 2. 安装依赖
```bash
pnpm install
```

### 3. 启动开发服务器
```bash
pnpm run dev
```

访问 `http://localhost:3000` 查看应用。

### 4. 进行更改

在 `client/src/` 目录下进行修改。项目结构：

```
client/
├── src/
│   ├── pages/        # 页面组件
│   ├── components/   # 可复用组件
│   ├── hooks/        # 自定义 Hooks
│   ├── lib/          # 工具函数
│   ├── App.tsx       # 主应用组件
│   ├── main.tsx      # 入口文件
│   └── index.css     # 全局样式
├── public/           # 静态资源
└── index.html        # HTML 模板
```

### 5. 构建项目
```bash
pnpm run build
```

### 6. 类型检查
```bash
pnpm run check
```

### 7. 代码格式化
```bash
pnpm run format
```

## 设计理念

项目采用 **现代极简主义 + 气象数据美学** 的设计方向。详见 `ideas.md`。

### 核心原则
- **极简但不空洞**：移除不必要的装饰，保留功能本质
- **数据驱动的视觉层级**：通过大号字体和颜色突出关键数据
- **自然与科技的融合**：融入自然元素，使用柔和的渐变背景
- **可访问性优先**：高对比度、清晰的信息结构

### 色彩系统
- **晴天背景**：浅蓝 `oklch(0.85 0.15 250)`
- **高温强调**：暖橙红 `oklch(0.65 0.25 30)`
- **低温强调**：冷蓝 `oklch(0.55 0.2 250)`
- **文字主色**：深灰 `oklch(0.25 0.01 0)`

## 功能开发指南

### 添加新功能

1. 在 `client/src/components/` 创建新组件
2. 使用 shadcn/ui 组件保持设计一致性
3. 使用 Tailwind CSS 进行样式设计
4. 确保响应式设计（移动端优先）

### 集成天气 API

项目使用 mock 数据。要集成真实 API：

1. 选择天气数据源（如 OpenWeatherMap、WeatherAPI）
2. 在 `client/src/lib/` 创建 API 客户端
3. 更新 `Home.tsx` 中的数据获取逻辑
4. 添加错误处理和加载状态

示例：
```typescript
// client/src/lib/weatherApi.ts
export async function fetchWeather(city: string) {
  const response = await fetch(`https://api.example.com/weather?q=${city}`);
  return response.json();
}
```

## 提交规范

使用 Conventional Commits 格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码风格（不影响功能）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 添加或修改测试
- `chore`: 构建、依赖等变更

### 示例
```
feat(weather): add temperature trend chart

- Integrate Recharts for temperature visualization
- Add hourly temperature data mock
- Responsive chart design for all devices

Closes #123
```

## 自动化工作流

项目使用 GitHub Actions 进行自动化：

- **Daily Update**：每天自动生成更新记录
- **Build & Test**：构建验证和类型检查
- **Push to Main**：自动推送更改

## 常见问题

### 如何运行开发服务器？
```bash
pnpm run dev
```

### 如何构建生产版本？
```bash
pnpm run build
```

### 如何检查类型错误？
```bash
pnpm run check
```

### 如何格式化代码？
```bash
pnpm run format
```

## 性能优化建议

1. **图片优化**：使用 WebP 格式，压缩大小
2. **代码分割**：使用 React.lazy 进行路由级别代码分割
3. **缓存策略**：利用浏览器缓存和 Service Worker
4. **数据获取**：实现请求缓存和去重

## 测试

项目使用 Vitest 进行单元测试（可选）。

```bash
pnpm run test
```

## 部署

项目可部署到以下平台：

- **Vercel**：推荐用于 React 应用
- **Netlify**：静态站点托管
- **GitHub Pages**：免费托管
- **自托管**：使用 Docker 或 Node.js

## 获取帮助

- 查看 [GitHub Issues](https://github.com/yzalist/weather-dashboard/issues)
- 提交 [Pull Request](https://github.com/yzalist/weather-dashboard/pulls)
- 阅读项目文档和代码注释

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

---

感谢你的贡献！🎉

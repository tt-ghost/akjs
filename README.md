# akjs

> 基于 Koa 的 Nodejs 轻量框架，快速生成后台服务

## 核心依赖

```
node + koa2 + koa-router
```

## 项目介绍

1. 项目中定义 `app.js`

```js
class App extends Application {
  ready() {
    // 配置、插件、中间件、路由等加载完成后，app启动前的hook
  }
  started() {
    // app 启动后hook
  }
}
new App().start()
```

## 示例项目

[akjs-examples](https://github.com/tt-ghost/akjs-examples)

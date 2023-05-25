# akjs

> 轻量级框架 Nodejs 框架

## 安装

```sh
npm install akjs -S
```

## 核心功能

- 规划化项目目录

```sh
├── app.js                // 入口文件
├── config                // 配置文件，与default.conf.js文件合并
│   ├── default.conf.js
│   └── dev.conf.js       // [NODE_ENV].conf.js 环境通过应用启动时传入，
│                         // 使用制定配置，与default.conf.js合并
│
├── middleware            // 中间件目录
│   ├── index.js
│   └── body-parser.js
├── module                // 业务模块，每个文件夹对应一个模块，含route\service\model
│   ├── index.js
│   └── user              // 业务模块
└── plugin
    ├── index.js
    └── validate.js
```

- 模块独立管理，如: `module/user` 对应以下文件：

```sh
├── module                // 业务模块
│   ├── index.js          // 模块聚合入口，主要子路由控制
│   └── user              // 用户模块，将Controller、Service、Model放一起管理
│       ├── index.js      // 模块路由定义
│       ├── Controller.js
│       ├── Service.js
│       └── Model.js
```

- 自定义中间件，app 为 koa 实例，所以 [koa](https://koajs.com/) 中间件均可使用
- `app.js` 示例

```js
import { Application } from "akjs";

class App extends Application {
  ready() {
    // 配置、插件、中间件、路由等加载完成后，app启动前的hook
  }
  started() {
    // app 启动后hook
  }
}

// 调用 start 启动应用
new App().start();
```

## 示例项目

[akjs-examples](https://github.com/tt-ghost/akjs-examples)

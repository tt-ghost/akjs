# koa-startkit

> koa脚手架工具，快速生成node + koa + mysql等功能的后台服务

## 核心依赖
```
node + koa2 + mysql + pm2
```

## 环境

- `mysql` 安装
```shell
# mac 电脑
brew install mysql -y
```

- `node`、`nvm`安装
  - node 下载地址 [https://nodejs.org/en/](https://nodejs.org/en/)
  - `nvm`(node版本管理工具) 安装 [https://github.com/creationix/nvm](https://github.com/creationix/nvm)


## 项目启动
 
1. 依赖安装 `npm i`
2. 启动数据库 `mysql.server start`
3. 登录数据库 `mysql -uroot -p` 输入密码进入
4. 创建数据库 `CREATE DATABASE koa_startkit;`
5. 启动方式
   - 本地启动 `npm start`
   - 测试环境启动 `npm run server-test`
   - 预发环境启动 `npm run server-stage`
   - 线上环境启动 `npm run server-prod`

- 日常运维，[pm2文档](https://github.com/creationix/nvm)

## 项目结构
```

```
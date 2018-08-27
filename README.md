# vue-antd-management

> 一个基于vue、koa2、mysql、antd的后台管理系统

> [项目在线地址](32.232.73.32:3000)

[个人博客](https://gongjs.github.io/) 后续更新此项目的教程.

## 安装

`git clone git@github.com:GongJS/vue-antd-management.git`

`cd vue-antd-management`

`npm install` or `yarn`

- 需要安装`mysql`(作者的版本是5.7)，创建一个名为`management`的数据库，同时新建5张表，表的名字和server/schema里面的5个js文件同名，字段保持一致；
- 更改`server/config/db.js`里面的数据库信息，把`mysql://root:XXXX@localhost/management`里面的`XXXX`换成自己的数据库密码；
- 启动 mysql服务

## 运行

`npm run dev`     //打包前端代码
`node index.js`   //启动koa服务器

打开浏览器地址： `localhost:8080`

> 登录账号: redell  密码：123

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 GongJS


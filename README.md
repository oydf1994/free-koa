
使用装饰器基于koa封装的简单易用优雅的后端框架
## 开始
```
git clone https://gitee.com/east0616/free-koa-template.git

npm instal

npm run dev 

npm run start
````
## 目前已完成注解
+ Get - router的get请求
+ Post - router的post请求
+ Middleware - 声明一个class的内部方法为中间件 
+ Order - 中间件排序
+ Service - 提供单例的 Service
+ Config - 全局配置 作用在global
+ Model - sequelize model 声明
+ Column - sequelize 列 声明
+ Sequelize - 提供一个 sequelize
+ Inject - 在当前class注入 sequelize model

# 演示 
### Router
```
@Router("/user")
class IndexRouter {
    @Get("/test")
    async index({ }) {
        return "test"
    }
    @Post("/test")
    async test({ body, query }) {
        return query
    }
}
```

## middleware
```
@Middleware()
class Index {
    @Order(100)
    async init(ctx, next) {
        await next()
    }
    @Order(2)
    async init2(ctx, next) {
        await next()
    }
}
```
## sequelize
```
@Model()
class User {

    @Column({ type: DataTypes.STRING, primaryKey: true })
    id;

    @Column({ type: DataTypes.STRING })
    name;
}
```

## TODO
+ 更多的组件适配
+ 定时任务
+ 自定义扩展
+ 现在的装饰器参数






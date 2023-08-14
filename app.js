const Koa = require('koa')
const app = new Koa()
const KoaRouter = require('koa-router')
const router = new KoaRouter();

//启动路由
app.use(router.routes()).use(router.allowedMethods())
//1.后台接口地址与前端访问地址一致，如果前端增加了一个/ibrdc-api ，后台接口在前面统一增加一个/ibrdc-api；相反如果后台在接口前面统一加了个/ibrdc-api ，则前台在访问的的接口前也要加上/ibrdc-api 。
//2.接口地址loc：3000/api/user可在浏览器直接访问。

router.post('/user/auth/login',async ctx => {
    ctx.body = {
        result_code: 0,
        result_data: {
            token: 'fjhaoiesfakdjfa',
            name: '陈飞',
            
        }
    }
})
router.get('/api/getList',async ctx => {
    ctx.body = {
        code: 20000,
        data: {
            list: [
                {
                    text: '一'
                },
                {
                    text: '二'
                },
                {
                    text: '三'
                }
            ],
            total: 10
        },
        msg: '列表获取成功'
    }
})
app.listen(3000,()=> {console.log('服务已启动,监听端口：3000')})
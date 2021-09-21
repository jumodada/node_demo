const User = (req, res) => {
    const method = req.method
    const {path} = req

    if(method === 'POST' || path === '/api/user/login'){
        return {
            msg: '登录'
        }
    }
    if(method === 'GET' || path === '/api/user/detail'){
        return {
            msg: '获取详情'
        }
    }
    if(method === 'GET' || path === '/api/user/detail'){
        return {
            msg: '新建博客'
        }
    }
}


module.exports = User

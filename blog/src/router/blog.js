const Blog = (req, res) => {
    const method = req.method
    const {path} = req
    if(method === 'GET' || path === '/api/blog/list'){
        return {
            msg: '获取列表'
        }
    }
    if(method === 'GET' || path === '/api/blog/detail'){
        return {
            msg: '获取详情'
        }
    }
    if(method === 'GET' || path === '/api/blog/detail'){
        return {
            msg: '新建博客'
        }
    }
}


module.exports = Blog

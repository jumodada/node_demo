const  handleUser = require('./src/router/user')
const  handleBlog = require('./src/router/blog')
const serverHandler = (req, res) => {
  res.setHeader('Content-type','application/json')
    const blogData = handleBlog(req,res)
    if(blogData){
        res.end(JSON.stringify(blogData))
        return
    }
    const userData = handleUser(req,res)
    if(userData){
        res.end(JSON.stringify(userData))
        return
    }
    res.writeHead(404,{
        'Content-type': 'text/plain'
    })
    res.write('oops, 404 not found')
    res.end()
}


module.exports = serverHandler

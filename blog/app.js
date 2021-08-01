module.exports = function (req,res) {
    res.setHeader('Content-type','application/json')
    const resData = {
        data: 'test1'
    }
    res.end(JSON.stringify(resData))
}

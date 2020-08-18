const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>hello world</h1>')
})
server.listen(3000, ()=>{
    console.log('listening on 3000 port');
})

// 开发node需要注意的事情：
// 1.服务稳定性
// 2.内存和cpu
// 3.日志记录
// 4.安全,sql注入，xss攻击
// 5.集群和服务拆分
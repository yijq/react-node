let express = require("express")
let cheerio = require("cheerio")
let charset = require('superagent-charset');
let superagent = charset(require('superagent'));
let cors = require("cors")

let app = express();
app.use(cors());
let items = [];

app.get('/index',(req,res,next)=>{
    console.log("准备获取dytt首页数据")
    items = []
    superagent.get("http://www.dytt8.net/")
    .charset("gbk")
    .end(function (err, sres) {
        if(err){
            console.log("error")
            return next(err);
        }
        console.log("获取dytt首页数据成功")
        let $ = cheerio.load(sres.text)
        
        $(".co_area2 .co_content8 td a").each((i,v)=>{
            let item = $(v);
            let href = item.attr("href")
            let title = item.text()
            if(!href.includes('index') && !href.includes('dongman') && !href.includes('newgame')){
                items.push({
                    title: title,
                    href: href
                })
            }
            
        })
        res.send(items)
    })
})

app.get("/detail",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.query.id)
    let id = req.query.id
    console.log("准备获取电影详情")
    superagent.get("http://www.dytt8.net/" + items[id].href)
    .charset("gbk")
    .end(function (err, sres) {
        if(err){
            console.log("error")
            return next(err);
        }
        console.log("获取电影详情成功")
        let $ = cheerio.load(sres.text)
        let imgUrl = $("#Zoom>span>img").first().attr("src")
        let movieSrc = $("#Zoom>span>table>tbody>tr>td>a").attr("href")
        let detail = {
            "imgUrl": imgUrl,
            "movieSrc": movieSrc
        }
        console.log(detail)
        res.send(detail)
    })
})


app.listen(3000,function() {
    console.log("dytt : port 3000 ")
})
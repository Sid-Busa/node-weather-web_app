const express = require("express")
const path = require("path")
const hbs = require ("hbs")
const chalk = require("chalk")
const geocode = require("./utills/geocode")
const forecast = require("./utills/forecast")
const app = express()
const port = process.env.PORT || 3000 

//node has predefine two variable 
console.log(__dirname)
console.log(__filename)

//Define Path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewDirectoryPath = path.join(__dirname,'../template/views')
const partialDirectoryPath = path.join(__dirname,'../template/partials') 

app.set("view engine","hbs")
app.set("views",viewDirectoryPath)
hbs.registerPartials(partialDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.get('' , (req,res)=>{  
    res.render('index',{
        title:"Weather",
        name :"sid"
    })
})

app.get('/about' , (req,res)=>{
    res.render('about',{
        title:"About us Page",
        name :"sid"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help Page",
        name :"sid"
    })

})
//app.com/weather
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Please Enter Address",
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

        if(error){
            return res.send(error)
        }

        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send(error)
            }
            
            res.send({
                    forecast:forecastData,
                    location,
                    address : req.query.address
            })
        })

        

    })

    // res.send({
    //     forecast :"it is summer",
    //     location:"India",
    //     Temperature: 30,
    //     rain :0+"%",
    //     address:req.query.address, 
    // })
})

app.get('/product',(req,res)=>{

    if(!req.query.search)
    {
      return res.send({
            error:"Please use the search key ",
        })
    }

    res.send({
        forecast:[]
    })

})
// any path is not match then we can write specific message
app.get("/help/*", (req,res)=>{
    res.render("404",{
        title: 404,
        errorMessage :" This Page Cannot be Found",
        name :"sidBusa"
    })
})

app.get("*",(req,res)=>{
    res.render("404",{
        title: 404,
        errorMessage :" This Page Cannot be Found",
        name :"sidBusa"
    })
})

app.listen(port,()=>
    console.log(chalk.yellow("server is running in port number "+port)))
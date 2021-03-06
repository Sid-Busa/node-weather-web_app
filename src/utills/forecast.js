const request = require("request")
  const forecast = (latitude,longitude,callback)=>
  {
      const url ="https://api.darksky.net/forecast/3874d5bd1281fcf00aa24d2561b97c20/"+latitude+","+longitude

      request({ url,json:true},(error,{ body })=>{
          if(error){
              callback("No Internet Access! Connection Failed",undefined)
          }else if(body.error){
                callback(response.error,undefined)
          }else{
              const Temperature = ((body.currently.temperature-32)*(5/9))
              const fixed = Temperature.toFixed(2)
                callback(undefined,body.currently.summary+ " Temperature is "+fixed+", Chances "+body.currently.precipProbability+" % of rain "
                         +",WindSpeed is "+body.currently.windSpeed+" "
                         +",Pressure is " +body.currently.windSpeed 
                        )
          }
      })
  }

  module.exports = forecast
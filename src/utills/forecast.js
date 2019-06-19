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
                callback(undefined,body.currently.summary+ " Temperature is "+body.currently.temperature+" Chances "+body.currently.precipProbability+" % of rain")
          }
      })
  }

  module.exports = forecast
const request = require("request")
const geocode = (address,callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoic2lkYnVzYSIsImEiOiJjandvamNqb2EwNzYzNDltdzV6bHVoNWM5In0.x-zi240oxqVngNg5YLiCGw&limit=1"

    request ({ url , json:true},(error,{ body })=>
    {
        if(error){
            callback("No Internet Access! Connection Failed",undefined)
        }
        else if(body.features.length ===0){
            callback({error: "Unable to find the location"},undefined)
        }else{
            callback(undefined,{
                latitude : body.features[0].center[1],
                longitude: body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
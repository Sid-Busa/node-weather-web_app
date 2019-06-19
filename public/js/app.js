console.log("Client side scripting is running")

// fetch("http://puzzle.mead.io/puzzle").then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// fetch("http://localhost:3000/weather?address=!").then((response)=>{
//     response.json().then((data) => {
//         if(data.error){
//             return console.log("Error")
//         }
//         else{
//         console.log(data.forecast)
//         console.log(data.location)
//         console.log(data.address)
//         }  
//     })
// })



const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const message1 = document.querySelector("#Message-1")
const message2 = document.querySelector("#Message-2")

message1.textContent="Loading...."


weatherForm.addEventListener("submit",(event)=>{
        event.preventDefault()

        const location =search.value
        console.log(location)

       fetch("http://localhost:3000/weather?address="+location).then((response) =>{
        response.json().then((data)=>{
        if(data.error){
            message1.textContent=data.error
        }
        else{
            message1.textContent = data.location
            message2.textContent = data.forecast
        }

    })
})

})

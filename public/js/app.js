
const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const message1 = document.querySelector("#Message-1")
const message2 = document.querySelector("#Message-2")

message1.textContent="Loading...."


weatherForm.addEventListener("submit",(event)=>{
        event.preventDefault()

        const location =search.value
        console.log(location) 

       fetch("/weather?address="+location).then((response) =>{           
        response.json().then((data)=>{
        if(data.error){
            message1.textContent="Can not Found location"
        }
        else{
            message1.textContent = data.location
            message2.textContent = data.forecast
        }

    })

})
       
})

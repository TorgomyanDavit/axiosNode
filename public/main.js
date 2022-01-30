


const postRequest = document.querySelector("#postRequest")
postRequest.onclick = () => {
    axios.post("/postRequest",{
        postRequest: 'true',
        name: 'Request'
    })
    .then((response) => {
        console.log(response.data)
    })
}

const getRequest = document.querySelector("#getRequest")
getRequest.onclick = () => {
    axios.get("/getRequest")
    .then((response) => {
        console.log(response.data)
    })
}

const getRequestbyGivenId = document.querySelector("#getRequestbyGivenId")
getRequestbyGivenId.onclick = () => {
    axios.get("/getRequestbyGivenId/1")
    .then((response) => {
        console.log(response.data)
    })
}

const PutRequestbyGivenId = document.querySelector("#PutRequestbyGivenId")
PutRequestbyGivenId.onclick = () => {
    axios.put("/PutRequestbyGivenId/2",{
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then((response) => {
        console.log(response.data)
    })
}

const deleteRequest = document.querySelector("#deleteRequest")
deleteRequest.onclick = () => {
    axios.delete("/deleteRequest/1")
    .then((response) => {
        console.log(response.data)
    })
}

const queryRequest = document.querySelector("#queryRequest")
queryRequest.onclick = () => {
    axios.get("/queryRequest/?name=armen&username=sharyan")
    .then((response) => {
        console.log(response)
    })
}

const findbineryNumber = document.querySelector("#findbineryNumber")
findbineryNumber.addEventListener("click",() => findBinary("1111"))
function findBinary(number) {
    const arr = number.split("")
    let r = arr.map((val) => {
        return +val
    })
    .reverse()
    .reduce((aggr,val,i) => {
        // debugger
        if(val > 0) {
            aggr[i] = Math.pow(2,i)
            return aggr
        }
        aggr[i] = 0
        return aggr
    },[])
    .reduce((aggr,val) => {
        aggr += val
        return aggr
    },0)
    console.log(r)
}



/**EVent Loop */
const EventLoop = document.querySelector("#EventLoop")
EventLoop.addEventListener("click",function() {
   
    setTimeout(() => {
        alert("setTimeout")
    },0);
    function promise() {
        return new Promise(function(resolve,reject) {
            resolve("Promise")
        })
    }
    promise().then((result) => {
        alert(result)
    })
})



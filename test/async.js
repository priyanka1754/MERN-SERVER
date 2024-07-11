//testing on async functions

function fetchdata(callback){
    setTimeout(()=>{
        callback('admin')
    },1000)
}

function myData(callback){
    setTimeout(()=>{
        callback({id:10001})
    },3000)
}

module.exports={fetchdata,myData}
const doWork = (callback) =>{
    setTimeout(() => {
        callback('This is my error!', undefined)
        callback(undefined, [1,3,5])
    }, 2000)
}

doWork((error, reuslt) => {
    if (error){
        return console.log(error)
    }
    console.log(reuslt)
})
const doWork = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([2,4,6])
        reject("Error!")
    }, 2000);
})

doWork.then((result) => {
    console.log("Success =", result)
}).catch((error) => {
    console.log(error)
})
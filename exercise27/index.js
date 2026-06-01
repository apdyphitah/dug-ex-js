function fet(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const guul = true
            if(guul){
                resolve("Fetch successful");
            } else {
                reject("Fetch failed");
            }
        }, 2000);
    });    
}   

fet()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
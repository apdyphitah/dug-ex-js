
async function fet() {
    try { const message = await new Promise((resolve, reject) => {
        setTimeout(() => {
            const guul = true
            if(guul){
                resolve("Fetch successful");
            } else {
                reject("Fetch failed");
            }
            }, 2000);
        });
        console.log(message);
    
    } catch (error) {
        console.error(error);
    }
}
fet();  

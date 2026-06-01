async function fet() {
    console.log("Fetching data...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    
    console.log(data);
   
}
fet();

console.log("This will log before the fetch completes.");

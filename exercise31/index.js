async function data() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }else {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

data();

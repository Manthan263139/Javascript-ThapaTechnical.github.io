// Promises
// const jokes=document.querySelector('#joke')
// const jokeBtn=document.querySelector('#jokeBtn')
// const generateJokes=()=>{
//     fetch('https://icanhazdadjoke.com')
//     .then((res) =>{
//        console.log(res.json()) 
//     }).catch((error)=>{
//         console.log(error)
//     })
// }
// jokeBtn.addEventListener('click',generateJokes)
// generateJokes()

const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Function to fetch a joke from the JokeAPI
async function getJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();

        if (data.type === "twopart") {
            jokeElement.innerHTML = `${data.setup}<br>${data.delivery}`;
        } else {
            jokeElement.textContent = data.joke;
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeElement.textContent = "Failed to fetch a joke. Please try again later.";
    }
}

// Initial joke
getJoke();

// Event listener for the "Next Joke" button
jokeBtn.addEventListener("click", getJoke);

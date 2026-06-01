const title = document.querySelector("#main-title");
console.log("Selected with querySelector:", title);

const firstMovie = document.querySelector(".movie");
console.log("First movie selected with querySelector:", firstMovie);

const allMovies = document.querySelectorAll(".movie");
console.log("All movies selected with querySelectorAll:", allMovies);

allMovies.forEach((movie) => {
  console.log("Movie:", movie.textContent);
});

const description = document.querySelector(".description");
console.log("Description:", description);
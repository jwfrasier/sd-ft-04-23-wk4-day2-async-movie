const searchButton = document.querySelector("#searchButton");
const movieCards = document.querySelector("#movieCards");
searchButton.addEventListener("click", () => searchMovie());

async function searchMovie() {
  movieCards.innerHTML = "";
  const searchbox = document.querySelector("#searchbox").value;
  const movieResults = await fetch(
    `http://www.omdbapi.com/?apikey=&s=${searchbox}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );
  const json = await movieResults.json();
  json.Search.forEach((movie) => {
    const movieCard = document.createElement("div");
    const moviePoster = document.createElement("img");
    const movieTitle = document.createElement("h7");
    const movieYear = document.createElement("h7");
    movieCard.classList.add("card");
    moviePoster.src = movie.Poster;
    moviePoster.addEventListener("click", () => findMovieDetails(movie.imdbID));
    movieTitle.innerText = movie.Title;
    movieYear.innerText = movie.Year;
    movieCard.append(moviePoster, movieTitle, movieYear);
    movieCards.append(movieCard);
  });
}
// this gets details about one movie only

async function findMovieDetails(id) {
  const movieCard = document.createElement("div");
  const moviePoster = document.createElement("img");
  const movieTitle = document.createElement("h7");
  const moviePlot = document.createElement("p");
  const movieResults = await fetch(
    `http://www.omdbapi.com/?apikey=c2b8d3c5&i=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  );
  const json = await movieResults.json();
  movieCards.innerHTML = "";
  movieCard.classList.add("card");
  moviePoster.src = json.Poster;
  movieTitle.innerText = json.Title;
  moviePlot.innerText = json.Plot;
  movieCard.append(moviePoster, movieTitle, moviePlot);
  movieCards.append(movieCard);
}

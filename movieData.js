const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => searchMovie());

async function searchMovie() {
  const searchbox = document.querySelector("#searchbox").value;
  const movieResults = await fetch(
    `http://www.omdbapi.com/?apikey=c2b8d3c5&s=${searchbox}`,
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
}
// this gets details about one movie only

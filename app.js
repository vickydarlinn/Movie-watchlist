const movieSearchButton = document.querySelector("#movieSearchBtn");
// using Enter Keyword
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    movieSearch();
  }
});

movieSearchButton.addEventListener("click", movieSearch);
const template = document.querySelector(".movies-list");

function movieSearch() {
  const movieName = document.querySelector("#seachInput").value;
  let url = urlMaker(movieName);
  moviesListGenerator(url);
}

function urlMaker(movieName) {
  let url = ` https://www.omdbapi.com/?s=${movieName.replaceAll(
    " ",
    "+"
  )}&apikey=a3a84389`;
  return url;
}
function moviesListGenerator(url) {
  let id = [];
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.Response === "False") {
        document.querySelector(".not-found").textContent = "Movie Not found";
      } else {
        data.Search.forEach((movie) => {
          id.push(movie.imdbID);
        });
        id.forEach((id) => {
          let url = ` https://www.omdbapi.com/?i=${id}&apikey=a3a84389`;
          fetch(url)
            .then((res) => res.json())
            .then((movie) => {
              templateGenerator(movie);
              // ///
              const watchlistButton =
                document.querySelectorAll(".watchlist-button");
              watchlistButton.forEach((btn) =>
                btn.addEventListener("click", function () {
                  if (btn.textContent != "Added") {
                    console.log(btn);
                    console.log(this.id);
                    btn.textContent = "Added";
                    btn.style.backgroundColor = "#ADFF2F";
                    window.localStorage.setItem(this.id, this.id);
                  } else {
                    btn.textContent = "add";
                    btn.style.backgroundColor = "white";
                    window.localStorage.removeItem(this.id);
                  }
                })
              );
            });
        });
      }
    });
  template.innerHTML = "";
  document.querySelector("#seachInput").value = "";
}
// ////////////////////
function templateGenerator(movie) {
  template.innerHTML += `<div class="movie-container flex">
    <div class="movie-poster">
      <img src="${movie.Poster}" alt="movie poster" />
    </div>
    <div class="movie-info">
      <div class="movie-header flex">
        <h3 class="movie-heading">${movie.Title}</h3>
        <span class="movie-rating">⭐️ ${movie.imdbRating}</span>
      </div>
      <div class="movie-extraInfo flex">
        <div class="movie-about flex">
          <span class="movie-duration">${movie.Runtime}</span>
          <span class="movie-genre">${movie.Genre}</span>
        </div>
        <button class="watchlist-button" id="${movie.imdbID}">Add</button>
      </div>
      <div class="movie-story">
        <p>
          ${movie.Plot}
        </p>
      </div>
    </div>
  </div>`;
}
// /////////////

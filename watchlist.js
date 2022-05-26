"use strict";
const template = document.querySelector(".watch-list");

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}
let ids = allStorage();
// console.log(ids);
ids.forEach((id) => {
  let url = ` http://www.omdbapi.com/?i=${id}&apikey=a3a84389`;
  fetch(url)
    .then((res) => res.json())
    .then((movie) => {
      templateGenerator(movie);
      //
      const removeButton = document.querySelectorAll(".remove-button");
      removeButton.forEach((btn) =>
        btn.addEventListener("click", function () {
          btn.textContent = "Removed";
          btn.style.backgroundColor = "red";
          window.localStorage.removeItem(this.id);
          location.reload();
        })
      );
    });
});
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
              <button class="remove-button" id="${movie.imdbID}">Remove</button>
            </div>
            <div class="movie-story">
              <p>
                ${movie.Plot}
              </p>
            </div>
          </div>
        </div>`;
}

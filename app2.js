// const movieName = document.querySelector("#movieSearch");
// const movieSearch = document.querySelector(".movieSearchButton");

// function urlMaker(movieName) {
//   const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=a3a84389&s=${movieName.replaceAll(
//     " ",
//     "+"
//   )}`;

//   return movieUrl;
// }

// movieSearch.addEventListener("click", function () {
//   let url = urlMaker(movieName.value);
//   fetch(url)
//     .then((res) => res.json())
//     .then((movies) => {
//       // console.log(movies);
//       if (movies.Response === "False") {
//         return alert("Movie not found");
//       } else {
//         // console.log(movies.Search);
//         let imbdIDS = [];

//         movies?.Search?.forEach((movie) => {
//           imbdIDS.push(movie.imdbID);
//         });
//         // console.log(imbdIDS);
//         imbdIDS.forEach((id) => {
//           // console.log(`http://www.omdbapi.com/?i=${id}&apikey=a3a84389`);
//           fetch(`http://www.omdbapi.com/?i=${id}&apikey=a3a84389`)
//             .then((resp) => resp.json())
//             .then((movie) => {
//               console.log(movie);
//               document.querySelector(
//                 ".movies-arr"
//               ).innerHTML += ` <div class="movie-container flex">
//             <div class="movie-image">
//               <img
//                 src="${movie.Poster}"
//                 alt=""
//               />
//             </div>
//             <div class="movie-about">
//               <div class="movie-title flex">
//                 <h4>${movie.Title}</h4>
//                 <span class="movie-rating">⭐️${movie?.imdbRating}</span>
//               </div>
//               <div class="movie-actions flex">
//                 <span class="movie-duration">${movie.Runtime} min</span>
//                 <span class="movie-genre">${movie.Genre}</span>
//                 <button class="movie-watchlist" id=${movie.imdbID}>➕ Watchlist</button>
//               </div>
//               <div class="movie-para">
//                 <p>${movie.Plot}
//                 </p>
//               </div>
//             </div>
//           </div>`;
//             });
//         });
//       }
//     });

//   document.querySelector(".movies-arr").innerHTML = "";
//   movieName.value = "";
// });
// // document.addEventListener("keypress", function (e) {
// //   // console.log(e);
// //   // console.log(`pressed`);
// //   if (e.key === "Enter") {
// //     console.log("gud job");
// //     jcb();
// //     function jcb() {
// //       let url = urlMaker(movieName.value);
// //       fetch(url)
// //         .then((res) => res.json())
// //         .then((movies) => {
// //           // console.log(movies);
// //           if (movies.Response === "False") {
// //             return alert("Movie not found");
// //           } else {
// //             // console.log(movies.Search);
// //             let imbdIDS = [];

// //             movies?.Search?.forEach((movie) => {
// //               imbdIDS.push(movie.imdbID);
// //             });
// //             // console.log(imbdIDS);
// //             imbdIDS.forEach((id) => {
// //               // console.log(`http://www.omdbapi.com/?i=${id}&apikey=a3a84389`);
// //               fetch(`http://www.omdbapi.com/?i=${id}&apikey=a3a84389`)
// //                 .then((resp) => resp.json())
// //                 .then((movie) => {
// //                   console.log(movie);
// //                   document.querySelector(
// //                     ".movies-arr"
// //                   ).innerHTML += ` <div class="movie-container flex">
// //             <div class="movie-image">
// //               <img
// //                 src="${movie.Poster}"
// //                 alt=""
// //               />
// //             </div>
// //             <div class="movie-about">
// //               <div class="movie-title flex">
// //                 <h4>${movie.Title}</h4>
// //                 <span class="movie-rating">⭐️${movie?.imdbRating}</span>
// //               </div>
// //               <div class="movie-actions flex">
// //                 <span class="movie-duration">${movie.Runtime} min</span>
// //                 <span class="movie-genre">${movie.Genre}</span>
// //                 <button class="movie-watchlist">➕ Watchlist</button>
// //               </div>
// //               <div class="movie-para">
// //                 <p>${movie.Plot}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>`;
// //                 });
// //             });
// //           }
// //         });

// //       document.querySelector(".movies-arr").innerHTML = "";
// //       movieName.value = "";
// //     }
// //   }
// // });

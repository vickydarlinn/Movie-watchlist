url = `http://www.omdbapi.com/?i=tt3896198&apikey=a3a84389&s=the+dark+knight`;
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

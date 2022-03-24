
var movieSearchElement = document.getElementById("input-tag")
var button = document.getElementById("search-btn")
var movieCardWrapper=document.getElementById("Card-Wrapper")

button.addEventListener("click", function () {
    var xhttp = new XMLHttpRequest()
    movieName = movieSearchElement.value
    api = "https://www.omdbapi.com/?apikey=c951ff1&s=" + movieName
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            var result = JSON.parse(this.responseText)
            console.log(result)
            if(result.Response == "True"){
               var movies=result.Search;
               
               for(var i=0;i<movies.length;i++){
                   var moviecard=document.createElement("div")
                   moviecard.className="card"
                   var poster=document.createElement("img")
                   poster.classname="movie-image"
                   poster.src=movies[i].Poster
                   moviecard.appendChild(poster)
                   movieCardWrapper.appendChild(moviecard)
                   
               }

            }
            else{
                movieCardWrapper.innerText="404 movie not found"
            }
        }
    }
   
    xhttp.open("GET", api, true)
    xhttp.send()
})
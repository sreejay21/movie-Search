
var inputElement = document.getElementById("movie-name")

var searchButton = document.getElementById("search-btn");

var moviesWrapper = document.getElementById("movies-wrapper")

  var resultDiv =  document.getElementById("result-div")

  var loaderDiv = document.getElementById("loader")

searchButton.onclick = function(){

    if(inputElement.value !== "" ){
 
    resultDiv.innerHTML = ""
    
    moviesWrapper.innerHTML = ""

    loaderDiv.innerText = "Loading......."


    
 var http = new XMLHttpRequest();

 http.onreadystatechange = function(){

      if(this.readyState == 4){

        inputElement.value = ""

        loaderDiv.innerText = ""
    
       
      var result =  JSON.parse(this.responseText)

      console.log(result)
      
      if(result.Response == "True"  ){
        var movies = result.Search
        resultDiv.innerText = "Total results : "+ movies.length
         for( var i = 0 ; i < movies.length ; i++ ){
             // POSTER , TITLE , RELEASE YEAR , TYPE
             var movieCard = document.createElement("div");
             movieCard.className = "movie-card"
             var movieImage =  document.createElement("img");
             movieImage.src = movies[i].Poster
             movieImage.className = "movie-image"
             var movieTitle = document.createElement("p");
             movieTitle.innerText = "Title : " +movies[i].Title
             var Type = document.createElement("p");
             Type.innerText = "Type : " + movies[i].Type
             var releaseYear = document.createElement("p")
             releaseYear.innerText = "Release Year : " + movies[i].Year
             movieCard.append(movieImage, movieTitle,Type,releaseYear )
             moviesWrapper.appendChild(movieCard)
            

         }
      }else{
        resultDiv.innerHTML = `404 Movies not found !`
          console.log("Movies not found")
      }

      
      }

 }

 http.open("GET" , "https://www.omdbapi.com/?apikey=c951ff1&s="+ inputElement.value , true);

http.send()

}else{
    alert("Type something")
}
}





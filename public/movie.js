//Get the input field
var input = document.getElementById("search-movie");
var embed = document.getElementById("embed-player")

input.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        var value = input.value.toString();
        if(value.includes("tt")){
            var fullURL = "https://autoembed.to/movie/imdb/"+value;
            console.log(fullURL)
            embed.src=window.location.href.replace('/movie.html','')+`/mercury/?url=${btoa(fullURL)}`
        }
        else{
            return;
        }
    }
})
const apiKey = 'd3b5cd21'
let key = 't'

let searchBox = document.querySelector('#searchBox')
let poster = document.querySelector('#poster')
let title = document.querySelector('#title')
let actors = document.querySelector('#actors')
// Creating a variable called 'searchBox'
// searchBox is assigned to the input search box class


//The searchBox object will fire (aka call) a function when the user punches a key on their keyboard
//'e' refers to an object that contains data from the user (SHORT FOR EVENT OBJECT)
searchBox.addEventListener('keyup',function(e){
  //If nothing is typed, return and exit out of the function
  if(!e.target.value){
    poster.src=""
    title.innerHTML=""
    return
  } else {
    //Every time the event listener fires, it will call 'getMovie()'
    getMovie(e.target.value)
  }
})



function getMovie(input){
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&${key}=${input}`)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    makeMovie(data)
  });
}

function makeMovie(movie){
  if(movie.Error==='Movie not found!'){
    poster.src="images/cantFind.jpg"
    title.innerHTML = ''
    return
  } else {
    title.innerHTML = movie.Title
    actors.innerHTML = movie.Actors
    poster.src = movie.Poster    
  }
}

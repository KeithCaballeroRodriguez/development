window.addEventListener('load',() => {
    var preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("https://api.punkapi.com/v2/beers", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
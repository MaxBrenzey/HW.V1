let searchButton = document.querySelector("#search")
let input = document.querySelector('#inputValue');

searchButton.addEventListener("click", () => {
  console.log("button Pressed");
  sendApiRequest()
})

async function sendApiRequest() {
  let APP_ID = "f02fd65d"
  let API_KEY = "ebcf666cd63ce1b44e5f56b6a5e2495f"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${input.value}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


// Content
function useApiData(data) {
  document.querySelector("#content").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[0].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[0].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[0].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[0].recipe.ingredientLines}</p>
        <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `

  document.querySelector("#content1").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[1].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[1].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[1].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[1].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[1].recipe.ingredientLines}</p>
        <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `

  document.querySelector("#content2").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[2].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[2].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[2].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[2].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[2].recipe.ingredientLines}</p>
        <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector("#content3").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[3].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[3].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[3].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[3].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[3].recipe.ingredientLines}</p>
        <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector("#content3").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[3].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[3].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[3].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[3].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[3].recipe.ingredientLines}</p>
        <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector("#content5").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[5].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[5].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[5].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[5].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[5].recipe.ingredientLines}</p>
        <a href="${data.hits[5].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector("#content6").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[6].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[6].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[6].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[6].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[6].recipe.ingredientLines}</p>
        <a href="${data.hits[6].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector("#content7").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[7].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[7].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[7].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[7].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[7].recipe.ingredientLines}</p>
        <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector("#content8").innerHTML = `
  <div class="card theme" style="width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.hits[8].recipe.image}" class="card-img" style="height: 100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.hits[8].recipe.label}</h5>
        <p class="card-text">Health: ${data.hits[8].recipe.healthLabels}</p>
        <p class="card-text">Calories: ${data.hits[8].recipe.calories}</p>
        <p class="card-text">Ingredients: ${data.hits[8].recipe.ingredientLines}</p>
        <a href="${data.hits[8].recipe.url}" class="btn btn-primary">Read Article</a>
      </div>
    </div>
  </div>
</div>
  `
}







// theme


// get elements from the dom

const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');
const theme = document.querySelector('#theme');
const search = document.querySelector('#search');


// perecluchatu avtomat
const changeBackground = (e) => {
  // console.log(e);
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  card1.classList.toggle("bg-dark");
  card1.classList.toggle("text-light");
  search.classList.toggle("bg-warning");
  search.classList.toggle("text-light");
}




toggle.addEventListener('click', changeBackground);










// cutata

const quote_url = "https://favqs.com/api/qotd";


async function fetchQuote(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
var quoteElement = document.getElementById('quote-body');
var authorElement = document.getElementById('author');
var quoteContainerElement = document.getElementById('quote-container');

function updateQuote() {
  fetchQuote(quote_url).then(function(data) {
      quoteElement.innerText = data.quote.body;
      authorElement.innerText = data.quote.author;
  });
}

updateQuote();
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
      updateQuote();
  }
}







// staru pruklad tyt

// document.querySelector("#content7").innerHTML = `
// <div class="card offset-1" style="width: 20rem;">
//   <img src="${data.hits[7].recipe.image}" class="card-img-top">
//   <div class="card-body">
//      <h5 class="card-title">${data.hits[7].recipe.label}</h5>
//      <p class="card-text">Health: ${data.hits[7].recipe.healthLabels}</p>
//      <p class="card-text">Calories: ${data.hits[7].recipe.calories}</p>
//      <p class="card-text">Ingredients: ${data.hits[7].recipe.ingredientLines}</p>
//      <a href="${data.hits[7].recipe.url}" class="btn btn-primary">Read Article</a>
//   </div>
// </div>
// `
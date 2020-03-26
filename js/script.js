const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = `${baseUrl}character/`

function handleResponse(response) {
    return response.json();
}

function handleCharacters(json) {

    const results = [];
    const episode = [];
    const characterObjects = json.results;
    console.dir(characterObjects);

    const resultContainer = document.querySelector(".results");

    let html = "";

    characterObjects.forEach(function (result) {

        const characterEpisodes = result.episode;

        const newType = "Unknown";

        if (characterObjects.type) {
            const newType = characterObjects.type;
        }

        console.log(newType);

        html += `<div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
              <img class="image" src=${result.image} alt=${result.name}>
              <div class="details">
                  <h4 class="name">${result.name}</h4>
                  <p>Type: ${newType}</p>
                  <p>Episode count: ${characterEpisodes.length}</p>
                  <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
              </div>
          </div>
      </div>`
    });

    resultContainer.innerHTML = html;
}

function handleError(error) {
    //document.location.href = "error.html";
    console.log("Oops, her skjedde det en feil", error);
}

fetch(characterUrl)
    .then(handleResponse)
    .then(handleCharacters)
    .catch(handleError)

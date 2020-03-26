const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.dir(queryString);
console.dir(params);

let id;

if (params.has("id")) {
    id = params.get("id");
    console.log(id);
} else {
    document.location.href = "index.html";
}

const baseUrl = "https://rickandmortyapi.com/api/";
const detailsUrl = `${baseUrl}character/${id}`
console.dir(detailsUrl);
//Eksempel: `https://rickandmortyapi.com/api/character/2`

function handleResponse(response) {
    console.log("Hallo");
    //console.dir(response);
    return response.json();
}

function handleDetails(json) {
    console.dir(json);
    console.log(json.id);

    const origin = [];
    const location = [];

    document.title = json.name;

    const resultContainer = document.querySelector(".detail-container");

    let html = "";

        html += `<div class="detail-container">
    <img class="details-image" src="${json.image}" alt="${json.name}" />
    <div class="detail-details">
        <h1>${json.name}</h1>
        <p>Status: <span class="value" id="status">${json.status}</span></p>
        <p>Species: <span class="value" id="species">${json.species}</span></p>
        <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
        <p>Location: <span class="value" id="location">${json.location.name}</span></p>
    </div>
</div>`

    resultContainer.innerHTML = html;
};

function handleError(error) {
    console.log("Her gikk noe feil ...", error);
}

fetch(detailsUrl)
    .then(handleResponse)
    .then(handleDetails)
    .catch(handleError)

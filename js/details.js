const queryString = document.location.search;
const params = new URLSearchParams(queryString);

//const showLoaderDiv = document.querySelector(".loader");
//const showNavigationDiv = document.querySelector("nav");
//const shovMainDiv = document.querySelector("main");
//const showFooter = document.querySelector("footer");

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const baseUrl = "https://rickandmortyapi.com/api/";
const detailsUrl = `${baseUrl}character/${id}`

function handleResponse(response) {

    //showLoaderDiv.style.display = "block";
    //showNavigationDiv.style.display = "none";
    //shovMainDiv.style.display = "none";
    //showFooter.style.display = "none";

    return response.json();
}

function handleDetails(json) {
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
    document.location.href = "error.html";
}

fetch(detailsUrl)
    .then(handleResponse)
    .then(handleDetails)
    .catch(handleError)

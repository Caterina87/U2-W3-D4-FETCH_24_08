// Funzione collegata al primo bottone
function loadImages() {
  displayPhotos("people");
}
// Funzione collegata al secondo bottone
function loadImagesSecondary() {
  displayPhotos("ocean");
}
// Funzione  collegata al bottone Hide per scartare le card
const skipMe = (event) => {
  event.target.closest(".col-md-4").remove();
};
// Funzione  collegata al bottone di ricerca
function searchBtn() {
  displayPhotos(document.getElementById("searchInput").value);
}

// Questo è il metodo che chiama l'api rest delle foto passando il parametro
// con il tipo delle foto quindi può essere riutilizzato per i bottoni e per la ricerca

function displayPhotos(typePhoto) {
  const url = "https://api.pexels.com/v1/search?query=" + typePhoto;
  fetch(url, {
    headers: {
      Authorization: `b8hHQj0PKlELIlJEe08oY87KfnFAgkdsZQ0pmPyRqo2lvl1mo3fxnBDB`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      const row = document.getElementById("mainRow");
      row.innerHTML = "";
      data.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${photo.src["portrait"]}" class="card-img-top" alt="...">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
            </svg>
            <div class="card-body">
              <h5 class="card-title">${photo.photographer}</h5>
              <p class="card-text">
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="skipMe(event)">Hide</button>
                </div>
                <small class="text-muted">${photo.id}</small>
              </div>
            </div>
           </div>`;

        row.appendChild(col);
      });
    })
    .catch((error) => console.log(error));
}

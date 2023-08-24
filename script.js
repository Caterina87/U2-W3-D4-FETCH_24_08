function loadImages() {
  displayPhotos("people");
}

function loadImagesSecondary() {
  displayPhotos("ocean");
}

const skipMe = (event) => {
  event.target.closest(".col-md-4").remove();
};
// Metodo che chiama l'api rest delle foto passando il parametro con il tipo delle foto
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

function searchBtn() {
  searchInput.value();
  displayPhotos("ocean");
}

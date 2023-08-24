function loadImages() {
  fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
      Authorization: `b8hHQj0PKlELIlJEe08oY87KfnFAgkdsZQ0pmPyRqo2lvl1mo3fxnBDB`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      const row = document.getElementById("mainRow");
      data.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        //     col.innerHTML = `<div class="card">
        //     <img src="${photo.src["medium"]}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title"></h5>
        //         <p class="card-text"></p>
        //         <a href="#" class="btn btn-primary">Add to Cart</a>
        //         <a href="#" class="btn btn-primary" onclick="skipMe(event)">Remove</a>
        //     </div>
        // </div>`;

        col.innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${photo.src["medium"]}" class="card-img-top" alt="...">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
           </div>`;

        row.appendChild(col);
        console.log(row);
      });
    })
    .catch((error) => console.log(error));
}

function loadImagesSecondary() {
  fetch("https://api.pexels.com/v1/search?query=Ocean", {
    headers: {
      Authorization: `b8hHQj0PKlELIlJEe08oY87KfnFAgkdsZQ0pmPyRqo2lvl1mo3fxnBDB`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}

// Se importa el Array de objetos desde ./business.js
import { businesses } from "./business.js";

// Método básico para cambiar el color del icono LIKE
function toggleHeartColor(heartButton) {
  const heartIcon = heartButton.querySelector("i");
  const parentDiv = heartButton.closest(".card");
  const likeCount = parentDiv.querySelector(".like-count");
  if (heartIcon.style.color != "red") {
    heartIcon.style.color = "red";
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else {
    heartIcon.style.color = "#4f4f4f";
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  }
}

// Se selecciona el contenedor donde se guardarán las Cards
const container = document.querySelector(".my-container");

// Se itera sobre el array de objetos 'businesses', por cada objeto se genera dinámicamente una Card
businesses.forEach((item) => {
  const newCard = `
    <div class="card border border-secondary">
      <div class="ps-3 pt-3">
        <h5 class="card-title">
          <i
            class="${item.icon} text-danger border border-2 border-secondary rounded-circle p-2"
          ></i>
          &nbsp;${item.name}
        </h5>
      </div>
      <button
        onclick="bootbox.alert('${item.description}. <br/><b>Teléfono:</b> ${item.phone}. <br/><b>Correo:</b> ${item.email}')"
      >
        <img
          src="${item.img}"
          class="card-img-top rounded-8 p-3"
          alt="Tutor and student"
        />
      </button>
      <div class="card-body">
        <h5 class="card-title">
          <button class="heart-button">
            <i class="fa-solid fa-heart heart-icon"></i>
          </button>
          <span class="like-count">0</span>
          - ${item.category}
        </h5>
        <br />
        <p class="card-text">${item.shortDescription}</p>
        <br />
        <p class="card-text border border-secondary rounded-6 p-1">
        &nbsp;&nbsp;<b>Etiquetas:</b> ${item.tags}
        </p>
      </div>
    </div>
`;
  const card = document.createElement("li");
  card.innerHTML = newCard;
  // Se inserta la nueva Card al contenedor 'my-container'
  container.appendChild(card);
});

// Se selecciona el botón de 'Like'
const heartIcon = document.querySelectorAll(".heart-button");
// Se añade un eventListener al botón de 'Like' que llama la función para cambiar de color el icono de corazón
heartIcon.forEach((e) => {
  e.addEventListener("click", function () {
    toggleHeartColor(e);
  });
});

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

// on selectionne toutes les images du carrousel
const images = document.querySelectorAll("img");

// on selectionne les boutons precedent et suivant
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

// on selectionne le carrousel lui-meme
const carousel = document.querySelector(".carrousel");

// variable index qui va nous permettre de garder en memoire l'image actuellement affichee
// au depart, c'est la premiere image qui est affichee, donc index est a 0
let index = 0;

// fonction qui sera executee lorsque le bouton suivant sera clique
next.addEventListener("click", () => {
  // on incremente l'index, ce qui signifie que l'image suivante sera affichee
  index++;

  // si l'index est superieur a la longueur du tableau des images,
  // on remet l'index a 0, ce qui signifie que l'on revient a la premiere image
  if (index >= images.length) {
    index = 0;
  }

  // on applique la transformation translateX au carrousel, pour afficher l'image suivante
  carousel.style.transform = `translateX(${-index * 600}px)`;
});

// fonction qui sera executee lorsque le bouton precedent sera clique
previous.addEventListener("click", () => {
  // on decremente l'index, ce qui signifie que l'image precedente sera affichee
  index--;

  // si l'index est inferieur a 0, on remet l'index a la longueur du tableau des images - 1,
  // ce qui signifie que l'on va a la derniere image
  if (index < 0) {
    index = images.length - 1;
  }

  // on applique la transformation translateX au carrousel, pour afficher l'image precedente
  carousel.style.transform = `translateX(${-index * 600}px)`;
});

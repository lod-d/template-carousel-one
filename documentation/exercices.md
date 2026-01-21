# Exercice : Création d'un Carrousel d'Images

## 🎯 Objectif
Créer un carrousel d'images fonctionnel qui permet de naviguer entre plusieurs images avec des boutons "Précédent" et "Suivant". Le carrousel doit utiliser des techniques modernes de CSS et JavaScript pour offrir une expérience utilisateur fluide.

## 📋 Consignes

### 1. Structure HTML
Créez une page HTML avec :
- Un conteneur principal pour le carrousel
- Un élément contenant toutes les images (disposées horizontalement)
- Deux boutons : un pour aller à l'image précédente, un pour aller à l'image suivante

### 2. Style CSS
Appliquez les styles suivants :
- Le conteneur doit avoir une largeur fixe (par exemple 600px)
- Les images doivent être alignées horizontalement
- Seule une image doit être visible à la fois (les autres sont défilées)
- Ajoutez une transition fluide pour l'animation de défilement
- Stylez les boutons pour qu'ils soient visibles et cliquables

### 3. Fonctionnalité JavaScript
Implémentez la logique suivante :
- Lorsque le bouton "Suivant" est cliqué, affichez l'image suivante
- Lorsque le bouton "Précédent" est cliqué, affichez l'image précédente
- Si on est à la dernière image et qu'on clique sur "Suivant", revenez à la première image
- Si on est à la première image et qu'on clique sur "Précédent", allez à la dernière image

## 💡 Indices

### Indice 1 : Sélection des éléments
```javascript
// Sélectionnez tous les éléments dont vous avez besoin
const images = document.querySelectorAll("img");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const carousel = document.querySelector(".carousel");
```

### Indice 2 : Gestion de l'index
Utilisez une variable pour suivre l'image actuellement affichée :
```javascript
let currentIndex = 0; // Commencez à 0 (première image)
```

### Indice 3 : Navigation
Pour la navigation "Suivant" :
```javascript
currentIndex++;
if (currentIndex >= images.length) {
  currentIndex = 0;
}
```

Pour la navigation "Précédent" :
```javascript
currentIndex--;
if (currentIndex < 0) {
  currentIndex = images.length - 1;
}
```

### Indice 4 : Animation
Utilisez la propriété CSS `transform` pour déplacer le carrousel :
```javascript
carousel.style.transform = `translateX(-${currentIndex * 600}px)`;
// 600px correspond à la largeur de votre conteneur
```

## 🎨 Bonus (Optionnel)
Pour aller plus loin, vous pouvez :
1. Ajouter des points d'indicateurs en bas du carrousel
2. Implémenter un défilement automatique
3. Ajouter des effets de survol sur les boutons
4. Rendre le carrousel responsive (adapté aux mobiles)

## ✅ Résultat attendu
À la fin de cet exercice, vous devriez avoir :
- Une page HTML avec un carrousel fonctionnel
- Un style CSS qui rend le carrousel esthétique et fluide
- Un JavaScript qui gère la navigation entre les images
- Une expérience utilisateur agréable avec des animations douces

## 📝 Conseils
- Commencez par la structure HTML, puis ajoutez le CSS, et enfin le JavaScript
- Testez régulièrement votre code pour détecter les bugs tôt
- Utilisez les outils de développement de votre navigateur (F12) pour déboguer
- N'hésitez pas à consulter la documentation MDN pour les méthodes JavaScript et les propriétés CSS
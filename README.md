# Carousel - Template Version 1

Un carrousel d'images simple et élégant avec navigation interactive. Ce projet démontre une implémentation basique d'un carrousel utilisant HTML, CSS et JavaScript pur.

## 📋 Introduction

Ce projet est un template de carrousel d'images qui permet d'afficher plusieurs images dans un espace limité avec une navigation entre elles. Le carrousel utilise une approche CSS avec `transform: translateX()` pour un défilement fluide et une expérience utilisateur agréable.

## 🛠️ Installation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Node.js (optionnel, pour un serveur de développement local)

### Étapes d'installation

1. Clonez le dépôt ou téléchargez les fichiers du projet
2. Placez les images dans le dossier `img/` (les images doivent être nommées `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`)
3. Ouvrez le fichier `index.html` dans votre navigateur


## 🚀 Utilisation

### Démarrage

1. Assurez-vous que toutes les images sont dans le dossier `img/`
2. Ouvrez le fichier `index.html` dans un navigateur
3. Utilisez les boutons "Précédent" et "Suivant" pour naviguer entre les images

### Personnalisation

#### Modifier les images

Remplacez les images dans le dossier `img/` par vos propres images. Assurez-vous qu'elles ont les mêmes noms (`1.jpg`, `2.jpg`, etc.).

#### Modifier la taille du carrousel

Modifiez la largeur dans le CSS :

```css
.container {
  width: 600px; /* Changez cette valeur */
  height: auto;
}
```

#### Ajouter ou supprimer des images

1. Modifiez le HTML dans `index.html` pour ajouter/supprimer des éléments `<img>`
2. Assurez-vous que le JavaScript dans `main.js` gère correctement le nombre d'images

### Structure du projet

```
template-carousel-one/
├── index.html          # Fichier HTML principal
├── main.js            # Script JavaScript pour la logique du carrousel
├── style.css          # Feuille de styles CSS
└── img/               # Dossier contenant les images du carrousel
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    └── 4.jpg
```

### Fonctionnement

Le carrousel fonctionne avec les composants suivants :

1. **HTML** : Structure de base avec un conteneur pour les images et des boutons de navigation
2. **CSS** : Style et animations pour un défilement fluide
3. **JavaScript** : Logique de navigation entre les images

```javascript
// Logique de navigation
next.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * 600}px)`;
});
```

## 📁 Structure du projet

| Fichier/Dossier | Description |
|----------------|-------------|
| `index.html` | Fichier HTML principal contenant la structure du carrousel |
| `main.js` | Script JavaScript gérant la navigation entre les images |
| `style.css` | Feuille de styles CSS pour le design et les animations |
| `img/` | Dossier contenant les images affichées dans le carrousel |

## 🎨 Personnalisation avancée

### Changer la durée de l'animation

Modifiez la propriété `transition` dans le CSS :

```css
.carousel {
  transition: transform 0.3s ease-in-out; /* 0.3s = durée de l'animation */
}
```

### Ajouter des points d'indicateurs

Vous pouvez ajouter des points d'indicateurs pour montrer la position actuelle :

```html
<div class="indicators">
  <span class="indicator active"></span>
  <span class="indicator"></span>
  <span class="indicator"></span>
  <span class="indicator"></span>
</div>
```

### Mode automatique (défilement automatique à vous de jouer )

Ajoutez cette fonction dans `main.js` pour un défilement automatique :

```javascript
let autoScroll = setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * 600}px)`;
}, 3000); // Change d'image toutes les 3 secondes

// Arrêter le défilement automatique au survol
carousel.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

carousel.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    carousel.style.transform = `translateX(${-index * 600}px)`;
  }, 3000);
});
```

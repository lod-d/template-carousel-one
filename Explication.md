# **Créer un carrousel d'images avec lightbox**

---

## **Chapitre 1 : Préparation du projet**

### **Étape 1 : Créer les fichiers nécessaires**

1. Créez un dossier nommé `carrousel`.
2. À l'intérieur, créez les fichiers suivants :
    - `index.html` - Structure de base de votre page web
    - `style.css` - Feuille de styles pour le design et la mise en page
    - `main.js` - Script JavaScript pour la logique interactive
3. Créez un sous-dossier `images` et ajoutez-y vos images (1.jpg, 2.jpg, 3.jpg).

**📝 Explications pédagogiques :**

**Pourquoi cette structure de fichiers ?**
- **Séparation des responsabilités** : En séparant HTML, CSS et JavaScript, vous suivez le principe de séparation des concerns, ce qui rend votre code plus maintenable et plus facile à comprendre.
- **Organisation claire** : Un dossier dédié aux images facilite la gestion des assets et évite les conflits de noms avec les fichiers de code.
- **Bonnes pratiques** : Cette structure est standard dans le développement web et vous prépare aux projets plus complexes.

**Conseils pratiques :**
- Utilisez des noms de fichiers descriptifs et en minuscules sans espaces
- Organisez vos images dans des sous-dossiers thématiques dès que vous en avez plus de 5-10
- Pensez à optimiser vos images (taille et format) pour un chargement plus rapide

**💡 À retenir :**
La préparation du projet est cruciale ! Une bonne organisation dès le début vous fera gagner du temps et éviter des bugs plus tard.

---

## **Chapitre 2 : Structure HTML**

### **Étape 1 : Écrire le code HTML**

Ouvrez `index.html` et ajoutez le code suivant :

```html
<!DOCTYPEhtml>
<html lang="fr">
	<head>
	<meta charset="UTF-8" />
	<meta name="viewport"content="width=device-width, initial-scale=1.0" />
	<title>Carrousel</title>
	<link rel="stylesheet"href="style.css" />
	</head>
	<body>
		<div class="container">
			<div class="carrousel">
				<img class="active"src="images/1.jpg"alt="images 1" />
				<img class="position2"src="images/2.jpg"alt=" images 2" />
				<img class="position3"src="images/3.jpg"alt=" images 3" />
			</div>
			<div class="lightbox">
				<button>X</button>
				<img src=""alt="image agrandie" />
			</div>
		</div>
	<script src="main.js"></script>
	</body>
</html>

```

**Explications :**

- **`img.active`** : Image principale affichée en grand. Cette classe permet d'identifier facilement l'image actuelle dans le carrousel.
- **`img.position2` et `img.position3`** : Images secondaires positionnées en haut et en bas à droite. Ces images serviront à la navigation dans le carrousel.
- **`div.lightbox`** : Conteneur pour l'affichage agrandi des images. La lightbox est une technique courante pour afficher des images en plein écran.

**📝 Explications pédagogiques :**

**Pourquoi cette structure HTML ?**
- **Sémantique claire** : Chaque élément a un rôle bien défini, ce qui facilite la compréhension et la maintenance.
- **Accessibilité** : Les attributs `alt` améliorent l'accessibilité pour les utilisateurs de lecteurs d'écran.
- **Flexibilité** : Cette structure permet d'ajouter facilement des fonctionnalités supplémentaires (boutons de navigation, indicateurs, etc.).

**Conseils pratiques :**
- Toujours inclure des attributs `alt` pour les images, même s'ils sont vides (`alt=""`)
- Utilisez des classes CSS descriptives plutôt que des IDs pour faciliter la réutilisation
- Placez le script JavaScript juste avant la fermeture de la balise `</body>` pour optimiser le chargement de la page

**💡 À retenir :**
Une bonne structure HTML est la base d'une application web bien conçue. Prenez le temps de bien organiser vos éléments dès le départ !

---

## **Chapitre 3 : Styles CSS**

### **Étape 1 : Réinitialiser les styles de base**

```css
* {
	box-sizing: border-box;
	margin:0;
	padding:0;
}
```

**📝 Explications pédagogiques :**

**Pourquoi réinitialiser les styles ?**
- **Problème des navigateurs** : Chaque navigateur a ses propres styles par défaut, ce qui peut causer des incohérences.
- **Contrôle total** : En réinitialisant tout, vous partez d'une feuille blanche et contrôlez chaque aspect du design.
- **`box-sizing: border-box`** : Cette propriété inclut les bordures et le padding dans la largeur totale, ce qui simplifie les calculs de mise en page.

**Conseils pratiques :**
- Cette réinitialisation basique est suffisante pour la plupart des projets
- Pour des projets plus complexes, envisagez d'utiliser un reset CSS plus complet ou Normalize.css

---

### **Étape 2 : Styliser le corps de la page**

```css
body {
	display: flex;
	justify-content: center;
	align-items: center;
	height:100vh;
	margin:0;
	background-color:#f2f2f2;
}
```

**📝 Explications pédagogiques :**

**Pourquoi utiliser Flexbox ?**
- **Centrage facile** : Flexbox permet de centrer verticalement et horizontalement sans calculs complexes.
- **`height:100vh`** : Utilisez la hauteur de la vue (viewport) pour que le carrousel prenne tout l'écran.
- **`background-color`** : Un fond clair améliore la visibilité des images.

**Conseils pratiques :**
- Utilisez `vh` (viewport height) pour les éléments qui doivent s'adapter à la taille de l'écran
- Pensez à l'accessibilité : assurez-vous que le contraste entre le fond et le contenu est suffisant

---

### **Étape 3 : Styliser le conteneur principal**

```css
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

**📝 Explications pédagogiques :**

**Pourquoi un conteneur supplémentaire ?**
- **Structure hiérarchique** : Cela crée une hiérarchie claire dans votre mise en page.
- **Flexibilité** : Vous pourriez ajouter d'autres éléments autour du carrousel plus tard.
- **Centrage parfait** : Le conteneur centre le carrousel dans la page.

**Conseils pratiques :**
- Utilisez des noms de classes génériques comme `.container` pour une réutilisation facile
- Pensez à l'évolution future de votre design

---

### **Étape 4 : Styliser le carrousel**

```css
.carrousel {
	position: relative;
	overflow: hidden;
	width:calc(900px +3rem);
	height:600px;
}
```

**📝 Explications pédagogiques :**

**Pourquoi `position: relative` ?**
- **Système de coordonnées** : Cela crée un système de coordonnées pour les éléments enfants positionnés absolument.
- **`overflow: hidden`** : Cache les éléments qui dépassent du carrousel, ce qui est utile pour les animations.
- **Dimensions fixes** : Des dimensions précises permettent un positionnement exact des images.

**Conseils pratiques :**
- Pour des designs responsives, envisagez d'utiliser des pourcentages plutôt que des pixels fixes
- Pensez aux médias queries pour adapter le carrousel aux différents écrans

---

### **Étape 5 : Styliser les images**

```css
img {
	max-width:600px;
}

.active {
	width:60%;
	height:100%;
	object-fit: cover;
	cursor: zoom-in;
}

.position2 {
	position: absolute;
	top:0;
	right:0;
	width:calc(40% -1rem);
	height:calc(50% -0.5rem);
	object-fit: cover;
	cursor: pointer;
}

.position3 {
	cursor: pointer;
	position: absolute;
	bottom:0;
	right:0;
	width:calc(40% -1rem);
	height:calc(50% -0.5rem);
	object-fit: cover;
}
```

**📝 Explications pédagogiques :**

**Pourquoi `object-fit: cover` ?**
- **Adaptation parfaite** : Cette propriété garantit que l'image couvre tout l'espace disponible, même si les proportions ne correspondent pas.
- **`cursor: zoom-in`** : Indique à l'utilisateur que l'image peut être agrandie.
- **Positionnement absolu** : Les images secondaires sont positionnées par rapport au carrousel grâce à `position: relative` sur le parent.

**Conseils pratiques :**
- `object-fit: cover` peut déformer les images si leurs proportions sont très différentes
- Pour des images carrées, envisagez `object-fit: contain` pour éviter la déformation
- Utilisez des cursors appropriés pour améliorer l'expérience utilisateur

---

### **Étape 6 : Styliser la lightbox**

```css
.lightbox {
	display: none;
	position: fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background-color:rgba(0,0,0,0.8);
	justify-content: center;
	align-items: center;
	z-index:9999;
	}

.lightboximg {
	max-width:80%;
	max-height:80%;
}

.lightboxbutton {
	position: absolute;
	top:7%;
	right:15%;
	font-size:3rem;
	color:#fff;
	background-color: transparent;
	border: none;
	cursor: pointer;
}
```

**📝 Explications pédagogiques :**

**Pourquoi `position: fixed` ?**
- **Superposition** : La lightbox reste fixe par rapport à la fenêtre de navigation, même lors du défilement.
- **`z-index: 9999`** : Place la lightbox au-dessus de tous les autres éléments (très élevé pour éviter les conflits).
- **`rgba(0,0,0,0.8)`** : Fond semi-transparent pour mettre en valeur l'image tout en restant visible.
- **`display: none`** : Cache la lightbox par défaut jusqu'à ce qu'elle soit activée par JavaScript.

**Conseils pratiques :**
- Utilisez des valeurs de z-index très élevées pour les éléments modaux comme les lightboxes
- Pensez à l'accessibilité : assurez-vous que la lightbox peut être fermée avec la touche Escape
- Testez la lightbox sur différents écrans pour vous assurer qu'elle s'adapte bien

---

## **Chapitre 4 : Logique JavaScript**

### **Étape 1 : Sélectionner les éléments**

```js
const lightbox =document.querySelector(".lightbox");
const lightboxImg =document.querySelector(".lightbox img");
const activeImage =document.querySelector(".active");
const position2 =document.querySelector(".position2");
const position3 =document.querySelector(".position3");
```

**📝 Explications pédagogiques :**

**Pourquoi sélectionner les éléments en JavaScript ?**
- **Interaction** : Pour interagir avec le DOM (Document Object Model), vous devez d'abord sélectionner les éléments.
- **`querySelector`** : Cette méthode permet de sélectionner des éléments en utilisant des sélecteurs CSS, ce qui est très flexible.
- **Variables globales** : En déclarant ces variables en dehors des fonctions, elles sont accessibles partout dans le script.

**Conseils pratiques :**
- Stockez les éléments sélectionnés dans des constantes pour éviter de les sélectionner plusieurs fois
- Utilisez des noms de variables descriptifs pour améliorer la lisibilité
- Pensez à gérer les cas où un élément n'est pas trouvé (bien que ce ne soit pas nécessaire ici)

---

### **Étape 2 : Afficher la lightbox**


```js
activeImage.addEventListener("click",() => {
  lightboxImg.src = activeImage.src;
  lightbox.style.display ="flex";
});

```

**📝 Explications pédagogiques :**

**Comment fonctionne cet événement ?**
- **Écouteur d'événement** : `addEventListener` attend qu'un clic se produise sur l'image active.
- **Copie de la source** : `lightboxImg.src = activeImage.src` copie l'URL de l'image active vers la lightbox.
- **Affichage** : `display: "flex"` active l'affichage de la lightbox (qui était cachée avec `display: none`).

**Conseils pratiques :**
- Utilisez des fonctions fléchées pour les écouteurs d'événements pour préserver le contexte (`this`)
- Pensez à ajouter un délai d'exécution si nécessaire pour des animations fluides
- Considérez l'accessibilité : ajoutez un attribut `aria-label` pour décrire l'action

---

### **Étape 3 : Fermer la lightbox**

```js
lightbox.addEventListener("click",() => {
  lightbox.style.display ="none";
});
```

**📝 Explications pédagogiques :**

**Pourquoi ce code est-il simple ?**
- **Fermeture par clic** : Un clic n'importe où sur la lightbox (y compris sur le fond transparent) la ferme.
- **Simplicité** : Cette approche est intuitive pour l'utilisateur.

**Conseils pratiques :**
- Pour une meilleure UX, vous pourriez ajouter un bouton de fermeture dédié
- Pensez à ajouter la possibilité de fermer avec la touche Escape : `document.addEventListener("keydown", (e) => { if (e.key === "Escape") lightbox.style.display = "none"; })`
- Considérez d'ajouter un effet de fondu pour une transition plus douce

---

### **Étape 4 : Échanger les images (position 2)**


```js
position2.addEventListener("click",() => {
const imgActiveSrc = activeImage.src;
  activeImage.src = position2.src;
  position2.src = imgActiveSrc;

const imgPosition2Src = position2.src;
  position2.src = position3.src;
  position3.src = imgPosition2Src;
});
```

**📝 Explications pédagogiques :**

**Comment fonctionne l'échange d'images ?**
- **Algorithme de permutation** : Ce code implémente un échange circulaire des images.
- **Variable temporaire** : `imgActiveSrc` stocke temporairement la source de l'image active avant qu'elle ne soit écrasée.
- **Échanges successifs** :
  1. L'image active prend la place de l'image position2
  2. L'image position2 prend la place de l'image position3
  3. L'image position3 reçoit l'ancienne image active

**Conseils pratiques :**
- Cette technique est appelée "échange de valeurs" et est fondamentale en programmation
- Pour des carrousels plus complexes, envisagez d'utiliser un tableau pour stocker les images
- Pensez à ajouter une animation de transition pour un effet plus fluide

---

### **Étape 5 : Échanger les images (position 3)**


```js
position3.addEventListener("click",() => {
const imgActiveSrc = activeImage.src;
  activeImage.src = position3.src;
  position3.src = imgActiveSrc;

const imgPosition3Src = position3.src;
  position3.src = position2.src;
  position2.src = imgPosition3Src;
});
```

**📝 Explications pédagogiques :**

**Pourquoi un code similaire mais différent ?**
- **Direction opposée** : Cet échange fonctionne dans le sens inverse pour une navigation circulaire.
- **Même principe** : Utilisation de variables temporaires pour préserver les données pendant l'échange.

**Conseils pratiques :**
- Vous pourriez extraire cette logique dans une fonction réutilisable pour éviter la duplication
- Pour un carrousel plus avancé, envisagez d'utiliser des indices pour naviguer entre les images
- Pensez à ajouter des boutons de navigation dédiés pour une meilleure UX


---

## **Chapitre 5 : Explications détaillées**

### **Structure HTML**

- **`div.carrousel`** : Conteneur principal avec position relative pour les images absolues.
  **📝 Pourquoi ?** : Le positionnement relatif crée un système de coordonnées pour les éléments enfants positionnés absolument.
- **`img.active`** : Image principale.
  **📝 Pourquoi ?** : Cette image est toujours visible et représente l'image actuelle du carrousel.
- **`img.position2` et `img.position3`** : Images secondaires positionnées en haut et en bas à droite.
  **📝 Pourquoi ?** : Ces images permettent la navigation dans le carrousel et créent un effet visuel intéressant.

### **Styles CSS**

- **`position: relative`** sur `.carrousel` : Permet le positionnement absolu des images secondaires.
  **📝 Pourquoi ?** : Sans position relative sur le parent, les éléments positionnés absolument seraient positionnés par rapport à la fenêtre de navigation.
- **`position: absolute`** sur `.position2` et `.position3` : Positionne les images secondaires.
  **📝 Pourquoi ?** : Cela permet de superposer les images sans affecter le flux normal du document.
- **`z-index: 9999`** sur `.lightbox` : Assure que la lightbox est au-dessus de tout le reste.
  **📝 Pourquoi ?** : La lightbox doit toujours être visible, même si d'autres éléments sont présents.

### **Logique JavaScript**

- **Échange des images** : Utilisation de variables temporaires pour sauvegarder les sources des images pendant les échanges.
  **📝 Pourquoi ?** : Sans variable temporaire, les données seraient perdues lors des échanges.
- **Lightbox** : Affiche l'image active en grand lorsqu'elle est cliquée.
  **📝 Pourquoi ?** : Cela permet aux utilisateurs de voir les images en détail sans quitter la page.

---

## **Concepts clés**

1. **Positionnement** :
    - `position: relative` et `position: absolute` pour positionner les images.
    **📝 À comprendre** : Le positionnement absolu est toujours relatif à un ancêtre positionné (relative, absolute, fixed ou sticky).

2. **Gestion des événements** :
    - `addEventListener` pour écouter les clics.
    **📝 À comprendre** : Les écouteurs d'événements permettent d'exécuter du code en réponse à des actions utilisateur.

3. **Manipulation du DOM** :
    - `querySelector` pour sélectionner les éléments.
    **📝 À comprendre** : Le DOM est l'arbre de la page web, et JavaScript peut le modifier dynamiquement.
    - `style.display` pour afficher/masquer la lightbox.
    **📝 À comprendre** : Cette propriété contrôle la visibilité des éléments dans le flux de la page.

---

## **Bonnes pratiques et conseils supplémentaires**

### **Accessibilité**
- **Attributs alt** : Toujours fournir des textes alternatifs pour les images
- **Touche Escape** : Permettre de fermer la lightbox avec la touche Escape
- **Contraste** : Assurez-vous que les boutons sont visibles sur tous les fonds

### **Performance**
- **Optimisation des images** : Compressez vos images avant de les utiliser
- **Chargement différé** : Utilisez `loading="lazy"` pour les images non visibles
- **Taille des fichiers** : Limitez la taille des fichiers JavaScript et CSS

### **Évolutivité**
- **Code modulaire** : Séparez la logique en fonctions réutilisables
- **Variables CSS** : Utilisez des variables CSS pour les couleurs et tailles
- **Responsive design** : Ajoutez des media queries pour les différents écrans

### **Debugging**
- **Console.log** : Utilisez `console.log()` pour déboguer votre code
- **DevTools** : Apprenez à utiliser les outils de développement de votre navigateur
- **Validation** : Vérifiez votre HTML et CSS avec des validateurs en ligne

---

## **Exercices pratiques**

1. **Ajoutez un bouton de fermeture dédié** à la lightbox
2. **Implémentez la fermeture avec la touche Escape**
3. **Ajoutez des animations de transition** entre les images
4. **Rendez le carrousel responsive** avec des media queries
5. **Ajoutez des indicateurs de position** (points ou chiffres)

---

## **Ressources utiles**

- **MDN Web Docs** : Documentation complète sur HTML, CSS et JavaScript
- **CSS Tricks** : Articles et tutoriels sur les techniques CSS avancées
- **W3Schools** : Tutoriels interactifs pour débutants
- **CodePen** : Plateforme pour expérimenter et partager des snippets de code

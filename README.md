# Chevalier Divertissements

Site web vitrine pour **Chevalier Divertissements**, entreprise spécialisée dans la location de structures gonflables, costumes, déguisements et décorations thématiques pour événements festifs.

## 📋 Description

Site web responsive présentant les services de location pour :

- **Structures gonflables** : châteaux, toboggans, rodéo gonflable
- **Costumes et déguisements** : Halloween, Renaissance, super-héros
- **Décorations thématiques** : Halloween, mariages, événements
- **Jeux en bois traditionnels** : animations pour tous âges

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** / **SCSS** : Styles avec préprocesseur
- **JavaScript** (Vanilla) : Interactivité
- **Google Fonts** : Typographies Poppins & Chewy
- **WebP** : Format d'images optimisé

## 📁 Structure du Projet

```
Chevalier_Divertissements-main/
├── index.html              # Page d'accueil
├── index.js                # Scripts JavaScript
├── README.md               # Documentation
├── pages/                  # Pages secondaires
│   ├── contact.html        # Formulaire de contact
│   ├── costumes.html       # Galerie costumes
│   ├── jeux.html           # Structures et jeux
│   └── realisations.html   # Portfolio réalisations
├── style/
│   ├── css/                # CSS compilés
│   │   ├── style.css       # Styles généraux et responsive
│   │   ├── index.css       # Styles page accueil
│   │   ├── contact.css     # Styles page contact
│   │   ├── costumes.css    # Styles page costumes
│   │   ├── jeux.css        # Styles page jeux
│   │   └── realisations.css# Styles page réalisations
│   └── scss/               # Sources SCSS
│       ├── style.scss
│       ├── index.scss
│       ├── contact.scss
│       ├── costumes.scss
│       ├── jeux.scss
│       └── realisations.scss
├── images/                 # Images et logos
└── font/                   # Polices personnalisées

```

## 🚀 Installation et Lancement

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur local (optionnel) : Live Server, Python SimpleHTTPServer, etc.

### Installation

1. **Cloner ou télécharger le projet**

```bash
git clone https://github.com/votre-repo/Chevalier_Divertissements.git
cd Chevalier_Divertissements-main
```

2. **Lancer le site**

**Option A** : Avec Live Server (VS Code)

- Installer l'extension "Live Server"
- Clic droit sur `index.html` > "Open with Live Server"

**Option B** : Avec Python

```bash
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

**Option C** : Directement dans le navigateur

- Double-cliquer sur `index.html`

### Compilation SCSS (Développement)

Si vous modifiez les fichiers `.scss` :

```bash
# Installer Sass
npm install -g sass

# Compiler SCSS en CSS
sass style/scss/style.scss style/css/style.css
sass style/scss/index.scss style/css/index.css
sass style/scss/contact.scss style/css/contact.css
sass style/scss/costumes.scss style/css/costumes.css
sass style/scss/jeux.scss style/css/jeux.css
sass style/scss/realisations.scss style/css/realisations.css

# Ou en mode watch (auto-compilation)
sass --watch style/scss:style/css
```

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Menu burger pour mobile
- ✅ Filtres galerie photos par catégorie
- ✅ Formulaire de contact avec validation
- ✅ Smooth scroll pour navigation
- ✅ Optimisation SEO (meta descriptions)
- ✅ Lazy loading des images
- ✅ Images au format WebP pour performance

## 📱 Responsive

- **Mobile** : < 768px
- **Tablette** : 768px - 992px
- **Desktop** : > 992px
- **Large screens** : > 1200px

## 🎨 Charte Graphique

- **Couleurs** : Définies dans les fichiers SCSS
- **Typographie** :
  - Poppins (corps de texte)
  - Chewy (titres décoratifs)

## 📞 Contact

**Chevalier Divertissements**

- 📍 9 Rue des Roises, 51210 Bergères-sous-Montmirail
- 📞 07 67 80 02 30
- 📧 chevalier.divertissements@gmail.com

## 📄 Licence

© 2024 Chevalier Divertissements - Tous droits réservés

## 🔄 Mises à Jour

- **v1.0** (2024) : Version initiale
- **v1.1** (2025) : Corrections chemins images, centralisation JS, SEO, lazy loading

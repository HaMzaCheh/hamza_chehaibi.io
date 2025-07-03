# CV Site Web - Hamza CHEHAIBI

## 📋 Description

Site web CV professionnel et interactif développé avec React, HTML5, CSS3 et JavaScript. Le site présente le profil d'ingénieur télécoms de Hamza CHEHAIBI avec une interface moderne, responsive et multilingue.

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Interface moderne** avec design professionnel
- **Responsive design** - Compatible ordinateur, tablette et mobile
- **Dark/Light mode** - Basculement entre thème sombre et clair
- **Animations fluides** - Transitions et effets au scroll
- **Navigation smooth** - Défilement fluide entre sections

### 🌐 Multilingue
- **Français / Anglais** - Changement de langue dynamique
- **Détection automatique** - Langue du navigateur détectée
- **Persistance** - Préférences sauvegardées localement

### 📱 Sections du site
1. **Hero** - Présentation avec photo de profil
2. **Expériences** - Stages et expériences professionnelles
3. **Formation** - Parcours académique
4. **Projets** - Réalisations techniques avec liens GitHub
5. **Compétences** - Compétences techniques organisées par catégories
6. **Certifications** - Formations et certifications obtenues
7. **Langues** - Niveaux de langues parlées
8. **Contact** - Formulaire de contact fonctionnel

### 🔧 Fonctionnalités techniques
- **Téléchargement CV PDF** - Bouton de téléchargement direct
- **Formulaire de contact** - Prêt pour intégration Formspree/EmailJS
- **SEO optimisé** - Balises meta, sitemap.xml, robots.txt
- **Liens sociaux** - LinkedIn, GitHub, Email

## 📁 Structure du projet

```
cv-site/
├── index.html          # Page principale
├── style.css           # Styles CSS avec thèmes
├── script.js           # Logique React et JavaScript
├── data.js             # Données du CV (FR/EN)
├── contact-config.js   # Configuration formulaire de contact
├── sitemap.xml         # Plan du site pour SEO
├── robots.txt          # Instructions pour robots d'indexation
└── assets/
    ├── cv.pdf          # CV PDF téléchargeable
    └── img/
        └── photo.jpg   # Photo de profil
```

## 🚀 Installation et utilisation

### Méthode 1: Serveur local simple
```bash
cd cv-site
python3 -m http.server 8000
# Ouvrir http://localhost:8000
```

### Méthode 2: Serveur Node.js
```bash
cd cv-site
npx serve .
```

### Méthode 3: Live Server (VS Code)
- Installer l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

## ⚙️ Configuration

### 1. Personnalisation des données
Modifier le fichier `data.js` pour adapter le contenu :
- Informations personnelles
- Expériences professionnelles
- Formation
- Compétences
- Certifications

### 2. Configuration du formulaire de contact

#### Option A: Formspree (Recommandé)
1. Créer un compte sur [Formspree.io](https://formspree.io/)
2. Créer un nouveau formulaire
3. Copier l'ID du formulaire dans `contact-config.js`
4. Modifier la fonction `handleSubmit` dans `script.js`

#### Option B: EmailJS
1. Créer un compte sur [EmailJS.com](https://www.emailjs.com/)
2. Configurer un service email
3. Créer un template
4. Renseigner les clés dans `contact-config.js`

### 3. Remplacement de la photo
- Remplacer `assets/img/photo.jpg` par votre photo
- Recommandé : 400x400px, format JPG/PNG

### 4. Mise à jour du CV PDF
- Remplacer `assets/cv.pdf` par votre CV
- Vérifier que le lien de téléchargement fonctionne

## 🎨 Personnalisation du design

### Couleurs et thèmes
Les variables CSS dans `style.css` permettent de personnaliser facilement :
```css
:root {
  --text-accent: #3b82f6;        /* Couleur d'accent */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... autres variables */
}
```

### Polices
La police principale est Inter (Google Fonts). Pour changer :
```css
body {
  font-family: 'Votre-Police', sans-serif;
}
```

## 📱 Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :
- **Desktop** : > 768px
- **Tablet** : 768px - 480px  
- **Mobile** : < 480px

## 🔍 SEO et référencement

### Optimisations incluses
- Balises meta (title, description, keywords)
- Open Graph pour réseaux sociaux
- Twitter Cards
- Sitemap.xml
- Robots.txt
- Structure HTML sémantique

### Pour améliorer le référencement
1. Personnaliser les balises meta dans `index.html`
2. Ajouter Google Analytics
3. Configurer Google Search Console
4. Optimiser les images (alt, taille)

## 🚀 Déploiement

### Options de déploiement gratuit
1. **Netlify** - Glisser-déposer le dossier
2. **Vercel** - Import depuis GitHub
3. **GitHub Pages** - Push vers repository GitHub
4. **Firebase Hosting** - `firebase deploy`

### Nom de domaine personnalisé
La plupart des services permettent d'ajouter un domaine personnalisé :
- Acheter un domaine (ex: hamzachehaibi.com)
- Configurer les DNS
- Activer HTTPS automatiquement

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes, Grid, Flexbox
- **JavaScript ES6+** - Logique interactive
- **React 18** - Composants et hooks
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie

## 📞 Support et maintenance

### Mises à jour recommandées
- Actualiser régulièrement le contenu
- Tester sur différents navigateurs
- Vérifier les liens externes
- Optimiser les performances

### Résolution de problèmes courants
1. **Site blanc** : Vérifier la console navigateur
2. **Formulaire ne fonctionne pas** : Configurer Formspree/EmailJS
3. **Images ne s'affichent pas** : Vérifier les chemins
4. **Responsive cassé** : Tester sur vrais appareils

## 📄 Licence

Ce projet est libre d'utilisation pour usage personnel et professionnel.

---

**Développé avec ❤️ pour Hamza CHEHAIBI**  
*Ingénieur Télécoms - Spécialiste 5G & Automatisation RF*


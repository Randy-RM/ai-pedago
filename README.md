# IA Pedago Landing Page

Une landing page moderne construite avec React, TypeScript, Vite et Tailwind CSS.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router DOM** - Routing
- **Poppins** - Police Google Fonts

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fonctionnelle avec React Router
- ✅ Formulaire d'inscription fonctionnel
- ✅ Composants réutilisables
- ✅ Carousel de témoignages
- ✅ Section blog avec cards
- ✅ Newsletter avec validation
- ✅ Animations et transitions fluides

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # En-tête avec navigation
│   │   └── Footer.tsx       # Pied de page
│   ├── sections/
│   │   ├── Hero.tsx         # Section hero principale
│   │   ├── CompanyLogos.tsx # Logos des partenaires
│   │   ├── Features.tsx     # Fonctionnalités
│   │   ├── Testimonials.tsx # Témoignages clients
│   │   ├── BlogPosts.tsx    # Articles de blog
│   │   └── Newsletter.tsx   # Newsletter
│   └── ui/
│       ├── Button.tsx       # Composant bouton réutilisable
│       └── Card.tsx         # Composant carte réutilisable
├── pages/
│   └── HomePage.tsx         # Page d'accueil
├── App.tsx                  # Composant principal avec routes
├── main.tsx                 # Point d'entrée
└── index.css                # Styles globaux et Tailwind

```

## 🛠️ Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Construire pour la production :
```bash
npm run build
```

## 🎯 Composants réutilisables

### Button
Bouton avec 3 variantes (primary, secondary, outline) et 3 tailles (sm, md, lg).

### Card
Carte avec effet hover optionnel pour afficher du contenu de manière élégante.

## 🌈 Thème

- **Couleur primaire** : `#52BD94`
- **Couleur du texte** : `text-gray-600` (Tailwind)
- **Police** : Poppins

## 📝 Licence

MIT

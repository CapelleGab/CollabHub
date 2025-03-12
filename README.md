# CollabHub - Frontend

## 📌 Description

CollabHub est une plateforme SaaS permettant aux équipes de collaborer efficacement grâce à un gestionnaire de projets intégré, un chat en temps réel, un tableau Kanban et un calendrier interactif.

## 🚀 Technologies utilisées

- **Framework** : Next.js (React, TypeScript)
- **UI** : TailwindCSS / shadcnUI
- **État global** : Zustand
- **Authentification** : inconnu
- **Base de données** : inconnu
- **Déploiement** : Vercel

## 📂 Structure du projet

```
CollabHub/
├── public/              # Assets publics (logos, icônes, etc.)
├── app/                 # Pages principales (Dashboard, Chat, Kanban...)
├── src/
│   ├── components/      # Composants réutilisables
│   ├── hooks/           # Hooks personnalisés
│   ├── types/           # Types TypeScript
│   ├── lib/             # Fonctions utilitaires
│   └── config/          # Configuration globale (API, constantes...)
├── .env                 # Variables d'environnement
├── package.json         # Dépendances et scripts
└── README.md            # Documentation du projet
```

## ⚡ Installation

### 1. Cloner le dépôt

```sh
git clone git@github.com:CapelleGab/CollabHub.git
cd CollabHub
```

### 2. Installer les dépendances

```sh
npm install #ou yarn install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env.local` à la racine et y ajouter :

```env

```

### 4. Lancer le serveur de développement

```sh
yarn dev  # ou npm run dev
```

Le projet sera accessible sur **http://localhost:3000**.

## 🛠️ Fonctionnalités principales

- Authentification utilisateur (Google, Email/Password)
- Gestion des projets avec tableau Kanban
- Chat en temps réel
- Stockage et partage de fichiers
- Notifications et rappels automatiques

## 📜 License

Ce projet est sous licence MIT.

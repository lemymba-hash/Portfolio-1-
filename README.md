# Portfolio — Lemy-Wannel MBA-OBAME EZEZENG

Site CV/portfolio statique en HTML, CSS et JavaScript pur (aucun framework,
aucune installation obligatoire).

## Exécuter le projet dans VSCode

Le site est 100% statique : il n'y a rien à "compiler". Deux façons de le
lancer depuis VSCode, du plus simple au plus technique.

**Option A — Extension Live Server (recommandé)**
1. Ouvre le dossier `portfolio/` dans VSCode (`Fichier > Ouvrir le dossier...`).
2. Installe l'extension **Live Server** (ritwickdey.LiveServer) depuis
   l'onglet Extensions — VSCode te la proposera automatiquement grâce au
   fichier `.vscode/extensions.json` inclus dans le projet.
3. Clique droit sur `index.html` → **"Open with Live Server"**.
4. Le site s'ouvre dans ton navigateur sur `http://127.0.0.1:5500` et se
   recharge automatiquement à chaque modification.

**Option B — Terminal intégré de VSCode**
1. Ouvre le terminal de VSCode (`Terminal > Nouveau terminal`).
2. Lance :
   ```
   npm start
   ```
   (nécessite Node.js installé ; la commande télécharge et lance
   `live-server` via `npx`, sans installation permanente.)
3. Le site s'ouvre automatiquement sur `http://127.0.0.1:5500`.

Tu peux aussi simplement double-cliquer sur `index.html` pour l'ouvrir
directement dans un navigateur, sans serveur — le site fonctionne aussi
ainsi, mais le rechargement automatique ne sera pas disponible.

## Structure du projet

```
portfolio/
├── index.html          → toute la structure des sections
├── css/
│   └── style.css        → design (thème sombre / tech)
├── js/
│   └── script.js         → contenu dynamique (compétences, projets,
│                            formation...) + interactions
└── assets/
    ├── img/               → à mettre : ta photo de profil
    └── docs/               → à mettre : ton CV en PDF
```

## Pour le mettre à jour

Tout le contenu variable (compétences, projets, formation, expériences,
certifications) est centralisé en haut du fichier `js/script.js`, dans des
tableaux (`SKILLS`, `PROJECTS`, `FORMATION`, `EXPERIENCES`,
`CERTIFICATIONS`). Modifie ces tableaux : le site se met à jour tout seul,
sans toucher au HTML.

## Photo de profil

Dépose ton image dans `assets/img/` puis, dans `index.html`, remplace le
bloc :
```html
<div class="photo-placeholder" aria-label="Photo de profil à ajouter">
  <span>Photo à venir</span>
</div>
```
par :
```html
<img src="assets/img/ta-photo.jpg" alt="Photo de Lemy-Wannel MBA-OBAME EZEZENG" class="photo-placeholder">
```

## CV en PDF

Dépose ton CV dans `assets/docs/CV-Lemy-Wannel.pdf` (même nom que dans le
bouton "Télécharger mon CV") ou change le chemin dans le bouton `<a>`
correspondant dans `index.html`.

## Activer l'envoi réel du formulaire de contact

Pour l'instant, le formulaire est visuel : il affiche une confirmation
mais n'envoie rien. Pour l'activer sans backend, deux options simples :

- **Formspree** (https://formspree.io) : crée un compte, récupère ton
  endpoint, et remplace dans `index.html` :
  `<form class="contact-form" id="contact-form" novalidate>`
  par
  `<form class="contact-form" id="contact-form" action="https://formspree.io/f/TON_ID" method="POST">`
  puis retire la ligne `e.preventDefault();` correspondante dans
  `js/script.js` (fonction `setupContactForm`).

- **EmailJS** (https://www.emailjs.com) : ajoute leur script CDN dans
  `index.html`, puis appelle `emailjs.sendForm(...)` dans
  `setupContactForm()` à la place du message factice actuel.

## Héberger le site

Le site est 100% statique, donc il se déploie tel quel sur :
- **GitHub Pages** : pousse ce dossier dans un repo GitHub, active Pages
  dans les paramètres du repo.
- **Netlify** ou **Vercel** : glisse-dépose le dossier `portfolio/` sur
  leur interface, ou connecte le repo GitHub.

Tu pourras ensuite relier un nom de domaine personnalisé
(ex. `lemy-obame.dev`) depuis les paramètres d'hébergement.

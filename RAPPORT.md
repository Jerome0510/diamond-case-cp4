# Rapport de Développement - Diamond Case

## [02/04/2026] - Analyse et complétion du style du Header

**Fichier créé :**
- `src/component/Header.module.css` : Fichier de styles pour le composant d'en-tête.

**Modifications :**
- **Pourquoi :** Le fichier de style était manquant dans le contexte ou incomplet. Il est nécessaire de définir toutes les classes appelées par `Header.tsx` pour assurer le rendu visuel et respecter la règle de séparation des responsabilités (pas de CSS dans le TSX).
- **Comment :** Implémentation d'une mise en page Flexbox pour aligner le logo à gauche et la navigation à droite. Utilisation de CSS Modules pour garantir l'encapsulation des styles.
- **Objectif :** Rendre le Header visuellement conforme, responsive et sémantiquement structuré sans intégrer de style directement dans le code TypeScript.

**Note :** Toutes les classes utilisées dans `Header.tsx` ont été implémentées.

## [07/04/2026] - Fluidification des illustrations de l'Accueil

**Fichier modifié :**
- `src/component/Accueil.module.css`

**Modifications :**
- **Pourquoi :** Les dimensions des images étaient fixées en pixels, ce qui empêchait une adaptation fluide sur les différents formats d'écrans desktop.
- **Comment :** Remplacement des unités fixes (`px`) par des unités relatives au viewport (`vw`) pour les marges, les espacements (`gap`) et les dimensions des images.
- **Objectif :** Assurer que la mise en page des illustrations s'adapte dynamiquement à la largeur de l'écran sur desktop, offrant une expérience visuelle plus moderne et flexible.
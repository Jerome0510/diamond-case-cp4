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

## [15/04/2026] - Correction du typage asynchrone des paramètres de route

**Fichier modifié :**
- `src/app/api/categories/[categoryId]/articles/[articleId]/route.ts`

**Modifications :**
- **Pourquoi :** Depuis Next.js 15, l'objet `params` est une `Promise`. Le type TypeScript précédemment utilisé était synchrone, ce qui est incompatible avec l'usage de `await params` dans le corps de la fonction et génère des erreurs de type.
- **Comment :** Mise à jour de l'interface `Params` pour déclarer `params` comme une `Promise`.
- **Objectif :** Mettre le code en conformité avec les exigences de Next.js 15 et assurer une validation correcte par le compilateur TypeScript.

## [15/04/2026] - Correction du typage asynchrone des paramètres dans la page ArticleDetail

**Fichier modifié :**
- `src/app/categories/[categoryId]/articles/[articleId]/page.tsx`

**Modifications :**
- **Pourquoi :** À l'instar des Route Handlers, les pages dans Next.js 15 reçoivent désormais l'objet `params` sous forme de `Promise`. Le typage précédent provoquait une erreur TypeScript lors de l'utilisation de `await params`. De plus, les paramètres de route sont nativement des chaînes de caractères (`string`).
- **Comment :** Passage du type de `params` en `Promise` et typage des identifiants en `string`. Ajout d'une conversion explicite via `Number()` lors de l'appel aux helpers de routes qui attendent des nombres.
- **Objectif :** Harmoniser le typage avec les standards de Next.js 15 et corriger les erreurs de compilation.

## [15/04/2026] - Correction de l'importation CSS globale

**Fichier créé :**
- `src/types/css.d.ts` : Fichier de déclaration de module pour les fichiers CSS.

**Modifications :**
- **Pourquoi :** L'importation de `globals.css` dans `src/app/layout.tsx` était "cassée" (probablement une erreur TypeScript indiquant que le module CSS ne pouvait pas être trouvé ou n'avait pas de déclarations de type). Bien que Next.js gère généralement cela, une déclaration explicite peut résoudre les problèmes de résolution de type.
- **Comment :** Création d'un fichier de déclaration `css.d.ts` dans le dossier `src/types` pour informer TypeScript que les fichiers `.css` sont des modules valides.
- **Objectif :** Résoudre l'erreur de compilation TypeScript liée à l'importation de fichiers CSS globaux, permettant ainsi à `globals.css` d'être importé et appliqué correctement.
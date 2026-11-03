# TMaps Business Manager — Prototype académique

Prototype frontend réalisé dans le cadre d'un projet Scrum/Jira. Le concept est une plateforme de démonstration pour centraliser et visualiser des établissements sur une carte.

> **Important :** ce dépôt est un prototype académique indépendant. Il ne s'agit pas d'un produit officiel de TMaps ou de MapWay et il n'utilise pas leurs API. Vérifiez les informations officielles sur la startup choisie avant de les présenter dans votre rapport.

## Fonctionnalités de cette version
- Landing page responsive en français
- Navigation mobile
- Présentation des fonctionnalités
- Aperçu de tableau de bord et de carte (illustration CSS)
- Formulaire de démonstration côté navigateur (aucun envoi serveur)

## Technologies
- HTML5
- CSS3
- JavaScript natif

## Lancer le projet sous Windows
1. Décompresser le dossier.
2. Ouvrir `index.html` dans votre navigateur.
3. Pour travailler dans VS Code, ouvrir le dossier `tmaps-business-manager`.

Aucun package ou installation n'est nécessaire.

## Publier sur GitHub
Créer un dépôt GitHub nommé `tmaps-business-manager`, puis ouvrir PowerShell dans le dossier du projet :

```powershell
git init
git add .
git commit -m "TMAP-1 Create responsive homepage"
git branch -M main
git remote add origin https://github.com/USERNAME/tmaps-business-manager.git
git push -u origin main
```

Remplacer `USERNAME` par votre identifiant GitHub.

## Lier les commits à Jira
Après avoir configuré l'intégration GitHub for Jira (si disponible sur votre instance Jira), inclure la clé Jira dans les messages de commit. Exemple : `TMAP-1 Create responsive homepage`.

## Backlog suggéré pour le Sprint 1
| Clé indicative | User Story / tâche | Story Points |
|---|---|---:|
| TMAP-1 | En tant que visiteur, je veux voir une page d'accueil claire | 3 |
| TMAP-2 | En tant que visiteur, je veux naviguer entre les sections | 2 |
| TMAP-3 | En tant que visiteur, je veux découvrir les fonctionnalités | 3 |
| TMAP-4 | En tant que visiteur, je veux comprendre le fonctionnement | 2 |
| TMAP-5 | En tant que visiteur mobile, je veux consulter une page responsive | 3 |

Les clés ci-dessus sont des exemples : elles doivent être remplacées par les vraies clés générées dans votre projet Jira.
La page d'accueil présente les fonctionnalités principales de TMaps Business Manager.

---
layout: post
title:  "Project K le nouveau AspNet"
date:   2014-10-02
categories: aspnet-vnext
---

## Project K le nouveau AspNet

Le 18 mai dernier à TechEd (Houston, Tx), nous a été présenté la prochaine version de AspNet (vnext). La nouvelle vision s'en vas vers un framework intensément allégé et j'ai l'intention d'écrire quelques billets sur la question considérant le sérieux et la plus grande stabilité du projet actuel.

## Qu'est-ce que Project K

Le K dérive de Katana qui étais à l'origine un nouveau module faisant parti du projet Helios, qui avais pour but de découpler le serveur web des applications web. Il était formé du couple OWIN (Open Web Interface for .NET, un middleware étant entre le serveur web et l'application) et Katana (une interface exposant des propriétés standards liés aux serveurs web pour parler avec owin). En fait on peut faire un rapprochement avec le framework [Rack](http://rack.github.io/) de Ruby

## Pourquoi Project K ?

En fait, le web étant ce qu'il est, il est extrèmement rapide au développement, il est normal qu'une brique plus monolithique (comme l'était le `System.Web`) pouvais poser problème dans la mesure où chaque nouvelle version était déjà dépassée. De plus, l'assembly étant assez massive, il était inutile de prendre tous les composants pour chaque utilisation. Par exemple cet assembly était responsable de :

- `HttpRuntime.Cache`
- `System.Web.Routing`
- Attaches vers IIS (`Microsoft.Runtime.Hosting`)
- Membership et Profile
- WebForms
- `System.Web.WebSockets`

Ceci n'étant qu'un petit exemple des responabilités, on peut rapidement voir que cette assembly était énorme sans justification certaine.

## Nouveautés

Project K arrive donc avec son lot de nouveautés :

- Tout le stack ASP.Net est maintenant open sourcé sur [github](https://github.com/aspnet)
- `KVM` (pour `K Version Manager`, un gestionaire de version de .net framework)
- `KPM` (pour `K Package Manager`, essentiellement l'équivalent de publish dans Visual Studio)
- `K` (essentiellement un lanceur d'application, un peu comme `Thor` ou `Rake` dans l'univers `Ruby`)
- Asp.Net MVC 6
- Nouveau système de projet (fini les .csproj, apparament une nouvelle extension vois le jour : .kproj)
- Fin du `Global.asax` et début du `Startup.cs` en tant que citoyen de première zone
- Injection des dépendances en tant que citoyen de première zone (il était temps!)
- Complète modularité du stack MVC (il est facilement possible par exemple de remplacer le fameux Yellow Screen of Death)
- Fusion des frameworks MVC, WebAPI et WebPages (pages Razor)
- Intégration native de `Roslyn` pour effectuer une compilation à la volée
- Unification des framework `MVC`, `WebAPI` et `WebPages` (Razor)
- Intégration de mono en tant que citoyen de première zone (ça c'est impressionant)
- De plus, point intéressant intéressant il n'est plus requis d'utiliser Visual Studio pour le développement (le fichier project.json semble gérer la compilation et les dépendances)

Depuis quelques temps `Project K` est supporté officiellement par Visual Studio via `Visual Studio 2014 CTP` (Community Technology Preview) dont la 3e version est sortie tout récemment le 18 août).

## Plus d'informations

- MVC Les nouveautés
- KVM et son utilisation
- KPM pour le publish et son implication
- Retour sur Owin et son utilisation
- Startup.cs le remplacement du Global.asax
- Injection de dépendances
- Entity Framework 7

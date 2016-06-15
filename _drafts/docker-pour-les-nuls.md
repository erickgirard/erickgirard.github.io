---
title: Docker pour les nuls!
date: 2015-06-09 00:00:00 Z
categories:
- devops
layout: post
---

## Docker pour les nuls!

Visual Studio 2015 a été annoncé à Build avec le support pour Docker. Microsoft Azure le supporte également. Ça semble être le temps par excellence d'entrer dans le monde du devops et des containers logiciels.

## Docker c'est quoi ?

[Docker](https://www.docker.com "Portail officiel") est un gestionnaire de container (à l'opposé de Hyper-V/VMWare qui sont des hyperviseurs). La différence majeure est que un hyperviseur est un superviseur de machines virtuelles (donc isolation complète). Chaque machine virtuelle a ses propres ressources virtualisées et émulées.

Dans le cas d'un container il n'y a pas d'émulation. Le service Docker expose les resources du système au container de façon isolée en utilisant divers méchanismes (groupes, utilisateurs, sécurisation d'espace mémoire).

![docker-vm-container.png]({{site.baseurl}}/assets/img/docker-vm-container.png)
[_Source_](http://www.zdnet.com/article/what-is-docker-and-why-is-it-so-darn-popular/)

L'avantage direct d'un container est sa légèreté. Au lieu de créer un nouveau système pour chaque machine (dans le cas d'un hyperviseur), c'est le système actuel qui est utilisé et donc le lancement d'un container est à peine plus lent que l'application hébergée. Du fait de sa légèreté, les containers sont parfais pour dupliquer un environement de production lors du développement, éléminant de ce fait les erreurs liées aux différentes configurations.

## Comment Commencer

Ce qu'il faut savoir pour commencer c'est que Docker utilise Linux comme système de base. Si le système qui l'héberge n'utilise pas Linux il faut utiliser une VM (processus auto-géré et transparent et très léger, on parle de 27mb environs en mémoire).

Il faut donc installer l'utilitaire [Boot2Docker](http://boot2docker.io/).

[Screenshot d'installation ici]

Lorsque l'utilitaire sera installé il doit s'utiliser en ligne de commande.

[Liste des commandes pour lancer Boot2Docker]

Une fois ceci fait Docker peut être utilisé. À  noter que si vous voyez une erreur de ce type lors de l'utilisation de Docker, c'est simplement que Boot2Docker n'est pas lancé. Il faut savoir aussi que par défaut Boot2Docker ne se lance pas avec Windows.

[Ligne en erreur]

[Quelques commandes en exemple et leur raison d'être]

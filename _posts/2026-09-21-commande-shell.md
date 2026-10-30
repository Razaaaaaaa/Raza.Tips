---
layout: post
title: Utiliser votre shell de manière fluide
date: 2026-09-18 16:00:00 +0200
categories: cli quotidien ihm wip
wip: true
---

Vous venez de télécharger une archive compressée depuis votre terminal et vous vous apprêtez à la décompresser. Mais au moment de taper la commande, c’est le trou de mémoire : impossible de vous rappeler les bonnes options ! Résultat, vous passez 10 minutes à chercher sur Internet une commande que vous auriez pu retrouver en seulement 10 secondes grâce à ces quelques astuces.

<img src="/assets/images/wip.png" class="img-fluid mx-auto" alt="Logo">


## Avant-propos 

[Pas le temps ? Passez directement aux astuces](#mes-astuces) 

En 1971, le premier shell nommé Unix Thompson shell a été introduit par Ken Thompson<sup>[1](#références)</sup>. A cette période il n'y avait pas internet et la seule manière d'accéder a la documentation était depuis un manuel imprimé. L'année d'après apparait l'utilitaire man avec la version 2 d'Unix<sup>[2](#références)</sup>

Aujourd’hui, la plupart des systèmes disposent d’un shell et, avec l’essor de l’open source, les outils comme les ressources ne manquent pas. Mais avons-nous adopter les bonnes habitudes ? 

Grossièrement, une commande s'écrit sous la forme suivante :

[COMMANDE] [OPTION] [ARGUMENT]

Ce guide part du principe que l'utilisation efficace d'un shell repose avant tout sur la capacité à construire ses commandes de manière fluide. Pour cela, il est essentiel de savoir identifier (ou de trouver) le nom de la commande à utiliser, ainsi que les options et les arguments nécessaires pour réaliser l'action souhaitée.

## Mes astuces 

### 1. Exploiter les cheatsheets des commandes récurrente

<span class="text-danger">[COMMANDE]</span> <span class="text-success">[OPTION] [ARGUMENT]<span>

Un excellent outil pour découvrir rapidement les usages courants d'une commande est [tldr](https://github.com/tldr-pages/tldr). Il fournit, en quelques secondes, des exemples concrets et directement réutilisables, sans avoir à parcourir de longues pages de documentation. 

### 2. Vous n'avez pas besoin de tout connaitre car tout est documenté 

La plupart des shell mettent a disposition des outils pour vous permettre de vous souvenir de la manière d'utiliser une commande ou trouver celle que vous avez oublié :
- apropos permet de retrouver une commande oublié avec les courtes descriptions fournit par le manuel des commandes. Un exemple immédiat serait le mot clé "manuel" 

```
man grep
grep --help
whatis grep
apropos "search text"
type cd
which python
whereis bash
```

### 3. Outil d'auto complétion





### 4. Exploiter l'historique 

### 5. utiliser les Raccourcis clavier

Il existe de nombreux raccourcis pour aller plus vite. Ils sont disponible [ici](https://fr.linux-terminal.com/?p=5176)


### 6. Les alias 


## Références 

1. [Thompson shell](https://en.wikipedia.org/wiki/Thompson_shell)

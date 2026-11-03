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

Ce guide part du principe que l'utilisation efficace d'un shell repose avant tout sur la capacité à construire ses commandes de manière fluide. Pour cela, il est essentiel de savoir identifier (ou de trouver) le nom de la commande à utiliser, ainsi que les options et les arguments nécessaires pour réaliser l'action souhaitée.

#### LÉGENDE

Pour mieux vous repérer parmi les différentes astuces, voici une petite légende qui vous aidera à repérer les prérequis de l'astuce :

<span class="text-success">[COMMANDE]</span> <span class="text-warning">[OPTION]</span> <span class="text-danger">[ARGUMENT]</span>
- <span class="text-success">En vert ce qui est su</span>
- <span class="text-warning">Ce qui est partiellement connu. (Ex : savoir que dans la commande `kubectl` il y a `kube`)</span>
- <span class="text-danger">Ce qui est ignoré</span>

Pour bien tirer partie de ces astuces, il faut être capable d'utiliser plusieurs solutions en fonction de votre contexte. 

## Mes astuces 

### 1. Exploiter les cheatsheets des commandes récurrente

<span class="text-success">[COMMANDE]</span> <span class="text-danger">[OPTION] [ARGUMENT]</span>


Un excellent outil pour découvrir rapidement les usages courants d'une commande est [tldr](https://github.com/tldr-pages/tldr). Il fournit, en quelques secondes, des exemples concrets et directement réutilisables, sans avoir à parcourir de longues pages de documentation. 

### 2. Vous n'avez pas besoin de tout connaitre car tout est documenté 

<span class="text-danger">[COMMANDE] [OPTION] [ARGUMENT]</span>


La plupart des shell mettent a disposition des outils pour vous permettre de vous souvenir de la manière d'utiliser une commande ou trouver celle que vous avez oublié :
- `apropos` permet de retrouver une commande oublié avec les courtes descriptions fournit par le manuel des commandes. Un exemple immédiat serait le mot clé "manuel" 
- `man` permet d'accéder a la documentation d'une commande, syscall, fichiers spéciaux format de fichier etc...
- `whatis` permet d'obtenir la courte description d'une commande donnée
- `type` renseigne sur la manière dont le shell interprête une commande donnée 
- `which` renvoie le chemin de l'executable 
- `whereis` localise les fichiers associés à une commande, comme son exécutable, son code source et sa page de manuel.


### 3. Outil d'auto complétion et proposition de correction 

<span class="text-warning">[COMMANDE] [OPTION] [ARGUMENT]</span>

zsh est beaucoup plus complet que bash. Vous pouvez le personnaliser etc...
L'une des autres particularité est l'installation d'extension dont zsh-autosuggestion qui vous fait des suggestions sur les commandes écrites. Une fonctionnalité native est auto correction qui s'active avec la commande `setopt CORRECT` 

### 4. Exploiter l'historique 

<span class="text-danger">[COMMANDE] [OPTION] [ARGUMENT]</span>

Si vous voulez faire une commande que vous avez déjà faites vous pouvez utiliser `CTRL + R` et utiliser les flèches pour sélectionner la commande.


### 5. Utiliser les Raccourcis clavier

Il existe de nombreux raccourcis pour aller plus vite. Ils sont disponible [ici](https://fr.linux-terminal.com/?p=5176)


### 6. Les alias 

Si il y a des commandes que vous faites tout le temps vous pouvez crée des alias. Exemple avec kubectl : alias k="kubectl" 

### 7. Outils interactifs

<span class="text-success">[COMMANDE]</span> <span class="text-danger">[OPTION] [ARGUMENT]</span>

Plusieurs outils interactifs existent pour simplifier d'autre beaucoup plus complexe tel que [lazydocker](https://github.com/jesseduffield/lazydocker), [lazygit](https://github.com/jesseduffield/lazygit), [btop](https://github.com/aristocratos/btop), [k9s](https://github.com/derailed/k9s) etc...

## Références 

1. [Thompson shell](https://en.wikipedia.org/wiki/Thompson_shell)

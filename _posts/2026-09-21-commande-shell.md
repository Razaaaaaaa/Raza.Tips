---
layout: post
title: Utiliser votre shell de manière fluide
date: 2026-09-18 16:00:00 +0200
categories: cli quotidien ihm
wip: true
---

Vous venez de télécharger une archive compressée depuis votre terminal et vous vous apprêtez à la décompresser. Mais au moment de taper la commande, c’est le trou de mémoire : impossible de vous rappeler les bonnes options ! Résultat, vous passez 10 minutes à chercher sur Internet une commande que vous auriez pu retrouver en seulement 10 secondes grâce à ces quelques astuces.


## Avant-propos 

[Pas le temps ? Passez directement aux astuces](#mes-astuces) 

En 1971, le premier shell nommé Unix Thompson shell a été introduit par Ken Thompson<sup>[1](#références)</sup>. A cette période il n'y avait pas internet et la seule manière d'accéder a la documentation était depuis un manuel imprimé. L'année d'après apparait l'utilitaire man avec la version 2 d'Unix

Aujourd’hui, la plupart des systèmes disposent d’un shell et, avec l’essor de l’open source, les outils comme les ressources ne manquent pas. Mais avons-nous adopter les bonnes habitudes ? 

Ces astuces reposent sur l’idée qu’utiliser un shell efficacement, c’est avant tout savoir construire ses commandes avec fluidité, tout en comprenant ce que l’on fait. Pour cela, il est essentiel de savoir identifier (ou de trouver) le nom de la commande à utiliser, ainsi que les options et les arguments nécessaires pour réaliser l'action souhaitée.

#### LÉGENDE

Pour vous repérer parmi les différentes astuces, voici une légende qui indique les prérequis nécessaires. Elle vous aidera à développer les bons réflexes selon les situations.

<span class="text-success">[COMMANDE]</span> <span class="text-warning">[OPTION]</span> <span class="text-danger">[ARGUMENT]</span>
- <span class="text-success">En vert, ce qui est su (Ex : savoir que la commande est rm)</span>
- <span class="text-warning">En orange, ce qui est partiellement connu. (Ex : savoir que dans la commande `kubectl` il y a `kube`)</span>
- <span class="text-danger">En rouge, ce qui est ignoré (Ex : ignorer complètement une commande) </span>

Ces états peuvent être sur n'importe quelle élément d'une commande ( commande, option ou argument)

Pour bien tirer partie de ces astuces, il faut être capable d'utiliser plusieurs astuces en fonction de votre contexte. 

## Mes astuces 

### 1. Exploiter les cheatsheets des commandes récurrente

<span class="text-success">[COMMANDE]</span> <span class="text-danger">[OPTION] [ARGUMENT]</span>


Un excellent outil pour découvrir rapidement les usages courants d'une commande est [tldr](https://github.com/tldr-pages/tldr). Il fournit, en quelques secondes, des exemples concrets et directement réutilisables, sans avoir à parcourir de longues pages de documentation. 

Pour mettre en pratique cette astuce [téléchargez l'outil](https://github.com/tldr-pages/tldr#how-do-i-use-it) et essayez de lancer `tldr tar`.

Des outils similaires existent tel que cheat.sh, devhints, eg etc<sup>[2](#références)</sup>. N'hésitez pas a les essayer eux aussi. 

### 2. Outils interactifs

Plusieurs outils interactifs existent pour simplifier d'autres beaucoup plus complexes tels que [lazydocker](https://github.com/jesseduffield/lazydocker), [lazygit](https://github.com/jesseduffield/lazygit), [btop](https://github.com/aristocratos/btop), [k9s](https://github.com/derailed/k9s) etc...

<div class="container">
  <div class="row justify-content-center g-4 p-3">
  <img
      src="https://github.com/jesseduffield/lazydocker/raw/master/docs/resources/demo3.gif"
      style="width: 400px !important; height: auto !important; max-width: 100%;"
    >
        <img
      src="https://github.com/derailed/k9s/raw/master/assets/screen_dp.png"
      style="width: 400px !important; height: auto !important; max-width: 100%;"
    >
    <img
      src="https://raw.githubusercontent.com/aristocratos/btop/refs/heads/main/Img/normal.png"
      style="width: 400px !important; height: auto !important; max-width: 100%;"
    >
  </div>
</div>

### 3. Exploiter le manuel pour comprendre en profondeur le fonctionnement de vos commandes 

<span class="text-success">[COMMANDE]</span> <span class="text-danger">[OPTION] [ARGUMENT]</span>

- `man` permet d'accéder a la documentation complète d'une commande, syscall, fichiers spéciaux format de fichier directement depuis votre shell.
- `whatis` permet d'obtenir seulement la courte description d'une commande donnée

La plupart des commandes possède aussi une option `--help` afin d'explorer les arguments et le son fonctionnement.

### 4. Retrouver les commandes oubliés

<span class="text-danger">[COMMANDE]</span> <span class="text-success">[OPTION] [ARGUMENT]</span>

La commande `apropos` permet de retrouver une commande oubliée avec les courtes descriptions fournies par leur manuel. Un exemple immédiat serait le mot clé "manuel" pour trouver la commande `man`.

### 5. Outil d'auto complétion et proposition de correction 

<span class="text-warning">[COMMANDE] [OPTION] [ARGUMENT]</span>

Avec zsh, vous pouvez installer des thèmes et extensions. L'une d'entre elle est [zsh-autosuggestion](https://github.com/zsh-users/zsh-autosuggestions) qui vous affiche des suggestions et informations sur la commande que vous êtes en train d'écrire tel que vous proposer une commande déjà écrite ou des explications sur les arguments possible pour une commande donnée.

### 6. Exploiter l'historique 

<span class="text-danger">[COMMANDE] [OPTION] [ARGUMENT]</span>

Si vous voulez faire une commande que vous avez déjà faites vous pouvez utiliser `CTRL + R` et utiliser les flèches pour sélectionner la commande. 
La commande `history` permet aussi d'explorer l'historique des commandes exécutées


### 7. Utiliser les Raccourcis clavier

Il existe de nombreux raccourcis pour aller plus vite. Ils sont disponible [ici](https://fr.linux-terminal.com/?p=5176)

### 8. Les alias 

Si il y a des commandes que vous faites tout le temps vous pouvez crée des alias. Exemple avec kubectl : alias k="kubectl" 




## Références 

1. [Thompson shell](https://en.wikipedia.org/wiki/Thompson_shell)
2. [Projet similaire a tldr-page](https://github.com/tldr-pages/tldr#how-do-i-use-it)

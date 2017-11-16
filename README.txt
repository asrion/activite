Ceci est un fichier supplémentaire pour lister toutes les étapes effectuées 
sur git et github pour réaliser l'activité du cours OCR
------------------------------------
Détail projet :
Un mini projet de page web contenant un canvas de dessin pif que tout le monde connait je suppose ;)
je l'ai réalisé point par point, vous pouvez voir le résultat en ouvrant la page index.html
Le fichier actuel README.txt contient le détail complet de toutes les étapes effectuées dans ce mini projet
de la création et l'initialisation sur git, modification, tests et validation au commit et jusqu'à l'envoi sur gitthub
------------------------------------
1 - Ouvrir la console GIT
2 - Taper la commande pwd pour savoir ou je suis situé
3 - Revenir en arrière pour me situer sur le dossier projets
4 - Taper la commande mkdir activite pour créer le dossier "activite"
5 - Taper la commande ls pour vérifier la bonne création du dossier "activité"
6 - Taper la commande cd activite  pour accéder au dossier "activite"
7 - Taper la commande git init pour initialiser le dossier comme dépot(repository)
J'ai créé mon dossier activite qui se trouve dans on dossier projets (peu importe ;)) 
mais il est vide mais c'est un repository pour mon prochain travail
8 - Taper la commande touch README.txt pour créer mon fichier "README.txt"
9 - Taper la coande git status pour vérifier, on le voit bien créé et en rouge 
parce qu'il n'est pas encore ajouté à l'index git
Alors pour remédier à ça on l'ajoute ...
10 - Taper la commande git add README.txt pour l'ajouter à l'index pour pouvoir commit après
11 - Taper la commande git commit -m "Ajout du fichier README.txt vide"  pour un commit
12 - Taper la commande touch index.html pour créer mon fichier index.html
13 - Taper la commande git add index.html pour l'ajouter à l'index git
14 - Taper la commande git commit -m "Création de mon fichier index.html comme page principale de mon projet page web"
15 - Taper la commande touch script.js pour créer mon fichier script.js qui contiendra le script javascript
16 - Taper la commande git add script.js pour l'ajouter à l'index de git
17 - Taper la commande git commit -m "Création du ficchier script.js qui contiendra mon sript javascript" pur un commit
18 - Taper la commande touch style.css pour créer mon fichier de style css
19 - Taper la commande git add style.css pour l'ajoutter à l'index git
20 - Taper la commande git commit -m "Ajout de mon fichier style.css"
21 - J'ouvre mon fichier index.html avec notepad++ (parce vim c'est flou pour moi :p) 
pour l'enrichir et mmettre mon code html5
22 - Enregistrement du fichier et retour sur la console git pour une petite vérif avec git status
23 - Taper la commande git commit -am "structure html5 pour ma page web index.html avec inssertion de balises nécessairs et canvas"
24 - Taper la commande git status et tou va bien (le fichier et bien ajouté à l'index et commité )
25 - J'ouvre on fichier style css, je l'édite, je l'enregistre et up encore aller sur la console
26 - Taper la commande git commit -am "Application du style sur body et canvas"
Après un oubli d'une balise link pour le style dans la page html je modifie mon index.html
27 - Modification de index.html, enregistrement puis la console
28 - Taper la commande git commit -am "Ajout de la balise link dans head pour le chemin vers le fichier style.css"
29 - Ajout balise <abbr> dans le h1 de l'index.html et ajout et commit ;)
30 - Modification du fichier style.css pour appliquer css color en blanc sur le texte de la page web puis git ajout et commit
31 - Edition du fichier script.js pour le conteu javascript pour la balise canvas Retour à la console pour l'ajouter et le commit 
32 - Taper la commande git commit -am "Ajout du script javascript vérifié et validé pour le dessin de pif en canvas"
33 - La page web ouverte et c'est nickel ;)
34 - Création d'un repository sur github que j'ai nommé activite (https://github.com/asrion/activite.git)
35 - Envoi du projet sur github commande git pull origin master
voici les commandes
git remote add origin https://github.com/asrion/activite.git
git push -u origin master
36 - Ajout de la présentation du projet dans le fichier README.txt
37 - Add et commit puis un push vers github 
git commit -am "Ajout de la présentaion du projet et les étapes éffectuées dans cette activité" 
git push origin master => envoi les derniers commit vers le remote (github)

--------- fin ---------------
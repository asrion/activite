Ceci est un fichier suppl�mentaire pour lister toutes les �tapes effectu�es 
sur git et github pour r�aliser l'activit� du cours OCR
------------------------------------
D�tail projet :
Un mini projet de page web contenant un canvas de dessin pif que tout le monde connait je suppose ;)
je l'ai r�alis� point par point, vous pouvez voir le r�sultat en ouvrant la page index.html
Le fichier actuel README.txt contient le d�tail complet de toutes les �tapes effectu�es dans ce mini projet
de la cr�ation et l'initialisation sur git, modification, tests et validation au commit et jusqu'� l'envoi sur gitthub
------------------------------------
1 - Ouvrir la console GIT
2 - Taper la commande pwd pour savoir ou je suis situ�
3 - Revenir en arri�re pour me situer sur le dossier projets
4 - Taper la commande mkdir activite pour cr�er le dossier "activite"
5 - Taper la commande ls pour v�rifier la bonne cr�ation du dossier "activit�"
6 - Taper la commande cd activite  pour acc�der au dossier "activite"
7 - Taper la commande git init pour initialiser le dossier comme d�pot(repository)
J'ai cr�� mon dossier activite qui se trouve dans on dossier projets (peu importe ;)) 
mais il est vide mais c'est un repository pour mon prochain travail
8 - Taper la commande touch README.txt pour cr�er mon fichier "README.txt"
9 - Taper la coande git status pour v�rifier, on le voit bien cr�� et en rouge 
parce qu'il n'est pas encore ajout� � l'index git
Alors pour rem�dier � �a on l'ajoute ...
10 - Taper la commande git add README.txt pour l'ajouter � l'index pour pouvoir commit apr�s
11 - Taper la commande git commit -m "Ajout du fichier README.txt vide"  pour un commit
12 - Taper la commande touch index.html pour cr�er mon fichier index.html
13 - Taper la commande git add index.html pour l'ajouter � l'index git
14 - Taper la commande git commit -m "Cr�ation de mon fichier index.html comme page principale de mon projet page web"
15 - Taper la commande touch script.js pour cr�er mon fichier script.js qui contiendra le script javascript
16 - Taper la commande git add script.js pour l'ajouter � l'index de git
17 - Taper la commande git commit -m "Cr�ation du ficchier script.js qui contiendra mon sript javascript" pur un commit
18 - Taper la commande touch style.css pour cr�er mon fichier de style css
19 - Taper la commande git add style.css pour l'ajoutter � l'index git
20 - Taper la commande git commit -m "Ajout de mon fichier style.css"
21 - J'ouvre mon fichier index.html avec notepad++ (parce vim c'est flou pour moi :p) 
pour l'enrichir et mmettre mon code html5
22 - Enregistrement du fichier et retour sur la console git pour une petite v�rif avec git status
23 - Taper la commande git commit -am "structure html5 pour ma page web index.html avec inssertion de balises n�cessairs et canvas"
24 - Taper la commande git status et tou va bien (le fichier et bien ajout� � l'index et commit� )
25 - J'ouvre on fichier style css, je l'�dite, je l'enregistre et up encore aller sur la console
26 - Taper la commande git commit -am "Application du style sur body et canvas"
Apr�s un oubli d'une balise link pour le style dans la page html je modifie mon index.html
27 - Modification de index.html, enregistrement puis la console
28 - Taper la commande git commit -am "Ajout de la balise link dans head pour le chemin vers le fichier style.css"
29 - Ajout balise <abbr> dans le h1 de l'index.html et ajout et commit ;)
30 - Modification du fichier style.css pour appliquer css color en blanc sur le texte de la page web puis git ajout et commit
31 - Edition du fichier script.js pour le conteu javascript pour la balise canvas Retour � la console pour l'ajouter et le commit 
32 - Taper la commande git commit -am "Ajout du script javascript v�rifi� et valid� pour le dessin de pif en canvas"
33 - La page web ouverte et c'est nickel ;)
34 - Cr�ation d'un repository sur github que j'ai nomm� activite (https://github.com/asrion/activite.git)
35 - Envoi du projet sur github commande git pull origin master
voici les commandes
git remote add origin https://github.com/asrion/activite.git
git push -u origin master
36 - Ajout de la pr�sentation du projet dans le fichier README.txt
37 - Add et commit puis un push vers github 
git commit -am "Ajout de la pr�sentaion du projet et les �tapes �ffectu�es dans cette activit�" 
git push origin master


--------- fin ---------------
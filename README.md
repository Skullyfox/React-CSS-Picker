# Reac CSS Picker
Table des matières
-----
1. Présentation
2. Prérequis
3. Installation
4. Lancement
5. Licence

Presentation
-----
Ce repo contient une application de CSS Picker
sur les technologies suivantes :
* [React](https://reactjs.org/)
* [React-templates](https://github.com/wix/react-templates)
* [React-contextual](https://github.com/drcmda/react-contextual)
* [NodeJS](https://nodejs.org/en/)

La structure contient les outils de build de l'application, l'architecture des dossiers, ainsi que l'application.

Prerequis
-----
* [nodeJS(>=9.3.0) & npm](https://nodejs.org/en/)

Installation
Il vous faudra d'abord créer un fichier .env dans le dossier config. Pour ce faire, dupliquez le fichier .env-sample et remplissez les differentes clés à l'interieur de celui ci comme ceci :
* PORT = e port souhaité pour lancer le serveur. ex: 8000
* SESSION_SECRET = une chaine de caractères quelconque
* TOKEN_SECRET = une chaine de caractères quelconque
* APP_URL = l'adresse de votre application. Dans l'environnement de développement, afin de faire marcher le rafraichissement automatique du navigateur, rentrez "http://localhost:3000"
* DB_HOST = n'importe, nous n'utilisons pas de BDD
* DB_NAME = n'importe, nous n'utilisons pas de BDD
* DB_USER = n'importe, nous n'utilisons pas de BDD
* DB_PASSWORD = n'importe, nous n'utilisons pas de BDD

Ensuite, en ligne de commande :
```
cd/dans/le/projet
npm install
```

Lancement
Pour builder, lancer le serveur et update le build à chaque changement de fichier, ouvrez deux terminaux et lancez respectivement
```
npm run serve
npm run watch
```
-----
Licence
-----
MIT License

Copyright (c) 2018 Skullyfox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

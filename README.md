# Ng7app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


$$$$$$$$$$$$$$$ Readme.md $$$$$$$$$$$$$$$$$$$$$$$$$



Angular 7 + bootstrap 4

>ng new ng7app

>choose routing and css

>cd ng7app > ng serve -o

>Search ngx bootstrap
>https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
>angular-cli please refer to getting-started-with-ng-cli  > 
https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md

> #powershell error in vs editor# >>> running scripts is disabled on this system
 powershell in the main menu and select Run as administrator
 $set-executionpolicy remotesigned

To open VSeditor from cmd line use ng7app>code .
To Add BootStrap 4 into angular project : 
	1. npm istall & add ngx-bootstrap module in app.module.ts
		npm install ngx-bootstrap bootstrap --save
	2. add css path in angular.json

--------------
Font Awesome 5
--------------

https://fontawesome.com/start
https://github.com/FortAwesome/angular-fontawesome

$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons
# See Compatibility table below to choose a correct version
$ npm install @fortawesome/angular-fontawesome@<version>

$ npm install @fortawesome/angular-fontawesome@0.3.x

1. Add FontAwesomeModule to imports in src/app/app.module.ts


--------------
Add Nav Bar
--------------
https://getbootstrap.com/docs/4.0/components/buttons/
https://getbootstrap.com/docs/4.0/components/navbar/

ng g c templates/navigationBar
ng g c pages/home
ng g c templates/footer
ng g c pages/about
ng g c pages/contact

https://pixabay.com/ -- To get images
https://fonts.google.com/  -- To get Google Fonts
https://fontawesome.com/start  -- To get icons

--------------
Git Hub
--------------
$ git --version
$ git help config

$ cd /d/take-aways/Angular4/webapplication/ng7app

$ git init   // to make exsisting project dir.

$ git status

$ git config --global user.username Jaipradhap  // To link github account

$ git remote add origin  https://github.com/Jaipradhap/ngBootStrapApp.git  //to link remote repository

$ git add .

$ git commit -m "ng7app+bootstrap4"

$ git push origin master
error: failed to push some refs

To solve this error
$ git pull
$ git add .
$ git commit -m "ng7app+bootstrap4"
$ git push -f origin master

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

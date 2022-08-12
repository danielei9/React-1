# Rate Repository App Guide

ME HE QUEDADO POR minuto 1h04min languages

https://www.youtube.com/watch?v=qi87b6VcIHY&ab_channel=midudev

Usamos el siguiente comando para inicializar el proyecto de react y usaremos el template blank para obtener un template vacío justo con lo necesario

 ``` bash
 expo init rate-repository-app
 npm start
 ```
 instalacion y configuracion eslint:

 ¿ Que es ? ESLint es un linter de código JavaScript. Su función es analizar el código de nuestra aplicación, detectar problemas en por medio de patrones y si esta a su alcance resolverlos él mismo.

  Instalamos :
 ``` bash
yarn  add --save-dev babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
 ```
 Configuramos:

 copiar en package.json la configuracion de eslint
 ```js
  "eslintConfig": {
    "parser":"babel-eslint",
    "extends":["standard","standard-jsx","standard-react"]
 ```

Vistas que permiten hacer scroll:

* FlatList: Rendimiento para listas 
* ScrollView: Una vista con scroll

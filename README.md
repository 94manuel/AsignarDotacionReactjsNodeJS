# Instalar Agregar Dotacion

En la carpeta del backend abrir una terminal CMD y escribir

```bash
npm install
```

## Iniciar migraciones

primero crea la base de datos llamada sequelize y despues inicia las migraciones de la base de datos con el siguiente comando

```bash
npx sequelize-cli db:migrate
```

## Iniciar servidor

inicia el servidor con el sigiente comando, recuerda tener instalado mysql y tener creada la db 'sequelize'

```bash
npm start
```
el servidor inicia en el puerto 3001

## Fromend

inicia el fron reactjs 

```bash
npm start
```

el la web principal puede agregar un nuevo trabajador.

Cuando el trabajador este agregado a la base de datos, se le puede asignar una dotacion.

La dotacion no puede ser asignada a dos trabajadores.

Se puede buscar la dotacion por medio de su codigo.

## Framework usados

  cors: agrega encabezados CORS a la solicitud proxy

  sequelize :  es un ORM y nos ayuda con el patron de diseño MVC

  mocha y supertest : Nos ayuda a hacer testing en nustro proyecto

## Base de datos 

La base de datos que se escogio fue mysql, por su trayecto y respaldo mysql es la base de datos mas usada en el mundo.
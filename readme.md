# Sitio web con Express

El sitio mostrará la información de personalidades representativos de las ciencias y de la computación

## Introducción

Con ayuda del framework Express, la aplicación podrá montar un webserver localmente y así, simular las interacciones cliente-servidor.
En la carpeta routes, se guarda un archivo js por cada recurso el cual estará encargado de administrar los requests a las rutas que tengan que ver con dicho recurso.
En controllers, se guarda, de igual manera, un archivo js por cada recurso con el objeto de atender los requests del cliente. Serán los  métodos de cada controlador los que recibirán los datos de los requests y enviaraán la información correspondiente


## Objetivo

El sitio web contará con las siguientes urls:
 * / -> Muestra un texto de bienvenida al sitio
 * /heroes -> Muestra el contenido del archivo science.json que contiene toda la información de las personalidades
 * /heroes/detalle/id -> Muestra la presentación de una personalidad según su número de id tomando los datos del archivo json
 * /heroes/bio/id/ok -> Muestra una reseña de la personalidad al ingresar un número de id existente
 * /creditos -> Muestra los nombres de los integrantes del equipo de trabajo


# Sitio web con Express

El sitio mostrará la información de personalidades representativas de las ciencias y de la computación.

Por su productividad, escalabilidad y velocidad, Express es uno de los frameworks más utilizados de Node.js tanto para aplicaciones web como para mobile. Con este entorno de trabajo, será posible montar un webserver localmente de una forma fácil y así, poder simular interacciones cliente-servidor. 

## El sitio web contará con las siguientes urls:

 * / -> Muestra un texto de bienvenida al sitio
 * /heroes -> Muestra el contenido del archivo science.json que contiene toda la información de las personalidades
 * /heroes/detalle/id -> Muestra la presentación de una personalidad según su número de id tomando los datos del archivo json
 * /heroes/bio/id/ok -> Muestra una reseña de la personalidad al ingresar un número de id existente
 * /creditos -> Muestra los nombres de los integrantes

## Arquitectura de archivos 

En la carpeta routes, por cada recurso se guarda un archivo js el cual estará encargado de administrar los requests a las rutas que tengan que ver con dicho recurso.
En controllers, se guarda, de igual manera, un archivo js por cada recurso con el objeto de atender los requests del cliente. Serán los métodos de cada controlador los que recibirán los datos de los requests y enviarán la información correspondiente.
En la carpeta data, se almacena la información de las personalidades en un archivo json.
El archivo app.js será el entry point del proyecto.




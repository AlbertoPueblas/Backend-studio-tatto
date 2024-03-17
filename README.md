# Tattoo studio backend project

Objetivo
## Este proyecto requería una API funcional conectada a una base de datos con relaciones entre tablas. También requería poder acceder, modificar y eliminar datos con diferentes roles.

## Sobre el proyecto
En este proyecto no usamos front-end. Será todo realizado con back-end.
En primer lugar, he preparado las carpetas y dependencias, el siguiente paso es crear la base de datos y conectar con el servidor, para ello disponemos de una amplia carta de librerías donde encontrar información.
Una vez realizada la conexión, disponer todo para crear las migraciones, seeders, factory una vez comprobado que todo funciona como debería creamos las rutas para poder probarlas con insomnia o postman para poder verificar que las rutas funcionan. Como reto, este proyecto incluye como opción libre crear administradores. 
## Deploy 🚀
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>🚀🚀🚀
</div>

## Stack
Tecnologías utilizadas:

![](https://img.shields.io/badge/TypeScript-lightblue?logo=TypeScript) ![](https://img.shields.io/badge/insomnia-purple?logo=Insomnia) ![](https://img.shields.io/badge/docker-darkblue?logo=docker) ![](https://img.shields.io/badge/node-green?logo=node.js) ![](https://img.shields.io/badge/npm-red?logo=npm)



## Diagrama BD
![Diagram](https://github.com/AlbertoPueblas/studio-tatto/assets/154467649/3d08905c-0ea4-4875-a971-877027a01b6f)

## Instalación
1. `$ git init`
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ Ejecutamos los seeders ``` 
6. ``` $ npm run dev ``` (Inicializamos servior)
 
![Captura de pantalla 2024-03-16 100509](https://github.com/AlbertoPueblas/studio-tatto/assets/154467649/d11f601b-f1ef-4a49-999b-5b73b8d1f71e)

7. ``` $ npm run db:refresh ```(Ejecuta: Borrado de tablas, creacion de tablas , ejecuta Sedeers)

![image](https://github.com/AlbertoPueblas/studio-tatto/assets/154467649/9c39fe46-79a3-4ccc-a2dc-03e9c7e9129e)

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - REGISTER

            POST http://localhost:3000/api/register
        body:
        ``` js
            {
                "user": "Alex",
                "email": "Alex@mail.com",
                "password": "pasword"
            }
        ```

    - LOGIN

            POST http://localhost:3000/api/login  
        body:
        ``` js
            {
                "user": "Alex",
                "email": "Alex@mail.com",
                "password": "pasword"
            }
        ```



    - ...
</details>

## Futuras correcciones
[ ] Crear mas datos sobre algunas tablas.  
[ ] Mejorar codigo  
[ ] Validaciones  


## Contribuciones
Las sugerencias y aportaciones son siempre bienvenidas.  

Puedes hacerlo de dos maneras:

1. Abriendo una issue
2. Crea un fork del repositorio
    - Crea una nueva rama  
        ```
        $ git checkout -b feature/nombreUsuario-mejora
        ```
    - Haz un commit con tus cambios 
        ```
        $ git commit -m 'feat: mejora X cosa'
        ```
    - Haz push a la rama 
        ```
        $ git push origin feature/nombreUsuario-mejora
        ```
    - Abre una solicitud de Pull Request

## Licencia
Este proyecto se encuentra bajo licencia de "Alberto Pueblas"

## Webgrafia:
Para conseguir adquirir mas conocimientos he recopilado información de:
- webs
- link a documentacion de librerias externas


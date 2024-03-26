# Tattoo studio backend project

Objetivo
## Este proyecto requería una API funcional conectada a una base de datos con relaciones entre tablas. También requería poder acceder, modificar y eliminar datos con diferentes roles.

## Sobre el proyecto
En este proyecto no usamos front-end. Será todo realizado con back-end.
En primer lugar, he preparado las carpetas y dependencias, el siguiente paso es crear la base de datos y conectar con el servidor, para ello disponemos de una amplia carta de librerías donde encontrar información.
Una vez realizada la conexión, disponer todo para crear las migraciones, seeders, factory una vez comprobado que todo funciona como debería creamos las rutas para poder probarlas con insomnia o postman para poder verificar que las rutas funcionan. Como reto, este proyecto incluye como opción libre crear administradores. 


## Stack
Tecnologías utilizadas:

![](https://img.shields.io/badge/TypeScript-lightblue?logo=TypeScript) ![](https://img.shields.io/badge/insomnia-purple?logo=Insomnia) ![](https://img.shields.io/badge/node-green?logo=node.js) ![](https://img.shields.io/badge/npm-red?logo=npm)



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
        ``` ts
            {
                "user": "Alex",
                "email": "Alex@mail.com",
                "password": "pasword"
            }
        ```

    - LOGIN

            POST http://localhost:3000/api/login  
        body:
        ``` ts
            {
                "user": "Alex",
                "email": "Alex@mail.com",
                "password": "pasword"
            }
        ```

    -   GET ALL USER BY ADMIN

        GET http://localhost:3000/api/users

    user:
    ``` ts
        {
            "id": 1,
            "firstName": "Maynard",
            "lastName": "Kerluke",
            "email": "admin1@admin.com"
        },
        {
            "id": 2,
            "firstName": "Alisha",
            "lastName": "Ruecker-Borer",
            "email": "manager1@manager.com"
        },
    ```
    - GET ALL ARTIST ADMIN

        GET http://localhost:3000/api/users/artists  
    artist:
    ```ts
        {
        "message": "Tatto artists found",
        "user": {
        "id": 3,
        "name": "Artist"
        },
        "Name": [
        {
        "firstName": "Alberto",
        "email": "Christop.Cronin@hotmail.com"
        },
        {
        "firstName": "Elza",
        "email": "Kobe.Toy46@gmail.com"
        },
            	],
        }
    	"totalArtist": 2

    ```
        - GET ALL DATES BY ADMIN
        GET http://localhost:3000/dates  
    job:
    ```ts
        "id": 1,
        "firstName": "Broderick",
        "lastName": "Predovic",
        "email": "Kaitlyn.McDermott@hotmail.com",
		{
			"id": 1,
			"appointmentDate": "2025-03-12T18:52:59.000Z",
			"userId": 43,
			"jobId": 47,
			"tattoArtistId": 1
		},
		{
			"id": 2,
			"appointmentDate": "2024-10-08T07:28:06.000Z",
			"userId": 72,
			"jobId": 53,
			"tattoArtistId": 1
        }
    ```
            - GET ALL DATES BY ID: ADMIN
        GET http://localhost:3000/dates/1  
    job:
    ```ts
		{
			"id": 1,
			"appointmentDate": "2025-03-12T18:52:59.000Z",
			"userId": 43,
			"jobId": 47,
			"tattoArtistId": 1
		},

    ```
    - GET USER ID BY ADMIN
 
        GET http://localhost:3000/api/user/1  
    user:
    ``` ts
        {
            "id": 1,
            "firstName": "Maynard",
            "lastName": "Kerluke",
            "email": "admin1@admin.com"
        },
    ```
    - UPGRADE ROLE BY ID BY ADMIN

        PUT http://localhost:3000/api/user/13/role  
    user:
    ```ts
        {
            "id": 13,
            "firstName": "Drugovich",
            "lastName": "Kingter",
            "email": "drugo@mail.com"
        },
    //------------------------------------------------
        {
            "message": "Role has been updated"
        }
    ```
    - CREATE ARTIST BY ADMIN

        POST http://localhost:3000/users  
    artist:
    ```ts
        {
            "firstName": "Mark",
            "email": "mark@user.com",
            "id": 2
        }
    //------------------------------------------------
        {
            "message": "Artist has been created"
        }
    ```
    - DELETE USER BY ID ADMIN

        DELETE http://localhost:3000/api/users/13  
    user:
    ```ts
        {
            "id": 13,
            "firstName": "Drugo",
            "lastName": "Kingter",
            "email": "drugo@mail.com"
        },
    //------------------------------------------------
        {
            "message": "User deleted successfully"
        }
    ```
    - DELETE USER BY CLIENT

        DELETE http://localhost:3000/api/user/profile 
    user:
    ```ts
        {
            "id": 13,
            "firstName": "Drugo",
            "lastName": "Kingter",
            "email": "drugo@mail.com"
        },
    //------------------------------------------------
        {
            "message": "User deleted successfully"
        }
    ```
    - UPGRADE PROFILE

        PUT http://localhost:3000/api/users/profile  
    user:
    ```ts
        {
            "id": 13,
            "firstName": "Drugo",
            "lastName": "Kingter",
            "email": "drugo@mail.com"
        },
    //------------------------------------------------
        {
            "message": "Profile has been updated"
        }
    ```
    - CREATE APPOINTMENT

        POST http://localhost:3000/api/dates/
    dates:
    ```ts
        {
			"id": 4,
			"appointmentDate": "2025-01-11T13:22:12.000Z",
			"userId": 65,
			"jobId": 28
		},
    //------------------------------------------------
        {
            "message": "Appointment successfully"
        }
    ```
    - UPGRADE APPOINTMENT BY ID

        PUT http://localhost:3000/api/dates/4  
    dates:
    ```ts
        {
			"id": 4,
			"appointmentDate": "2025-01-22:12",
			"userId": 65,
			"jobId": 28
		},
    //------------------------------------------------
        {
            "message": "Appointment upgrade successfully"
        }
    ```
    - DELETE APPOINTMENT BY ID

        DELETE http://localhost:3000/api/dates/4  
    dates:
    ```ts
        {
			"id": 4,
			"appointmentDate": "2025-01-11T13:22:12.000Z",
			"userId": 65,
			"jobId": 28
		},
    //------------------------------------------------
        {
            "message": "Delete appointment successfully"
        }
    ```
    - GET ARTIST BY ID 

        GET http://localhost:3000/api/artists/5  
    artist:
    ```ts
        {
        "firstName": "Lou",
        "email": "Jaiden77@gmail.com"
        },
    ```
    - UPGRADE ARTIST BY ID 

        PUT http://localhost:3000/api/artist/1  
    artist:
    ```ts
        {
        "firstName": "Alberto",
        "email": "Christop.Cronin@hotmail.com"
        },
        //------------------------------------
        {
        "firstName": "Christop",
        "email": "Christop.Cronin@hotmail.com"
        },
    ```
    - CREATE JOB BY ADMIN

        POST http://localhost:3000/JOB/  
    job:
    ```ts
        {
	    "job": "tatto dragon",
	    "tattoArtist": "2"
        }
    //------------------------------------------------
        {
            "message": "Job has been created"
        }
    ```
    - GET ALL JOB BY ADMIN

        GET http://localhost:3000/job/  
    job:
    ```ts
        {
	    "job": "tatto dragon",
	    "tattoArtist": "2"
        }
         {
	    "job": "tatto tribal",
	    "tattoArtist": "3"
        }
    ```
    - UPGRADE ALL JOB BY ADMIN

        PUT http://localhost:3000/job/  
    job:
    ```ts
        {
	    "job": "tatto dragon",
	    "tattoArtist": "2"
        }
        //---------------------------------
         {
	    "job": "tatto tribal",
	    "tattoArtist": "3"
        }
        //---------------------------------
        {
        "message": "job has been updated"
        }
    ```
    - DELETE JOB BY ID

        DELETE http://localhost:3000/job/54  
    job:
    ```ts
        {
	    "job": "tatto dragon",
	    "tattoArtist": "2"
        }
        //---------------------------------
        {
        "message": "job deleted succesfully"
        }
    ```



</details>

## Futuras correcciones
[ ] Crear mas datos sobre algunas tablas.  
[ ] Mejorar codigo  
[ ] Corregir formato de fecha para las citas  
[ ] Optimizar código


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


# Mapas

This project was generated with Angular CLI version 6.1.5.

Development server

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

![screenshot from 2018-09-17 23-19-23](https://user-images.githubusercontent.com/16551638/45662521-477ae380-bad0-11e8-8247-e5f5ed9bcd47.png)

Descripcion:
la Siguiente aplicacion es una app que sirve para poder crear un mapa con las ubicaciones preferidas por el usuario con el objetivo de tener una lista de los sitios de su preferencia

entre los principios aplicados para la construccion del prototipo se aplicaron algunos conceptos como:
Comunicacion: el codigo es bastante facil de entender en su primera version esta dividido en Clases y Componentes
              Luego se pretende aumentar modulos para la authenticacion y servicios para persistir la informacion en alguna base de datos como MongoDB 

Simplicidad: El codigo no es nada complejo solo se hace uso de las Apis de Goolge para el manejo de mapas.

Flexibilidad: El codigo es muy flexible a cambios cuando se decida persistir los cambios en algun repositorio solo se debera                 agregar un modulo de servicios para este fin.

Minimizar la Repeticion: El codigo hace una factorizacion de los tipos por eso se creo una clase Marcador que nos permite                                reutilizar los valores de latitud y longitud para las ubicaciones

Datos accecibles desde la Logica: por el momento los datos son guardados en el localstorage para garantizar no perder la info despues de un refresh de la pagina con esto garantizamos que la informacion siempre este disponible para la logica del codigo.

Simetria: podemos encontrar mucha simetria en las declaraciones de los methodos como por ejemplo: EditarMarcador(), BorrarMarcador().

Este pequenio producto ayuda de gran manera a simplificar el uso de la aplicacion de Mapas con la que todos contamos si tenemos una cuenta de Google con la diferencia que es miy simple y ayuda al usuario a registrar sus marcadores de manera muy rapida y facil para tener una guis rapida de los lugares favoritos.

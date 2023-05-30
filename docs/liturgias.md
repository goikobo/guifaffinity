# PROYECTO VEHICULAR BIKOSCHOOL

## Integrantes del grupo:

Javier V. Ducun (689 33 02 43) javiducun@gmail.com
Borja Sainz (686 3546 55) bortxit@gmail.com
Juan M. Goicoechea (605 27 06 87) (juanmiguel.goicoechea@biko2.com)

Material suministrado como referencia:
https://www.figma.com/file/JJlHcbY8OVzwLOExMihuYV/Sistea-de-dise%C3%B1o---Guifaffinity?type=design&node-id=6-2&t=ChYJyW0DMAdkrx5J-0

## Example mapping

### Funcionalidades que deseal el cliente en primera iteracción

Borja hace el papel de Negocio y el cliente le explica que quiere las siguientes funcionalidades:

primera: definición del listado de gifs
segunda: definición del buscador de gifs
tercera: definición del detalle de un gif
cuarto: definición del login

### Historias de usuario: 1 - Definición del listado de gifs

Regla1: Los gif se muestran en pantalla
Ejemplo1 (HappyPath):
Hay GIF y el usuario Pepe accede a la web:
=> pintar en pantalla los gifs existentes

Ejemplo1 (NegativePath)
No hay GIF y el usuario accede a la web
=> se muestra pantalla tipo “no hay resultados”

Ejemplo2 (HP):
El usuario Pepe accede a la página web y quiere ver más GIF de los que aparecen en pantalla
=> El usuario Pepe podrá hacer scroll para ver más GIF

Ejemplo2 (NP):
Al cargar la lista, hay pocos GIF y el usuario Pepe accede a la página web.
=> El usuario Goiko no puede hacer scroll, solo ve los GIF existentes.

Regla2: Los gifs deben ordenarse por número de votos.

EJEMPLO
Pepe quiere ver el listado de gifs.
El gif 1 tiene 10 votos y el gif dos tiene 20 votos.
=> Pepe ve primero el gif de 20 votos y seguido el gif de 10 votos.
Nota: No hay negativa o trabajar un poco más, ¿es la negativa que no haya gifs?

### Historias de usuario: 2 - Definición del buscador de gifs

Regla1: Mostrar input de búsqueda
Ejemplo1 (HP): Pepe entra en la web y quiere buscar un gif de toda la lista existente
= > al acceder a la web, se pinta una caja de búsqueda

Ejemplo1 (negativo):no existe caja de búsqueda en la web
=> al acceder a la web, pintamos un texto: “en breve activaremos el sistema de búsqueda”

Regla2: Mostrar botón de “Buscar”
Ejemplo1 (HP): El usuario Pepe accede a la página web e introduce un texto en la caja de búsqueda. Al lado de la caja de input hay un botón de “Buscar”
=> Pepe podrá pinchar en el botón de “Buscar” para realizar la búsqueda.

Ejemplo1 (NP): El usuario Pepe accede a la página web e introduce un texto en la caja de búsqueda, pero no hay botón de “Buscar”
=> Pepe podrá introducir un texto para buscar, pero no se puede realizar la búsqueda.
Regla3: Al pulsar el botón “Buscar” se realiza la búsqueda
Ejemplo1 (HP): El usuario Pepe accede a la página web e introduce un texto en la caja de búsqueda. Cuando introduce el texto, pulsa el botón de “Buscar”
=> se realiza la búsqueda

Regla4: Permitir “Intro” después de escribir un texto en la caja de búsqueda permite realizar búsquedas.
Ejemplo1 (HP): El usuario Pepe accede a la página web e introduce un texto en la caja de búsqueda. Hay botón de “Buscar”, pero el usuario pulsa “Intro”
=> se realiza la búsqueda.

Ejemplo1 (NP): El usuario Pepe accede a la página web y no introduce ningún texto en la caja de búsqueda y pulsa Intro:
=> pulsando la tecla “Intro” se indica un mensaje en la caja de búsqueda que indica que se debe introducir un texto.

### Historias de usuario: 3 - Definición del detalle de un gif

## GLOSARIO (ideas felices)

-visualización
-Hay solo GIFs.
distribuidos en filas y columnas (5 por fila); scroll infinito justificación: centrados

listar gifs
que los gifs listados estén ordenador por más votados
-Los gif iniciales arriba, los más votados, que se random.
se pueden repetir
no importa el tamaño de los gif
-Los gif tienen un tamaño y que se vean.

en pantalla solo se dibujan los gif
paginación o scroll infinito? -> croll infinito (precarga)

cuando se abre la página se vean directamente y en animación
-Los gif se mueven cuando los ves.

responsive, a partir de la 14.1 chrome en anteriores da igual
-Tiene que ser responsive a todos los dispositivos.

Arquitectura ?
servidor usuario <- nosotros
Desplegarla.

diseño de la página similar a a lo
en base a qué la búsqueda de los nombres ? por nombres y por importancia
tipos de usuario? ->
usaurio admin? no
dónde salen los nombres? -> generar back-end (nosotros)
diseño movil no
click en meme -> ver detalle (nombre, imagen, comentarios, url)
meme solo imágenes? (solo gif)
buscar solo con la lupa
en cuánto tiempo? no problemo por el tiempo
gif pequeños al lado y gif grandes en medio? no, da igual
anclado para que siempre salgan en medio las columnas
votos del 1 al 10 o me gusta y no me gusta? like o dislike
desplegarla? <- sí
comentarios? <- sí, se podrán añadir comentarios
paginación o scroll infinito? -> scroll infinito (precarga)
el input de search se queda como sticky (siempre visible arriba)
gif siempre los mismos? no, random y los más importantes arriba
gif por defecto tamaño predeterminado.
gif en movimiento.

Toma de requisitos:

    -Click en el meme, ver detalle y comentarios.
    -URL la que sea. En detalle del meme lo que sea.

    -Buscar con la lupa solo.
    -En dos dias. EN cuanto a tiempo, sin problema. Tres meses inventados.
    -GIF pequeños a los lados? No.
    -Los GIF lo que entre. En pantallas largas anlcarlo al medio.
    -Los votos son de Like o Dislike.

    -Habrá comentarios.
    -Scroll infinito. Que cargue rapido y no haya sobrecarga.
    -Que se quede congelado el logo y buscador.

## Dudas

la definición de la historia de usuario: listado de gifs: implica pintar la pantalla como se ve en el figma?

obtener los gifs (de dónde)?
-Hay que guiarse por Giffy.

## METODOLOGIA

Vamos a usar metodología Agile - Scrum

Definimos la duración de Sprint de 1 semana, teniendo en cuenta que entre martes, viernes y sábado son 15,5h

## Liturgia:

scrum-daily: duración 10 min

PR: aprobadas mínimo por una persona aparte del que sube la PR

se define el idioma a utilizar en castellano (no inglés)

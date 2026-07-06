# KickData

**KickData** es una página web informativa que reúne en un solo lugar la historia de los torneos más importantes del fútbol masculino: la **UEFA Champions League**, la **Copa Mundial de la FIFA**, la **Copa América** y la **Eurocopa**.

El sitio permite consultar campeones históricos, subcampeones, resultados finales, máximos goleadores y equipos más ganadores de cada torneo, de forma organizada y visual.

## Funcionalidades

- **Página principal** (`index.html`): presentación del proyecto y accesos directos a cada torneo mediante tarjetas visuales.
- **Página por torneo**, cada una con su propia sección histórica (trofeo, diseño de balones, tablas de campeones/subcampeones/resultados, máximos goleadores y equipos más ganadores):
  - `html/championsLeague.html` — UEFA Champions League (incluye la era de la Copa de Europa 1955–1992 y la Champions League 1992–2025).
  - `html/copaMundial.html` — Copa Mundial de Fútbol, con tabla histórica de campeones y enlace a la edición 2026.
  - `html/copaAmérica.html` — Copa América.
  - `html/eurocopa.html` — Eurocopa.
- **Copa Mundial 2026** (`html/mundial2026.html`): página dedicada a la próxima edición del Mundial (sede: EE. UU., México y Canadá), que **consulta una API pública en tiempo real** para mostrar los equipos clasificados agrupados por grupo.
- **Página de contacto** (`html/contacto.html`): formulario de contacto que valida y muestra en pantalla los datos ingresados por el usuario (nombre, apellido, fecha de nacimiento, país, teléfono, correo, dirección, género y motivo).

## Consumo de API

La página `mundial2026.html` usa `javaScript/api.js` para consultar, mediante `fetch`, el siguiente endpoint público (sin necesidad de API key):

```
https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.teams.json
```

Al hacer clic en el botón **"Descubrir equipos"**, se obtienen los equipos del Mundial 2026 y se agrupan dinámicamente por grupo (Grupo A, B, C, ...), mostrando bandera, nombre, código FIFA, continente y confederación de cada selección.

## Tecnologías utilizadas

- **HTML5** — estructura y contenido semántico de cada página.
- **CSS3** (`style.css`) — estilos visuales de todo el sitio (un único archivo de estilos compartido).
- **JavaScript (vanilla, sin frameworks)**:
  - `app.js` — lógica del formulario de contacto (validación visual y despliegue de los datos ingresados).
  - `javaScript/api.js` — consumo de la API pública de equipos del Mundial 2026 y renderizado dinámico de tarjetas.
- **Google Fonts** (Open Sans, Montserrat) cargadas vía CDN.
- **Editor:** Visual Studio Code.
- Sitio **estático**, sin backend ni base de datos: todo corre en el navegador.

## Estructura del proyecto

```
KickData/
├── index.html                     # Página principal
├── app.js                          # Lógica del formulario de contacto
├── style.css                       # Estilos de todo el sitio
├── javaScript/
│   └── api.js                      # Consumo de la API del Mundial 2026
├── html/
│   ├── championsLeague.html        # UEFA Champions League
│   ├── copaMundial.html            # Copa Mundial de Fútbol
│   ├── copaAmérica.html            # Copa América
│   ├── eurocopa.html               # Eurocopa
│   ├── mundial2026.html            # Copa Mundial 2026 (consume la API)
│   └── contacto.html               # Formulario de contacto
└── Assets/                         # Imágenes y recursos visuales (logos, íconos, fotos de torneos, etc.)
```

## Requisitos para ejecutar el proyecto

No se necesita instalar nada adicional: es un sitio estático hecho con HTML, CSS y JavaScript puro. Solo se necesita:

- Un **navegador web** moderno (Chrome, Firefox, Edge, etc.).
- Conexión a internet (para cargar las fuentes de Google Fonts y para que funcione la consulta de equipos en `mundial2026.html`).

## Cómo ejecutar el proyecto

### Opción 1: Abrir directamente en el navegador

Haz doble clic sobre `index.html` (o ábrelo con clic derecho → "Abrir con" tu navegador).

### Opción 2: Con Visual Studio Code (recomendado durante el desarrollo)

1. Abre la carpeta `KickData/` en Visual Studio Code.
2. Instala la extensión **Live Server** (si no la tienes).
3. Click derecho sobre `index.html` → **"Open with Live Server"**.
4. El sitio se abrirá en `http://127.0.0.1:5500/` (o el puerto que tengas configurado) con recarga automática al guardar cambios.

## Navegación del sitio

```
index.html
 ├── html/championsLeague.html
 ├── html/copaMundial.html
 │     └── html/mundial2026.html   (enlazado desde la tabla de campeones)
 ├── html/copaAmérica.html
 ├── html/eurocopa.html
 └── html/contacto.html
```

Todas las páginas de torneo comparten el mismo menú de navegación superior, por lo que se puede saltar de un torneo a otro desde cualquier página.


## Vista de página web

A continuación se muestra una captura de la ejecución del código de la página web:

![Página web index (inicio)](/Mockups/Index.png)
![Página web Champions League](/Mockups/pag_champions.png)
![Página web Mundiales](/Mockups/pag_mundial.png)
![Página web Mundial 2026](/Mockups/api_mundial2026.png)
![Página web Copa América](/Mockups/pag_copa_america.png)
![Página web EuroCopa](/Mockups/pag_eurocopa.png)
![Página web Contacto y formulario](/Mockups/pag_contacto.png)


## Limitaciones conocidas

- El sitio es completamente estático: la información histórica de los torneos está escrita directamente en el HTML (no proviene de una base de datos ni de una API), salvo la página `mundial2026.html`.
- El formulario de contacto (`app.js`) solo muestra los datos en pantalla; no los envía a ningún servidor ni correo real.
- Los enlaces a redes sociales en el footer están vacíos (`href=""`).
- La página `mundial2026.html` depende de que la API pública de GitHub (`openfootball/worldcup.json`) esté disponible; si el repositorio cambia de URL o el JSON deja de actualizarse para 2026, la sección de equipos dejará de funcionar.

## Posibles mejoras futuras

- Conectar el formulario de contacto a un backend real o a un servicio de envío de correos (por ejemplo, EmailJS o Formspree).
- Agregar buscador funcional (actualmente el ícono de búsqueda no tiene lógica asociada).
- Completar los enlaces de redes sociales.
- Hacer el diseño completamente responsive en todas las páginas.

## Autor

**Wilson David Monroy Ramírez**
Proyecto académico — Ingeniería de Software
Fundación Universitaria Compensar

## Licencia

Este proyecto se distribuye con fines educativos. Puedes añadir aquí la licencia que prefieras (por ejemplo, MIT) si planeas que otros lo usen o modifiquen libremente.

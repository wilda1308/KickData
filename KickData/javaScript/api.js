const API_URL = "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.teams.json"

const contenedorEquipos = document.getElementById("contenedor-grupos");
const estadoAPI = document.getElementById("estado-api");
const cantEquipos = document.getElementById("cant-equipos");
const btnDescubrir =document.getElementById("btn-descubrir");


btnDescubrir.addEventListener("click", async function() {
    try{
        const respuesta = await fetch(API_URL,{
            method: 'GET'
        }
        );

        if(!respuesta.ok){
            throw new Error("Error HTTP: " + respuesta.status);
        }

        const equipos = await respuesta.json();

        estadoAPI.style.display = "none";
        btnDescubrir.style.display = "none";
        mostrarEquipos(equipos);

    }catch(error){
        btnDescubrir.style.display = "block";
        estadoAPI.innerHTML = `
            <p class = "error-api">⚠️ ERROR! No se pudo cargar la API.<br>
                <small>${error.message}</small>
            </p>`;
    }
});


function mostrarEquipos(equipos){
    contenedorEquipos.innerHTML = "";
    cantEquipos.textContent = "Total de " + equipos.length + " equipos";


    const grupos = {};
    equipos.forEach(equipo =>{
        const grupo = "Grupo " + equipo.group;
        if(!grupos[grupo]) grupos[grupo] = [];
        grupos[grupo].push(equipo);
    });


    Object.keys(grupos).sort().forEach(nombreGrupo =>{
        const bloque = document.createElement("div");
        bloque.className = "grupo-block";

        const titulo = document.createElement("h3");
        titulo.className = "titulo-grupo";
        titulo.textContent = nombreGrupo;
        bloque.appendChild(titulo);

        const gridEquipos = document.createElement("div");
        gridEquipos.className = "grilla-equipos";

        grupos[nombreGrupo].forEach(equipo =>{
            bloque.id = `${equipo.group}`;
            gridEquipos.appendChild(crearTarjeta(equipo));
        });

        bloque.appendChild(gridEquipos);
        contenedorEquipos.appendChild(bloque);
    });
}

function crearTarjeta(equipo){
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjetaEquipos";
    
    tarjeta.innerHTML = `
        <div class = "tarjeta-header">
            <span class = "bandera">${equipo.flag_icon}</span>
            <span class = "nombre-equipo">${equipo.name}</span>
        </div>
        <div class = "tarjeta-info">
            <span class = "badge codigo">${equipo.fifa_code}</span>
            <span class = "badge">${equipo.continent}</span> 
            <span class = "badge">${equipo.confed}</span>
        </div>    
        `; 
    return tarjeta;
}

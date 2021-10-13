
const containerViajes = document.querySelector("#contenido-viajes");
let viajesJSON = [];


document.addEventListener("DOMContentLoaded", () => {
    getViajes();
});



function getViajes() {
    fetch('./data/viajes.json')
        .then(response => response.json())
        .then(data => {
            viajesJSON = data.viajes;
            populateViajes(viajesJSON);
        });
};


function populateViajes(viajes) {
    containerViajes.innerHTML = "";
    viajes.forEach(viaje => {
        containerViajes.innerHTML += `
        <article class="entrada">
            <h2><img id="post-1" class="favorite" src="img/${viaje.image}" alt="marcar como favorita" /></h2>
            <img src="img/${viaje.img}" alt="Imagen Viaje a Londres">
            <p max-value="200">Destino: ${viaje.title}</p>
            <p>Descripcion: ${viaje.description}</p>
            <p>Fechas aproximadas: ${viaje.data}</p>
            <a href="#" class="boton">Leer Más</a>
      </article>
      
        `
    });
};


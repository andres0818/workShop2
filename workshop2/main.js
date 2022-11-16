const API_URL = "http://localhost:3000/Peliculas";
const API_ID = "http://localhost:3000/Peliculas/?nombre=";
const main = document.getElementById("contenedor");

const cargarPeliculas = async (API,dato="") => {
  const respuesta = await fetch(API);
  const datos = await respuesta.json();
  
  try {
	  main.innerHTML = ``;
	  datos.forEach((element) => {
		  const { nombre, genero, puntaje, imagen } = element;
		  const div = document.createElement("div");
		  div.setAttribute("class","pelicula")		  
		  
      div.innerHTML = `
			
						<img class="poster" src="${imagen}">
						<h3 class="titulo">${nombre} </h3>
						<h2 class="titulo">${genero} ⭐${puntaje} </h2>
					
			`;
		main.appendChild(div)
    });
  } catch (error) {
    console.log(error);
  }
};


document.addEventListener("keyup",e=>{
    e.target.matches("#buscador")
    let palabra= e.target.value
    if (palabra=="") {
        cargarPeliculas(API_URL);
    }
    else{
        let buscar="?q="+palabra
        cargarPeliculas(API_URL+buscar)
    }
})

cargarPeliculas(API_URL);









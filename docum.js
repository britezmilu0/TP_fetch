//realizamos una solicitud a la API de Rick and Morty para obtener información sobre los personajes y manejamos cualquier error que pueda ocurrir durante este proceso.

const url = "https://rickandmortyapi.com/api/character"; // se obtiene la informacion sobre los personajes 

const procesarFetch = async (link) => {       //esta funcion realiza una solicitud usando fetch  
    try {
        const respuesta = await fetch(link)    // dentro de este bloque se realiza la solicitud
        const info = await respuesta.json()   //el await se utiliza para esperar a que la solicitud se complete
        personajes(info.results)        //se utiliza JSON para extraer, pararse y recorrer las respuestas.
    } catch (error) {                  
        console.log("Hubo un error")  //En el caso de que haya un error durante el proceso.
    }
}

//La función personajes acepta un parámetro llamado characters
//utilice forEach para iterar sobre cada elemento del arreglo characters. En cada iteración, se ejecuta una función de callback que recibe un parámetro p, que representa un objeto de personaje.
//Dentro de la función cree un nuevo elemento <div> llamado datos utilizando document.createElement("div"). Este div se utilice mas adelante para contener la información del personaje.LE coloque la clase del div como "personajes-cont" utilizando la propiedad className.
//Asigne el contenido HTML del div datos utilizando la propiedad innerHTML. Este contenido incluye una etiqueta <img> que muestra la imagen del personaje, seguida de dos etiquetas que muestran el nombre y la especie del personaje.
//Se agrega el div datos como hijo del elemento con el id "contenedor" en el documento HTML, utilizando container.




const personajes = (characters) => {

    const container = document.getElementById("contenedor");

    characters.forEach(p => {
        const datos = document.createElement("div");
        datos.className = "personajes-cont";
        datos.innerHTML = `
            
            <img src="${p.image}"></img>
            <p>${p.name}</p>
            <p>${p.species}</p>
        `

    container.appendChild(datos);
    });
}

procesarFetch(url)





// .message.bulldog
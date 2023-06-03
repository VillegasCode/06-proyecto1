const GuardarEnStorage = peli => {
    //Conseguir los elementos que ya tenemos en Local Storage
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //Añadir dentro del array un elemento nuevo
      elementos.push(peli);
    } else {
      //Crear un array con la nueva peli
      elementos = [peli];
    }

    //Guardar en el local storage
    localStorage.setItem("pelis", JSON.stringify(elementos));

    //Devolver objeto guardado
    return peli;
  }
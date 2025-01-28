// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres
let amigos = [];

//Se crea función para agregar amigos en donde se valida que el nombre no este vacio
function agregarAmigo() { 
  //Obtener el nombre del usuario y trabajarlo como constante.
  const input = document.getElementById('amigo');
  const nombre = input.value.trim(); //Elimina espacios en blanco al incio y al final

  console.log('Registrando el nombre de: ', nombre);

  //Validacion de que el nombre no este vacio
  if (!nombre) {
    console.error('Intento de agregar un nombre vacio');
    
    alert("El nombre no puede estar vacio");
    return;
  }

  //Tras esa validacion, se agrega el nombre al arreglo
  amigos.push(nombre);
  console.log('Array actualizado:', amigos); // Registro del arreglo actualizado con nombres

  //Se actualiza el HTML para mostrar el nombre en la lista
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = amigos.map((nombre) => `<li>${nombre}</li>`).join("");

  //Se limpia la caja de texto (input)
  input.value = "";
}

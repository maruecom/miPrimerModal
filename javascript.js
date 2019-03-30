
var boton = document.getElementById("botonModal")
var botonCierre = document.getElementById("botonCerrarModal")
var fondoGris = document.getElementById("modalWrapper")


boton.onclick = function (){
  var agarrarModal = document.getElementById("modalContainer")
 
  agarrarModal.classList.remove("displayNone");
  boton.classList.add("displayNone")
  fondoGris.classList.remove("displayNone")
  
}


botonCierre.onclick = function(){
  var agarrarModal = document.getElementById("modalContainer")

  agarrarModal.classList.add("displayNone")
  boton.classList.remove("displayNone")
  fondoGris.classList.add("displayNone")
}

fondoGris.onclick = function(){
  fondoGris.classList.add("displayNone")
  boton.classList.remove("displayNone")
}




  






















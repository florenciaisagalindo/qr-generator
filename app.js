const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const campo = document.getElementById('link');
const btnQR = document.getElementById('btnQR');
const QR = new QRCode(contenedorQR);
const imgQR = document.querySelector("#contenedorQR > img");
const btnDescarga = document.querySelectorAll('.btnDescarga');



formulario.addEventListener("input", function() {
    if (campo.value === "") {
      btnQR.disabled = true;
    } else {
      btnQR.disabled = false;
    }
  });



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
    console.log(imgQR.src)

    descargarImagen();

});


function descargarImagen() {
    //console.log(imgQR.src)

    if(btnDescarga){
   
        if(contenedorQR.lastElementChild.textContent == "Descargar"){
                    contenedorQR.lastChild.remove();


        }

            }

    let boton = document.createElement("button");
    let styleBtn = boton.classList;
    styleBtn.add("btnDescarga")
    boton.textContent = "Descargar";


    
    boton.addEventListener("click", function() {
        let url = imgQR.src;
        let enlaceDescarga = document.createElement("a");
        enlaceDescarga.href = url;
        enlaceDescarga.download = "nombre-del-archivo.png";
    
        contenedorQR.appendChild(enlaceDescarga);
    
        enlaceDescarga.click();
    
        contenedorQR.removeChild(enlaceDescarga);

      });
      contenedorQR.appendChild(boton);



      

}

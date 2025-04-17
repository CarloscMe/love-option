const imagen = document.querySelector(".img");
const texto = document.querySelector(".texto");
const btnSi = document.querySelector(".si");
const btnNo = document.querySelector(".no");

const imagenes = {   
     imagen1 : "./assets/gatoSi.jpg", 
     imagen2 : "./assets/gatoNo1.jpg",
     imagen3 :  "./assets/gatoNo2.jpg"
};

const {imagen1, imagen2, imagen3} = imagenes;

const mostrar = (img, texto, pixel)=>{
    imagen.src = img;
    btnNo.innerText = `${texto}`;
    btnSi.style.padding = `${pixel}px`;
  removeEventListener("click", mostrar);
}

btnSi.addEventListener("click", () =>{
    imagen.src = imagen1;
    texto.innerText = "uwu :3";
    btnSi.style.display = "none";
    btnNo.style.display ="none";
});

btnNo.addEventListener("click", () =>{   // si algo se es que los eventos se comportan con desencadenamiento
    mostrar(imagen1, "1", 10)
    btnNo.addEventListener("click", () =>{
    mostrar(imagen2 , "2", 20)
    btnNo.addEventListener("click", () =>{
    mostrar(imagen3 , "3", 30) 
    btnNo.addEventListener("click", ()=>{
    mostrar(imagen1 , "4", 40)
    btnNo.addEventListener("click", ()=>{
    mostrar(imagen2 , "5", 50) }); }); }); }); });







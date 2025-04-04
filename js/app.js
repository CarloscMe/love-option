const imagen = document.querySelector(".img");
const texto = document.querySelector(".texto");
const si = document.querySelector(".si");
const no = document.querySelector(".no");

const imagenes = {   

     imagen1 : "./assets/gatoSi.jpg", 
     imagen2 : "./assets/gatoNo1.jpg",
     imagen3 :  "./assets/gatoNo2.jpg"
}

si.addEventListener("click", () =>{
    imagen.src = imagenes.imagen1;
    texto.innerText = "uwu :3";
    si.style.display = "none";
    no.style.display ="none";
});

no.addEventListener("click", ()=>{
    imagen.src = imagenes.imagen3;
    no.innerText = "ta bien";
    si.style.padding = "20px";
})







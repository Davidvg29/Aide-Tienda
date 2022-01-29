let section = document.querySelector(".categorias"),
    categorias = document.querySelector(".categoriaJuguetes"),
    cerrarCategorias = document.querySelector(".cerrarCategorias");

    

section.addEventListener("click",()=>{
    categoriasAbrir = categorias.style.display="block";
});

cerrarCategorias.addEventListener("click",()=>{
    categoriaCerrar = categorias.style.display="none";
})



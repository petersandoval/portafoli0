const curriculumVitae = document.querySelector("#curriculumVitae");
const demoUno = document.querySelector("#demoUno");
const demoDos = document.querySelector("#demoDos");
const gitHub = document.querySelector("#gitHub");
const linkedIn = document.querySelector("#linkedIn");
const repositorioUno = document.querySelector("#repositorioUno");
const repositorioDos = document.querySelector("#repositorioDos");

curriculumVitae.addEventListener("click", function(){
    abrirNuevaPagina("./EjemploCV.pdf");
});

demoUno.addEventListener("click", function(){
    abrirNuevaPagina("www.linkedin.com/in/pedro-sandoval-7b4231248");
});

demoDos.addEventListener("click", function(){
    abrirNuevaPagina("www.linkedin.com/in/pedro-sandoval-7b4231248");
});

gitHub.addEventListener("click", function(){
    abrirNuevaPagina("www.linkedin.com/in/pedro-sandoval-7b4231248");
});

linkedIn.addEventListener("click", function(){
    abrirNuevaPagina("www.linkedin.com/in/pedro-sandoval-7b4231248");
});

repositorioUno.addEventListener("click", function(){
   abrirNuevaPagina("www.linkedin.com/in/pedro-sandoval-7b4231248");
});

repositorioDos.addEventListener("click", function(){
    abrirNuevaPagina("www.linkedin.com/in/pedro-sandoval-7b4231248");
}); 

function abrirNuevaPagina(url){
    let nuevaPagina = window.open(url, '_blank');
    nuevaPagina.focus();
}


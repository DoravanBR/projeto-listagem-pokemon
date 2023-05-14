// comentario de um linha 
/*
  comentário de varias linhas
*/ 

/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/

//- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

//- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

// console.log -> serve para mostrar no console do inspecionar elemento da pagina o codigo que digitar - serve para testar o codigo

/*
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//console.log(botaoAlterarTema);

//- passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body");

const imagemAlterarTema = document.querySelector(".img-botao");
//console.log(body);

//- passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {

       //- passo 6 - remover a classe do modo-escuro do body
   const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
   if (modoEscuroEstaAtivo){
        body.classList.remove("modo-escuro");
        imagemAlterarTema.setAttribute ("src", "../img/sun.png");
   }else{
        //- passo 4 - adicionar a classe modo-escuro no body
    //body.classList.toggle("modo-escuro"); // faz a troca sozinho 
    body.classList.add("modo-escuro");
    // - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    imagemAlterarTema.setAttribute ("src", "../img/moon.png");
   // imagemAlterarTema.src = "../img/moon.png";
   }
  
});
*/
/*----------------------------------Melhorando o codigo----------------*/ 

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemAlterarTema = document.querySelector(".img-botao");


botaoAlterarTema.addEventListener("click", () => {
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro");    

if (modoEscuroEstaAtivo){
     imagemAlterarTema.setAttribute ("src", "./img/sun.png");
}else{
 imagemAlterarTema.setAttribute ("src", "./img/moon.png");

}
});


/*  COMPORTAMENTO MENU LATERAL */

function openNav(){
    document.getElementById('myNav').style.width = "25%";
}

function closeNav(){
    document.getElementById('myNav').style.width = "0%";
}



/* TRANSIÇÃO ENTRE AS DUAS MAINS

OBJETIVO: - Quando clicarmos em MUDAR PARA 4 TELAS, a primeira MAIN sai e aparece a segunda MAIN para
confirmação de troca de plano. Caso tenha sido um click por engano, só clicar em CANCELAR que retorna 
para a primeira MAIN para outra ação.

1) Detectar o click no botão Saiba Mais.
2) Função do click será de armazenar o a informação (pelo ID) da primeira Main com nome .menuSelecionado
3) Retirar a parte "Selecionado" do nome da classe.
4) Buscar e armazenar informação (pelo ID) da primeira Main com o nome de .menu
5) Add a parte "Selecionado" ao nome da classe. */


function trocaTela(){
    const passos = document.querySelectorAll(".passo"); /* Seleciona todas as duas MAINs que tem o nome PASSO na classe */

    const primeira = document.querySelector("#avisoPlano"); /* Escolhe a MAIN que tem o nome PASSO SELECIONADO */
    primeira.classList.remove("Selecionado"); /* remove o nome SELECIONADO da classe para que ela perca a propriedade */

    const segunda = document.querySelector("#trocarPlano");
    segunda.classList.add("Selecionado");
}

function voltar(){
    const passos = document.querySelectorAll(".passo"); /* Seleciona todas as duas MAINs que tem o nome PASSO na classe */

    const primeira = document.querySelector("#trocarPlano"); /* Escolhe a MAIN que tem o nome PASSO SELECIONADO */
    primeira.classList.remove("Selecionado"); /* remove o nome SELECIONADO da classe para que ela perca a propriedade */

    const segunda = document.querySelector("#avisoPlano");
    segunda.classList.add("Selecionado");
}


/* COMPORTAMENTO MODAL */

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})
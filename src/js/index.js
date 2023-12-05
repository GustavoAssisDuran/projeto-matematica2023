/* 
  O que precisamos fazer? - quando clicar no botão do bimestre na lista, temos que marcar o botão como selecionado e mostrar o bimestre correspondente

    OBJETIVO 1 - quando clicar no botão do bimestre na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do bimestre mostrar as informações do bimestre
        passo 1 - pegar os bimestres no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no bimestre que o usuário selecionou
        passo 3 - verificar se já existe um bimestre selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const bimestres = document.querySelectorAll(".bimestre");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarbimestre();

		botao.classList.add("selecionado");
		bimestres[indice].classList.add("selecionado");
	});
});

function desselecionarbimestre() {
	const bimestreselecionado = document.querySelector(".bimestre.selecionado");
	bimestreselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}

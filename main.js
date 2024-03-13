/*const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}*/

const botoes = document.querySelectorAll(".botao");//aula3
const textos = document.querySelectorAll(".aba-conteudo");//aula5

for (let i = 0; i < botoes.length; i++) { //aula3
    botoes[i].onclick = function () { //aula3

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");//aula5
            textos[j].classList.remove("ativo");//aula5
        } //aula3

        botoes[i].classList.add("ativo");//aula5
        textos[i].classList.add("ativo");//aula5
    }
}
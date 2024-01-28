/* 
Objetivo - 1
Dado: Que sou usuário
Quando: Clicar no botão "Select Plataforms"
Então: Deve abrir uma caixa de botões para selecionar uma plataforma

Objetivo - 2
Dado: Que sou usuário
Quando: Tiver clicado no botão "Select Plataforms"
E: O componente expandiu as opções de plataformas
Então: Ao clicar novamente, deve ocultar as opções de plataformas
*/

const btnPlataforms = document.querySelector('.btn-plataforms');
const listPlataforms = document.querySelector('.btn-plataforms .plataforms');

btnPlataforms.addEventListener('click', () => {
    listPlataforms.classList.toggle('ativo');
});

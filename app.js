/* 1. Botão que muda a cor do fundo
Crie uma função que, ao clicar em um botão, mude a cor do fundo da página.

2. Contador de cliques
Crie um contador que aumente em 1 a cada clique em um botão. Exiba o valor do contador na página.

3. Validação de formulário
Crie um formulário que valide se o usuário digitou um email válido. Se o email for válido, exiba uma mensagem de sucesso.

4. Troca de imagem
Crie uma função que, ao clicar em um botão, troque a imagem exibida na página.

5. Calculadora simples
Crie uma calculadora que realize operações básicas (soma, subtração, multiplicação e divisão) com dois números.

6. Lista de tarefas
Crie uma lista de tarefas que permita ao usuário adicionar e remover tarefas.

7. Relógio digital
Crie um relógio digital que exiba a hora atual e atualize em tempo real.

8. Efeito de fade-in
Crie uma função que, ao carregar a página, faça um elemento HTML aparecer com um efeito de fade-in.

9. Botão que rola a página
Crie um botão que, ao ser clicado, role a página para o topo ou para uma seção específica.

10. Troca de texto
Crie uma função que, ao clicar em um botão, troque o texto de um elemento HTML.

*/

function contaClick(){

}

function adicao(a,b){
   return parseInt(a + b);
}
function subtracao(a,b){
   return parseInt(a - b);
}
function divisao(a,b){
   return parseInt(a / b);
}
function multiplicacao(a,b){
   return parseInt(a * b);
}

function calculadora(operacao, a,b){
        switch(operacao){
        case 'soma':
          return adicao(a,b);
        case 'multiplicar':
         return multiplicacao(a,b);
        case 'dividir':
         return divisao(a,b);
        case 'subtrair':
         return subtracao(a,b);
     }
   }

resultado = calculadora('subtrair', 3,5)
console.log(resultado)
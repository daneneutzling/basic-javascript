//   arredonda valor
function arred(d, casas) {
  let aux = Math.pow(10, casas)
  return Math.floor(d * aux) / aux
}

// transforma string para float
function textToFloat(text) {
  let valor = text.replace("R$ ", "").replace(",", ".");
  return parseFloat(valor);
}

// transforma float para string
function floatToText(float) {
  let text = "R$ " + float;
  return text;
}

let totalPedido = 0;


function calculaPrecoTotal() {
  let totalItem;
  let totalPedido = 0;

  // Cria uma lista com todos elementos que tem a classe 'quantidade'
  let listaQuantidades = document.querySelectorAll('.quantidade input');

  // Percorren cada elemento da lista, executando uma função que recebe parametro quantidade (referencia ao próprio elemento)
  listaQuantidades.forEach(function(quantidade) {
    totalItem = 0;

    // 'Escuta' quando o evento de 'change' acontece no elemento de 'quantidade'
    quantidade.addEventListener('change', function(event) {

      // A partir do elemento que disparou a evento, procura-se o elemento pai, onde tem a classe 'produto' e é pego o ID
      let idProduto = event.target.closest('.produto').id;

      // Pego o valor do elemento que disparou o evento
      let quantidade = event.target.value;

      // A partir do elemento que disparou a evento, procura-se o elemento pai, onde tem a classe 'produto' e pega o conteúdo do elemento com classe 'valor'
      let valor = event.target.closest('.produto').querySelector('.valor').textContent; 

      totalItem = textToFloat(quantidade) * textToFloat(valor);

      // desenvolver demais cálculos
      totalPedido = totalPedido + totalItem;
      
      escreveValorTotal(totalPedido);
    });
  });
}

function escreveValorTotal(total) {
  // Acesso o elemento através do id
  let valorTotal = document.getElementById('valor-total');
  // Mando escrever o resultado no elemento
  valorTotal.innerHTML = 'R$' + total;
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM carregado");
  calculaPrecoTotal();
});




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


function calculaPrecoTotal(precoItem) {
  let totalItem;
  
  let parPrecoItem = parseFloat(precoItem);
  
  let totalPedido = parPrecoItem;
  

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

  let paraPresente = document.querySelectorAll('.presente input');

  paraPresente.forEach(function(presente) {
    presente.addEventListener('change', function(event) {
      let idProduto = event.target.closest('.produto').id;
      let presente = event.target.checked; 

      if (presente == true) {
        totalPedido = totalPedido + 5;
        escreveValorTotal(totalPedido);

      } else {
        totalPedido = totalPedido - 5;
        escreveValorTotal(totalPedido);
      }

    })
  })

}

function escreveValorTotal(total) {
  let valorTotal = document.getElementById('valor-total');

  if (total === undefined) {
    valorTotal.innerHTML = 'R$ ' + 0;
  } else {
    valorTotal.innerHTML = 'R$ ' + total;
  }
}

function limparCarrinho() {
  let listaQuantidades = document.querySelectorAll('.quantidade input');

  listaQuantidades.forEach(function(quantidade) {
    let presente = document.querySelector('.presente input');
    
    presente.checked = false;
    quantidade.value = 0;

    escreveValorTotal(0);
  });

}

function novoItemECancelar() {
  if (document.getElementById('novoProduto').style.display == 'none') {
    document.getElementById('novoProduto').style.display = 'block';
    document.getElementById('novoItem').style.display    = 'none';
  } else {
    document.getElementById('novoProduto').style.display = 'none';
    document.getElementById('novoItem').style.display    = 'block';
  }
}

function excluirItem() {
  document.getElementById('produtoNovoItem').value = '';
  document.getElementById('precoNovoItem').value   = 0;

  calculaPrecoTotal(0);
}

function adicionarItem() {
  let precoItem = document.getElementById('precoNovoItem').value;

  calculaPrecoTotal(precoItem);
}

// 'DOMContentLoaded' é um evento disparado quando o HTML é totalmente carregado
document.addEventListener("DOMContentLoaded", function (event) {
  // Chamo a função assim que o HTML for carregado
  calculaPrecoTotal();
  escreveValorTotal();
  novoItemECancelar();
});
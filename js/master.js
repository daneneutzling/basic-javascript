// Arredonda Aalor
function arred(d, casas) {
  let aux = Math.pow(10, casas)
  return Math.floor(d * aux) / aux
}

// Transforma String para Float
function textToFloat(text) {
  let valor = text.replace("R$ ", "").replace(",", ".");
  return parseFloat(valor);
}

// Transforma Float para String
function floatToText(float) {
  let text = "R$ " + float;
  return text;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Calcula o Valor Total do Pedido 
function calculaPrecoTotal(precoItem) {
  let totalPedido;

  if (precoItem == null || typeof precoItem == "undefined" || isNaN(precoItem) == true) {
    totalPedido = 0;
  } else {
    totalPedido = parseFloat(precoItem);    
  }

  // Cria uma lista com todos elementos que tem a classe 'produto'
  let lista = Array.from(document.querySelectorAll('.produto'))

  for (let i = 0; i < lista.length; i++) {   
    let quantidade = document.querySelectorAll('.quantidade input')[i];
    let vlQuantidade = parseFloat(quantidade.value);

    let preco = document.querySelectorAll('.preco span')[i];
    let vlPreco = parseFloat(preco.textContent);

    let presente = document.querySelectorAll('.presente input')[i];
    let vlPresente = presente.checked;

    if (vlPresente == true) {
      totalPedido = vlQuantidade * vlPreco + 5;
    } else {
      totalPedido = vlQuantidade * vlPreco;
    }

    console.log('Item: ' + vlPreco + '. Total: ' + totalPedido) // retorna o calculo certo (para CADA item)

  }
  
  escreveValorTotal(totalPedido);
  console.log('TOTAL: ' + totalPedido) // retorna o calculo certo (para CADA item)

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Escrever o Valor Total do Pedido
function escreveValorTotal(total) {
  let valor = document.getElementById('valor-total').value;
  let valorTotal = document.getElementById('valor-total');
  
  if (valor == null || typeof valor == "undefined" || isNaN(valor)) {
    valorTotal.innerHTML = 'R$ ' + 0;
  } else {
    valorTotal.innerHTML = 'R$ ' + total;
  }
}

// Limpa o Carrinho
function limparCarrinho() {
  let listaQuantidades = document.querySelectorAll('.quantidade input');

  listaQuantidades.forEach(function(quantidade) {
    let presente = document.querySelector('.presente input');
    presente.checked = false;
    quantidade.value = 0;
    escreveValorTotal(0);
  });
}

// Função para Informar ou Cancelar Novo Item
function novoItemECancelar() {
  if (document.getElementById('novoProduto').style.display == 'none') {
    document.getElementById('novoProduto').style.display = 'block';
    document.getElementById('novoItem').style.display    = 'none';
  } else {
    document.getElementById('novoProduto').style.display = 'none';
    document.getElementById('novoItem').style.display    = 'block';
  }
}

// Função para Adicionar Novo Item
function adicionarItem() {

  let produto = document.getElementById('produtoNovoItem').value;
  let preco = document.getElementById('precoNovoItem').value;

  if (produto == "" || preco == 0) {
    alert('Informe o Nome e o Preço do Produto.')
  } else {
    calculaPrecoTotal(preco);
  }
}

// Função para Excluir Novo Item
function excluirItem() {
  document.getElementById('produtoNovoItem').value = '';
  document.getElementById('precoNovoItem').value   = 0;
  calculaPrecoTotal(0);
}

// 'DOMContentLoaded' é um evento disparado quando o HTML é totalmente carregado
document.addEventListener("DOMContentLoaded", function (event) {
  // Chamo a função assim que o HTML for carregado
  calculaPrecoTotal();
  escreveValorTotal();
  novoItemECancelar();
});
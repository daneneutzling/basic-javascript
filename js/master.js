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
/*
function calculaPrecoTotal(precoUnitario) {
  console.log(precoUnitario)
  totalItem = 0;

  precoUnitario  = textToFloat(precoUnitario); 
  let id         = document.querySelector('.produto').id;
  let quantidade = document.querySelector("#" + id + " .quantidade input").value;

  console.log(id)
  quantidade = textToFloat(quantidade)
  console.log(quantidade)

  totalItem = precoUnitario * quantidade;

  totalPedido = totalItem;
    
  console.log("Tot. Item: " + totalItem);
  console.log("Total: " + totalPedido);

}
*/

function calculaPrecoTotal(id) {
console.log(id)
  let produto = document.getElementsByClassName("produto");
  let totalItem;
  let totalPedido = 0;

  for (let index = 1; index <= produto.length; index++) {
    totalItem = 0;

    let preco = textToFloat(document.querySelector("#" + id + " .valor").textContent);
    let quantidade = document.querySelector("#" + id + " .quantidade input").value;

    totalItem = preco * quantidade;
    totalPedido = totalPedido + totalItem;
    
    console.log("Tot. Item: " + totalItem);
    console.log("Total: " + totalPedido);

  }
}


function escreveValorTotal(total) {
  // TODO
}

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM carregado");
});




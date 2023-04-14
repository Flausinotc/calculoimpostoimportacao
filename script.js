function validarValor() {
    var valorInput = document.getElementById("valor");
    var valor = parseFloat(valorInput.value);
    if (isNaN(valor) || valor <= 0) {
      valorInput.setCustomValidity("Digite um valor válido");
      document.getElementById("valor-error").innerHTML = "Digite um valor válido";
    } else {
      valorInput.setCustomValidity("");
      document.getElementById("valor-error").innerHTML = "";
    }
  }
  function calcular() {
    if (document.querySelector("form").checkValidity()) {
      var valor = parseFloat(document.getElementById("valor").value);
      var icms = valor / 0.82 * 0.18;
      var impostos = valor / 0.82 * 0.6;
      var total = valor + icms + impostos;
      document.getElementById("resultado").innerHTML = "Valor total com impostos: R$ " + total.toFixed(2);
    }
  }
  document.getElementById("valor").addEventListener("input", validarValor);
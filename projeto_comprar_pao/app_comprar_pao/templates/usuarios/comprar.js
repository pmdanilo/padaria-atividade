script type="text/javascript">
  function adicionar(produto, preco) {
    var quantidade = prompt("Digite a quantidade de " + produto + " que deseja comprar:");
    if (quantidade != null && quantidade > 0) {
      var total = quantidade * preco;
      alert("O valor total da sua compra é R$ " + total.toFixed(2));
    }
  }
</script>
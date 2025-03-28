function lancamentoFoguete () {
  let contagem = 10;

  let sequencia = setInterval(function contagemLancamento () {
    document.write(`${contagem}, `);

    if (contagem == 5) {
      document.write("Preparar para lançamento, ")
    };

    if (contagem < 1) {
      document.write("Lançamento!")
      clearInterval(sequencia)
    };

    contagem--;

  }, 1000);
}
function mostrarPreco(sabor) {
  var preco = 0.00;

  if (sabor == "chocolate") {
    preco = 1.50;
  } else {
    if (sabor == "morango") {
      preco = 2.50;
    } else {
      if (sabor == "creme") {
        preco = 2.50;
      } else {
        if (sabor == "manga") {
          preco = 3.20;
        } else {
          if (sabor == "melancia") {
            preco = 3.40;
          } else {
            if (sabor == "vanilla ice") {
              preco = 3.00;
            } else {
              if (sabor == "céu azul") {
                preco = 3.60;
              } else {
                if (sabor == "brownie") {
                  preco = 4.00;
                } else {
                  if (sabor == "havaiano") {
                    preco = 5.00;
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  document.write(`O sabor escolhido foi ${sabor}, o preço é: R$${preco.toFixed(2).replace(".", ",")}`)
};
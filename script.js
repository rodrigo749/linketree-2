function ativar() {
    console.log("Botão ativado!");
    const num1 = 5;
    const num2 = 10;
    const soma = num1 + num2;
    console.log('Soma: ', soma);
    const cor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = cor;
    console.log('Cor de fundo: ', cor);
}



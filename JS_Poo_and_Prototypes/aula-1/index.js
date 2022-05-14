function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, `estoque`, {
    enumerable: false, // mostra a chave
    value: estoque, // valor
    writable: false, // controla se pode ou n ser alterado
    configurable: true, // configuravel
  });
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: true, // controla se pode ou n ser alterado
      configurable: true, // configuravel
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: true, // controla se pode ou n ser alterado
      configurable: true, // configuravel
    },
  });
}
const p1 = new produto(`camiseta`, 20, 3);
p1.nome = "psp";
p1.preco = 500;
p1.estoque = 400;
console.log(p1);

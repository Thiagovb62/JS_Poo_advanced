// get e set na funçao construtora
function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, `estoque`, {
    enumerable: true, // mostra a chave
    configurable: true, // configuravel
    get: function () {
      return estoque;
    },
    set: function (val) {
      if (typeof val !== "number") {
        throw new TypeError("Mensagem");
      }
      console.log(val);
    },
  });
}
// get e set na funçao factory
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", "");
      nome = valor;
    },
  };
}
// const p1 = new produto(`camiseta`, 20, 3);
// p1.estoque = "ksksalw";
// console.log(p1.estoque);

const p2 = criaProduto("camiseta");
p2.nome = "Qualquer coisa";
console.log(p2.nome);

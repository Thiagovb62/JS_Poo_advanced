//produto -> , desconto, aumento
// Camiseta = Cor, Caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += this.preco * (quantia / 100);
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= this.preco * (quantia / 100);
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype = Object.create(Produto.prototype); // porem perceba que o prototype de camiseta nao é camiseta ,logo temos que alterar o nome do prototype
Camiseta.prototype.constructor = Camiseta; // <-

const produto = new Produto("poof", 50);
const caneca = new Caneca("spider-man", 45, "porcelana");
const camiseta = new Camiseta("regata", 8.0, "preta");

camiseta.desconto(50);
camiseta.aumento(50);

console.log(caneca);
console.log(produto);
console.log(camiseta);

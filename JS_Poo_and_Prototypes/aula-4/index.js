// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => "Original " + this.nome + " " + this.sobrenome; // caso o this.nomeCompleto esteja instanciado junto com o prototype o motor vai executar sempre o primeiro que ele ler,no caso this.nomeCompleto
}
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + "" + this.sobrenome;
};
Pessoa.prototype.estaAqui = true; // objeto que ja esta atrelado
// instancia
const pessoa1 = new Pessoa("Luiz", "Silva");
const pessoa2 = new Pessoa("Maria", "Silva");

console.log(pessoa1.nomeCompleto());
console.log(pessoa1.estaAqui);
console.dir(pessoa1);
console.dir(pessoa2);

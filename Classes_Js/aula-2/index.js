const _velocidade = Symbol("velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
  get velocidade() {
    return this[_velocidade];
  }
  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor < 0) return;
    this[_velocidade] = valor;
  }
  acelerar() {
    return this._velocidade < 100
      ? this._velocidade++
      : "é um carro nao um avião doido!";
  }

  freiar() {
    return this._velocidade <= 0 ? "Ta parado macho!" : this._velocidade--;
  }
}
const c1 = new Carro("celta");
c1.velocidade = 100;
console.log(c1.acelerar());
console.log(c1.velocidade);
//for (let i = 0; i <= 200; i++) {
// console.log(c1.freiar());
//}

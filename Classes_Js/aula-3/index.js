class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + "Ja ligado");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + "Ja desligado");
      return;
    }
    this.ligado = false;
  }
}
const d1 = new DispositivoEletronico("televisao");

//d1.ligar();
//d1.desligar();
//console.log(d1)

class Smartphones extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
  ligar() {
    console.log("voce alterou o metodo ligar.");
  }
  falaOi() {
    console.log("Oi");
  }
}
//const s1 = new Smartphones("iphone", "preto", "s10"); posso adicionar outros atributos também;

const t1 = new Tablet('Ipad', true);
console.log(t1.ligar()); // se comentarmos a linha 41 a 43 ,ele vai buscar na classe pai o metodo ligar
//console.log(d1.falaOi()); repare que ao tentar realizar esse metodo vai da erro ,ja que em herança as classes filhos herdam tudo da classe pai o metodo,no entanto a classe pai nao herda nada dos filhos.
console.log(t1.falaOi());

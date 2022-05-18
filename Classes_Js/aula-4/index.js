function teste() {
  console.log("Esse e meu teste");
  //console.log(this) objeto global do node
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste(); // porem
  }
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }
  //metodo estatico
  static trocaPilha() {
    //console.log(this.volume) observe que eu nao consigo chamar os atributos ,pois no estatico nao instaciamos a classe ,logo nao temo acesso a seus atributos
    console.log("trocando...");
    console.log(this); // referencia controleRemoto
  }
}
const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
console.log(controle1);

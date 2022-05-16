// new Object -> Object.prototype
/*const objA = {
    chaveA: `A`
}
const objB = {
    chaveB: `B`
    // __proto__: objA
}
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC,objB); // pode acessar os atributos do outro objeto
Object.setPrototypeOf(objB, objA);

console.log(objC.chaveB)
console.log(objB.chaveA)*/
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percent){
    this.preco = this.preco - (this.preco * (percent/100))
}
const p1 = new Produto('camiseta' , 50)

// Literal
const p2 = {
    nome: 'caneca',
    preco:15
};
//p2.aumenta(10) nao posso simplesmente chamar o metodo ,ja que o produto2 nao tem essa funcao, entao usamos o prototypeOf
Object.setPrototypeOf(p2,Produto.prototype)

p2.desconto(25)

const p3 = Object.create(Produto.prototype,{
    preco:{
        writable: true,
        configurable: true,
        enumerable:true,
        value:42
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable:true,
        value:10
    }
})

p3.desconto(50);

console.log(p3)
console.log(p1);
console.log(p2);
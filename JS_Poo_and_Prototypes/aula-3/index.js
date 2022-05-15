/**
 * Object.values
 * Object.entries
 * Object.freeze
 * Object.getOwnPropertyDescriptor(o,'prop')
 * ... (spreed)
 */
const produto = { nome: "produto1", preco: 1.8 };
const caneca = { ...produto }; //const caneca = Object.assign({},produto,{material:'porcelana'});
Object.freeze(produto); // nao deixa alterar
produto.nome = "caneca";
console.log(produto);

//Object.getOwnPropertyDescriptor(o,'prop') retorna o descritor  daquela propriedade dentro do objeto
const produto2 = { nome: "produto2", preco: 3 };
Object.defineProperty(produto2, "nome", {
  writable: false,
  configurable: false,
  value: "Outra coisa",
});
console.log(Object.getOwnPropertyDescriptor(produto2, "nome"));
produto2.nome = "sofa";
console.log(produto2);

// Object.values retorna os valores
console.log(Object.values(produto))

// Object.entries retorna a chave e os valores que podem ser interaveis
for( let [cahve,valor] of Object.entries(produto) ) {
    console.log(cahve,valor);
}

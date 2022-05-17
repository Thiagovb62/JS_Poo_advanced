const pessoas= [ 
    { id:3,nome: 'Luiz'},
    { id:2,nome: 'Maria'},
    { id:1,nome: 'Helena'},
];
/*const novasPessoas = {};
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id,{...pessoa})
} nao mostra o array da forma como queremos*/

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id,{...pessoa})
}
for (const pessoas of novasPessoas /* .values,.keys*/){
    console.log(pessoas)
}
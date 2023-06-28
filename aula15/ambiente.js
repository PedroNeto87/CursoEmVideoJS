let num = ['b', 'r', 8, 'a', 't', 'h']
num[5] = 7 //Insere um valor na posição desejada
num.push(6) //Insere um valor na última posição
num.sort() //Ordena os valores

let n = 'b'
let pos = num.indexOf(n) //Pesquisa no vetor se tem o valor

if(pos == -1){
    console.log(`O valor "${n}" não foi encontrado`)
} else{
    console.log(`O valor ${n} está na posição ${pos}`)
}


/*
for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
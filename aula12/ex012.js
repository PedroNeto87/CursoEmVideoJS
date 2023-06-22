let date = new Date()
let hora = date.getHours()
let minutos = date.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos}`)

if(hora < 12){
    console.log('Bom dia!')
} else if (hora < 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite')
}
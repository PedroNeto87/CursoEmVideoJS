function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    msg.innerHTML = `Agora são ${horas}:${minutos} hrs`

    if(horas >= 0 && horas < 12){
        img.src = 'manha.png'
        document.body.style.background = '#FFD505'
    } else if(horas >= 12 && horas <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#F56000'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#0C2E54'
    }
}
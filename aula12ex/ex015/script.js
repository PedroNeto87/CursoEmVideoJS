function verificar(){
    let date = new Date()
    let ano = date.getFullYear()

    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO]: Verifique os dados e tente novamente!')
    } else {
        let fsex =document.getElementsByName('radsex')
        let idade = ano - fano.value

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        let genero = ''

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe-menino.png')
            } else if(idade < 21){
                img.setAttribute('src', 'homem-jovem.png')
            } else if(idade < 65){
                img.setAttribute('src', 'homem-adulto.png')
            } else{
                img.setAttribute('src', 'idoso.png')
            }

        } else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe-menina.png')
            } else if(idade < 21){
                img.setAttribute('src', 'mulher-jovem.png')
            } else if(idade < 65){
                img.setAttribute('src', 'mulher-adulta.png')
            } else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos sexo: ${genero},  idade: ${idade} anos`
        res.appendChild(img)
    }
}
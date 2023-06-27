function tabuada(){
    let numero = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    if(numero.value.length == 0){
        alert('Por favor, digite um número!')
    } else{
        let n = Number(numero.value)
        tab.innerHTML = ''

        /*
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }*/

        for(let c=1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
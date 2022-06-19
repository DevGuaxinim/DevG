function carregar(){    
    var img = document.getElementById('imagem')
    var saud = document.getElementById('saudacao')
    var rel = document.getElementById('relogio')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var segundo = agora.getSeconds()
    var dia = agora.getDate()
    var ano = agora.getFullYear()
    var mes = agora.getMonth()
switch(mes){
    case 0:
        var mes = 'Janeiro'
        break
    case 1:
        var mes = 'Fevereiro'
        break
    case 2:
        var mes = 'Março'
        break
    case 3:
        var mes = 'Abril'
        break
    case 4:
        var mes = 'Maio'
        break
    case 5:
        var mes = 'Junho'
        break
    case 6:
        var mes = 'Julho'
        break
    case 7:
        var mes = 'Agosto'
        break
    case 8:
        var mes = 'Setembro'
        break
    case 9:
        var mes = 'Outubro'
        break
    case 10:
        var mes = 'Novembro'
        break
    case 11:
        var mes = 'Dezembro'
        break
}
rel.innerHTML = `Hoje é dia ${dia} de ${mes} de ${ano}<br> 
Agora são exatamente<br> ${hora}:${minuto}:${segundo} `
if(hora < 5){
saud.innerHTML = `Boa Madrugada!`
document.body.style.background = 'gray'
img.src = 'madrugada.png'
}else{
    if(hora < 12){
        saud.innerHTML = `Bom dia!`
        document.body.style.background = 'rgb(228, 216, 177)'
        img.src = 'manha.png'
    }else{
        if(hora < 18){
            saud.innerHTML = `Boa tarde!`
            document.body.style.background = 'rgb(196, 114, 6)'
            img.src = 'tarde.png'
        }else{
            saud.innerHTML = `Boa noite!`
            document.body.style.background = 'rgb(91, 88, 105)'
            img.src = 'noite.png'
        }
    }
}
}
function auto(){
    setInterval(carregar, 1000)
}
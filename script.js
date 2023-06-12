function verificar() {
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }   else {
         var fsex = window.document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src','imagens/foto-bebe-menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-homem.png')
            } 
         }
    else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/foto-bebe-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idosa-mulher.png')
            }
         }
         res.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
         res.appendChild(img)
    }
}
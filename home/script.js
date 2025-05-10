const button = document.querySelector('.links_botao')
const cabecalho = document.getElementById('cabecario')

button.addEventListener('click', tema)

function tema(){
    if(document.body.classList.contains('luz')){
        document.body.classList.remove('luz')
        document.body.classList.add('sombra')
        cabecalho.style.backgroundColor= '#000'
    }
    else{
        document.body.classList.remove('sombra')
        document.body.classList.add('luz')
        cabecalho.style.backgroundColor= '#fff'
        
    }
}
/* ################################################
Objetivo: arquivo com ações dos botões do slide
Data: 20/04/22
Autor: lais Matos
Versão: 1.0
###################################################*/

'use strici'

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('slider-item')

//fun para btn próximo
const proximoItem = () =>{
    const primeiroItem = sliderItems [0] 
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems =document.querySelectorAll('.slider-item')

}

//fun para btn anterior
const anteriorItem = () =>{
    const ultimoItem = sliderItems[sliderItems.length -1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')

}


document.getElementById ('proximo').addEventListener('click',proximoItem)
document.getElementById ('anterior').addEventListener('click',anteriorItem)
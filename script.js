let btnMenu = document.getElementById('btnMenu')

let menu = document.getElementById('menuMobile')
let fechar = document.getElementById('btnfechar')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')

    menu.classList.remove('btnfechar')
})
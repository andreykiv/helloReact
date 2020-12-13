const buttonVerde = document.querySelector("#verde")
const body = document.querySelector('body')

buttonVerde.addEventListener("click", (e) => {
    body.style.backgroundColor = "green"
})

const retocarButton = document.querySelector('#retocar')
const agrandarButton = document.querySelector('#agrandar')
const ultimoParrafo = document.querySelector('section p:last-of-type')

retocarButton.addEventListener('click', (e) => {
    ultimoParrafo.classList.add('modificarTexto')
})

agrandarButton.addEventListener('click', (e) => {
    ultimoParrafo.classList.add('agrandar')
})

const selectInput = document.querySelector('#buscarFruta')
const salida = document.querySelector("#salida")
/* -------------------------******---------------------- */

const frutas = document.querySelectorAll('ul li')
const escucharFiltro = document.querySelector('#buscarFruta')
const frutasFiltradas = document.querySelector('#salida')

let frutasExtraidasDelaLista = [];
frutas.forEach((fruta) => {
    frutasExtraidasDelaLista.push(fruta.textContent)
})

escucharFiltro.addEventListener('input', (e) => {
    const filtro = e.target.value
    const resultado = frutasExtraidasDelaLista.filter((fruta) => {
        return fruta.toLowerCase().includes(filtro)
    })
    salida.textContent = resultado.join(', ')
})

const selectConcebir = document.querySelector("#concebir")
const primeraSeccion = document.querySelector('section:first-child')

selectConcebir.addEventListener('click', (e) => {
    const button = document.createElement('button')
    button.textContent = "Hijo"
    primeraSeccion.appendChild(button)
    button.addEventListener('click', (e) => {
        selectConcebir.remove()
    })
})


const footer = document.createElement('footer')
footer.textContent = "Copyright 2020"
body.appendChild(footer)












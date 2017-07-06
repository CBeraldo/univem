var url = 'http://localhost:3000/livros'

function getLivros() {
    document.getElementById('livros').innerHTML = ""

    return fetch(url)
        .then(resp => resp.json())
        .then(data => viewLivros(data))
        .catch(err => console.error(err))
}

function viewLivros(data) {
    var livros = document.getElementById('livros')
    for (var i = 0; i < data.length; i++) {
        var livro = document.createTextNode(data[i].nome)
        var div = document.createElement('div')

        div.setAttribute('class', 'div__item')
        div.appendChild(livro)

        livros.appendChild(div)
    }
}

// document.addEventListener("DOMContentLoaded", () => { getLivros() })
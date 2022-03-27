let painel = document.getElementById('painel')
let lista = document.getElementById('lista')
let conteudo = document.getElementById('conteudo')
let linhaTabela = document.getElementById('valores')

const pessoas = [{
        nome: 'Felipe',
        rua: 'Travessa alto do passarinho',
        cidade: 'Olida',
        estado: 'Pernambuco',
        pais: 'Brasil',
        telefone: '81 983703698',
        nascimento: '27-06-92'
    },
    {
        nome: 'Maria',
        rua: 'Travessa alto do passarinho',
        cidade: 'Olida',
        estado: 'Pernambuco',
        pais: 'Brasil',
        telefone: '81 983703698',
        nascimento: '27-06-92'
    }
    ,
    {
        nome: 'Nina',
        rua: 'Travessa alto do passarinho',
        cidade: 'Olida',
        estado: 'Pernambuco',
        pais: 'Brasil',
        telefone: '81 983703698',
        nascimento: '27-06-92'
    }
]

function Lista() {
    this.nomes = []
    for (let i = 0; i < pessoas.length; i++) {
        this.nomes.push(document.createElement('li'))
        this.nomes[i].innerText = pessoas[i].nome
        this.nomes[i].classList.add('lista-de-nomes', i)
    }

    this.mostrarDados = (e) => {
    
        let indice = e.target.classList[1]
        let valores =
            Object
            .values(
                pessoas[indice]
            ).toString()
            .replace(/,/g, '\n')

        conteudo.innerText = valores


    }

    this.realse = (e) => {

        e.target.classList.add('clicado')
        let clicado = document.getElementsByClassName('clicado')

        Object.values(clicado).forEach(el => [
            el.classList.remove('clicado')
        ])
        e.target.classList.add('clicado')

    }
    this.nomes.forEach(nome => {
        lista.appendChild(nome)
        nome.addEventListener('click', this.mostrarDados)
        nome.addEventListener('click', this.realse, false)
    })


}

window.onload = Lista()
let alunos = ['Paulinha', 'Chirley', 'Luciana', 'Sam', 'Jhenifer', 'Tamiris', 'Kauan', 'Gabriel', 'Hyago', 'Danilo', 'Vinicius']

let divAlunos = document.getElementById('div-alunos')

divAlunos.innerText = alunos

function adicionarAluno() {
    
    let novoAluno = document.getElementById('nome').value
    
    alunos.push(novoAluno)

    divAlunos.innerText = alunos
}
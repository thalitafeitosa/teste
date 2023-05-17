if (localStorage.getItem('darkmode')  === "true") {
    dark.checked = true;  //marcando o input/switch

    alterarCores();
}

function alterarCores(){
    if (dark.checked) {
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-white');
        tabela.classList.add('table-dark');

    }else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark');

    }

}


function ativarDarkmode() {

    if (dark.checked) {
        localStorage.setItem('darkmode', true);
    }else {
        localStorage.setItem('darkmode', false);
    }       
    alterarCores();
}

////////////// array objetos /////////

let alunos = [
    {
        id: 1,
        nome: "ana kelly",
        email: "kelly@gmail.com",
        telefone: "0000=0000", 
        cidade: "Fortaleza",
    },

    {
        id: 2,
        nome: "Thalita ",
        email: "thalita@gmail.com",
        telefone: "0000=0000", 
        cidade: "Fortaleza",
    },

    {
        id: 3,
        nome: "anne shirley",
        email: "anne@gmail.com",
        telefone: "0000=0000", 
        cidade: "Fortaleza",
    },

    {
        id: 4,
        nome: "Gilbert Blwite",
        email: "gilbert@gmail.com",
        telefone: "0000=0000", 
        cidade: "Fortaleza",
    },

    {
        id: 5,
        nome: "Marilla Cuttbertt",
        email: "marila@gmail.com",
        telefone: "0000=0000", 
        cidade: "Fortaleza",
    },
];

function listarAlunos(){
let tabelad = document.getElementById("tabela-body");

alunos.forEach((aluno) => {

tabelad.innerHTML += ` <tr> 
<td> ${aluno.nome} </td>
<td> ${aluno.email} </td>
<td> ${aluno.telefone} </td>
<td> ${aluno.cidade} </td>
<td> 
    <button class="btn btn-success" > Editar </button> 
    <button class="btn btn-warning" > excluir </button>
</td>    
</tr>`;
})
}

function salvarAluno() {
    event.preventDefault();

    let aluno = {
        nome: nome.value ,
        email: email.value ,
        telefone: telefone.value ,
        cidade: cidade.value 
    }
    

} 
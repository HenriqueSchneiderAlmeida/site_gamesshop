const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="emoji festejando">';
const imgReprovado = '<img src="./reprovado.png" alt="emoji triste">';

/* valor da const seria == <img src="./reprovado.png" alt="emoji triste"> */

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    /* não funcionou assim */ 
    linha += ´<td>${inputNomeAtividade.value}</td>´;   
    linha += ´<td>${inputNotaAtividade.value}</td>´;   
    linha += ´<td>${inputNotaAtividade.value >= 7 ´Aprovado´ : ´Reprovado´}</td>´;   
    /*
    linha += '<td>'
    linha += inputNomeAtividade.value;
    linha += '</td>';
    linha += '<td>';
    linha +=  inputNotaAtividade.value;
    linha += '</td>'; 
    if (inputNotaAtividade.value >= 7) {
    linha += '<td><img src="./aprovado.png" alt="emoji festejando"></td>';
    } else {
    linha += '<td><img src="./reprovado.png" alt="emoji triste"></td>';
    }
    /*  ao inves de <img> aqui acima seria o nome da const lá do inicio*/
    /* fiz esse acima para substituir o da aula */

    linha += '</tr>';

    linhas+= linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
});
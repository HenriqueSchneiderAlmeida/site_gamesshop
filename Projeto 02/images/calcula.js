const form = document.getElementById('form-atividade');
let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += '<td>'
    linha += inputNomeAtividade.value;
    linha += '</td>';
    linha += '<td>';
    linha +=  inputNotaAtividade.value;
    linha += '</td>';
    if (inputNotaAtividade.value >= 7) {
    linha += '<td>Aprovado</td>';
    } else {
    linha += '<td>Reprovado</td>';
    }
    linha += '</tr>';

    linhas+= linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
});
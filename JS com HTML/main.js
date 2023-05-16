const formulario = document.getElementById('formDep');

function validaNome (nomeCompleto){
    const NomeDepArrei = nomeCompleto.split(' ');
    return NomeDepArrei.length >= 2;
    }

formulario.addEventListener('submit', function(evento) {
    let formValido = false;    
    evento.preventDefault();

    const NomeBeneficiario = document.getElementById('nomeDep');
    const NumeroConta = document.getElementById('numConta');    
    const ValorDeposito = document.getElementById('ValorDep');
    const MensagemOK = `O Montante de: <b>${ValorDeposito.value} </b> foi depositado para o cliente: <b>${NomeBeneficiario.value}</b> conta - <b>${NumeroConta.value}</b>`;

    formValido = validaNome(NomeBeneficiario.value)
    if (formValido) {
        const conteinerMSG = document.querySelector('.MSGsucesso'); 
        conteinerMSG.innerHTML = MensagemOK;
        conteinerMSG.style.display = 'block'
        NomeBeneficiario.value = '';
        NumeroConta.value = '';
        ValorDeposito.value = '';
        document.getElementById('DescrDep').value = '';        
        document.querySelector('.MSGerro').style.display = "none";
        NomeBeneficiario.style.border = '';
    } else {
        document.querySelector('.MSGerro').style.display = "block";
        NomeBeneficiario.style.border = '1px solid red'
        }
})
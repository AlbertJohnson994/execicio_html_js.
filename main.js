const form = document.getElementById('form-de-aluno');
const nomeCompleto = document.getElementById('nome-completo');

function NomeValido(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length  >= 2;
}
form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const MatriculaDoAluno = document.getElementById('matri');
    const cpfDoAluno = document.getElementById('cpf');

    formValido = NomeValido(nomeCompleto.value);
    if(formValido){
        const containerMensagemSucesso = document.querySelector('.sucess-Message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        

        nomeCompleto.value = '';
        MatriculaDoAluno.value = '';
        cpfDoAluno.value = '';


 } else{
    nomeCompleto.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
        }
});

nomeCompleto.addEventListener('keyup', function (e) {
    console.log (e.target.value);
    formValido = NomeValido(e.target.value);

    if(!formValido){
        nomeCompleto.classList.add('error');
     document.querySelector('.invalid-Pop').style.display = 'block';
        }else{
            nomeCompleto.classList.remove('error');
            document.querySelector('.invalid-Pop').style.display = 'none';
        }
});

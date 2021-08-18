function HelloWord(){
    var campoNome = document.getElementById('nome');
    var nome = campoNomeg.value;
    var mensagem = "Hello meu truta," + nome + " !";
    var paragrafo = document.getElementById('mensagem');
    paragrafo.innerText = mensagem;
}
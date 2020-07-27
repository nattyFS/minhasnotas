$(document).ready(function() {

    $('#adiciona').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/adicionadisciplinas.html')
    })
})
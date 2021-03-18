$(document).ready(function(){
    $('.btn-save').click(function(e){
        e.preventDefault()
       let dados = $('#adicionadisciplinas').serialize()
      $.ajax({
          type: 'post',
          dataType:'JSON', // transição entre visão e modelo
          assync: true,
          data: dados,
          url: 'src/disciplinas/modelo/adicionadisciplinas.php',
          success: function(dados){
            $('#adicionadisciplinas').after(`
            <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                <strong>${dados.mensagem}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
          </div>
            `)
            $('#disciplina').val("")
            $('#professor').val("")
            $('#nota').val("")
          }
      })
       
    })
})
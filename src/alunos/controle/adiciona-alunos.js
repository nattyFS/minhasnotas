$(document).ready(function(){
    $('.btn-save').click(function(e){
        e.preventDefault()
       let dados = $('#adiciona-alunos').serialize()
       console.log(dados);
      $.ajax({
          type: 'post',
          dataType:'JSON', // transição entre visão e modelo
          assync: true,
          data: dados,
          url: 'src/alunos/modelo/adiciona-alunos.php',
          success: function(dados){
            $('#adiciona-alunos').after(`
            <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                <strong>${dados.mensagem}</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
          </div>
            `)
            $('#nome').val("")
            $('#curso').val("")
            $('#tipo').val("")
          }
      })
       
    })
})
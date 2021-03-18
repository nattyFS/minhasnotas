$(document).ready(function(){

    $('.btn-login').click(function(e){
        e.preventDefault()
        var dados = $('#form-login').serialize()

        $.ajax({
            type: 'post',
            dataType:'JSON', // transição entre visão e modelo
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/login-alunos.php',
            success: function(dados){
                if(dados.result == true){
                    $(location).attr('href', 'painel.html');
                }else{

              $('#form-login').after(`
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>usuario ou senha inválidos. digite novamente</strong> 
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
            </div>
              `)
                }
              $('#id').val("");
              $('#senha').val("");
              
            }
        })
    })
})
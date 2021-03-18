$(document).ready(function(){

        $.ajax({
            type: 'post',
            dataType:'JSON', // transição entre visão e modelo
            assync: true,
            url: 'src/alunos/modelo/valida-alunos.php',
            success: function(dados){
                if(dados.return == false){
                    $(location).attr('href', 'index.html');
                }else{

                    $('#boasvindas').append(dados.nome);
                }
            }
        })
})
$(document).ready(function(){

    $('#logout').click(function(e){
        e.preventDefault()

        $.ajax({
            type: 'post',
            dataType:'JSON', // transição entre visão e modelo
            assync: true,
            url: 'src/alunos/modelo/logout-alunos.php',
            success: function(dados){
                if(dados.return == true){
                    $(location).attr('href', 'index.html');
                }else{

                    alert('ocorreu um erro na hora de fazer um logout no sistema');
                }
            }
        })
    })
})
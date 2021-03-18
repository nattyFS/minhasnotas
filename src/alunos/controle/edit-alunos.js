
function btnClose() {
 
    $('.btn-close').click(function(e) {
    e.preventDefault()
     
    $('#form').empty()
    $('#form').hide(2000)
    $('.row').show(2000)
     
        })
    }
     
    $(document).ready(function() {
     
    $('.btn-edit').click(function(e) {
    e.preventDefault()
     
    var dados = `id=${$(this).attr('id')}`
     
    $.ajax({
    type:'POST',
    dataType:'JSON',
    assync:true,
    data:dados,
    url:'src/alunos/modelo/view-alunos.php',
    success:function(dados) {
    console.log('deu certo')
     
    $('#form').show(2000)
    $('.row').hide(2000)
     
    $('#form').load('src/alunos/visao/adiciona-alunos.html', function() {
    $('h4').empty()
    $('h4').append('Edição de Registro')
    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
    $('.btn-save').addClass('btn-update').removeClass('btn-save')
    $('#nome').val(dados[0].nome)
    $('#curso').val(dados[0].curso)
    $('#senha').val(dados[0].senha)
    $('#tipo').empty()
    $('#tipo').append(`<option value="${dados[0].tipo}" selected> </option)`)
    $('#curso').after(` <input type="hidden" name="id" value="${dados[0].id}">`)
    btnClose()
                    })
                    $('body').append(`<script src="src/alunos/controle/update-alunos.js"></script>`);
                }
            })
     
        })
    })
    
    
    
    
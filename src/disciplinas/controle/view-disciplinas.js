
function btnClose() {
 
$('.btn-close').click(function(e) {
e.preventDefault()
 
$('#form').empty()
$('#form').hide(2000)
$('.row').show(2000)
 
    })
}
 
$(document).ready(function() {
 
$('.btn-view').click(function(e) {
e.preventDefault()
 
var dados = `id=${$(this).attr('id')}`
 
$.ajax({
type:'POST',
dataType:'JSON',
assync:true,
data:dados,
url:'src/disciplinas/modelo/view-disciplinas.php',
success:function(dados) {
console.log('deu certo')
 
$('#form').show(2000)
$('.row').hide(2000)
 
$('#form').load('src/disciplinas/visao/adicionadisciplinas.html', function() {
$('h4').empty()
$('h4').append('Visualização de Registro')
$('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
$('.btn-save').hide()
$('#nome').attr('disabled', true)
$('#nome').val(dados[0].nome)
$('#professor').val(dados[0].professor)
$('#professor').attr('disabled', true)
$('#nota').val(dados[0].nota)
$('#nota').attr('disabled', true)
 
btnClose()
                })
            }
        })
 
    })
})




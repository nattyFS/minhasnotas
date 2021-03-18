<?php
// Iremos conectar nossa função ao banco de dados
include('../../conexao/conn.php');
 

$id = $_REQUEST['id'];

// Verificando se os campos foram preenchidos
if(strlen($id) == 0){
$dados = array(
'tipo' => 'alert-warning',
'mensagem' => 'id inválido!'
);
}else{
// Criaremos uma variável para receber os comandos SQL
$sql = "DELETE  from alunos where id = ".$id."";
// Iremos testar a nossa linha SQL, diretamente no banco de dados
if(mysqli_query($conecta, $sql)){
    $dados = array(
        'tipo' => 'alert-success',
        'mensagem' => 'o registro foi excuido com sucesso!'
        );
}else{
    $dados = array(
        'tipo' => 'alert-warning',
        'mensagem' => 'Vish! Erro ao excluir o registro'
        );
}
}

echo json_encode($dados);
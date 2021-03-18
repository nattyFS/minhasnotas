<?php
// Iremos conectar nossa função ao banco de dados
include('../../conexao/conn.php');

$id = $_REQUEST['id'];
$senha = $_REQUEST['senha'];
$senha = md5($senha);


$sql = "SELECT * FROM alunos WHERE id = ".$_REQUEST['id']." AND senha = '".$senha."' ";
$resultado = mysqli_query($conecta, $sql);
if($resultado && mysqli_num_rows($resultado)>0){
   while($dados = mysqli_fetch_array($resultado)){
    session_start();
    $_SESSION['id'] = $id;
    $_SESSION['nome'] = $dados['nome'];
    $_SESSION['curso'] = $dados['curso'];
    $_SESSION['tipo'] = $dados['tipo'];

    }
    $dados = array('result'=> true);
}else{
    $dados = array('result'=> false);
}
 
 echo json_encode($dados);




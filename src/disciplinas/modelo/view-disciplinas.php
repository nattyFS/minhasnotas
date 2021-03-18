<?php
 
    include('../../conexao/conn.php');
 
    $sql = "SELECT * FROM disciplinas WHERE id = ".$_REQUEST['id']."";
 
    $resultado = mysqli_query($conecta, $sql);
 
    if($resultado && mysqli_num_rows($resultado)>0){
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados[] = array_map(null, $linha);
        }
    }else{
        $dados = array('erro' => 'Não foi possível buscar resultado algum');
    }
 
    echo json_encode($dados);
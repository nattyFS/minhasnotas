<?php

include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $professor = $_REQUEST['professor'];
    $nota = $_REQUEST['nota'];

    if(strlen($nome) == 0 || strlen($professor) == 0){
        echo "Existem campos em branco.FAÇA DE NOVO, AGORA. HAHHAHAHAHAH";
    }else{
        $sql = "INSERT INTO disciplinas (nome, professor, nota) VALUES ('".$nome."', '".$professor."', '".$nota."')";
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo'=> 'alert-success'
                'mensagem' => 'Os dados foram cadastrados com sucesso'
            );
        }else{
            $dados = array(
                'tipo'=> 'alert-danger'
                'mensagem' => 'QUE PENA!!! Houve um erro no cadastro'
            );
        }
    }

    echo json_encode($dados);

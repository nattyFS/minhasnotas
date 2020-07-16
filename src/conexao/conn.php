<?php
//demostre todos os erros existentes e alertas quanto ao meu código e interação com o banco de dados
ini_set('display_erros',true);
error_reporting(E_ALL);

$hostname = "localhost";
$database = "minhasnotas";
$username = "root";
$password = "";


if ($conecta = mysqli_connect($hostname,$username,$password,$database)) {
   // echo "conexão com com o banco de dados ".$database." efetuada com sucesso";
    
} else {
     echo "ERRO:".mysqli_connect_error();
    
}

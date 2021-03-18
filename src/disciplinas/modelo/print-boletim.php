<?php

    require_once '../../../libs/dompdf/autoload.inc.php';

    use Dompdf\Dompdf;

    $dompdf = new Dompdf();

    include('../../conexao/conn.php');

    session_start();

    $sql = "SELECT * FROM disciplinas WHERE id_alunos =".$_SESSION['id']."";
    $resultado = mysqli_query($conecta,$sql);
    if($resultado && mysqli_num_rows($resultado)>0){
        $imprimir = '
        <div class=" container">
        <div class="row">
        <div class="col-12">
        <div class="table-responsive">
                <table class="table">
                    <thead class="thead-primary bg-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">DISCIPLINA</th>
                            <th scope="col">PROFESSOR</th>
                            <th scope="col">NOTA</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        
                    
        ';
    while($print = mysqli_fetch_array($resultado)){
   // $imprimir = $imprimir.'<p>'.$print['nome'].' - '.$print['professor'].' - '.$print['nota'].'</p>';
    $imprimir = $imprimir.'
                        <tr>
                            <td>'.$print['id'].'</td>
                            <td>'.$print['nome'].'</td>
                            <td>'.$print['professor'].'</td>
                            <td>'.$print['nota'].'</td>
                        </tr>
    ';
    }
    $imprimir = $imprimir.'
    </tbody>
    </table>
        </div>
        </div>
        </div>
        </div>
    ';

}else{
        $dados =array('erro' => 'não foi possivel buscar resultados');
    }
    $dompdf->loadHtml($imprimir);
 
    $dompdf->setPaper('A4', 'landscape');

    $dompdf->render();

    $dompdf->stream("boletim.pdf",array(true));
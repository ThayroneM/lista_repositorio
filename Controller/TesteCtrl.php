<?php

$testeCtrl = new TesteCtrl();

class TesteCtrl{

    public function __construct()
    {
        $acao = $_POST['acao'];

        // if(isset($_POST['codigo'])){
        //     $this->codigo = $_POST['codigo'];
        // }
        if($acao != ''){
            $this->$acao();
        }
    }

    
    public function teste(){

        file_put_contents('passou.txt', 'teste');
        echo("passou");
    }

}
?>
let tabelaRepo = ""

window.addEventListener("load", function(event) {
    if(tabelaRepo != ""){
        tabelaRepo
            .clear()
            .draw();
            tabelaRepo.destroy();
    }

    tabelaRepo = $('#tblRepo').DataTable({
        "responsive": true,
        "info": false,
        "paging": true,
        "autoWidth": false,
        "searching": true,
        // "columnDefs": [
        //     {"visible": false, "targets": 4}
        // ]
    });
 
    // // #myInput is a <input type="text"> element
    $('#chkArquivado').on('change', function(e){

        let pesquisa =  "";
        if($(this)[0].checked == true){
            pesquisa = "Sim";
        }else{
            pesquisa = "Não";
        }

        tabelaRepo.column(4).search('').draw();
        tabelaRepo.column(5).search('').draw();
        tabelaRepo.column(3).search(pesquisa).draw();
    });

    $('#chkDesabilitado').on('change', function(e){

        let pesquisa =  "";
        if($(this)[0].checked == true){
            pesquisa = "Sim";
        }else{
            pesquisa = "Não";
        }

        tabelaRepo.column(3).search('').draw();
        tabelaRepo.column(5).search('').draw();
        tabelaRepo.column(4).search(pesquisa).draw();
    });

    $('#chkDownload').on('change', function(e){

        let pesquisa =  "";
        if($(this)[0].checked == true){
            pesquisa = "Sim";
        }else{
            pesquisa = "Não";
        }

        tabelaRepo.column(3).search('').draw();
        tabelaRepo.column(4).search('').draw();
        tabelaRepo.column(5).search(pesquisa).draw();
    });

    $('#chkTodos').on('change', function(e){

        if($(this)[0].checked == true){
            tabelaRepo.column(3).search('').draw();
            tabelaRepo.column(4).search('').draw();
            tabelaRepo.column(5).search('').draw();
        }
        
    });

})

let tbodyRepositorios = $('#tbodyRepositorios')[0]
tbodyRepositorios.innerHTML = ""

let url = "https://api.github.com/users/ThayroneM/repos";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.setRequestHeader ("Content-Type", "application/json");
xhttp.send();

let repositorios = JSON.parse(xhttp.responseText)

repositorios.forEach(repo => {

    let url = "https://api.github.com/repos/"+repo["full_name"]+"/commits";

    xhttp.open("GET", url, false);
    xhttp.setRequestHeader ("Content-Type", "application/json");
    xhttp.send();

    let commits = JSON.parse(xhttp.responseText)

    dataCom = commits[0]['commit']['committer']['date'].split('T');
    dataQ = dataCom[0].split("-")
    data = dataQ[2]+"/"+dataQ[1]+"/"+dataQ[0];

    let tr = document.createElement("tr")
    let tdName = document.createElement("td"), tdUrl = document.createElement("td"), tdData = document.createElement("td"), tdArquivado = document.createElement("td"), 
    tdDesabilitado = document.createElement("td"), tdDownload = document.createElement("td")

    tdName.textContent = repo['full_name']
    tdUrl.textContent = repo['url']
    tdData.textContent = data
    tdData.setAttribute('data-order',dataQ[0]+"/"+dataQ[1]+"/"+dataQ[2])

    if(repo['archived']){
        tdArquivado.textContent = 'Sim'
    }else{
        tdArquivado.textContent = 'Não';
    }

    if(repo['disabled']){
        tdDesabilitado.textContent = 'Sim';
    }else{
        tdDesabilitado.textContent = 'Não';
    }

    if(repo['has_downloads']){
        tdDownload.textContent = 'Sim';
    }else{
        tdDownload.textContent = 'Não';
    }
    
    tr.appendChild(tdName)
    tr.appendChild(tdUrl)
    tr.appendChild(tdData)
    tr.appendChild(tdArquivado)
    tr.appendChild(tdDesabilitado)
    tr.appendChild(tdDownload)

    tbodyRepositorios.appendChild(tr)
});
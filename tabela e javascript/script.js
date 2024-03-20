function inserirDados() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    
    var media = (nota1 + nota2 + nota3) / 3;
    var situacao = media >= 6 ? "Aprovado" : "Reprovado";
    
    var tabelaCorpo = document.getElementById("tabela-corpo");
    var newRow = tabelaCorpo.insertRow();
    var celulaNome = newRow.insertCell(0);
    var celulaNota1 = newRow.insertCell(1);
    var celulaNota2 = newRow.insertCell(2);
    var celulaNota3 = newRow.insertCell(3);
    var celulaMedia = newRow.insertCell(4);
    var celulaSituacao = newRow.insertCell(5);
    
    celulaNome.innerHTML = nome;
    celulaNota1.innerHTML = nota1;
    celulaNota2.innerHTML = nota2;
    celulaNota3.innerHTML = nota3;
    celulaMedia.innerHTML = media.toFixed(2);
    celulaSituacao.innerHTML = situacao;
}

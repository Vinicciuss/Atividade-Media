var botao = document.querySelector("#addNot");

botao.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector(".form-alunos");

    var nome = form.nome.value;
    var not1 = form.not1.value;
    var not2 = form.not2.value;
    var not3 = form.not3.value;

    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var not1Td = document.createElement("td");
    var not2Td = document.createElement("td");
    var not3Td = document.createElement("td");
    var mdTd = document.createElement("td");
    var stTd = document.createElement("td");

    var md = calcMedia(not1, not2, not3).toFixed(2)

    nomeTd.textContent = nome;
    not1Td.textContent = not1;
    not2Td.textContent = not2;
    not3Td.textContent = not3;
    mdTd.textContent = md;
    stTd.textContent = verificacao(md);

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(not1Td);
    alunoTr.appendChild(not2Td);
    alunoTr.appendChild(not3Td);
    alunoTr.appendChild(mdTd);
    alunoTr.appendChild(stTd);

    var tabela = document.querySelector(".alunos");
    tabela.appendChild(alunoTr);
})
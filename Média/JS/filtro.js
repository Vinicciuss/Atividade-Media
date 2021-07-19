var camp_fill = document.querySelector("#filtrar-tabela");

camp_fill.addEventListener("input", function() {
    var alunos = document.querySelectorAll(".aluno");

    if (this.value.length > 0) {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            
            var tdNome = aluno.querySelector(".inf-nome");
            var nome = tdNome.textContent;

            var exp = new RegExp(this.value, "i");

            if (exp.test(nome)) {
                aluno.classList.remove("invisivel");
            } else {
                aluno.classList.add("invisivel");
            }
        }
    } else {
            for (var i = 0; i < alunos.length; i++) {
                var aluno = alunos[i];
                aluno.classList.remove("invisivel");
            }
        }
});
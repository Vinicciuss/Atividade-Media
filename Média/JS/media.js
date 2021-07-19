var notas = document.querySelectorAll(".aluno");

for (var i = 0; i < notas.length; i++) {
    var nota = notas[i];

    var nota1 = nota.querySelector(".inf-not1");
    var r1 = nota1.textContent;
    
    var nota2 = nota.querySelector(".inf-not2");
    var r2 = nota2.textContent;
    
    var nota3 = nota.querySelector(".inf-not3");
    var r3 = nota3.textContent;

    var media = calcMedia(r1, r2, r3);

    var tdMedia = nota.querySelector(".inf-ms");
    tdMedia.textContent = media.toFixed(2)

    verificacao(media)
};

function verificacao(media) {
    if (media >= 70 ) {
        var sitA = "APROVADO :)"
        var sit1 = nota.querySelector(".inf-st")
        sit1.textContent = sitA
        return sitA
    }

    if (media < 40) {
        var sitB = "REPROVADO :("
        var sit2 = nota.querySelector(".inf-st")
        sit2.textContent = sitB
        return sitB
    }

    if (media > 40 && media < 70) {
        var sitC = "FINAL :|"
        var sit3 = nota.querySelector(".inf-st")
        sit3.textContent = sitC
        return sitC
    }
}

function calcMedia(a, b, c) {
    var media = (parseInt(a) + parseInt(b) + parseInt(c))/3;
    return media;
}
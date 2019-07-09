function Fila(id, nome, fila_com_prioridade = false, horario_de_inicio = false, 
    horario_de_encerramento = false, limite_de_senhas = false, opcional_nome = false, 
    opcional_cpf = false, opcional_idade = false) 
    {
    this.id = id;
    this.nome = nome;

    // this.senhas = [];
    this.ultima_senha = 0;
    this.senha_atual = 0;
    this.proxima_senha = 1;
    
    this.fila_com_prioridade = fila_com_prioridade;
    
    this.horario_de_inicio = horario_de_inicio;
    this.horario_de_encerramento = horario_de_encerramento;

    this.limite_de_senhas = limite_de_senhas;

    this.opcional_cpf = opcional_cpf;
    this.opcional_nome = opcional_nome;
    this.opcional_idade = opcional_idade;

    // this.senhas = []


    function add_senha() {
        this.ultimaSenha++;
        this.senhas.push({"senha" : this.ultimaSenha});
    }

    function getUltimaSenha() {
        return this.ultimaSenha;
    }

    function getProxSenha() {
        return this.proxSenha;
    }

    function chamarSenha() {
        this.proxSenha++;
    }
}

window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('change', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } 
        form.classList.add('was-validated');
      }, false);
    });
});

$("#formCriaFila").on("submit", function(){
    if($("#formCriaFila").is(":valid")) {
        var id = "fila" + localStorage.length;
        var nome = $("#inNomeDaFila").val();
        var fila_com_prioridade = $("#checkPrioridade").is(":checked");
        var horario_de_inicio = $("#tempoInicio").val();
        var horario_de_encerramento = $("#tempoFim").val();
        var limite_de_senhas = $("#inSenhasLimite").val();
        var opcional_nome = $("#checkNome").is(":checked");
        var opcional_cpf = $("#checkCpf").is(":checked");
        var opcional_idade = $("#checkIdade").is(":checked");

        var fila = new Fila(id, nome, fila_com_prioridade, horario_de_inicio, horario_de_encerramento,
            limite_de_senhas, opcional_nome, opcional_cpf, opcional_idade);
        
        localStorage.setItem(id, JSON.stringify(fila));
        return true;
        // alert(localStorage.getItem(id));
    } else {
        return false;
    }
});

// var checkPrioridade = $("#checkPrioridade");

// checkPrioridade.on("change", function() {
//     if(checkPrioridade.is(":checked")) {
        
//     } else {

//     }
// });

var checkTempoLimite = $("#checkTempoLimite");

checkTempoLimite.on("change", function() {
    if(checkTempoLimite.is(":checked")) {
        $("#inTempoLimite").attr("disabled", false);
    } else {
        $("#inTempoLimite").attr("disabled", true);
        $.each($("#inTempoLimite input"), function(index, value) { value.value = ""})
    }
});

var checkSenhasLimite = $("#checkSenhasLimite");

checkSenhasLimite.on("change", function() {
    if(checkSenhasLimite.is(":checked")){
        $("#senhasLimite").attr("disabled", false);
    } else {
        $("#senhasLimite").attr("disabled", true);
        $("#inSenhasLimite").val("");
    }
});


$("#tempoFim").on("change", function() {
    if($("#tempoFim").val() <= $("#tempoInicio").val()) {
        $("#tempoFim")[0].setCustomValidity("O tempo de finalização deve ser maior que o tempo de início");
    } else {
        $("#tempoFim")[0].setCustomValidity("")
    }
    $("#tempoFim")[0].checkValidity()
})


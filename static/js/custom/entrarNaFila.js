function Senha(id, numero, id_fila, nome, cpf, idade) {
    this.id = id;
    this.numero = numero;
    this.id_fila = this.id_fila;
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
}

var inputId = $("#input_id_da_fila") //input id da fila

inputId.on("keyup", function() {
    fila = JSON.parse(localStorage.getItem(inputId.val())); // Tenta encontrar uma fila que possua o id digitado no input
    console.log(fila)
    if(fila) {
        $(inputId).removeClass("invalid")
        $(inputId).parent().children(".validacao").html(`<div class="alert alert-success mt-2 mb-2 text-center">Tudo certo!</div>`)
        if(fila.fila_com_prioridade) {
            $("#div_prioridade fieldset").attr("disabled", false);
            $("#div_prioridade small").html('Essa fila possui prioridade, caso se encaixe, selecione uma prioridade')
        } else {
            $("#div_prioridade fieldset").attr("disabled", "disabled");
            $("#div_prioridade small").html('Essa fila não possui prioridade')
        }

        if(fila.opcional_cpf && !$("#input_cpf").length) {
            $("#cpf_obrigatorio").append(`<label for="input_cpf">CPF</label>`)
            $("#cpf_obrigatorio").append(`<input id="input_cpf" type="text" class="form-control" required>`)
            $("#cpf_obrigatorio").append(`<small class="text-form text-muted">É necessário informar o seu CPF para entrar nessa fila</small>`)
            
            $("#input_cpf").on("keyup", () => { // Função pra dar um pattern no cpf
                let value = $("#input_cpf").val().replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
                $("#input_cpf").val(value);
            });

        } else if(fila.opcional_cpf !== true) {
            $("#cpf_obrigatorio").html("")            
        }

        if(fila.opcional_nome && !$("#input_nome").length) {
            $("#nome_obrigatorio").append(`<label for="input_nome">Nome</label>`)
            $("#nome_obrigatorio").append(`<input id="input_nome" type="text" class="form-control" required>`)
            $("#nome_obrigatorio").append(`<small class="text-form text-muted">É necessário informar o seu nome para entrar nessa fila</small>`)
        } else if(fila.opcional_cpf !== true) {
            $("#nome_obrigatorio").html("")            
        }

        if(fila.opcional_idade && !$("#input_idade").length) {
            $("#idade_obrigatorio").append(`<label for="input_idade">Idade</label>`)
            $("#idade_obrigatorio").append(`<input id="input_idade" type="number" class="form-control" required>`)
            $("#idade_obrigatorio").append(`<small class="text-form text-muted">É necessário informar a sua idade para entrar nessa fila</small>`)
        } else if(fila.opcional_cpf !== true) {
            $("#idade_obrigatorio").html("")            
        }
        
    } else {
        $(inputId).addClass("invalid")
        $(inputId).parent().children(".validacao").html(`<div class="alert alert-danger mt-2 mb-2 text-center">Não existe fila com esse nome</div>`)
        $("#div_prioridade fieldset").attr("disabled", "disabled")
        $("#div_prioridade small").html('')
        $("#cpf_obrigatorio").html("")            
        $("#nome_obrigatorio").html("")            
        $("#idade_obrigatorio").html("")            
        
    }
});


// Função para selecionar apenas um checkbox [Peguei da internet]
var inputs = $('[name="check_prioridade"]'); // colocar os inputs em cache

inputs.on('click', function() { // juntar auscultador de evento
    inputs.get().forEach(function(el) { // iterar com a array nativa
        el.checked = el == this && this.checked; // marcar ou desmarcar o elemento iterado
    }, this);
});

$("#form_entrar_na_fila").on("submit", function() {
    if($("#form_entrar_na_fila").is(":valid")) {

        let id_fila = fila.id
        let numero = add_senha(fila)
        let nome = $("#input_nome") ? $("#input_nome").val() : false
        let cpf = $("#input_cpf") ? $("#input_cpf").val() : false
        let idade= $("#input_idade") ? $("#input_idade").val() : false

        let count_senhas = localStorage.getItem("count_senhas")

        if(count_senhas) {
            count_senhas++
        } else {
            count_senhas = 1;
        }

        let senha = new Senha(count_senhas, numero, id_fila, nome, cpf, idade)
        console.log(senha)
        localStorage.setItem("senha"+count_senhas, JSON.stringify(senha))
        localStorage.setItem(fila.id, JSON.stringify(fila))
        localStorage.setItem("count_senhas", count_senhas)
    }
})

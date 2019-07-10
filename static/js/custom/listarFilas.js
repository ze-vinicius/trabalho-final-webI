var hasFilas = false
for(let i = 0; i < localStorage.length; i++) {
    var fila = JSON.parse(localStorage.getItem("fila"+i));
    if(fila) {
        hasFilas = true
        $("#lista_de_filas").append(`<div id="${fila.id}" class="card mt-3"></div>`)
        $("#"+fila.id).append(`<div class="row mx-auto"></div>`);

        // $.each(fila, function(index, value) {
        //     if(value !== fila.id+" .row") {
        //         if(value !== false) {
        //             console.log(value === fila.id+" .row")
        //             console.log(`value: ${value}, fila.id ${fila.id}`)
        //             $("#"+fila.id+" .row").append(`<div class="border border-primary col-6">${index.split("_").join(" ")}</div>`)
        //             $("#"+fila.id+" .row").append(`<div class="border border-primary col-6">${value === true ? "Sim" : value }</div>`)
        //         }
        //     }
        // })

        // $("#"+fila.id+" .row").append(`<div class="border border-primary col-6">Nome:</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-12 text-center bg-primary text-light titulo-fila">${fila.nome}</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-6 index-tabela">Identificador:</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-6 text-center">${fila.id}</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-6 index-tabela">Quantidade de senhas:</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-6 text-center">${fila.ultima_senha}</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-4 index-tabela">Horario de inicio:</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 text-center ">${fila.horario_de_inicio}</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-4 index-tabela">Horario de encerramento:</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 text-center">${fila.horario_de_encerramento}</div>`);
        
        if(fila.limite_de_senhas) {
            $("#"+fila.id+" .row").append(`<div class="border border-primary col-6 index-tabela">Quantidade máxima de senhas: </div>`);
            $("#"+fila.id+" .row").append(`<div class="border border-primary col-6 text-center">${fila.limite_de_senhas}</div>`);
        }

        $("#"+fila.id+" .row").append(`<div class="border border-primary col-12 text-center bg-info text-light custom-title">Campos Opcionais</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 index-tabela">Nome: </div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 text-center">${fila.opcional_nome ? "Sim" : "Não"}</div>`);

        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 index-tabela">CPF: </div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 text-center">${fila.opcional_cpf ? "Sim" : "Não"}</div>`);

        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 index-tabela">Idade: </div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-2 text-center">${fila.opcional_idade ? "Sim" : "Não"}</div>`);

        $("#"+fila.id+" .row").append(`<div class="border border-primary col-12 text-center bg-info text-light custom-title">Senha atual: </div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-12 text-center senha-atual">${fila.senha_atual}</div>`);
        $("#"+fila.id+" .row").append(`<div class="border border-primary col-12 text-center p-3"><a id="btn_chamar_${fila.id}" href="#" class="btn btn-outline-primary btn_chamar_fila">Chamar senha</a></div>`);
    }
}
$("#lista_de_filas").append(`<div id="criar_fila" class="card mt-3"></div>`)

if(hasFilas !== true)
{
    $("#criar_fila").append(`<div class="text-center mx-auto"><h3>Você não possui nenhuma fila<h3><div>`)
    $("#criar_fila").append(`<div class="text-justify mx-auto"><p>Para criar uma fila clique no link abaixo</p></div>`)
}

$("#criar_fila").append(`<a href="./criarFila.html" class="btn btn-info">Criar nova fila</a>`)

$.each($(".btn_chamar_fila"), function(index, element) {
    // console.log(element)
    $(element).on("click", function() {
        var fila_id = $(element).attr("id").substr(11)
        var fila = JSON.parse(localStorage.getItem(fila_id))

        var senha_atual = chamar_senha(fila)
        console.log(fila.senha_atual)
        localStorage.setItem(fila_id, JSON.stringify(fila))

        $("#"+fila_id+" .senha-atual").html(`${senha_atual}`)

        return true
    })
})
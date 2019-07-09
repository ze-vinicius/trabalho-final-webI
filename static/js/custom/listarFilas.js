for(let i = 0; i < localStorage.length; i++) {
    
    var fila = JSON.parse(localStorage.getItem("fila"+i));
    if(fila) {
        $("#listaDeFilas").append(`<div id="${fila.id}" class="card mt-3"></div>`)
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
        
    }
}
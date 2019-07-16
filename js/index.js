import { onlyStr, onlyNumber, formatarCPF } from './masks.js';
import { setList,
        initListStorage,
        addToList,
        removeToList,
        saveListToStorage,
        setUpdate,
        updateDados,
        resetForm } from './app.js';

$(document).ready(function() {
    initListStorage();

    $("#nome").on("keyup", function() {
        onlyStr($(this));
    });

    $("#cpf").on("keyup", function() {
        formatarCPF($(this));
    });

    $("#idade").on("keyup", function() {
        onlyNumber($(this));
    });

    $("#submit-lead").on("click", function() {
        $(this).text('Salvar');
        let nome = $("#nome").val(),
            email = $("#email").val(),
            cpf = $("#cpf").val(),
            idade = $("#idade").val();

        let obj = {
            "nome": nome,
            "email": email,
            "cpf":cpf,
            "idade": idade
        };

        $("#nome, #email, #cpf, #idade").val("");
        $("#submit-lead").text('Salvar');

        if($("#action").prop("value") == 'update') {
            let id_obj = $("#id_obj").val();
            if(id_obj != undefined && id_obj != null) {
                updateDados(id_obj, obj);
                return;
            }
        }
        addToList(obj);
    });

    $(document).on("click", "#edit", function() {
        let index = parseInt($(this).attr('index'));
        $("#submit-lead").text('Alterar');
        $("#id_obj").attr('value', index);
        setUpdate(index);
    });

    $(document).on("click", "#remove", function() {
        let index = parseInt($(this).attr('index'));
        removeToList(index);
    });

});

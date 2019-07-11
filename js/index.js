import { onlyStr, onlyNumber, formatarCPF } from './masks.js';
import {
    setList, initListStorage, addToList
} from './app.js';

$(function() {

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
        let nome = $("#nome").val(),
            email = $("#email").val(),
            cpf = $("#cpf").val(),
            idade = $("#idade").val();

        $("#nome, #email, #cpf, #idade").val("");
        let obj = {
            "nome": nome,
            "email": email,
            "cpf":cpf,
            "idade": idade
        };

        addToList(obj);
        // console.log(`${nome} => ${email} => ${cpf} => ${idade}`);
    });
});

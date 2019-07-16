let list = [];

export function setList(list) {
    let table = "<thead>"+
    "<tr>"+
    "<td>Nome</td>"+
    "<td>Email</td>"+
    "<td>CPF</td>"+
    "<td>Idade</td>"+
    "<td>Ação</td>"+
    "</tr>"+
    "</thead>"+
    "<tbody>";

    if(list.length > 0) {
        for(let key in list) {
            // console.log(`${list[key].nome} => ${list[key].cpf}`);
            table += "<tr><td>"+list[key].nome+"</td>"+
            "<td>"+list[key].email+"</td>"+
            "<td>"+list[key].cpf+"</td>"+
            "<td>"+list[key].idade+"</td>"+
            "<td>"+
            "<button type='button' id='edit' class='btn btn-success' index='"+key+"' id='editar'>Editar</button> "+
            "<button type='button' id='remove' class='btn btn-danger' index='"+key+"' id='excluir'>Excluir</button>"+
            "</td></tr>";
        }
    }

    table += "</tbody>";
    $("#AppTable").html(table);

    saveListToStorage(list);
}

export function initListStorage() {
    let List = localStorage.getItem("leads");
    if(List) {
        list = JSON.parse(List);
    }
    setList(list);
}

export function addToList(obj) {
    list.unshift(obj);
    let jsonStr = JSON.stringify(list);
    localStorage.setItem("leads", jsonStr);
    setList(list);
}

export function saveListToStorage(list) {
    let jsonStr = JSON.stringify(list);
    localStorage.setItem('leads', jsonStr);
}

export function removeToList(id) {
    if(confirm('Do you want realy delete this Item? ')) {
        if(id === list.length - 1) {
            list.pop();
        } else if(id === 0) {
            list.shift();
        } else {
            let ArrayIni = list.slice(0,id);
            let ArrayEnd = list.slice(id + 1);
            list = ArrayIni.concat(ArrayEnd);
        }
        localStorage.removeItem("leads");
        console.log(list);
        setList(list);
    }
}

export function setUpdate(id) {
    let obj = list[id];
    $("#nome").attr('value', obj.nome);
    $("#email").attr('value', obj.email);
    $("#cpf").attr('value', obj.cpf);
    $("#idade").attr('value', obj.idade);
    $("#action").attr('value', 'update');
}

export function updateDados(id, obj) {
    list[id] = { "nome": obj.nome, "email": obj.email, "cpf": obj.cpf, "idade": obj.idade };
    resetForm();
    setList(list);
}

export function resetForm() {
    $("#nome").attr('value', "");
    $("#email").attr('value', "");
    $("#cpf").attr('value', "");
    $("#idade").attr('value', "");
    $("#action").attr('value', "");
}

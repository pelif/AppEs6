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
            "<button type='button' class='btn btn-success' index='"+key+"' id='editar'>Editar</button>"+
            "<button type='button' class='btn btn-danger' index='"+key+"' id='excluir'>Excluir</button>"+
            "</td></tr>";
        }
    }

    table += "</tbody>";
    $("#AppTable").html(table);

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

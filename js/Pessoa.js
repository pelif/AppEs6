export class Pessoa {

    constructor() {
        this.nome;
        this.email;
        this.cpf;
        this.idade;
    }

    set nome(value) {
        this._nome = value;
    }

    get nome() {
        return this._nome = value;
    }

    set email(value) {
        this._email = value;
    }

    get email() {
        return this._email;
    }

    set cpf(value) {
        this._cpf = value;
    }

    get cpf() {
        return this._cpf;
    }

    set idade(value) {
        this._idade = value;
    }

    get idade() {
        return this._idade;
    }

}

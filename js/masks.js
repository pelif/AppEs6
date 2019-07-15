export function onlyStr(element)  {
    let NomeValue = $(element).val();
    NomeValue = NomeValue.replace(/\d/g, "");
    $(element).val(NomeValue);
}

export function onlyNumber(element)  {
    let NomeValue = $(element).val();
    NomeValue = NomeValue.replace(/\D/g, "");
    $(element).val(NomeValue);
}

export function formatarCPF(element) {

    setTimeout(function() {
        element.maxLength = 14;
        let NumValue = $(element).val();
        NumValue = NumValue.replace(/\D/g, "");

        if (NumValue.length == 4)
        {
            NumValue = NumValue.replace(/(\d{3})(\d)/, "$1.$2");
        }

        if (NumValue.length >= 4 && NumValue.length == 7)
        {
            NumValue = NumValue.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3");
        }

        if (NumValue.length >= 7 && NumValue.length == 11)
        {
            NumValue = NumValue.replace(/(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
        }
        // return NumValue;
        $(element).val(NumValue);
    }, 1);

}

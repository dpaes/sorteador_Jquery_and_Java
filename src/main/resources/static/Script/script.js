let qtdNumeros = $("#qtdSorteio").val();
let lowerRangeSorteio = $("#lowerRangeSorteio").val();
let higherRangeSorteio = $("#higherRangeSorteio").val();
let ordemCrescente = $("#ordemCrescente").checked;
let naoRepetirNumeros = $("#naoRepetir").checked;

$("#submit").click(function(){
    $.ajax({
        type: "post",
        url: "/",
        data: {
            qtdNumeros: qtdNumeros,
            lowerRangeSorteio: lowerRangeSorteio,
            higherRangeSorteio: higherRangeSorteio,
            ordemCrescente: ordemCrescente,
            naoRepetirNumeros: naoRepetirNumeros
        },
        success: function(data){
            $('#resultado').html(data);
        },
    });
});
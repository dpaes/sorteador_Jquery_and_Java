$("#submit").click(function(){
    let qtdNumeros = $("#qtdSorteio").val();
    let lowerRangeSorteio = $("#lowerRangeSorteio").val();
    let higherRangeSorteio = $("#higherRangeSorteio").val();
    let ordemCrescente = $("#ordemCrescente").prop("checked");
    let naoRepetirNumeros = $("#naoRepetir").prop("checked");

    let dados = {
        qtdNumeros: parseInt(qtdNumeros),
        lowerRangeSorteio: parseInt(lowerRangeSorteio),
        higherRangeSorteio: parseInt(higherRangeSorteio),
        ordemCrescente: ordemCrescente,
        naoRepetirNumeros: naoRepetirNumeros
    };

    let dataSorteio = new Date().toLocaleDateString();
    let gmtSorteio = new Date().toLocaleTimeString();
    
    console.log("qtdNumeros: "+qtdNumeros)
    console.log("lowerRangeSorteio: "+lowerRangeSorteio)
    console.log("higherRangeSorteio: "+higherRangeSorteio)
    console.log("ordemCrescente: "+ordemCrescente)
    console.log("naoRepetirNumeros: "+naoRepetirNumeros)
    $.ajax({
        type: "post",
        url: "/",
        contentType: "application/json",
        data: JSON.stringify(dados),
        success: function(dados){
            $('#resultado').html(dados);
            $('#dataSorteio').html(dataSorteio);
            $('#gmtSorteio').html(gmtSorteio);
            $('#qtdSorteadaValue').html(dados.qtdNumeros);
            $('#rangesValue').html(dados.lowerRangeSorteio + " - " + dados.higherRangeSorteio);
        },
    });
});

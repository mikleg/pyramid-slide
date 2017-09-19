doPyramid();
const $smb = $('#form');
$smb.click(function (event) {
    deletePyramid();
    doPyramid();
});

function doPyramid(){
    printPyramid($("#range").val(), $('input[name="symbol"]:checked').val());
}

function deletePyramid(){
        while ($("#pyramid").find('.row').length != 0){
            $("#pyramid").find('.row').first().remove();
    }
}

function printPyramid(height, symbol) {
    for (var j = 0; j < height; j++) {
        var rez = '';
        for (var i = 0; i < (height - (1+j)); i++)
            rez = rez + String.fromCharCode(160);
        for (i = 0; i < j+2 ; i++)
            rez = rez + symbol;
        $("#pyramid").append( '<p class="row"></p>');
        $( ".row" ).last().text(rez);

    }
}
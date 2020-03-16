$('.square').click(function(){
    var quadratoClicked = $(this);
    var numeroNelQuadrato = $(this).children('span');
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function (data) {
            var numeroRandom = data.response;
            if (numeroRandom <= 5) {
                quadratoClicked.addClass('yellow').remove('green');
            } else {
                quadratoClicked.addClass('green').remove('yellow');
            };
            numeroNelQuadrato.text(numeroRandom);
            console.log(numeroRandom);
        },
        error: function () {

        }
    });
});

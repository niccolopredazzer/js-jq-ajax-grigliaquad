$('.square').click(function(){
    var quadratoClicked = $(this);
    var numeroNelQuadrato = $(this).children('p');
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function (data) {
            var numeroRandom = data.response;
            if (numeroRandom <= 5) {
                quadratoClicked.addClass('yellow').removeClass('green');
            } else {
                quadratoClicked.addClass('green').removeClass('yellow');
            };
            numeroNelQuadrato.text(numeroRandom);
            console.log(numeroRandom);
        },
        error: function () {

        }
    });
});

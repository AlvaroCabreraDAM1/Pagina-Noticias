var cargado = 1;
var toggleOn = false;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && toggleOn == 1) {
        cargar();
    }
});

function cargar() {
    if (cargado < 6) {
        $.getJSON("https://rawgit.com/AlvaroCabreraDAM1/Pagina-Noticias/master/data/" + cargado + ".json", function (jsonObject) {
            addrow(jsonObject);
        }); cargado++;
    } else {
        $('#mas').text('No hay más noticias');
    }
};

function addrow(json) {
    $.each(json, function (i, item) {
        $(".noticias").append(
		'<div class="row noticia">' +
            '<div class="img">' +
				'<div class="well well-sm">' + 
					item.fecha +
				'</div>' +
				'<img src="' + item.imgmid + '" class="img-rounded" alt="..." />' +
			'</div>' +	
            '<div class="text">' + 
				'<p class="titulo"><b>' + 
					item.titulo + 
				'</b></p>' +
				'<p align="justify">' + 
					item.descripcion + 
				'</p>' + 
				'<p align="justify">' + 
					'Read more' + 
				'</p>' + 
			'</div>' + 
		'</div>');
    })
};

$(document).ready(function(){
	$("#toggle-on").tooltip();
    $("#toggle-off").tooltip();
	$("#toggle-on").hide();
	
    $(".toggle").click(function(){
		if (toggleOn == false) {
			$("#toggle-off").hide();
			$("#toggle-on").show();
			toggleOn = true;
			$("#chargeButton").hide();
		} else {
			$("#toggle-on").hide();
			$("#toggle-off").show();
			toggleOn = false;
			$("#chargeButton").show();
		}
    });
	
	$("#chargeButton").click(function() {cargar();});
	
});		
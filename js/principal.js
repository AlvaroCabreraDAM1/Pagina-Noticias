var cargado = 1;
var toggleOn = false;
var theme = 0;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && toggleOn == true) {
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
        $("#noticias").append(
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
	
	$("#theme").click(function() {
		switch (theme) {
			
			case 0:
			$("html, body").css("background", "rgba(128, 181, 113, 255)");
			$("#navbar").removeClass("navbarTheme1");
			$("#navbar").addClass("navbarTheme2");
			$("#gradient").css("background", "linear-gradient(rgba(128, 181, 113, 255) 10%, rgba(0, 0, 0, 0))");
			theme = 1;
			break;
			
			case 1:
			$("html, body").css("background", "rgba(127, 173, 111, 255)");
			$("#navbar").removeClass("navbarTheme2");
			$("#navbar").addClass("navbarTheme1");
			$("#gradient").css("background", "linear-gradient(rgba(127, 173, 111, 255) 10%, rgba(0, 0, 0, 0))");
			theme = 0;
			break;
			
		}
		
	});
	
	$("#chargeButton").click(function() {cargar();});
	
});		
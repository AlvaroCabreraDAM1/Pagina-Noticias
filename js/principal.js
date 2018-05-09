

var cargado = 1;

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (cargado < 6) {
            $.getJSON("https://rawgit.com/arsg93/Noticias/master/data/" + cargado + ".json", function (jsonObject) {
                addrow(jsonObject);
            }); cargado++;
        } else {
            $('#mas').text('No hay más noticias');
        }
    }
});


function cargar() {
    if (cargado < 6) {
        $.getJSON("https://rawgit.com/arsg93/Noticias/master/data/" + cargado + ".json", function (jsonObject) {
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
            '<div class="col-sm-3 img">' +
				'<div class="well well-sm">' + 
					item.fecha +
				"</div>" +
				'<img src="' + item.img + '" class="img-rounded" alt="..." />' +
			"</div>" +	
            '<div class="col-sm-9 text">' + 
				'<p class="titulo" align="justify"><b>' + 
					item.titulo + 
				"</b></p>" +
				'<p align="justify">' + 
					item.descripcion + 
				"</p>" + 
				'<p align="justify">' + 
					"Read more" + 
				"</p>" + 
			"</div>" + 
		"</div>");
    })
};
function update(element, carrera, materiasFromLoad){
    $("#grafo").text("")
    $("#grafo").append("<div class='loader'></div>")
    let filename, titulo, orientaciones, plan
    carreraActual = carrera
    switch(carrera){
        case 'Informática':
            orientaciones = true
            filename = 'data/informatica-1986.csv'
            titulo = 'Ingeniería en Informática'
            plan = 'Plan 1986 v2016'
            break
        case 'Sistemas':
            orientaciones = false
            filename = 'data/sistemas-1986.csv'
            titulo = 'Licenciatura en Análisis de Sistemas'
            plan = 'Plan 1986 v2016'
            break
        case 'Electrónica':
            orientaciones = true
            filename = 'data/electronica-2009.csv'
            titulo = 'Ingeniería Electrónica'
            plan = 'Plan 2009 v2019'
            break
        case 'Química':
            orientaciones = false
            filename = 'data/quimica-1986.csv'
            titulo = 'Ingeniería Química'
            plan = 'Plan 1986 v2016'
            break
        case 'Civil':
            orientaciones = false
            filename = 'data/civil-2009.csv'
            titulo = 'Ingeniería Civil'
            plan = 'Plan 2009 v2016'
            break
        case 'Alimentos':
            orientaciones = false
            filename = 'data/alimentos-2000.csv'
            titulo = 'Ingeniería de Alimentos'
            plan = 'Plan 2000 v2016'
            break
        case 'Electricista':
            orientaciones = false
            filename = 'data/electricista-2009.csv'
            titulo = 'Ingeniería Electricista'
            plan = 'Plan 2009 v2016'
            break
        case 'Naval':
            orientaciones = false
            filename = 'data/naval-1986.csv'
            titulo = 'Ingeniería Naval y Mecánica'
            plan = 'Plan 1986 v2016'
            break
        case 'Mecánica':
            orientaciones = true
            filename = 'data/mecanica-1986.csv'
            titulo = 'Ingeniería Mecánica '
            plan = 'Plan 1986 v2016'
            break
        case 'Petróleo':
            orientaciones = false
            filename = 'data/petroleo-2015.csv'
            titulo = 'Ingeniería en Petróleo'
            plan = 'Plan 2015 v2016'
            break
        case 'Agrimensura':
            orientaciones = false
            filename = 'data/agrimensura-2006.csv'
            titulo = 'Ingeniería en Argimensura'
            plan = 'Plan 2006 v2016'
            break
        case 'Industrial':
            orientaciones = false
            filename = 'data/industrial-2011.csv'
            titulo = 'Ingeniería Industrial'
            plan = 'Plan 2011 v2019'
            break
    }

    $('#creditos-var').text(0)
    fiubamap(filename, materiasFromLoad)
    $("#carrera-actual-long").text(titulo + ' | ' + plan);
    $("#carrera-actual-short").text(carrera);
    $("#carreras .active").removeClass('active')
    $(element).addClass('active')
    displayOrientaciones(orientaciones)
}

function displayOrientaciones(show){
    $("#orientaciones a").remove()
    if (show) {$("#orientaciones-hidden").show()}
    else {$("#orientaciones-hidden").hide()}
}

function fiubamap(file, materiasFromLoad){
    $.ajax({
        url: file,
        dataType: 'text',
        success: function(data, jqXHR, textStatus) {graphFromCSV(data, materiasFromLoad)}
    })
}

$(".dropdown").on("mouseover", function () {
    $(this).children('.dropdown-content').show()
});

$(".dropdown").on("mouseout", function () {
    $(this).children('.dropdown-content').hide()
});

$(".dropdown-content").on("click", function () {
    $('.dropdown-content').hide()
});

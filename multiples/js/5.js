function ciudad() {
    let ciudad = document.getElementById('c').value;

    switch (ciudad) {
        case '1':
            swal('Orizaba', 'Orizaba ​​ es una ciudad mexicana ubicado en el centro geográfico del Estado de Veracruz, en la región de las altas montañas.​ Junto con otros municipios aledaños forma la cuarta área metropolitana más poblada del estado.​ Superficie: 41.39 km². Clima: Templado de tierras altas Cwb')
            break;
        case '2':
            swal('Seattle', 'Seattle es una ciudad del estrecho de Puget en el noroeste del Pacífico, rodeada de agua, montañas y bosques de hoja perenne, y cuenta con miles de acres de áreas verdes. Es la ciudad más grande del estado de Washington y alberga una gran industria tecnológica, con las sedes centrales de Microsoft y Amazon establecidas en su área metropolitana. La futurística torre Space Needle, un legado de la Feria Mundial de 1962, es su sitio más icónico. Superficie: 217 km²');
            break;
        case '3':
            swal('París', 'París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré.')
            break;
        case '4':
            swal('Oakland', 'Oakland es una ciudad del lado este de la bahía de San Francisco, en California. La plaza Jack London tiene una estatua del escritor, quien frecuentaba el área. Cerca está Old Oakland con arquitectura victoriana restaurada y tiendas de moda. El Museo Oakland de California, que abarca la naturaleza, el arte y la historia del estado, se encuentra cerca del Barrio Chino. En la parte alta de la ciudad, están los teatros Fox y Paramount de estilo art deco y hay restaurantes, bares y galerías')
            break;
        case '5':
            swal('Nashville', 'Nashville es la capital del estado de Tennessee en Estados Unidos, donde se encuentra la Universidad Vanderbilt. Los lugares icónicos de la música country incluyen la Grand Ole Opry House, sede del famoso escenario y programa radial “Grand Ole Opry”. El Salón de la Fama y Museo de la Música Country y el histórico Auditorio Ryman se encuentran en el centro de la ciudad, al igual que el Distrito, que cuenta con honky-tonks con música en vivo y el Museo de Johnny Cash, que celebra la vida del cantante')
            break;

        default:
            break;
    }
}
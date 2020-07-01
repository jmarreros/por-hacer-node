const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando){
    case 'crear':
        porHacer.crear(argv.description);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        console.log(colors.green('=====Listado====='));
        listado.forEach( item => {
            console.log(`Tarea: `, item.description);
            console.log(`Estado: `, item.completado);
        });
        console.log(colors.green('================='));


        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizar);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.description);
        console.log(borrar);
        break;

    default:
        console.log(`Comando no es reconocido`);
}
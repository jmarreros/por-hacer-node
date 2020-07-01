const fs = require('fs');
let listadoPorHacer = [];

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = ( desc, completado ) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === desc;
    })

    if (index >=0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (desc) => {

    try{
        cargarDB();
        result = listadoPorHacer.filter( item => {
            return item.description !== desc;
        })

        listadoPorHacer = result;

        if ( listadoPorHacer.length === result.length){
            return 'No existe ese elemento';
        } else {
            guardarDB();
            return true;
        }

    } catch (err){
        return false;
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err)=>{
        if (err) throw err;
        console.log(`Se grabó correctamente`);
    });
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (des) => {

    cargarDB(); //cargamos los datos en el array listadoPorHacer

    let porHacer = {
        description:des,
        completado:false,
    };
    listadoPorHacer.push(porHacer);

    guardarDB();
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}

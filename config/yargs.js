let argv = require('yargs')
            .command('crear', 'Crea una nueva tarea por hacer', {
                description:{
                    demand:true,
                    alias:'d',
                    desc:'Crear una nueva tarea'
                }
            })
            .command('borrar', 'Borra una tarea por hacer', {
                description:{
                    demand:true,
                    alias:'d',
                    desc:'borra una tarea'
                }
            })
            .command('actualizar', 'Actualiza una tarea por hacer', {
                description:{
                    demand:true,
                    alias:'d',
                    desc:'Actualizar una nueva tarea'
                },
                completado:{
                    alias:'c',
                    default: true,
                    desc:'Establecer a completado una tarea'
                }
            })
            .help()
            .argv;

module.exports = {
    argv
}
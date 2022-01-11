import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    //destructuring
    const { nombre, propietario, correo, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar al paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }

    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span className="font-normal normal-case">{correo}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta:{' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button" className="font-bold uppercase bg-indigo-600 rounded-md
                  text-white py-2 px-10 hover:bg-indigo-700 cursor-pointer transition-all" 
                  onClick={() => setPaciente(paciente)}
                  >Editar
                </button>

                <button type="button" className="font-bold uppercase bg-red-600 rounded-md
                 text-white py-2 px-10 hover:bg-red-700 cursor-pointer transition-all"
                 onClick={handleEliminar}
                 >Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente

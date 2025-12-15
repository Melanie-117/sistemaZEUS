import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import logo from "../img/perro_gato.png";
import Swal from "sweetalert2";


type RegistroProps = {
    onRegresarClick: () => void;
}

function Registro({ onRegresarClick }: RegistroProps){
    return(
        <>
            <div className="d-flex flex-column align-items-center w-100 mt-5">
                <div className="card card_registro d-flex flex-row" style={{background: '#212529', color: 'white'}}>
                    <div className="w-100">
                        <form id="registro">
                            <h4 className="mt-2 ms-4">Registro de nuevos animales</h4>
                            <br></br>
                            <div className="d-flex gap-1 mb-2">
                                <div className="form-group col-5 ms-4">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control text-center" id="nombre_mascota" placeholder="Escribe el nombre" />
                                </div>
                                <div className="form-group col-5">
                                    <label>Especie</label>
                                    <select id="select_especie" className="form-select">
                                        <option className="text-center" selected>--SELECCIONA LA ESPECIE--</option>
                                        <option>1- GATO</option>
                                        <option>2- PERRO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-5 mb-2 ms-4">
                                <label>Color</label>
                                <select id="select_color" className="form-select">
                                    <option className="text-center" selected>--SELECCIONA EL COLOR--</option>
                                    <option>1- VERDE</option>
                                    <option>2- ROSA</option>
                                    <option>3- AMARILLO</option>
                                    <option>4- PISTACHE</option>
                                    <option>5- MORADO</option>
                                    <option>6- AZUL</option>
                                </select>
                            </div>
                        
                            <div className="form-group col-5 mb-4 ms-4">
                                <label>Tamaño</label>
                                <select id="select_tamano" className="form-select">
                                    <option className="text-center" selected>--SELECCIONA EL TAMAÑO--</option>
                                    <option>1- CHICO</option>
                                    <option>2- MEDIANO</option>
                                    <option>3- GRANDE</option>
                                </select>
                            </div>
                        
                            <div className="form-group mb-4 ms-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check_macho" />
                                    <label className="form-check-label">
                                        Macho
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check_hembra" />
                                    <label className="form-check-label">
                                        Hembra
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex gap-2 ms-4 mb-3">
                                <button type="button" className="btn btn-success"
                                    onClick={() => {
                                        Swal.fire({
                                            title: "Registro exitoso",
                                            text: "El animal se registro correctamente",
                                            icon: "success",
                                            confirmButtonText: "Aceptar",
                                            customClass: {
                                                popup: 'swal-custom_popup',
                                                title: 'swal-custom_title',
                                            }
                                        }).then(() => {
                                            // resetear formulario
                                            (document.getElementById("registro") as HTMLFormElement)?.reset();
                                        });
                                    }}>
                                    <i className="fa-solid fa-floppy-disk"></i> Registrar
                                </button>
                                <button type="button" className="btn btn-secondary"
                                    onClick={(e) =>{
                                        e.preventDefault();
                                        onRegresarClick();  
                                    }}>
                                    <i className="fa-solid fa-arrow-rotate-left"></i> Regresar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor_logo">
                            <img src={logo} className="logo_perro_gato mb-5 mt-2" /> 
                        </div>
                    </div>
                </div>

                <div className="table_registros">
                    <TablaRegistros />
                </div>
            </div>
        </>
    );
}

export default Registro


export function TablaRegistros() {
  const registros = [
    { nombre: 'Max', especie: 'Perro', color: 'ROSA', tamano: 'Grande', sexo: 'Macho' },
    { nombre: 'Luna', especie: 'Gato', color: 'VERDE', tamano: 'Pequeño', sexo: 'Hembra' },
    { nombre: 'Rocky', especie: 'Perro', color: 'PISTACHE', tamano: 'Mediano', sexo: 'Macho' },
    { nombre: 'Simba', especie: 'Gato', color: 'AMARILLO', tamano: 'Grande', sexo: 'Macho' }
  ];

  useEffect(() => {
    const table = $('#tabla_registro').DataTable();

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <div className="container mt-4 dark-container">
        <br></br>
        <table id="tabla_registro" className="display w-100">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Color</th>
                <th>Tamaño</th>
                <th>Sexo</th>
            </tr>
            </thead>
            <tbody>
            {registros.map((item, index) => (
                <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.especie}</td>
                <td>{item.color}</td>
                <td>{item.tamano}</td>
                <td>{item.sexo}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <br></br>
    </div>
  );
}
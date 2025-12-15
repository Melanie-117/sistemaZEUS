//COMPONENTES---------------------------------------
import Header from './components/Header';
import Card, {CardBody} from './components/Card';
import Button from './components/Button';
import Loader from './components/Loader';
import MiGrafico from './components/MiGrafico';
import Registro from './components/Registro.js';
import TablaRegistros from './components/TablaRegistros.js';

//LIBRERIAS-----------------------------------------
import Swal from 'sweetalert2';
import * as React from "react";

import './lib/bootstrap.bundle.min.js';
import './lib/dataTables.dataTables.min.css';

//CSS-----------------------------------------------
// import List from './components/List';
import './css/App.css';
import './css/Card.css';
import './css/Swal.css';
import './css/Registro.css';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [finalizado, setFinalizado] = React.useState(false);
  const [vista, setVista] = React.useState<"inicio" | "registro" | "tabla_registros">("inicio");

  // ----------- Función para simular login -------------
  const Click = () => {
    const user = (document.getElementById("usuario") as HTMLInputElement)?.value.trim();
    const contra = (document.getElementById("contraseña") as HTMLInputElement)?.value.trim();

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Debes ingresar el usuario",
        customClass: {
          popup: "swal-custom_popup",
          title: "swal-custom_title",
        },
      });
      return;
    }

    if (!contra) {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Debes ingresar la contraseña",
        customClass: {
          popup: "swal-custom_popup",
          title: "swal-custom_title",
        },
      });
      return;
    }

    // Simula carga
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFinalizado(true);
    }, 5000);
  };

  // ----------- Funciones para cambiar vistas -------------
  const mostrarRegistro = () => setVista("registro");
  const mostrarTabla_registros = () => setVista("tabla_registros");
  const mostrarInicio = () => setVista("inicio");

  // ----------- Renderizado condicional -------------
  return (
    <>
      {!loading && !finalizado && (
        <Card>
          <CardBody />
          <Button hiddenButton={false} onClick={Click}>
            Ingresar
          </Button>
        </Card>
      )}

      {loading && <Loader />}

      {!loading && finalizado && (
        <>
          <Header
            onRegistroClick={mostrarRegistro}
            onReportesClick={mostrarTabla_registros}
          />

          {vista === "inicio" && <MiGrafico />}
          {vista === "registro" && <Registro onRegresarClick={mostrarInicio} />}
          {vista === "tabla_registros" && <TablaRegistros onRegresarClick={mostrarInicio}/>}
        </>
      )}
    </>
  );
}

export default App





// import Card, {CardBody} from './components/Card';
// import List from './components/List';
// import Button, {Button2, Button3} from './components/Button';
// import Loader from './components/Loader';
// import * as React from "react";
// import './App.css';

// function App(){
//   const [loading, setLoading] = React.useState(false);
  
//   const [data, setData] = React.useState(['Goku', 'Tanjiro', 'Eren']);
  
//   const Click = () => {
//     setLoading(true);
    
//     setTimeout(() => {
//       setLoading(false);
//     }, 5000);
//   };

//   const addNegro = () => setData([...data, "Negro"]);
//   const delNegro = () => setData(data.slice(0, -1));
//   //vamos a pasarle otro componente 
//   return <Card>
//             <CardBody title='HOLA MUNDO' text='esto es el texto jdnjfsnvjnkj'/>
//             <Button2 onClick={addNegro}>Agregar</Button2>
//             <Button3 onClick={delNegro}>Eliminar</Button3>
//             <List data={data} color="#ba89d5"></List>
//             {/* <Button hiddenButton={false} onClick={Click}>Boton</Button> */}
            
//             {!loading && <Button hiddenButton={false} onClick={Click}>Botón</Button>}
//             {loading && <Loader />}
//          </Card>
// }

// export default App




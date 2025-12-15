import { ReactNode } from "react";
import logo from "../img/zeus.jpeg"
/*
useState guardar y manejar valores que cambian con el tiempo en un componente. por ejemplo los input
van a cambiar, nunca va a ser estaticos
*/

// le pasamos lo que tiene la funcion CardBody
interface props{
  children: ReactNode
}

function Card(props: props){
  const {children} = props

    return (
            <div className="card" style={{background: 'rgb(27, 21, 80)', color: 'white'}}>
              <div className="borde_card">
                <div className="card-body">{children}</div>
              </div>
            </div>
            );
}

export function CardBody() {
  return (
    <>
      <div className="contenedor_logo">
        <img src={logo} className="logo_zeus mb-5" /> 
      </div>
      <div className="text-center mb-5">
        <h4>Sistema de registro ZEUS</h4>
      </div>
      <form className="row g-3 needs-validation">
        <div className="d-flex justify-content-center gap-3">
          <div className="col-5">
            <label className="form-label"> 
              <i className="fa-solid fa-circle-user"></i> Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
            />
          </div>
          <div className="col-5">
            <label className="form-label">
              <i className="fa-solid fa-lock"></i> Contraseña</label>
            <input
              type="text"
              className="form-control"
              id="contraseña"
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default Card;

// import { ReactNode } from "react";

// interface props{
//   children: ReactNode
// }

// function Card(props: props){

//   const {children} = props

//     return (

//             <div className="card" style={{
//               width: '350px',
//             }}>
//               <div className="card-body">{children}</div>
//             </div>
//             );
// }

// interface CardBodyProps {
//   title: string,
//   //texto es opcional al colocarle el signo de interrogación
//   text?: string
// }
// export function CardBody(props: CardBodyProps){
//   const {title, text} = props;
//   return(
//       <>
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{text}</p>
//         </div>
//       </>
//   );
// }

// export default Card;








import { ReactNode } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // hay que instalar npm install @fortawesome/fontawesome-free

type props = {
    children: ReactNode;
    hiddenButton?: boolean;
    onClick?: () => void;
}

function Button({children, hiddenButton, onClick}: props){
    return (
              <div className="d-flex justify-content-center mt-5 mb-5">
                  <button onClick={onClick} hidden={hiddenButton} type="button" className="btn btn-outline-success btn_ingresar">
                        <i className="fa-solid fa-right-to-bracket"></i>
                         {children}
                  </button>
              </div>
    )
}

export default Button;

// export function Button2({children, onClick}: props){
//     return <button onClick={onClick} type="button" className="btn btn-success" style={{
//               height: '50px', width: '110px', marginTop: '10px', marginBottom: '10px'
//               }}>
//                 <i className="fa-solid fa-floppy-disk" style={{ marginRight: '8px' }}></i>
//                 {children}
//            </button>
// }
// export function Button3({children, onClick}: props){
//     return <button onClick={onClick} type="button" className="btn btn-danger" style={{
//               height: '50px', width: '110px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px'
//               }}>
//                 <i className="fa-solid fa-trash-can" style={{ marginRight: '8px' }}></i>
//                 {children}
//            </button>
// }


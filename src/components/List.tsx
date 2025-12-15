
// type Props = {
//     data: string[];
// }

// function List({data}: Props) {

//   return (
//     <>
//         <ul className="list-group">
//             {data.map((elemento) => (  
//                 <li key={elemento} 
//                     className="list-group-item" 
//                     onClick={() => console.log(elemento)}
//                     >{elemento}
//                 </li>
//             ))}
//         </ul>
//     </>
//   )
// }

// export default List

import * as React from "react";

type Props = {
  data: string[];
  color: string; // el color que se aplicará al hacer clic
};

function List({ data, color }: Props) {
  const [activo, setActivo] = React.useState<string | null>(null);

  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          key={elemento}
          className="list-group-item"
          onClick={() => setActivo(elemento)}
          style={{ backgroundColor: activo === elemento ? color : "" }}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;

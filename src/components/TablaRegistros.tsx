import { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import "datatables.net";
import { jsPDF } from "jspdf";
import logo from "../img/zeus.jpeg"

type RegistroProps = {
    onRegresarClick: () => void;
}

function TableRegistros({ onRegresarClick }: RegistroProps){
    return (
        <>
            <div className="w-100">
                    <TablaRegistros onRegresarClick={onRegresarClick}/>
            </div>
        </>
    );
}

export default TableRegistros

type TablaRegistrosProps = {
    onRegresarClick: () => void;
}

export function TablaRegistros({ onRegresarClick }: TablaRegistrosProps) {
  const [registroSeleccionado, setRegistroSeleccionado] = useState<any | null>(null);

  const registros = [
      { id: 1, nombre: 'Max', especie: 'PERRO', color: 'ROSA', tamano: 'GRANDE', sexo: 'Macho' },
      { id: 2, nombre: 'Luna', especie: 'GATO', color: 'VERDE', tamano: 'CHICO', sexo: 'Hembra' },
      { id: 3, nombre: 'Rocky', especie: 'PERRO', color: 'PISTACHE', tamano: 'MEDIANO', sexo: 'Macho' },
      { id: 4, nombre: 'Simba', especie: 'GATO', color: 'AMARILLO', tamano: 'GRANDE', sexo: 'Macho' },
      { id: 5, nombre: 'Bella', especie: 'GATO', color: 'MORADO', tamano: 'CHICO', sexo: 'Hembra' },
      { id: 6, nombre: 'Milo', especie: 'PERRO', color: 'AZUL', tamano: 'MEDIANO', sexo: 'Macho' },
      { id: 7, nombre: 'Charlie', especie: 'PERRO', color: 'ROSA', tamano: 'GRANDE', sexo: 'Macho' },
      { id: 8, nombre: 'Chloe', especie: 'GATO', color: 'VERDE', tamano: 'CHICO', sexo: 'Hembra' },
      { id: 9, nombre: 'Toby', especie: 'PERRO', color: 'AMARILLO', tamano: 'MEDIANO', sexo: 'Macho' },
      { id: 10, nombre: 'Lola', especie: 'GATO', color: 'PISTACHE', tamano: 'GRANDE', sexo: 'Hembra' },
      { id: 11, nombre: 'Zeus', especie: 'PERRO', color: 'MORADO', tamano: 'CHICO', sexo: 'Macho' },
      { id: 12, nombre: 'Nala', especie: 'GATO', color: 'AZUL', tamano: 'MEDIANO', sexo: 'Hembra' },
      { id: 13, nombre: 'Duke', especie: 'PERRO', color: 'VERDE', tamano: 'GRANDE', sexo: 'Macho' },
      { id: 14, nombre: 'Sasha', especie: 'GATO', color: 'ROSA', tamano: 'CHICO', sexo: 'Hembra' },
      { id: 15, nombre: 'Leo', especie: 'PERRO', color: 'AMARILLO', tamano: 'MEDIANO', sexo: 'Macho' },
      { id: 16, nombre: 'Mia', especie: 'GATO', color: 'PISTACHE', tamano: 'GRANDE', sexo: 'Hembra' },
      { id: 17, nombre: 'Buddy', especie: 'PERRO', color: 'MORADO', tamano: 'CHICO', sexo: 'Macho' },
      { id: 18, nombre: 'Coco', especie: 'GATO', color: 'AZUL', tamano: 'MEDIANO', sexo: 'Hembra' },
      { id: 19, nombre: 'Oscar', especie: 'PERRO', color: 'ROSA', tamano: 'GRANDE', sexo: 'Macho' },
      { id: 20, nombre: 'Lily', especie: 'GATO', color: 'VERDE', tamano: 'CHICO', sexo: 'Hembra' },
      { id: 21, nombre: 'Rex', especie: 'PERRO', color: 'PISTACHE', tamano: 'MEDIANO', sexo: 'Macho' },
      { id: 22, nombre: 'Sophie', especie: 'GATO', color: 'AMARILLO', tamano: 'GRANDE', sexo: 'Hembra' },
      { id: 23, nombre: 'Jack', especie: 'PERRO', color: 'MORADO', tamano: 'CHICO', sexo: 'Macho' },
      { id: 24, nombre: 'Daisy', especie: 'GATO', color: 'AZUL', tamano: 'MEDIANO', sexo: 'Hembra' },
      { id: 25, nombre: 'Baxter', especie: 'PERRO', color: 'VERDE', tamano: 'GRANDE', sexo: 'Macho' },
      { id: 26, nombre: 'Ruby', especie: 'GATO', color: 'ROSA', tamano: 'CHICO', sexo: 'Hembra' },
      { id: 27, nombre: 'Finn', especie: 'PERRO', color: 'AMARILLO', tamano: 'MEDIANO', sexo: 'Macho' },
      { id: 28, nombre: 'Emma', especie: 'GATO', color: 'PISTACHE', tamano: 'GRANDE', sexo: 'Hembra' },
      { id: 29, nombre: 'Thor', especie: 'PERRO', color: 'MORADO', tamano: 'CHICO', sexo: 'Macho' },
      { id: 30, nombre: 'Gracie', especie: 'GATO', color: 'AZUL', tamano: 'MEDIANO', sexo: 'Hembra' }
  ];

  useEffect(() => {
    const table = $('#tabla_registro').DataTable();

    return () => {
      table.destroy();
    };
  }, []);

  return (
    <>
        <div className="container mt-4 dark-container">
            <br></br>
            <div>
                <button type="button" className="btn btn-warning"
                    onClick={(e) =>{
                        e.preventDefault();
                        onRegresarClick();  
                    }}>
                    <i className="fa-solid fa-reply"></i> Regresar
                </button>
            </div>
            <table id="tabla_registro" className="display w-100">
                <thead>
                <tr>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Especie</th>
                    <th className="text-center">Color</th>
                    <th className="text-center">Tamaño</th>
                    <th className="text-center">Sexo</th>
                    <th className="text-center">Acción</th>
                </tr>
                </thead>
                <tbody>
                {registros.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.especie}</td>
                        <td>{item.color}</td>
                        <td>{item.tamano}</td>
                        <td>{item.sexo}</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={() => setRegistroSeleccionado(item)}
                                    >
                                <i className="fa-solid fa-file-pdf"></i> Imprimir Reporte
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <ModalPDF registro={registroSeleccionado} />
            <br></br>
        </div>
    </>
  );
}

interface Registro {
  id: number;
  nombre: string;
  especie: string;
  color: string;
  tamano: string;
  sexo: string;
}

interface ModalPDFProps {
  registro: Registro | null;
}

export function ModalPDF({ registro }: ModalPDFProps) {
  const [pdfUrl, setPdfUrl] = useState<string>("");

  const generarPDF = () => {
    if (!registro) return;

    const doc = new jsPDF();
    // ---------- HEADER CON COLOR ----------
    const headerX = 10;
    const headerY = 10;
    const headerWidth = 190;
    const headerHeight = 30;

    // color de fondo del header (azul moderno)
    doc.setFillColor(87, 85, 204);
    doc.rect(headerX, headerY, headerWidth, headerHeight, "F"); 

    // agregar logo
    doc.addImage(logo, "PNG", 15, 12, 25, 25);

    // título centrado
    doc.setTextColor(255, 255, 255); // blanco
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Reporte Sistema ZEUS", headerX + headerWidth / 2, headerY + 17, { align: "center" });

    // ---------- TEXTO DESCRIPTIVO ----------
    let x = 15;
    let y = 50;
    const ancho = 180;

    const texto = `El sistema ZEUS es una plataforma diseñada para el registro y gestión de perritos y gatitos. Permite almacenar información detallada sobre cada mascota, incluyendo su nombre, raza, edad y características especiales, facilitando así el seguimiento, control y organización de manera eficiente y confiable.`;

    const alturaRect = 50;

    // fondo y borde
    doc.setFillColor(240, 240, 240);
    doc.setDrawColor(87, 85, 204);
    doc.rect(x - 3, y - 3, ancho + 6, alturaRect, "FD"); // relleno + borde

    // dibujar texto
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(texto, x, y+5, { maxWidth: ancho }); // texto justificado dentro del ancho

    // actualizar y
    y += alturaRect + 10;

    // ---------- DATOS DEL REGISTRO ----------
    const datos = [
      ["Nombre", registro.nombre],
      ["Especie", registro.especie],
      ["Color", registro.color],
      ["Tamaño", registro.tamano],
      ["Sexo", registro.sexo],
    ];

    const cellHeight = 10;
    const cellWidth = 40;
    const startX = x;
    let rowX = x;
    let rowY = y;

    datos.forEach((item, index) => {
      const [campo, valor] = item;

      doc.text(`Datos de la marcota ${registro.nombre}`, x, y-5);
      // color alternado
      if (index % 2 === 0) doc.setFillColor(230, 230, 250); // lila claro
      else doc.setFillColor(245, 245, 255); // casi blanco

      doc.roundedRect(rowX, rowY, cellWidth, cellHeight, 2, 2, "F"); // relleno con esquinas redondeadas
      doc.setDrawColor(87, 85, 204);
      doc.roundedRect(rowX, rowY, cellWidth, cellHeight, 2, 2); // borde

      doc.setTextColor(0, 0, 0);
      doc.text(`${campo}: ${valor}`, rowX + 2, rowY + 6);

      if ((index + 1) % 4 === 0) {
        rowX = startX;
        rowY += cellHeight + 2;
      } else {
        rowX += cellWidth + 2;
      }
    });

    // ---------- SEPARADOR FINAL ----------
    doc.setDrawColor(87, 85, 204);
    doc.setLineWidth(0.5);
    doc.line(x, rowY + 15, x + ancho, rowY + 15);

    const pdfBlob = doc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    setPdfUrl(url);
  };

  useEffect(() => {
    generarPDF();
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [registro]); // se genera el PDF cada vez que cambia el registro

  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fas fa-dog"></i> Reporte PDF <i className="fas fa-cat"></i>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body" style={{ height: "80vh" }}>
            {pdfUrl && <iframe src={pdfUrl} width="100%" height="100%" />}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => pdfUrl && window.open(pdfUrl, "_blank")}
            >
              Expandir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

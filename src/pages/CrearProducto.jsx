import { use, useState } from "react";
import { endpoints } from "../utils/api";
import { generarId } from "../utils/functions";
import { alertaConfirmacion } from "../utils/alertas";
import { useNavigate } from "react-router-dom";

function CrearProducto() {
  const [getNombre, setNombre] = useState("");
  const [getDescripcion, setDescripcion] = useState("");
  const [getPrecio, setPrecio] = useState(0);
  const [getCantidad, setCantidad] = useState(0);
  let redireccion = useNavigate();

  function almacenarProducto() {
    let producto = {
      id: generarId(),
      nombre: getNombre,
      descripción: getDescripcion,
      precio: getPrecio,
      cantidad: getCantidad,
    };
    fetch(endpoints.productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Producto creado:", data);
        alertaConfirmacion(
          "Producto creado con éxito",
          "success",
          redireccion,
          "/home/productos"
        );
      });
  }

  return (
    <form className="form">
      <p className="form-title">Registrar producto</p>
      <div className="input-container">
        <input
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Nombre producto"
        />
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
          placeholder="Descripción"
        />
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setPrecio(e.target.value)}
          type="text"
          placeholder="Precio"
        />
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setCantidad(e.target.value)}
          type="text"
          placeholder="Cantidad"
        />
      </div>
      <button onClick={almacenarProducto} type="button" className="submit">
        Registrar
      </button>
    </form>
  );
}
export default CrearProducto;

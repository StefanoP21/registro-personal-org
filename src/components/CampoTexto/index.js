import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  // const [valor, actualizarValor] = useState("");
  // console.log("Datos: ", props);
  const placeHolderModificado = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    // console.log("cambio", e.target.value);
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={placeHolderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;

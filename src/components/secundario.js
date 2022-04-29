import React from "react";
import "../secundario.scss";


function Secundario() {
    
	return (
		<div className="secundario">
			<span className="linea"></span>

			<div className="contenedor-secundario"> 
				<p className="enlaces-secundario"> Naughty Dog  Uncharted: Legacy of Thieves Collection</p>

				<div className="barra-secundario"> 
					<p className="contenedor-icono"> <i className="fa-solid fa-magnifying-glass icono"></i></p>
					<input type="text" placeholder="Search" className="buscar" /> 
				</div>
			</div>

		</div>
	);
}

  
  
export default Secundario;
  
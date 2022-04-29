import React from "react";
import "../SearchBar.scss";


function SearchBar() {
    
	return (
		<nav className="box">
			<div className="barra"> 
				<p className="contenedor-icono"> <i className="fa-solid fa-magnifying-glass icono"></i></p>
				<input type="text" placeholder="Search" className="buscar" /> 
			</div>
          

		</nav>
	);
}

  
  
export default SearchBar;
  
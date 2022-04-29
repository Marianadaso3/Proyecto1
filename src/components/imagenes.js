import React from "react";
import "../imagenes.scss";

import {Link} from "react-router-dom";


function Imagenes() {
    
	return (
    
		<div className="imagenes"> 
			<Link className="imagen" to="/imagen1">
				<img className="uncharted" src="./img/01.jpg"></img>
			</Link>
            
			<Link className="imagen" to="/imagen2">
				<img className="TheLast" src="./img/02.jpg"></img>
			</Link>
		</div>
          
	);
}

export default Imagenes;

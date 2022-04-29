import React from "react";
import "../articles.scss";


function Articles() {
    
	return (
    
		<div className="article">
			<p className="titulo">Promoted articles</p>
			<div className="parrafos">

				<div className="parrafo">
					<p>Importing Save Data using USB Flash Drive or External Hard Drive (PS+ not required).</p>
					<span className="linea"></span>
				</div>

				<div className="parrafo">
					<p>Importing Save Data using Cloud Saves with PlayStation Plus.</p> 
					<span className="linea"></span>
				</div>
                
                
			</div>

			<div className="linea-centro">
				<span className="linea"></span>
			</div>
            
		</div>
          
	);
}

export default Articles;

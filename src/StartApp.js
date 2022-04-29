import React from "react";
import Navbar from "./components/navbar";

import Footer from "./components/footer";

import Pagina1 from "./components/paginas/pagina1";
import Pagina2 from "./components/paginas/pagina2";
import Inicio from "./components/paginas/inicio";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function StartApp() {
	return (
		<div>
			<Router>
				<Navbar />
        

				<Routes>
					<Route path="/" exact element={<Inicio />}></Route>
					<Route path="/index.html" element={<Inicio />}></Route>
					<Route path="/imagen1" element={<Pagina1 />}></Route>
					<Route path="/imagen2" element={<Pagina2 />}></Route>
				</Routes>

      

     

				<Footer />
			</Router>
        
		</div>

	);
}

export default StartApp;

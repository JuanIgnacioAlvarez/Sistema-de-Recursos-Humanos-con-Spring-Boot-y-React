import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useEffect } from "react";


function App() {
  // Configuracion de firebase
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCrxzPKfRshG6DYn3culCto8xjir9pZFCs",
      authDomain: "sistema-de-recursos-humanos.firebaseapp.com",
      projectId: "sistema-de-recursos-humanos",
      storageBucket: "sistema-de-recursos-humanos.appspot.com",
      messagingSenderId: "219872491335",
      appId: "1:219872491335:web:d3d026b8c093bb22d9be62",
      measurementId: "G-KZTKZZTTXG"
    };
    firebase.initializeApp(firebaseConfig);
  }, []);
  
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />} />
          <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
          <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

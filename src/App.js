// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Map from "./components/pages/Wenceslao Page/Map";
import States from "./components/pages/Yabut Page/States";
import Effect from "./components/pages/Ola Page/Effect";
import Hooks from "./components/pages/Samson Page/Hooks";
import Error from "./components/pages/Sabinano-Dela Cruz Page/Error";
import Error2 from "./components/pages/Sabinano-Dela Cruz Page/Error2";


import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/states" element={<States />} />
            <Route path="/effect" element={<Effect />} />
            <Route path="/map" element={<Map />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/error" element={<Error />} />
            <Route path="/error2" element={<Error2 />} />
          </Route>
        </Routes>

        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;

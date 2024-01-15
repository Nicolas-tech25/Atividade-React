import Nav from "./components/Nav";

import Home from "./pages/Home";
import Classic from "./pages/Classic_rock";
import Heavy from "./pages/Heavy_metal";
import Container from "./components/Container";

/* Importação de recursos/componentes do React Router */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Nav />
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Classic} path="/Classic" />
            <Route Component={Heavy} path="/Heavy" />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

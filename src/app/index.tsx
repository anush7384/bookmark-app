import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import AppRoutes from "../routes";

const Div = styled.div`
height:100vh;
width:100vw;
`
function App() {
  return (
    <Div>
      <Router>
        <AppRoutes />
      </Router>
    </Div>
  );
}

export default App;

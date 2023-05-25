import { BrowserRouter } from "react-router-dom";
import { Routing } from "./components/routing";
import "./styles/style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;

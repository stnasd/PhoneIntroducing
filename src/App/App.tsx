import { useRoutes } from "react-router-dom";
import "./App.css";
import { routeConfig } from "../routes/routesConfig";

function App() {
  const router = useRoutes(routeConfig);
  return <div className="App">{router}</div>;
}

export default App;

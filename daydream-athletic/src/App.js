import { NavBar } from "./components/NavBar";
import { MainPage } from "./components/MainPage"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;

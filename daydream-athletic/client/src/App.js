import { NavBar } from "./components/navBar";
import { MainPage } from "./components/MainPage"
import { Cards } from "./components/Cards"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
// import {Login} from "./src/components/LoginForm";
// import { Signup } from "./src/components/SignupForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Cards/>
    </div>
  );
}

export default App;
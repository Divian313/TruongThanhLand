import Banner from "./components/Contents/Banner/Banner";
import Reason from "./components/Contents/Reason/Reason";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import MenuButton from "./components/Material/MenuButton/MenuButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />      
      <Reason/>
    </div>
  );
}
export default App;

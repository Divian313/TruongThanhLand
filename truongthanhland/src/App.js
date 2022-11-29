import Banner from "./components/Contents/Banner/Banner";
import Test from "./components/Contents/Test";
import Test2 from "./components/Contents/Test2";

import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import MenuButton from "./components/Material/MenuButton/MenuButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Test></Test>
      <Test2></Test2>
    </div>
  );
}

export default App;

import Banner from "./components/Contents/Banner/Banner";
import Test from "./components/Contents/Test";
import Test2 from "./components/Contents/Test2";

import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      
      <Test2></Test2>
      <Test></Test>
    </div>
  );
}

export default App;

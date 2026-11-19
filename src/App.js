import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import {Route, Routes} from "react-router-dom";
import Sections from "./components/Sections";
import Lists from "./components/Lists";
import Viewpagelist from "./components/Viewpagelist";


function App() {
    return (
        <div>
          <Header></Header>
            <Routes>
                <Route path="/" element={<Sections></Sections>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/addlist" element={<Lists></Lists>}></Route>
               <Route path="/pagelist/:names" element={<Viewpagelist></Viewpagelist>}/>
            </Routes>
    </div>
    );
}


export default App;

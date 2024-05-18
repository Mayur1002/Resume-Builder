// import logo from './logo.svg';
// import './App.css';
import Text from './components/Text';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Resume from './components/Resume';
import New from './components/New';
import Logintrial from './components/Logintrial';
import Resumetrial from './components/Resumetrial';
import Resume2 from './components/Resume2';
import Resume3 from './components/Resume3';
// import { Resume4 } from './components/Resume4';
import Preview from './components/Preview';
import { Allcv } from './components/Allcv';
import Resume5 from './components/Resume5';
import Resume6 from './components/Resume6';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Resume4 from './components/Resume4';
// const DB = ''

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
          {/* <Route path="/" element={<Home />} > </Route> */}
            <Route path="/" element={<Login />} > </Route>
            {/* <Route path="/users">
            <Users />
             </Route> */}
            <Route path="/text" element={<Text />} > </Route>

            <Route path="/resume" element={<Resume />} > </Route>

            <Route path="/new" element={<New />} > </Route>

            <Route path="/resumetrial" element={<Resumetrial />} > </Route>
            {/* <Route path="/logintrial" element={<Logintrial/>} >
            </Route> */}
            <Route path="/allcv" element={<Allcv/>} > </Route>

            <Route path="/resume2" element={<Resume2 />} > </Route>
            
            <Route path="/resume3" element={<Resume3 />} > </Route>

            <Route path="/resume4" element={<Resume4 />} > </Route>

            <Route path="/preview" element={<Preview />} > </Route>
            <Route path="/resume5" element={<Resume5/>} > </Route>
            <Route path="/resume6" element={<Resume6/>} > </Route>
            <Route path="/ContactUs" element={<ContactUs/>} > </Route>
            <Route path="/AboutUs" element={<AboutUs/>} > </Route>
          </Routes>
        </div>
      </Router>

      {/* <Login /> */}
      {/* <div className = "container">
      <Text heading = " Enter the heading"/>
      </div> */}


    </>
  );
}
export default App;

import { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');    //yeh btata hai whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  
  
   const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

   const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0b3470';
      showAlert(" Dark mode has been enabled", "success");
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert(" light mode has been enabled ", "success");
    }
    
  }
  
  return (
    <> 
 
  <BrowserRouter basename="TextManipulator-using-react">
   <Navbar title= "TextUtils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert ={alert}/>
  <div className="container my-3">
  
<Routes>
          {/* /users----->componenet1 
          /users/home----->component2 
           exact path isiliye likhte hai takki exact path se confusion na create hoe aur shi jgh navigate hoye bss */}
          <Route  path="/about" element ={<About/> }>
           
          </Route>
          <Route exact path="/" element = { <TextForm  showAlert={showAlert}heading = "Enter the text to analyse " mode={mode}/>}>
           
          </Route>
 </Routes>

  </div>
  </BrowserRouter>
  </>
  );
}

export default App;






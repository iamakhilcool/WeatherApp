
import Header from './Header';
import Home from './Home';
import Weather from './Weather';


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (
     
      <BrowserRouter>
    
      <Header/>
      <Routes>
          <Route path="weather" element={<Weather />} />
          <Route path="/weatherapp" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    );
  
}




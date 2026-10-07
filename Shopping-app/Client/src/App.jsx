import UserLayout from './Pages/UserLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<UserLayout/>}/>
      <Route index element={<UserLayout/>}/>
      <Route path="*" element={Error}/>
      <Route path="/stopwatch" element={<Stopwatch/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App

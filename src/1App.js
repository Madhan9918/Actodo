import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { useState } from "react";
function App() 
{
    const [user,setuser] = useState(
        [
            {
                username:"",
                password:""
            }
        ]
        )  
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login user={user} setuser={setuser}/>}></Route>
                    <Route path="/signup" element={<Signup user={user} setuser={setuser} />}></Route>
                    <Route path="/landing" element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

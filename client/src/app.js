import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Admin from "./components/admin";
import Course from './components/Academy';
import Footer from "./components/Footer";
import Course from "./components/Course";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Academy from "./components/Academy";
import AdminPanel from "./components/dashboard/AdminPanel";
import UpdatePage from "./components/dashboard/UpdatePage";
import Authentication from "./components/Authentication";
import Profile from "./components/user/Profile";
import { initializeApp,app } from "firebase/app";


import firebaseConfig from "./config/firebase"; // Your Firebase configuration file






const App = ()=>{

    return(
        <div className="main-container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/academy" element={<Academy />} />
                    <Route path="/course/:id" element={<Course/>} />
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/admin-panel" element={<AdminPanel/>}/>
                    <Route path="/update-page/:id" element={<UpdatePage/>} />
                    <Route path="/auth" element={<Authentication/>} />
                    <Route path="/profile" element={<Profile/>}/>
                    
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
};

export default App;
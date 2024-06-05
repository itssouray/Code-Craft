import { Button, TextField, Typography } from "@mui/material";
import { auth,googleAuth} from "../config/firebase";
import {createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";


const Authentication = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signin = async ()=>{
        await createUserWithEmailAndPassword(auth,email,password);
    }

    const signinGoogle = async ()=>{
        await signInWithPopup(auth,googleAuth);
    }

    return(
        <div className="user-auth-page">
            <div className="auth-form">
                <Typography variant="h5">Signin Page</Typography>

                <TextField
                    type="text"
                    placeholder="Email..."
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                    type="text"
                    placeholder="Password..."
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                
                <div className="sign-in-btns" >
                    <Button className="sign-in" onClick={()=>{signin()}} variant="contained">signin</Button>
                    <Button className="sign-in" style={{background:'rgb(225, 56, 56)'}} onClick={()=>{signinGoogle()}} variant="contained">
                    {/* <GoogleIcon/> */}
                        google 
                    </Button>
                </div>
                <div className="login-option">
                    <Typography variant="p">don't have an account ? <NavLink  style={{textDecoration:'none'}}>create account</NavLink></Typography>
                </div>
            </div>
        </div>
    )
};


export default Authentication;
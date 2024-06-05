import {Button,TextField} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';

const Header = ()=>{
    const [Visible,setVisible] = useState(false);

    const toggle = ()=>{
        setVisible(!Visible);
    }


    return(
        <div className="header-container">
            <div className="logo-section">
                <NavLink to='/' className='nav-link'>
                    <h2>Logo</h2>
                </NavLink>
            </div>
           
            <div className="nav-section" >
                <ul>
                    <li>
                        <NavLink className='nav-link' to='/academy'>Academy</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/profile'>Profile</NavLink>
                    </li>
                    <li>
                       <a href='https://www.programiz.com/c-programming/online-compiler/'>
                        <TerminalIcon fontSize='large' style={{color:'#2a2754'}}/>
                       </a>
                    </li>
                    <li>
                        <Button size='large' variant="contained" style={{background:"#9d4edd",fontSize:"16px",textTransform:"none"}}>
                            <NavLink className='nav-link' style={{textDecoration:'none',color:'white'}} to='/auth'>Signin</NavLink>
                        </Button>
                    </li>
                </ul>
            </div>

            <div className='nav-menu' >
                <MenuIcon onClick={toggle} fontSize='large'/>
            </div>

            <div className='.slide-transition' style={{display:Visible==true?'block':'none'}}>
                <div className='top-r-bar' onClick={toggle}>
                    <span>
                        <CloseIcon  fontSize='large'></CloseIcon>
                    </span>
                </div>

                <div className='bottom-r-bar'>
                    <ul>
                        <li>
                            <NavLink className='nav-link' to='/academy'>Academy</NavLink>
                        </li>
                        <li>Practice</li>
                        <li>About</li>
                        <li>
                            <Button size='large' variant="contained" style={{background:"#9d4edd",fontSize:"16px",textTransform:"none"}}>
                                <NavLink className='nav-link' style={{textDecoration:'none',color:'white'}} to='/auth'>Signin</NavLink>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;



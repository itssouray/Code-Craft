import {NavLink} from "react-router-dom";
import {Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import EductionImg from '../asset/education.png';
import ChooseImage from '../asset/hands-on-lab-_1_.png';
import TakeControle from '../asset/take-control.png';
import Python from '../asset/pythonIcon.png';
import ReactIcon from '../asset/reactIcon.png';
import AwsIcon from '../asset/aws.png';
import CppIcon from '../asset/c++.png';
import NodeIcon from '../asset/nodejs.png';
import JavascriptIcon from '../asset/javascript.png';
import MongoIcon from '../asset/mongodb.png';

import GoogleIcon from '../asset/google.png';
import SpacexIcon from '../asset/spacex.png';
import SamsungIcon from '../asset/samsung.png';
import CignaIcon from '../asset/cigna.png';
import TwitterIcon from '../asset/twitter.png';
import DisneyIcon from '../asset/disney.png';
import { useEffect, useState } from "react";





const Home = ()=>{

    const SkilliconData = [
        {
            name:'python',
            icon:Python
        },
        {
            name:'python',
            icon:ReactIcon
        },
        {
            name:'python',
            icon:CppIcon
        },
        {
            name:'python',
            icon:AwsIcon
        },
        {
            name:'javascript',
            icon:JavascriptIcon
        },
        {
            name:'mongodb',
            icon:MongoIcon
        },
        {
            name:'nodejs',
            icon:NodeIcon
        }
       
    ]

    const CompanyiconData = [
        {
            name:'google',
            icon:GoogleIcon
        },
        {
            name:'spacex',
            icon:SpacexIcon
        },
        {
            name:'cigna',
            icon:CignaIcon
        },
        {
            name:'samsung',
            icon:SamsungIcon
        },
        {
            name:'twitter',
            icon:TwitterIcon
        },
        {
            name:'disney',
            icon:DisneyIcon
        }
    ]





    return(
        <div className="home-container">
            <div className="home-header">
                <div className="headings">
                    <h1>Ignite the Spark of Curiosity: Education that Inspires</h1>
                    <h3>Unleash your potential through our comprehensive educational programs.</h3>
                </div>
                <div className="intro-img">
                    <img src={EductionImg} alt="education"/>
                </div>
            </div>

            <div className="home-body">
                <div className="guid">
                    <Typography variant="h4" style={{color:'#2e3446'}}>
                    Start from scratch, Build up expertise ✨
                    </Typography>
                    <Typography variant="h6" style={{color:'#2e3446',width:'80%',margin:'0px auto'}}>We are more than just course providers. We guide you through all four stages of learning and evaluation.</Typography>
                </div>
                <div className="roadmap">
                    <div className="roadmap-path">
                        <div className="steps step-one">
                            <span className="tickmark">
                                <DoneIcon fontSize="small"/>
                            </span>
                            <Typography variant="h5" style={{color:'black',width:'85%'}}>Learn from courses</Typography>
                        </div>

                        <div className="steps step-one">
                            <span className="tickmark">
                                <DoneIcon fontSize="small"/>
                            </span>
                            <Typography variant="h5" style={{color:'black',width:'85%'}}>Practice daily</Typography>
                        </div>

                        <div className="steps step-one">
                            <span className="tickmark">
                                <DoneIcon fontSize="small"/>
                            </span>
                            <Typography variant="h5" style={{color:'black',width:'85%'}}>Assess your progress</Typography>
                        </div>

                        <div className="steps step-one">
                            <span className="tickmark">
                                <DoneIcon fontSize="small"/>
                            </span>
                            <Typography variant="h5" style={{color:'black',width:'85%'}}>Share with the world, repeat</Typography>
                        </div>
                    </div>
                    <div className="roadmap-img">
                        <img src="https://cdn.codechef.com/images/home/gifs/learn-animation.gif" alt="learn-grow"/>
                    </div>
                </div>
                

                <div className="skills-section">
                    <div className="skills-inner-box">
                        <div className="skills-header">
                            <h2>Popular <span style={{color:'red'}}>CodeCraft</span> Skills topics to learn now</h2>
                        </div>

                        <div className="skills-type">
                            {
                                SkilliconData.map((item,index)=>{
                                    return(
                                        <div key={index} className="cpp skill-box">
                                            <img src={item.icon}  alt={item.name}></img>
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>



                <div className="introduction">
                    <div className="introdction-content">
                        <h1>Why Choose Us?</h1>
                        <p>Discover an unparalleled learning experience at our educational platform. With a comprehensive selection of courses taught by industry experts, you'll enjoy interactive, hands-on learning, flexible accessibility, and career-focused curriculum. Engage with a supportive community, gain lifetime access to course materials, and receive recognized certifications. We continuously update our content to keep you on the cutting edge of knowledge.</p>
                    </div>
                    <div className="introduction-image">
                        <img src={ChooseImage} alt="why choose us"/>
                    </div>
                </div>
                <div className="introduction">
                    <div className="introduction-image">
                        <img src={TakeControle} alt="person1"/>
                    </div>
                    <div className="introdction-content">
                        <h1>Take control of your career</h1>
                        <p>At our educational platform, you have the opportunity to build in-demand skills across a wide range of fields, from cybersecurity to software development. Our expert-led courses provide you with the knowledge and hands-on experience to excel in your chosen career path. As you acquire these valuable skills, you'll gain the confidence to take your career to new heights and significantly increase your earning potential.</p>
                    </div>
                </div>

                

                <div className="company-section">
                    <div className="company-header">
                        <h3>Trusted by tech professionals at thousands of orgs</h3>
                    </div>
                    <div className="company-logo-box">
                        {
                            CompanyiconData.map((item,index)=>{
                                return(
                                    <div key={index} className="company-logo">
                                        <img src={item.icon}  alt={item.name}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Home;


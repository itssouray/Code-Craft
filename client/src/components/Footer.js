import { Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = ()=>{

    return(
        <div className="footer-container">
            <div className="footer-top">
                <div className="code-craft">
                    <h2>Logo</h2>
                    <Typography variant="p">
                        Engineered by Alpha Society
                    </Typography>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="explore-more">
                    <h3>Explore content</h3>
                    <ul>
                        <li>Medium</li>
                        <li>Dev Community</li>
                        <li>LeetCode</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h3>Follow us on</h3>
                    <ul>
                        <li>
                            <GitHubIcon fontSize="small"></GitHubIcon>
                            Github
                        </li>
                        <li>
                            <LinkedInIcon fontSize="small"></LinkedInIcon>
                            LinkedIn
                        </li>
                        <li>
                            <FacebookIcon fontSize="small"></FacebookIcon>
                            Facebook
                        </li>
                        <li>
                            <InstagramIcon fontSize="small"></InstagramIcon>
                            Instagram
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">

            </div>
        </div>
    )
};


export default Footer;
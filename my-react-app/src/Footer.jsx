import Contact from "./Contact.jsx";
import htmlLogo from "./assets/html-124-svgrepo-com.svg";
import cssLogo from "./assets/css3-02-svgrepo-com.svg";
import javascriptLogo from "./assets/javascript-fill-svgrepo-com.svg";
import reactLogo from "./assets/react-svgrepo-com.svg";

function Footer() {
    return (
        <footer>
            <div className="div-separator" id="contact">
            <Contact />
                <div className="footer-right">
                    <div className="connect-with-me">
                        <h2>Connect with me</h2>
                        <p>You can find me on the following platforms</p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/alvinlienardi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/alvinlienardi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                    <p>This portfolio was made with</p>
                    <div className="tech-stack">
                        <img src={htmlLogo} alt="HTML Logo" title="HTML" />
                        <img src={cssLogo} alt="CSS Logo" title="CSS" />
                        <img src={javascriptLogo} alt="JavaScript Logo" title="JavaScript" />
                        <img src={reactLogo} alt="React Logo" title="React" />
                    </div>
                </div>
            </div>
            <p className="copyright">&copy; Alvin Sebastian Lienardi. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

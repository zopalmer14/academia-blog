
import '../styles/FooterSection.css';

function FooterSection() {
  return (
    <footer>
        <div className="footer-info">
            <h2>Contact Me</h2>
            <div>
                Please check out my projects if you are interested and get in 
                touch if you think our work could be mutually beneficial!
            </div>
            <div className="contact-info">
                <div><span className="material-icons">phone</span>(662) 202-5822</div>
                <div><span className="material-icons">mail_outline</span>zopalmer14@gmail.com</div>
                <div><span className="material-icons">location_city</span>Pittsburgh, PA 15213</div>
            </div>
            <div className="link-container">
                <a href="https://github.com/zopalmer14" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/></a>
                <a href="https://www.linkedin.com/in/~zach/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"/></a>
            </div>
        </div>
        <div className="footer-img"></div>
    </footer>
  )
}

export default FooterSection

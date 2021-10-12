const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="social">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
            </div>
            <div className="link-container">
                <div className="link-wrapper link1">
                    <p>Audio and Subtitles</p>
                    <p>Help Center</p>
                    <p>Media Center</p>
                    <p>Jobs</p>
                    <p>Privacy</p>
                    <p>Cookie Preferences</p>
                    <p>Contact Us</p>
                </div>
                <div className="link-wrapper link2">
                    <p>Audio Description</p>
                    <p>Gift Cards</p>
                    <p>Investor Relations</p>
                    <p>Terms of Use</p>
                    <p>Legal Notices</p>
                    <p>Corporate Information</p>
                </div>
            </div>
                <p className="copyright">©️ 1997-2021 ChillClone, Inc.</p>
        </div>
     );
}
 
export default Footer;
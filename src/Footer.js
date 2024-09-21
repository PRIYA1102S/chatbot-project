import React from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="footer-logo">QueryZilla</h2>
                    <p>Enhancing customer support with AI</p>
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>

                <div className="footer-middle">
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/termsofuse">Terms of Use</a></li>
                        <li><a href="/contact">Contact Support</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="/facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="/twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="/instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;

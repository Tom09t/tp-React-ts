import React from 'react';
import './Footer.css'; // Importa un archivo CSS para el estilo

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contacto</h3>
                    <p>Email: tomaselectronics@gmail.com</p>
                    <p>Teléfono: +1-123-333-5468</p>
                </div>
                <div className="social-links">
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li><a>Facebook</a></li>
                        <li><a>Twitter</a></li>
                        <li><a>LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} TomiElectro. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;

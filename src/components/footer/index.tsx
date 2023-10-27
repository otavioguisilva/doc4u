import './styles.css'

import LogoFooter from '../../assets/logo-footer.png';

import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='logo-footer'>
                    <img src={LogoFooter} alt="Logo" />
                </div>
                <div className='line-footer'></div>
                <div className='box-links'>
                    <div className='links-terms'>
                        <Link to="/terms">
                            <a href="">Termos de uso</a>
                        </Link>
                        <Link to="/politica-privacidade">
                            <a href="">Política de privacidade</a>
                        </Link>
                    </div>
                    <div className='line-footer2'></div>
                    <div className='contacts'>
                        <h5>Fale conosco:</h5>
                        <span>Segunda a sexta - 09:00 às 18:00 </span>
                        <span>(Horário de Brasília)</span>
                        <a target='_blank' href='sac@doc4u.com.br'><FaEnvelope />sac@doc4u.com.br</a>
                    </div>
                </div>
                <div className='elipse-footer'></div>
            </div>
        </div>
    )
}
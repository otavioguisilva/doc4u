import { Link } from "react-router-dom";

import LogoHeader from '../../assets/logo-header.png';

import './styles.css'

export default function HeaderResponsive({ texto, linkPath }) {
    return (
        <section className='header-responsive'>
            <img src={LogoHeader} alt="Logo" />
            <Link to={linkPath}>
                <a>{texto}</a>
            </Link>
        </section>
    )
}
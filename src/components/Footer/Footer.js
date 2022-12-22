import './Footer.scss';
import { Link } from 'react-router-dom';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import email from '../../assets/icons/email.png';

function Footer() {

    return (
        <div id='footer' className='footer'>
            <div className='footer__container'>
                <Link to='/' className='footer__title'>lee</Link>
                <ul className='footer__nav'>
                    <li className='footer__nav-item'>
                        <a href='#about' className='footer__nav-link'>About</a>
                    </li>
                    <li className='footer__nav-item'>
                        <a href='#projects' className='footer__nav-link'>Projects</a>
                    </li>
                    <li className='footer__nav-item'>
                        <a href='#contact' className='footer__nav-link'>Contact</a>
                    </li>
                </ul>
                <ul className='footer__social'>
                    <li className='footer__social-item'>
                        <a href='https://www.linkedin.com/in/chris-chanho-lee/' className='footer__social-link'><img className='footer__social-icon' src={linkedin} alt='LinkedIn' /></a>
                    </li>
                    <li className='footer__social-item'>
                        <a href='https://github.com/dkrj45' className='footer__social-link'><img className='footer__social-icon' src={github} alt='GitHub' /></a>
                    </li>
                    <li className='footer__social-item'>
                        <a href='mailto:dkrj45@gmail.com' className='footer__social-link'><img className='footer__social-icon' src={email} alt='Email' /></a>
                    </li>
                </ul>
                <p className='footer__copyright'>&#169; Chan Ho Lee. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
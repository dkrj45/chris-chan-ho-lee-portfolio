import './Hero.scss';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import chris from '../../assets/images/chris-lee.jpg';

function Hero() {

    return (
        <div id='hero' className='hero'>
            <div className='hero__socials'>
                <a className='hero__social' href='https://www.linkedin.com/in/chris-chanho-lee/'><img src={linkedin} alt='LinkedIn' /></a>
                <a className='hero__social' href='https://github.com/dkrj45'><img className='hero__social--icon' src={github} alt='GitHub' /></a>
            </div>
            <img className='hero__chris' src={chris} alt='chris'/>
            <div className='hero__introduction'>
                <h1 className='hero__name'>Chris Lee</h1>
                <h3 className='hero__title'>Full Stack Developer</h3>
                <p className='hero__description'>Hi! I am a full stack developer based in Toronto.<br></br>Scroll down to learn more about me and my projects!</p>
            </div>
        </div>
    );
  }
  
export default Hero;
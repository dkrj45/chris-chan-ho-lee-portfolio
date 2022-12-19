import './Hero.scss';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import chris from '../../assets/images/chris.png';
import handDown from '../../assets/icons/hand-down.png';

function Hero() {

    return (
        <div id='hero' className='hero'>
            <div className='hero__tablet-container'>
                <div className='hero__mobile-container'>
                    <div className='hero__socials'>
                        <a className='hero__social' href='https://www.linkedin.com/in/chris-chanho-lee/'><img className='hero__social--icon' src={linkedin} alt='LinkedIn' /></a>
                        <a className='hero__social' href='https://github.com/dkrj45'><img className='hero__social--icon' src={github} alt='GitHub' /></a>
                    </div>
                    <img className='hero__chris' src={chris} alt='chris' />
                </div>
                <div className='hero__text-wrapper'>
                    <div className='hero__introduction'>
                        <h1 className='hero__name'>Chris Lee</h1>
                        <h3 className='hero__title'>Full Stack Developer</h3>
                        <p className='hero__description'>Hi! I am a full stack developer based in Toronto.<br></br>Welcome to my portfolio website!</p>
                        <div className='hero__extra'>
                            <img className='hero__hand-down' src={handDown} alt='hand-down'/>
                            <p className='hero__learn-more'>Scroll down to learn more about me and my projects!</p>
                        </div>
                    </div>
                </div>
                <img className='hero__chris--tablet' src={chris} alt='chris' />
            </div>
        </div>
    );
}

export default Hero;
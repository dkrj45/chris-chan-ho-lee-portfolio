import './About.scss';
import resume from '../../assets/files/chris-lee-resume.pdf';

function About() {

    return (
        <div id='about' className='about'>
            <h2 className='about__title'>About Me</h2>
            <p className='about__subtitle'>Ex-public employee with background in engineering</p>
            <div className='about__tablet-aligner'>
                <div className='about__tablet-divider'>
                    <div className='about__skills-container'>
                        <h3 className='about__skills-title'>Skills</h3>
                        <ul className='about__skills-list'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>Sass</li>
                            <li>DOM APIs</li>
                            <li>Web APIs</li>
                            <li>User Authentication</li>
                            <li>OAuth</li>
                            <li>AWS</li>
                            <li>Heroku</li>
                            <li>Git/Github</li>
                            <li>Jest</li>
                            <li>Figma</li>
                            <li>Object Oriented Programming</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div>
                        <p className='about__text'>A technology and engineering enthusiast making a career transition into Web Development. I enjoy bringing ideas to life with creativity, aesthetics and functionality in mind.</p>
                        <p className='about__text'>With previous background in mechanical engineering and investigative services comes a proven record of thinking like a machine and problem solving.</p>
                        <p className='about__text'>Check out the 'Projects' section below to see my latest deployed websites!</p>
                        <div className='about__resume-container'>
                            <a href={resume} download='chris-lee-resume' className='about__resume'>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
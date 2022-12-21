import './Projects.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import misely from '../../assets/videos/misely.mp4';
import miselyThumbnail from '../../assets/images/misely.PNG';
import chris from '../../assets/images/chris.png';

function Projects() {

    return (
        <div id='projects' className='projects'>
            <h2 className='projects__title'>Projects</h2>
            <p className='projects__subtitle'>Swipe through my projects!</p>
            <div className='projects__tablet-aligner'>
                <Splide
                    options={{
                        type: 'loop',
                        focus: 'center',
                        gap: '1rem',
                        width: '100%',
                        perMove: 1,
                        padding: '20%'
                    }}
                    aria-label="My Favorite Images"
                >
                    <SplideSlide>
                        <div className='projects__card'>
                            <video controls poster={miselyThumbnail} className='projects__card-top' src={misely} />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Misely</h3>
                                <p className='projects__card-text'>Misely is a mobile app that connects new mothers with interviewed, background-checked and top-rated professionals to make postpartum period enjoyable. The deployed website is a proof of concept.</p>
                                <ul className='projects__card-tech-stack'>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>Sass</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='projects__card'>
                            <img className='projects__card-top' src={chris} alt='' />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Misely</h3>
                                <p className='projects__card-text'>Misely is a mobile app that connects new mothers with interviewed, background-checked and top-rated professionals to make postpartum period enjoyable. The deployed website is a proof of concept.</p>
                                <ul className='projects__card-tech-stack'>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>Sass</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className='projects__card'>
                            <video controls poster={miselyThumbnail} className='projects__card-top' src={misely} />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Misely</h3>
                                <p className='projects__card-text'>Misely is a mobile app that connects new mothers with interviewed, background-checked and top-rated professionals to make postpartum period enjoyable. The deployed website is a proof of concept.</p>
                                <ul className='projects__card-tech-stack'>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>Sass</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default Projects;
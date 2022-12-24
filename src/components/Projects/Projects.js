import './Projects.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import misely from '../../assets/images/misely.png';
import instock from '../../assets/images/instock.png';
import wnba from '../../assets/images/wnba.png';
import brainflix from '../../assets/images/brainflix.png';
import bandsite from '../../assets/images/bandsite.png';

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
                            <img className='projects__card-top' src={misely} alt='' />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Misely</h3>
                                <p className='projects__card-text'>Misely is a mobile app that connects new mothers with interviewed, background-checked and top-rated professionals to make postpartum period enjoyable. The deployed website is a proof-of-concept prototype.</p>
                                <a href='https://misely.chanholee.com' className='projects__card-button'>Visit Project</a>
                                <ul className='projects__card-tech-stack'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
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
                            <img className='projects__card-top' src={instock} alt='' />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Instock</h3>
                                <p className='projects__card-text'>Instock is a full stack responsive website built for inventory management. Users can add, delete, edit, search and view warehouses and their inventories. Using SCRUM and KANBAN method, a team of 4 developers delivered this project in a week.</p>
                                <a href='https://instock-frontend.onrender.com/warehouse' className='projects__card-button'>Visit Project</a>
                                <ul className='projects__card-tech-stack'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>Sass</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='projects__card'>
                            <img className='projects__card-top' src={wnba} alt='' />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>WNBA Player Page</h3>
                                <p className='projects__card-text'>This was a 24-hour industrial project hosted by Brainstation and WNBA (Women's National Basketball Association). As a solution to WNBA's problem statement, a team of web developers, data analysts, UI/UX designers, and a digital marketer devided to recreate a player page.</p>
                                <a href='https://wnba.chanholee.com' className='projects__card-button'>Visit Project</a>
                                <ul className='projects__card-tech-stack'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Sass</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='projects__card'>
                            <img className='projects__card-top' src={brainflix} alt='' />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Brainflix</h3>
                                <p className='projects__card-text'>Branflix is a full stack responsive website. It is a video streaming platform such as Youtube or Netflix. Users can browse videos, comment on them, and even upload their own videos.</p>
                                <a href='https://brainflix.chanholee.com' className='projects__card-button'>Visit Project</a>
                                <ul className='projects__card-tech-stack'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
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
                            <img className='projects__card-top' src={bandsite} alt='' />
                            <div className='projects__card-bottom'>
                                <h3 className='projects__card-title'>Bandsite</h3>
                                <p className='projects__card-text'>Bandsite is a fully responsive webpage, showcasing a fictional band group 'The Bees Knees'. Viewers are able to learn about the band's biography, comment on the page, and view the show schedule.</p>
                                <a href='https://bandsite.chanholee.com' className='projects__card-button'>Visit Project</a>
                                <ul className='projects__card-tech-stack'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
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
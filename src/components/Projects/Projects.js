import './Projects.scss';
import misely from '../../assets/videos/misely.mp4';
import miselyThumbnail from '../../assets/images/misely.PNG';

function Projects() {

    return (
        <div id='projects' className='projects'>
            <h2 className='projects__title'>Projects</h2>
            <div className='projects__tablet-aligner'>
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
            </div>
        </div>
    );
}

export default Projects;
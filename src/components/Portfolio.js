import '../App.css';

import Image from 'react-bootstrap/Image';

import dbug from '../assets/dbug.png';
import fantasybball from '../assets/fantasy-bball.png';
import flexfly from '../assets/flex-fly.png';
import techblog from '../assets/tech-blog.png';
import codequiz from '../assets/code-quiz.png';
import weatherdash from '../assets/weather-dash.png';
import github from '../assets/github.png';



function Portfolio() {

    const data = [
        {
            title: 'DBUG',
            link: 'https://pacific-tundra-20033.herokuapp.com/',
            image: dbug,
            repo: 'https://github.com/saramangelo/cswag-p3'
        },
        {
            title: 'Fantasy Basketball',
            link: 'https://evening-tundra-41770.herokuapp.com/',
            image: fantasybball,
            repo: 'https://github.com/wvoigt722/uclaFantasyLeague'
        },
        {
            title: 'FlexFly',
            link: 'https://yacovkopel.github.io/FlexFly/',
            image: flexfly,
            repo: 'https://github.com/YacovKopel/FlexFly'
        },
        {
            title: 'Tech Blog',
            link: 'https://gy-tech-blog.herokuapp.com/',
            image: techblog,
            repo: 'https://github.com/aphexgil/tech-blog'
        },
        {
            title: 'Code Quiz',
            link: 'https://aphexgil.github.io/code-quiz/',
            image: codequiz,
            repo: 'https://github.com/aphexgil/code-quiz'
        },
        {
            title: 'Weather Dashboard',
            link: 'https://aphexgil.github.io/weather-forecast/',
            image: weatherdash,
            repo: 'https://github.com/aphexgil/weather-forecast'
        }
    ]

    return (
        <>
            <div className="projects-container">
                {data && data.map((project, i) => (
                    <div id={i} className="project-card" >
                        <Image src={project.image} className="project-image"></Image>
                        <div className="overlay">
                            <div className="overlay-text">
                                <a href={project.link} target="_blank">{project.title}</a>
                                <br></br>
                                <a href={project.link} target="_blank"><span className="material-symbols-rounded link-icon"> output </span></a>
                                <a href={project.repo} target="_blank"><img src={github} className="github-icon"></img></a>
                            </div>
                        </div>
                    </div>
                    )
                )}
            </div>
            
        </>
    )
};

export default Portfolio;
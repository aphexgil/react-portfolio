import headshot from '../assets/gy-headshot-sq.png';
import '../App.css';
import Container from 'react-bootstrap/Container';

function AboutMe() {
    return (
        <>
            <Container  className="main-container">
                <div className="headshot">
                    <img src={headshot} className="headshot-img"></img>
                </div>
                <div>
                    <div className="bio"> I am a creative, curious web developer who is eager to bring his years of classroom
                        experience to bear on an agile engineering team. My thorough understanding of full-stack
                        programming and my outstanding quantitative reasoning skills make me an asset in myriad 
                        devlopment contexts. I am just as comfortable building and styling front-end React 
                        components as I am debugging Express routes and designing database structures.
                        Collaberation is the core of everything I do, and I think it is essential that technical
                        information is communicated clearly, concisely and with kindness. 
                    </div>
                </div>  
            </Container>
        </>
    )
};

export default AboutMe;
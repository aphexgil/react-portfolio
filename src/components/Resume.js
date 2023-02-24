import '../App.css';
import Container from 'react-bootstrap/Container';
import resume from '../assets/gil-young-resume.pdf';

function Resume() {
    return (
        <>
            <Container  className="main-container">
                <div className="resume-card">
                    <h1>Download Resume</h1>
                    
                    <a href={resume} download className="resume-link">gil-young-resume.pdf</a>
                    
                </div>
            </Container>
        </>
    )
};

export default Resume;
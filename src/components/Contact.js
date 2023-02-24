import '../App.css';
import Container from 'react-bootstrap/Container';


function Contact() {
    return (
        <>
            <Container  className="main-container">
                <div className="contact-card">
                    <h1>Contact Me</h1>
                    <div>
                        phone: +1 310-401-4147 
                        <br></br>
                        email: gil.young.1994@gmail.com
                    </div>
                </div>
            </Container>
        </>
    )
};

export default Contact;
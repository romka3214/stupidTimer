import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DialogBox from './DialogBox/DialogBox';

const MainContainer = () => {


    let helloMsg
    localStorage.getItem('seconds') ? helloMsg = 'На чём мы остановились? Агааа, точно...' : helloMsg = 'Привет, запускаю твой личный таймер :))))'

    const [dialogText, retypeDialogText] = useState(helloMsg)

    return (
        <Container className='h-100'>
            <Row className='justify-content-center'>
                <Col>
                    <DialogBox text={dialogText} changeText={retypeDialogText}>

                    </DialogBox>
                </Col>
            </Row>
        </Container>
    );
}

export default MainContainer
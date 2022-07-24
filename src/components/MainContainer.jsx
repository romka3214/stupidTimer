import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DialogBox from './DialogBox/DialogBox';

const MainContainer = () => {

    const [dialogText, retypeDialogText] = useState('Привет, запускаю твой личный таймер :))))')

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
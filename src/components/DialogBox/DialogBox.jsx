
import { useEffect } from 'react';

import classes from './DialogBox.module.scss'


const DialogBox = ({ text, changeText }) => {
    let second = 1

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(second);
            changeText('Время проведенноё бесстолку = ' + second++ + ' секунд')
        }, 1000);
        return () => clearInterval(interval);
    }, [second,changeText])


    return (

        <div className={classes.DialogBox}>
            <p>
                {text}
            </p>
        </div>
    );
}

export default DialogBox
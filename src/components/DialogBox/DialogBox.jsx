
import { useEffect } from 'react';

import classes from './DialogBox.module.scss'


const DialogBox = ({ text, changeText }) => {
    let seconds

    useEffect(() => {
        
        localStorage.getItem('seconds') ?
            seconds = localStorage.getItem('seconds')
            :
            seconds = 1

        const interval = setInterval(() => {
            console.log(seconds);
            changeText('Время проведенноё без толку = ' + seconds++ + ' сек.')
            localStorage.setItem('seconds', seconds);
        }, 1000);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className={classes.DialogBox}>
            <p>
                {text}
            </p>
        </div>
    );
}

export default DialogBox
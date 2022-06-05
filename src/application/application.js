import { useEffect } from 'react';
import { drag } from '../gestures/drag';
import './application.css';

const Application = () => {

    const hello = () => {
        alert('hello');
    };

    const setupDrabOfApp = () => {
        let elementHeader = document.getElementById('appWindowHeader');
        let elementToDrag = document.getElementById("appWindow");
        drag(elementToDrag, elementHeader);
    };

    useEffect(() => {
        setupDrabOfApp();
    }, [])

    return (
        <div className="application" id="appWindow">
            <div className="application-header" id="appWindowHeader">
                <span><div  className="action-icon red" onClick={hello}></div></span>
                <span><div  className="action-icon yellow"></div></span>
                <span><div  className="action-icon green"></div></span>
            </div>
            <div className="application-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro ipsum ea totam vel, architecto incidunt enim quidem sunt iste id iure quisquam error consequatur asperiores ipsam ex eos modi?
            </div>
        </div>
    )
}

export { Application };

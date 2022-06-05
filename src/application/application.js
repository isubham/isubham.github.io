import { assertNullLiteralTypeAnnotation } from '@babel/types';
import { useEffect } from 'react';
import { drag } from '../gestures/drag';
import './application.css';

const Application = ({keyCopy,title, file, fileRef, closeHandler, topPos, leftPos, width, height, zIndex, onTitleClick}) => {

    const setupDrabOfApp = () => {
        let elementHeader = document.getElementById(`appWindowHeader${keyCopy}` );
        let elementToDrag = document.getElementById(`appWindow${keyCopy}`);
        drag(elementToDrag, elementHeader);
    };

    useEffect(() => {
        setupDrabOfApp();
    }, [])

    const contentClickHandler = () => {
        onTitleClick(fileRef);
    };

    return (
        <div className="application" id={`appWindow${keyCopy}`} style={{top: topPos, left: leftPos, width: width, height: height, zIndex: zIndex}}>
            <div className="application-header" id={`appWindowHeader${keyCopy}`}>
                <span className='action-icon-container'>
                    <span><div  className="action-icon red" onClick={() => closeHandler(keyCopy)}></div></span>
                    <span><div  className="action-icon yellow"></div></span>
                    <span><div  className="action-icon green"></div></span>
                </span>
                
                <span>{title}</span>
                <span></span>
            </div>
            <div className="application-content"  onClick={contentClickHandler}>
                {file}
            </div>
        </div>
    )
}

export { Application };

import { Icon } from "../icon/icon"
import fileicon from '../fileicon.png';
import { Application } from "../application/application";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const AppArea = () => {

    
    const [openFiles, setOpenFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [zIndexCounter, setZIndexCounter] = useState([100]);

    const select = () => {
        console.log(`selected`);
    };

    const getNextZIndex = () => {
        setZIndexCounter([zIndexCounter[0] + 10])
        return zIndexCounter[0];
    }

    const moveToTop = (file) => {
        const newMaxZIndex = getNextZIndex();
        file.zIndex = newMaxZIndex;
    }

    const openFile = (e, file) => {
        switch (e.detail) {
            case 1: select(); break;
            case 2: {
                const fileNotOpened = openFiles.findIndex(e => e.key === file.key) < 0;

                if (fileNotOpened) {
                    setOpenFiles([...openFiles, {...file, width: '50vw', height: '50vh'}]); 
                }
                else {
                    moveToTop(file)
                }

            }break;
            default: select(); break;
        }
    }

    const closeFile = (key) => {
        const closeAppIndex = openFiles.findIndex(e => e.key === key)
        const newApps = [...openFiles.slice(0, closeAppIndex), ...openFiles.slice(closeAppIndex + 1, openFiles.length)]
        setOpenFiles(newApps);
    }


    useEffect(() => {
        setFiles([
            {key: uuidv4(), image: fileicon, title: 'resume.pdf', file: 'hello to my resume', zIndex: getNextZIndex()},
            {key: uuidv4(), image: fileicon, title: 'anime.pdf', file: 'naruto, death note and all that', zIndex: getNextZIndex()}
        ])
    }, []);


    const getTopAndLeftPos = (pos) => {
        return {
            topPos:  window.innerHeight / (pos + 2),
            leftPos: window.innerWidth / (pos + 2)
        }
    };

    return (
        <div className='appArea' >
            <div>
                {/* icon shortcuts */}
                {files && files.map((file) => <Icon  {...file} clickBehaviour={(e) => openFile(e, file)} />)}
            </div>

            <div>
                {/* opened Apps */}
                {openFiles && openFiles.map((fileToOpen, i) => <Application closeHandler={closeFile} 
                    {...fileToOpen} keyCopy={fileToOpen.key} {...getTopAndLeftPos(i)} fileRef={fileToOpen} onTitleClick={moveToTop} />)}
            </div>
        </div>
    )
}




export { AppArea }

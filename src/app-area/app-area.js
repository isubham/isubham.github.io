import { Icon } from "../icon/icon"
import fileicon from '../fileicon.png';
import { Application } from "../application/application";

const AppArea = () => {

    return (
        <div className='appArea' >
            {/* icon shortcuts */}
            <Icon image={fileicon} title='resume.pdf' />
            <Icon image={fileicon} title='interest.pdf' />

            {/* opened Apps */}
            <Application />
        </div>
    )
}




export { AppArea }

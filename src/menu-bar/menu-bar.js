import './menu-bar.css';

const Menubar = ({ brandImagePath}) => {

    return (
        <div className="menu-bar">
            <img src={brandImagePath} alt='brand-logo' className="small" / >
        </div>
    )
}

export { Menubar };

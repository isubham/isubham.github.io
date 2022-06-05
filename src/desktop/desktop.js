import './desktop.css';

const Desktop = (props) => {
    return (<div className="wallpaper" >
        <div className="desktop" style={{backgroundImage: `url(${props.wallpaper})`}}>
            {props.children}
        </div>
    </div>)
}

export { Desktop };

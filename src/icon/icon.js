import './icon.css'
const Icon = ({image, title}) => {
    return (
        <div className="icon" >
            <div className="icon-image file-icon">
                <img src={image} alt="file-icon" className="medium" />
            </div>
            <div className="icon-text">
                {title}
            </div>
        </div>
    )
}

export { Icon };

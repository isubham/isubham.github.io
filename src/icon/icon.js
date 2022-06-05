import './icon.css'
const Icon = ({image, title, clickBehaviour}) => {
    return (
        <div className="icon" onClick={clickBehaviour}>
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

import  { useState } from "react";
import PropTypes from "prop-types";

function PageCard({ title, desc, buttonText, theme, icon }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className="page-card rounded d-flex flex-column justify-content-start align-items-center align-items-md-start"
            style={{
                border: `1px solid ${theme}`,
                backgroundColor: `${isHovered ? theme : 'white'}`,
                color: `${!isHovered ? 'black' : 'white'}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4 className="d-flex align-items-center gap-3 f">{icon}<span>{title}</span></h4>
            <p className="desc">{desc}</p>
            <button type="button" className="btn">{buttonText}</button>
        </div>
    );
}

PageCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};

export default PageCard;

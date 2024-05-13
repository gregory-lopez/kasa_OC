import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrowImage from '../../assets/Vector.png';
import '../../styles/collapse.css'

function Collapse({ title, content, className }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleCollapse() {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>
            <div className="collapse-header" onClick={toggleCollapse}>
                <p>{title}</p>
                <img
                  src={arrowImage}
                  alt="Arrow"
                  className={`arrow-img ${isOpen ? 'down' : 'up'}`}
                  onClick={toggleCollapse}
                />
            </div>
            {isOpen && (
                <p className="collapse-content">
                    {typeof content === 'string' ? content : content()}
                </p>
            )}
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]).isRequired,
};

export default Collapse;

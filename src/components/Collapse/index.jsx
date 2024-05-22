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
                <h2>{title}</h2>
                <img
                  src={arrowImage}
                  alt="Collapse arrow"
                  className={`arrow-img ${isOpen ? 'down' : 'up'}`}
                  onClick={toggleCollapse}
                />
            </div>
            {isOpen && (
                <div className="collapse-content">
                    {typeof content === 'string' ? content : content()}
                </div>
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

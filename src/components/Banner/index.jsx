import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/banner.css';

function Banner({ image, title }) {
    return (
        <div className="banner-container-wrapper">
                <div className='banner-img-container'>
                    <img src={image} alt="Banner" className="banner-img" />
                    {title && (
                        <div className="banner-text">
                            <h1>{title}</h1>
                        </div>
                    )}
                </div>
        </div>
    );
}

Banner.propTypes = {
    image: PropTypes.string.isRequired, // L'image doit être une URL
    title: PropTypes.string, // Le titre est facultatif
};

export default Banner;

import BannerImg from '../../assets/Mask Group.png'
import '../../styles/banner.css'

function Banner() {
    return (
        <div className="banner-container-wrapper">
            <div className="banner-container">
                <div className='banner-img-container'>
                    <img src={BannerImg} alt="Banner" className="banner-img" />
                    <div className="banner-text">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
import BannerImg from '../../assets/Mask Group.png'
import '../../styles/banner.css'
function Banner() {
    return (
        <div className="banner-container">
            <div className='banner-img_container'><img src={BannerImg} alt="Banner" /></div>
            <div className="banner-title_container"><h1>Chez vous, partout et ailleurs</h1></div>
        </div>
      )
    }

export default Banner
import Banner from '../../components/Banner'
import BannerImg from '../../assets/img_banner.png'
import Card from '../../components/Card'

function Home() {
  return (
    <>
      <Banner image={BannerImg} title="Chez vous, partout et ailleurs" />
      <Card />
    </>
  )
}

export default Home
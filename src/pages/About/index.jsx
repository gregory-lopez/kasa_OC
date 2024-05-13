import React from 'react';
import Collapse from '../../components/Collapse'; 
import Banner from '../../components/Banner';
import BannerImg from '../../assets/img_banner_about.png'
import data from '../../datas/about.json';


function About() {
  return (
    <div>
      <Banner image={BannerImg}/>
      <div className="wrapper-collapse">
        {data.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} className="collapse-about"/> 
        ))}
      </div>
    </div>
  );
};

export default About;